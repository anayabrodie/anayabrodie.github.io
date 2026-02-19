class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="navbar fira-sans-medium">
            <!-- <a href="index.html"><img src="images/signature.png"></a> -->
            <nav class="nav">
                <h5 class="option">
                    <a class="black-text" href="index.html">Home</a>
                </h5>
                <h5 class="option">
                    <a class="black-text" href="about.html">About Me</a>
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
        </div>
        `
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p class="black-text fira-sans-medium">Footer text</p>
            <div class="socials">
                <a href="index.html" target="_blank"><img src="images/instagram2.png"></a>
                <a href="index.html" target="_blank"><img src="images/github.png"></a>
                <a href="index.html" target="_blank"><img src="images/linkedin.png"></a>
            </div>
        </footer>
        `
    }
}

customElements.define("my-navbar", MyNavbar);
customElements.define("my-footer", MyFooter);