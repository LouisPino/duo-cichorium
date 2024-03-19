let progress
let totalHeight
window.onscroll = function () {
    let progressHeight = (window.scrollY / totalHeight) * 100;
    if (progress) {
        progress.style.height = progressHeight + "%";
    } else {
        totalHeight = document.body.scrollHeight - window.innerHeight;
        progress = document.getElementById("progressbar");
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
        console.log(el);
    }
});

export default resizeScroll