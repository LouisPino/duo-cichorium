import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";


function FlowerKaboom({x, y, flower, size, instance}) {
    const location = useLocation();
    const [popped, setPopped] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [gifKey, setGifKey] = useState(0);
    const dragState = useRef(null);

    useEffect(() => {
        setPopped(false);
        setHidden(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!popped) return;
        const timer = setTimeout(() => setHidden(true), 750);
        return () => clearTimeout(timer);
    }, [popped]);

    function pop() {
        setGifKey((prev) => prev + 1);
        setPopped(true);
    }

    useEffect(() => {
        const kaboomEl = document.querySelector(`.kaboom-ctr${instance}`);
        if (!kaboomEl) return;

        kaboomEl.style.top = y;
        kaboomEl.style.left = x;
        kaboomEl.style.height = `${size}px`;
        kaboomEl.style.width = `${size}px`;

        // Dragging is handled with pointer events rather than native HTML5
        // drag-and-drop: native drag suppresses the "click" event entirely
        // once a drag starts, even for a barely-moved press, which can
        // silently eat clicks meant to pop the flower.
        const handlePointerDown = (e) => {
            const rect = kaboomEl.getBoundingClientRect();
            dragState.current = {
                startX: e.clientX,
                startY: e.clientY,
                origTop: rect.top + window.scrollY,
                origLeft: rect.left,
                moved: false,
            };
            kaboomEl.setPointerCapture(e.pointerId);
        };

        const handlePointerMove = (e) => {
            const drag = dragState.current;
            if (!drag) return;
            const dx = e.clientX - drag.startX;
            const dy = e.clientY - drag.startY;
            if (!drag.moved && Math.hypot(dx, dy) > 6) {
                drag.moved = true;
            }
            if (drag.moved) {
                kaboomEl.style.left = `${drag.origLeft + dx}px`;
                kaboomEl.style.top = `${drag.origTop + dy}px`;
            }
        };

        const handlePointerUp = () => {
            const drag = dragState.current;
            dragState.current = null;
            if (drag && !drag.moved) {
                pop();
            }
        };

        kaboomEl.addEventListener("pointerdown", handlePointerDown);
        kaboomEl.addEventListener("pointermove", handlePointerMove);
        kaboomEl.addEventListener("pointerup", handlePointerUp);
        kaboomEl.addEventListener("pointercancel", handlePointerUp);
        return () => {
            kaboomEl.removeEventListener("pointerdown", handlePointerDown);
            kaboomEl.removeEventListener("pointermove", handlePointerMove);
            kaboomEl.removeEventListener("pointerup", handlePointerUp);
            kaboomEl.removeEventListener("pointercancel", handlePointerUp);
        };
    }, [instance, x, y, size]);

    // A cache-busted URL forces the browser to decode this gif as its own
    // independent resource instead of sharing playback position with every
    // other element that references the plain kaboom.gif URL (browsers
    // sync identical animated-image URLs to the same current frame).
    const style = popped
        ? { backgroundImage: `url("/assets/kaboom.gif?pop=${instance}-${gifKey}")` }
        : undefined;

    return (
        <div
            className={`kaboom-ctr${instance} desktop-only flower${flower} kaboom${popped ? " popped" : ""}${hidden ? " hidden" : ""}`}
            style={style}
        >
        </div>
    );
}

export default FlowerKaboom;
