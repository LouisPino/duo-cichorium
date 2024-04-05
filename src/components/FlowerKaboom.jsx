import { useEffect, useState } from "react";


function FlowerKaboom({x, y, flower, size, instance}) {

    function dragFlower(e){
        e.preventDefault()
        if(e.clientX){
        e.target.style.left = `${e.clientX-size/2}px`;
        }
        if(e.clientY){
        e.target.style.top = `${e.clientY+window.scrollY-size/2}px`;
        }
    }

    function spin(e){
        e.target.classList.add("spin")
        e.target.addEventListener("animationend", ()=>e.target.classList.remove("spin"))
    }

    useEffect(() => {
        const kaboomEl = document.querySelector(`.kaboom-ctr${instance}`);   
        if (kaboomEl) {
            kaboomEl.addEventListener("drag", dragFlower);
            kaboomEl.style.top = y
            kaboomEl.style.left = x
            kaboomEl.style.height = `${size}px`
            kaboomEl.style.width = `${size}px`
            return () => {
                kaboomEl.removeEventListener("drag", dragFlower);
            };
        }
    }, [])

    useEffect(() => {
        const kaboomEl = document.querySelector(`.kaboom-ctr${instance}`);
        if (kaboomEl) {
            const dragStartHandler = (e) => {
                var transparentImg = new Image();
                transparentImg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
                e.dataTransfer.setDragImage(transparentImg, -10, -10);
            };
            kaboomEl.addEventListener("dragstart", dragStartHandler);
            return () => {
                kaboomEl.removeEventListener("dragstart", dragStartHandler);
            };
        }
    }, []);


  ;
  return (
  <>
<input type="checkbox" id={`kaboom-ctl${instance}`}/>
<label for={`kaboom-ctl${instance}`}>    
<div className={`kaboom-ctr${instance} desktop-only flower${flower} kaboom`} onClick={spin} draggable={true}>
</div>
</label> 
</>
);

}

export default FlowerKaboom;
