import { useEffect, useState } from "react";


function FlowerKaboom({x, y, flower, size, instance}) {

    function dragFlower(e){
        e.preventDefault()
        if(e.clientX){
        e.target.style.left = `${e.clientX}px`;
        }
        if(e.clientY){
        e.target.style.top = `${e.clientY+window.scrollY}px`;
        }
    }

    useEffect(() => {
        const kaboomEl = document.querySelectorAll(".kaboom-ctr")[instance];   
        if (kaboomEl) {
            kaboomEl.addEventListener("drag", dragFlower);
            kaboomEl.style.top = y
            kaboomEl.style.left = x
            kaboomEl.style.height = size
            kaboomEl.style.width = size
            return () => {
                kaboomEl.removeEventListener("drag", dragFlower);
            };
        }
    }, [])

    useEffect(() => {
        const kaboomEl = document.querySelectorAll(".kaboom-ctr")[instance];
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
<input type="checkbox" id="kaboom-ctl"/>
<label for="kaboom-ctl">    
<div className="kaboom-ctr" draggable={true}>
</div>
</label> 
</>
);

}

export default FlowerKaboom;
