import { Link, NavLink } from "react-router-dom";

export const Navbar2 = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    <img src="/assets/img/LOGO-1.png" alt="Bootstrap" width="120" height="75" />
                </Link>

                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item">
                            <NavLink 
                                className={ ({ isActive }) => `nav-item nav-link ${ (isActive) ? 'active' : '' }` }
                                to="/"
                            >
                                Inicio
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                className={ ({ isActive }) => `nav-item nav-link ${ (isActive) ? 'active' : '' }` }
                                to="/nosotros"
                            >
                                Nosotros
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link" 
                                href="#services"
                            >
                                Servicios
                            </a>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                className={ ({ isActive }) => `nav-item nav-link ${ (isActive) ? 'active' : '' }` }
                                to="/productos"
                            >
                                Productos
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="#contact"
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
