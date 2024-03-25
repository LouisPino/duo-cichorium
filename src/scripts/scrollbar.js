let progress
let totalHeight
let scrollFlowerEl = document.querySelector(".scroll-img")
window.onscroll = function () {
    if (!scrollFlowerEl) {
        scrollFlowerEl = document.querySelector(".scroll-img")
    }
    let progressHeight = (window.scrollY / totalHeight) * 100;
    console.log(progressHeight)
    if (scrollFlowerEl) {
        if (progressHeight < 1) {
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

document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > el.parentNode.offsetWidth) {
    }
});

export default resizeScroll