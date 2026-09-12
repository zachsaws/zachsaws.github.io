import Image from 'next/image';
export default function PaperScene({image,description}:{image:string;description:string}) {
 return <div className="paper-scene" data-journey-image={image}><Image unoptimized src={image} alt={description} width={1254} height={1254}/></div>;
}
