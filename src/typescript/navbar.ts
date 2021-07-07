const Navbar = () => {
    const nav = document.createElement('ul');
    nav.innerHTML = `
            <div>
                <li><a href="index.html" id="home"><i id="logo" class="fas fa-user-astronaut"></i>It's me!</a></li>
            </div>
            <div>
                <li><a href="aboutMe.html">O mnie</a></li>
                <li><a href="hobby.html">Hobby</a></li>
                <li><a href="contact.html">Kontakt</a></li>
            </div>
    `;

    return nav;
}

export default Navbar;
