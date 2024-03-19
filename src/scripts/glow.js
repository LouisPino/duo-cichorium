function glow(e) {
    if (!e.target.classList.value.includes("here")) {
        e.target.classList.add("here");
    } else {
        e.target.classList.remove("here");
    }
}

export default glow