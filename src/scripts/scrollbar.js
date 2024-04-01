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

// function scrollTest() {
//     scrollFlowerEl.addEventListener("drag", printDrag)
//     scrollFlowerEl.addEventListener("dragend", releaseFlower)
// }

// function printDrag(e) {
//     window.scrollBy(0, e.offsetY)
// }

// function releaseFlower(e) {
//     let progressHeight = (window.scrollY / totalHeight) * 100;
//     scrollFlowerEl.style.top = `calc(${progressHeight}% - 24px)`;
// }


document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > el.parentNode.offsetWidth) {
    }
});

export default resizeScroll