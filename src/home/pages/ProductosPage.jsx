import { Header2, Navbar2 } from "../../ui/componets";

export const ProductosPage = () => {
    return (
        <>
            <Navbar2 />

            <Header2 />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Licores Dulces</h1>
                        <hr className="divider"/>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img className="card-img-top" src="assets/img/portfolio/productos/ponsigue.JPG" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Crema de Ponsigue Lider</h5>
                                {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ponsigue">
                                    Ver
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img className="card-img-top" src="assets/img/portfolio/productos/coquito.JPG" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Licor Dulce Coquito</h5>
                                {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#coquito">
                                    Ver
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img className="card-img-top" src="assets/img/portfolio/productos/anis.JPG" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Anis el Pilar</h5>
                                {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>*/}
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="card">
                            <img className="card-img-top" src="assets/img/portfolio/productos/cumanes.JPG" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Licor de Ponsigue Cumanes</h5>
                                {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>*/}
                            </div>
                        </div>
                    </div>

                  

                    {/* Modal Ponsigue */}
                    <div className="modal fade" id="ponsigue" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Crema de Ponsigue Lider</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                
                                <div class="modal-body">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-md-7">
                                                <img src="assets/img/portfolio/productos/modal-ponsi.jpg" class="img-fluid" alt="..."></img>
                                            </div>
                                            <div class="col-md-5 ms-auto border-start">.col-md-5 .ms-auto</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal Coquito */}
                    <div className="modal fade" id="coquito" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Coquito
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
