class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="navbar fira-sans-medium">
            <a class="logo" href="index.html"><img src="images/assets/Anaya-Logo.png"></a>

            <input type="checkbox" id="nav-toggle" class="nav-toggle">
            <label for="nav-toggle" class="nav-button">
                MENU <span>▼</span>
            </label>

            <nav class="nav">
                
                <h5 class="option">
                    <a href="index.html">HOME</a>
                </h5>
                <h5 class="option">
                    <a href="about.html">ABOUT</a>
                </h5>
                <h5 class="option">
                    <a href="photos.html">PHOTOS</a>
                </h5>
                <h5 class="option">
                    <a href="media.html">MEDIA</a>
                </h5>
                <h5 class="option">
                    <a href="resume.html">RESUME</a>
                </h5>
            </nav>
            <div class="socials">
                <a href="https://www.instagram.com/brodie_productions_/" target="_blank"><img src="images/assets/instagram-logo.png"></a>
                <a href="https://www.linkedin.com/in/anaya-brodie-672ba3261/" target="_blank"><img src="images/assets/linkedin-logo.png"></a>
            </div>
        </div>
        `
    }
}

// class MyFooter extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//         <footer>
//             <p class="black-text fira-sans-medium">Footer text</p>
//             <div class="socials">
//                 <a href="index.html" target="_blank"><img src="images/instagram2.png"></a>
//                 <a href="index.html" target="_blank"><img src="images/github.png"></a>
//                 <a href="index.html" target="_blank"><img src="images/linkedin.png"></a>
//             </div>
//         </footer>
//         `
//     }
// }

customElements.define("my-navbar", MyNavbar);
// customElements.define("my-footer", MyFooter);

window.addEventListener('load', () => {
    const overlay = document.getElementById('fade-overlay');
    
    if (overlay) {
        // Start the fade out
        overlay.classList.add('fade-out');

        // Remove the overlay from the layout once the transition is done
        overlay.addEventListener('transitionend', () => {
            overlay.style.display = 'none';
        });
    }
});