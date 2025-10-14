import { Link } from "@tanstack/react-router";
import styles from "./header.module.scss";


export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src='assets/logoDVT.svg' alt="Logo de Devoted To Videogames" />
        <h1 className={styles.title}>Devoted To Videogames</h1>
      </div>
   
        <nav className={styles.navContainer}>
          <Link to="/" className="[&.active]:text-yellow-400">
            Inicio
          </Link>
          <Link to="/crear" className="[&.active]:text-yellow-400">
            Crear
          </Link>
          <Link to="/favoritos" className="[&.active]:text-yellow-400">
            Favoritos
          </Link>
        </nav>
      
    </header>
  );
}
