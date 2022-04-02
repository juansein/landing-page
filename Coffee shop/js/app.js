var prevScrollpos = window.pageYOffset
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0"
    } else {
        document.getElementById("navbar").style.top = "-100px"
    }
    prevScrollpos = currentScrollPos
}
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

function isVisible(e) {
    let elementBox = e.getBoundingClientRect()
    let distanceFromTop = -150

    if (elementBox.top - window.innerHeight < distanceFromTop) {
        return true
    } else {
        return false
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden')
    sectionList.forEach(function (section) {
        if (isVisible(section)) {
            section.classList.remove('hidden')
        }
    })


}

window.addEventListener("load", scanDocument)
document.addEventListener("scroll", scanDocument)