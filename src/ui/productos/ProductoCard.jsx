import { ProductoModal } from "./ProductoModal"

export const ProductoCard = ({ producto }) => {

    return (
        <>
            <div className="col-sm-6 col-md-3 mb-2">
                <div className="card">
                    <img className="card-img-top" src={`assets/img/portfolio/productos/${ producto.image }`} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{ producto.nombre }</h5>
                        {/* <p className="card-text">{ producto.descripcion }</p> */}
                        <button 
                          type="button" 
                          className="btn btn-primary" 
                          data-bs-toggle="modal" 
                          data-bs-target={`#${ producto.alias }`} 
                        >
                            Ver
                        </button>
                    </div>
                </div>
            </div>

            <ProductoModal articulo={ producto } />
        </>
    )
}
