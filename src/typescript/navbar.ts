const Navbar = () => {
    const nav = document.createElement('ul');
    nav.innerHTML = `
            <div class="nav-logo">
                <li><a href="index.html" id="home"><i id="logo" class="fas fa-user-astronaut"></i>It's me!</a></li>
            </div>
            <div class="nav-links">
                <li class="nav-item"><a href="aboutMe.html">O mnie</a></li>
                <li class="nav-item"><a href="hobby.html">Hobby</a></li>
                <li class="nav-item"><a href="contact.html">Kontakt</a></li>
            </div>
            <div class="mobile-nav-links">
                <li class="mobile-nav-item"><a href="aboutMe.html">O mnie</a></li>
                <li class="mobile-nav-item"><a href="hobby.html">Hobby</a></li>
                <li class="mobile-nav-item"><a href="contact.html">Kontakt</a></li>
            </div>
            <button class="hamburger">
                <span class="hamburger__box">
                    <span class="hamburger__inner"></span>
                </span>
            </button>
    `;

    return nav;
}

export default Navbar;
