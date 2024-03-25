function glow(e) {
    if (!e.target.classList.value.includes("glow")) {
        e.target.classList.add("glow");
    } else {
        e.target.classList.remove("glow");
    }
}

export default glow