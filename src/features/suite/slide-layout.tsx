import {useEffect,useRef,useState,type ReactNode} from 'react';
export function SlideLayout({children,thumbnail=false}:{children:ReactNode;thumbnail?:boolean}) {
 const ref=useRef<HTMLDivElement>(null);const [scale,setScale]=useState(0.5);
 useEffect(()=>{const el=ref.current;if(!el)return;const resize=new ResizeObserver(entries=>{const rect=entries[0]?.contentRect;if(rect)setScale(Math.min(rect.width/1920,rect.height/1080));});resize.observe(el);return()=>resize.disconnect()},[]);
 return <div ref={ref} className={thumbnail?'slide-container slide-thumbnail':'slide-container'}><div className="slide-wrapper" style={{transform:`scale(${scale})`}}><div className="slide-content">{children}</div></div></div>;
}
