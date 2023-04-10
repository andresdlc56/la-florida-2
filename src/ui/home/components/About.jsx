import { Link } from "react-router-dom"

export const About = () => {
    return (
        <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">Nosotros</h2>
                        <hr class="divider divider-light" />
                        <p class="text-white-75 mb-4">Licorería La Florida, empresa dedicada a la elaboración, envejecimiento y envasado de bebidas alcohólicas, fue fundada en 1948 por Don Rafael en la ciudad de Cumaná, primera ciudad erigida por los españoles en tierras americanas. La empresa es hoy por hoy una de las más representativas del estado Sucre, proyectando su imagen dentro y fuera de nuestras fronteras. </p>
                        <a class="btn btn-light btn-xl" href="#service">Saber Mas</a>
                    </div>
                </div>
            </div>
        </section>        
    )
}
