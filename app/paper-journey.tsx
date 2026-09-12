'use client';
import {useEffect,useRef} from 'react';
const clamp=(n:number)=>Math.max(0,Math.min(1,n));
const smooth=(n:number)=>{const t=clamp(n);return t*t*(3-2*t)};
export default function PaperJourney(){
 const ref=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const canvas=ref.current,ctx=canvas?.getContext('2d');
  if(!canvas||!ctx)return;
  const anchors=Array.from(document.querySelectorAll<HTMLElement>('[data-journey-image]'));
  const moments=Array.from(document.querySelectorAll<HTMLElement>('.life-moments'));
  const media=matchMedia('(min-width:860px) and (prefers-reduced-motion:no-preference)');
  let dead=false,frame=0,pointer=0;
  let images:HTMLImageElement[]=[];
  function paint(){
   frame=0;
   if(dead)return;
   const enabled=media.matches&&images.length===anchors.length&&images.every(i=>i.complete&&i.naturalWidth>0);
   document.documentElement.classList.toggle('journey-active',enabled);
   canvas!.style.display=enabled?'block':'none';
   if(!enabled||document.hidden)return;
   const size=Math.min(anchors[0].getBoundingClientRect().width,innerHeight-175,600);
   const rest=Math.max(140,(innerHeight-size)/2);
   const rects=anchors.map(a=>a.getBoundingClientRect());
   const momentRects=moments.map(m=>m.getBoundingClientRect());
   const insideLifeMedia=momentRects.length>0&&momentRects[0].top<innerHeight*.82&&momentRects.at(-1)!.bottom>innerHeight*.18;
   canvas!.style.opacity=insideLifeMedia?'0':'1';
   const sections=anchors.map(a=>a.closest<HTMLElement>('.hero,section')!);
   const anchorTop=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||140;
   const stops=sections.map((s,i)=>i===0?0:s.getBoundingClientRect().top+scrollY-anchorTop);
   let from=0,to=0,mix=0;
   for(let i=1;i<stops.length;i++){
    const span=Math.min(650,(stops[i]-stops[i-1])*.7);
    if(scrollY>=stops[i]){from=i;to=i;mix=0}
    else if(scrollY>stops[i]-span){from=i-1;to=i;mix=smooth((scrollY-stops[i]+span)/span);break}
    else break;
   }
   const point=(i:number)=>({x:rects[i].left+(rects[i].width-size)/2,y:i===0?Math.max(rest,rects[0].top):rest});
   const a=point(from),b=point(to),burst=Math.sin(Math.PI*mix);
   const x=a.x+(b.x-a.x)*mix;
   const end=sections.at(-1)!.getBoundingClientRect().bottom-size-60;
   const y=Math.min(a.y+(b.y-a.y)*mix-35*burst,end);
   const ratio=Math.min(devicePixelRatio||1,2),pixels=Math.round(size*ratio);
   if(canvas!.width!==pixels){canvas!.width=pixels;canvas!.height=pixels}
   canvas!.style.width=`${size}px`;canvas!.style.height=`${size}px`;
   canvas!.style.transform=`translate3d(${x}px,${y}px,0)`;
   ctx!.setTransform(ratio,0,0,ratio,0,0);ctx!.clearRect(0,0,size,size);
   const draw=(index:number,alpha:number)=>{
    if(alpha<=0)return;
    const img=images[index],scale=Math.min(size/img.width,size/img.height)*(.98-.16*burst);
    const w=img.width*scale,h=img.height*scale;
    for(let piece=0;piece<6;piece++){
     const col=piece%2,row=Math.floor(piece/2),cx=(col+.5)*size/2,cy=(row+.5)*size/3;
     ctx!.save();ctx!.globalAlpha=alpha;
     ctx!.translate(size/2,size/2);ctx!.rotate(pointer*.012);ctx!.translate(-size/2,-size/2);
     ctx!.translate((col?1:-1)*burst*size*.055,(row-1)*burst*size*.045);
     ctx!.translate(cx,cy);ctx!.rotate((piece%2?1:-1)*burst*.09);ctx!.scale(from===to?1:Math.max(.015,Math.abs(Math.cos(Math.PI*mix))),1);ctx!.translate(-cx,-cy);
     ctx!.beginPath();ctx!.rect(col*size/2,row*size/3,size/2+.5,size/3+.5);ctx!.clip();
     ctx!.drawImage(img,(size-w)/2,(size-h)/2,w,h);ctx!.restore();
    }
   };
   draw(from===to||mix<.5?from:to,1);
  }
  function schedule(){if(!frame&&!dead)frame=requestAnimationFrame(paint)}
  const move=(e:PointerEvent)=>{if(e.pointerType==='mouse'){pointer=e.clientX/innerWidth-.5;schedule()}};
  const syncImages=()=>{
   if(!media.matches){images.forEach(i=>{i.onload=null;i.onerror=null});images=[];schedule();return}
   if(images.length===anchors.length)return;
   images=anchors.map(a=>{const img=new window.Image();img.onload=schedule;img.onerror=schedule;img.src=a.dataset.journeyImage!;return img});
  };
  const resize=new ResizeObserver(schedule);anchors.forEach(a=>resize.observe(a));
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);addEventListener('pointermove',move,{passive:true});
  media.addEventListener('change',syncImages);document.addEventListener('visibilitychange',schedule);syncImages();schedule();
  return()=>{dead=true;cancelAnimationFrame(frame);resize.disconnect();removeEventListener('scroll',schedule);removeEventListener('resize',schedule);removeEventListener('pointermove',move);media.removeEventListener('change',syncImages);document.removeEventListener('visibilitychange',schedule);document.documentElement.classList.remove('journey-active');images.forEach(i=>{i.onload=null;i.onerror=null})};
 },[]);
 return <canvas ref={ref} className="paper-journey" aria-hidden="true"/>;
}
