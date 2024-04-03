import { useEffect, useState } from "react";


function FlowerKaboom() {

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
        const kaboomEl = document.querySelector(".kaboom-ctr");   
        if (kaboomEl) {
            kaboomEl.addEventListener("drag", dragFlower);

            // Clean up the event listeners on component unmount
            return () => {
                kaboomEl.removeEventListener("drag", dragFlower);
            };
        }
    }, [])

    useEffect(() => {
        const kaboomEl = document.querySelector(".kaboom-ctr");
        if (kaboomEl) {
            const dragStartHandler = (e) => {
                // Create a new transparent image or use a 1x1 transparent PNG
                var transparentImg = new Image();
                transparentImg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

                // Set the custom drag image, position it far off screen
                e.dataTransfer.setDragImage(transparentImg, -10000, -10000);
            };

            kaboomEl.addEventListener("dragstart", dragStartHandler);

            // Clean up the event listeners on component unmount
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
