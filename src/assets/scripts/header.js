let headerOpen = false

addEventListener("resize", (event) => {
    const headerNav = document.getElementById("header-nav")
    const headerVisibilityBtn = document.getElementById("header-visibility-btn")

    if (window.innerWidth >= 600) {
        headerOpen = true
        headerNav.style.display = "flex"
        headerVisibilityBtn.className = "ri-close-large-line"
    }
})

const openHeader = () => {
    const headerNav = document.getElementById("header-nav")

    const headerVisibilityBtn = document.getElementById("header-visibility-btn")

    switch (headerOpen) {
        case false:
            headerNav.style.display = "flex"
            headerVisibilityBtn.className = "ri-close-large-line"
            break

        case true:
            headerNav.style.display = "none"
            headerVisibilityBtn.className = "ri-menu-line"
            break
    }

    headerOpen = !headerOpen
}
