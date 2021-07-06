import './globalStyles.scss';

  function component() {
    const site = document.createElement('main');
    const navbar = document.createElement('ul');

    navbar.innerHTML = `
    <div>
        <li><button id="home">It's me!</button></li>
    </div>
    <div>
        <li><button>O mnie</button></li>
        <li><button>Hobby</button></li>
        <li><button>Kontakt</button></li>
    </div>
    `;

    site.appendChild(navbar);

    // site.appendChild(Home());

    return site;
  }

  // document.body.appendChild(component());