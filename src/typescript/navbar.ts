const Navbar = () => {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <nav>
            <ul>
                <div>
                    <li><a href="index.html" id="home"><i class="fas fa-user-astronaut">It's me!</a></li>
                </div>
                <div>
                    <li><a href="aboutMe.html">O mnie</a></li>
                    <li><a href="hobby.html">Hobby</a></li>
                    <li><a href="contact.html">Kontakt</a></li>
                </div>
            </ul>
        </nav>
    `;

    return nav;
}

export default Navbar;
