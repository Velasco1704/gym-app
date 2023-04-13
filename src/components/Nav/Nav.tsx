import Link from "next/link";
import "./Nav.modules.scss";

export const Nav = () => {
  return (
    <nav className="nav__container">
      <h1 className="nav__h1">
        <Link href="/">
          Tu<span className="nav__span">Gym</span>
        </Link>
      </h1>
      <ul className="nav__ul">
        <li className="nav__li">
          <Link href="/">Home</Link>
        </li>
        <li className="nav__li">
          <Link href="/servicios">Servicios</Link>
        </li>
        <li className="nav__li">
          <Link href="/bienestar-salud">Bienestar y salud</Link>
        </li>
        <li className="nav__li">
          <Link href="/clases-grupales">Clases Grupales</Link>
        </li>
        <li className="nav__li">
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
