
export const ProductoModal = ({ articulo }) => {

    //console.log(articulo);

    return (
        <div className="modal fade" id={`${ articulo.alias }`} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{ articulo.nombre }</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                                
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={`assets/img/portfolio/productos/${ articulo.image }`} className="img-fluid" alt="..."></img>
                                </div>
                                <div className="col-md-6 ms-auto border-start">
                                    <p>{ articulo.descripcion }</p>

                                    <hr />

                                    <table className="table mt-5">
                                        
                                        <tbody>
                                            <tr>
                                                <th scope="row">Capacidad:</th>
                                                <td>{ articulo.capacidad } Lts.</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Xº GL:</th>
                                                <td>{ articulo.grados }º</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Empaque:</th>
                                                <td>{ articulo.empaque } Bot.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
