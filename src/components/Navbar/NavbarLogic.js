
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById('header');
    if(document.body.scrollTop > 50 || document.getElementById.scrollTop > 50) {
        navHeader.style.boxShadow = '0 1px 6px rgba(0,0,0,0.1)';
        navHeader.style.height = '70px';
        navHeader.style.lineHeight = '70px';
    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
}

// cv download buttons javascripts
const buttons = document.getElementsByClassName('downloadBtn');
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',()=> {
        const link = document.createElement('a');
        link.href = 'assets/CV Abu Mohammad Younus.pdf';
        link.download = 'CV Abu Mohammad Younus.pdf';
        link.click();
    })
}


