const moveArrow = () => {
    const flecha = document.querySelector(".elemento")
    let half = Math.ceil(window.innerWidth / 2)
    flecha.style.left = half + "px"
}

window.onload = moveArrow
window.onresize = moveArrow