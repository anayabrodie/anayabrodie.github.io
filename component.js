class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="navbar fira-sans-medium">
            <a class="logo" href="index.html"><img src="images/Anaya-Logo.png"></a>
            <nav class="nav">
                
                <h5 class="option">
                    <a class="black-text" href="index.html">Home</a>
                </h5>
                <h5 class="option">
                    <a class="black-text" href="about.html">About</a>
                </h5>
                <h5 class="option">
                    <a class="black-text" href="photos.html">Photos</a>
                </h5>
                <h5 class="option">
                    <a class="black-text" href="media.html">Media</a>
                </h5>
                <h5 class="option">
                    <a class="black-text" href="resume.html">Resume</a>
                </h5>
            </nav>
            <div class="socials">
                <a href="https://www.instagram.com/brodie_productions_/" target="_blank"><img src="images/instagram-logo.png"></a>
                <a href="https://www.linkedin.com/in/anaya-brodie-672ba3261/" target="_blank"><img src="images/linkedin-logo.png"></a>
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