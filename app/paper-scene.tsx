"use client";
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';

export default function PaperScene({image,description,priority=false}:{image:string;description:string;priority?:boolean}) {
 const ref=useRef<HTMLDivElement>(null);
 const [visible,setVisible]=useState(false);
 useEffect(()=>{
  const element=ref.current;
  if(!element) return;
  const observer=new IntersectionObserver(([entry])=>{
   if(entry.isIntersecting){setVisible(true);observer.disconnect();}
  },{threshold:0.15});
  observer.observe(element);
  return ()=>observer.disconnect();
 },[]);
 return <div ref={ref} className={`paper-scene${visible ? ' scene-visible' : ''}`} data-journey-image={image}><Image unoptimized src={image} alt={description} width={1254} height={1254} priority={priority}/></div>;
}
