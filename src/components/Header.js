import logo from '../images/Vector-logo.svg';

export default function Header() {
  return (
    <header className = "header" >
      <img src = {logo}
      className = "header__logo"
      alt = "Логотип сайта" />
    </header>
  )
}
