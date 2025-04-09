export const myMenuFunction = ()=> {
    const navMenu = document.getElementById('myNavMenu');
    if(navMenu) {
        navMenu.classList.toogle('responsive');
    }
}