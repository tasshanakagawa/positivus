import Button from '../Button/Button';
import './NavMenu.css';

function NavMenu() {
  return(
    <div class="nav-menu flex items-center justify-between m-auto">
      <div className="nav-menu__logo">
        <img src="../../../public/positivus-logo.svg" alt="Logo" />
      </div>
      <nav className="nav-menu__navigation flex items-center gap-4">
        <ul className="nav-menu__list flex gap-4">
          <li className="nav-menu__item">About Us</li>
          <li className="nav-menu__item">Services</li>
          <li className="nav-menu__item">Use Cases</li>
          <li className="nav-menu__item">Pricing</li>
          <li className="nav-menu__item">Blog</li>
        </ul>
        <Button
          text="Request a quote"
          variant="outline-primary"
          to="#"
        />
      </nav>
    </div>
  )
}

export default NavMenu