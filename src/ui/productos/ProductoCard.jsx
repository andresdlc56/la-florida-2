import { ProductoModal } from "./ProductoModal"

export const ProductoCard = ({ producto }) => {

    return (
        <>
            <div className="col-sm-6 col-md-3 mb-2">
                <div className="card animate__animated animate__fadeIn">
                    <img className="card-img-top" src={`assets/img/portfolio/productos/${ producto.image }`} alt="Card image cap" />
                    <div className="card-body text-center">
                        <button
                            type="button" 
                            className="btn btn-primary" 
                            data-bs-toggle="modal" 
                            data-bs-target={`#${ producto.alias }`} 
                        >
                            <h5 className="card-title text-center">{ producto.nombre }</h5>
                        </button>
                        {/* <p className="card-text">{ producto.descripcion }</p> */}
                        
                    </div>
                </div>
            </div>

            <ProductoModal articulo={ producto } />
        </>
    )
}
