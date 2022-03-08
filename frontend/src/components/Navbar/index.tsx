import{ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function NavBar(){
    return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/1gorFerreira">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovice-contact-link">/1gorFerreira</p>
            </div>
            </a>
        </div>
      </nav>
    </header>
    );
}

export default NavBar;