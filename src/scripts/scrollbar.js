let totalHeight
let scrollFlowerEl = document.querySelector(".scroll-img")
window.onscroll = function () {
    if (!scrollFlowerEl) {
        scrollFlowerEl = document.querySelector(".scroll-img")
    }
    let progressHeight = (window.scrollY / totalHeight) * 100;
    if (scrollFlowerEl) {
        if (progressHeight < .5) {
            scrollFlowerEl.style.top = scrollFlowerEl.style.height;
        } else {
            scrollFlowerEl.style.top = `calc(${progressHeight}% - 24px)`;
        }
    } else {
        totalHeight = document.body.scrollHeight - window.innerHeight;
        scrollFlowerEl = document.querySelector(".scroll-img");
    }
}

let observer = new MutationObserver(function (mutations) {
    setTimeout(resizeScroll, 500)
});



observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: false,
});

function resizeScroll() {
    totalHeight = document.body.scrollHeight - window.innerHeight;
}

let dragging = false;

function scrollToPointer(clientY) {
    if (!totalHeight) resizeScroll();
    const trackHeight = document.getElementById("progressbar")?.offsetHeight || window.innerHeight;
    const progressHeight = Math.min(100, Math.max(0, (clientY / trackHeight) * 100));
    window.scrollTo(0, (progressHeight / 100) * totalHeight);
}

document.addEventListener("pointerdown", function (e) {
    if (!e.target.classList.contains("scroll-img")) return;
    dragging = true;
    e.target.classList.add("dragging");
    e.target.setPointerCapture(e.pointerId);
    scrollToPointer(e.clientY);
    e.preventDefault();
});

document.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    scrollToPointer(e.clientY);
});

function stopDragging(e) {
    if (!dragging) return;
    dragging = false;
    if (e.target.classList) e.target.classList.remove("dragging");
}

document.addEventListener("pointerup", stopDragging);
document.addEventListener("pointercancel", stopDragging);


document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > el.parentNode.offsetWidth) {
    }
});

export default resizeScroll