import { Link } from "react-router-dom";

export const MasProductos = () => {
    return (
        <section className="page-section bg-dark text-white">
            <div className="container px-4 px-lg-5 text-center">
                <h2 className="mb-4">Nuestros Productos</h2>
                <Link 
                    className="btn btn-light btn-xl" 
                    to="/productos"
                >
                    Ver Mas
                </Link>
            </div>
        </section>
    )
}
