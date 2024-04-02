import { useEffect } from "react";


function FlowerKaboom() {
    let mousePos = [];

    function dragFlower(e){
        if(e.screenX != 0){
            mousePos[0] = e.screenX
        }
        if(e.screenY != 0){
            mousePos[1] = e.screenY

        }
    }
    
    function dropFlower(e){
        console.log(mousePos)
        e.target.style.left = `${mousePos[0]}px`
        e.target.style.top =  `${mousePos[1]}px`
    }


    useEffect(() => {
        const kaboomEl = document.querySelector(".kaboom-ctr");
        kaboomEl.addEventListener("drag", (e)=>{dragFlower(e)})
        kaboomEl.addEventListener("dragend", (e)=>{dropFlower(e)})
    }, [])

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
