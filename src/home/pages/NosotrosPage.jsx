import { Header2, Navbar2 } from "../../ui/componets"

export const NosotrosPage = () => {
    return (
        <>
            <Navbar2 />

            <Header2 />

            <div className="container mt-5">
                <div className="row">
                    {/* Contenido */}
                    <div className="col-md-7">
                        <h2 className="title text-center">Nuestros Origenes</h2>
                        <p>
                            Don Rafael Rosendo Yáñez Quijada, nació en el seno de una familia que por varias generaciones se ha dedicado a la destilación del jugo de la caña de azúcar. 
                            Comenzó a muy temprana edad a aprender los secretos de su profesión en la población de Nueva Colombia, 
                            ubicada en la zona central del estado Sucre, al nororiente de Venezuela, región donde se comenzaron a producir los primeros rones del país, 
                            en una época donde esta bebida hizo famoso al Caribe. Don Rafael Yáñez tiene hoy más de 50 años dedicados a continuar la tradicional fabricación de estos nobles licores llenos de historia. 
                            Historia que, al pasar el buen ron por nuestro paladar, no podemos menos que evocar y sentir en nuestras venas y en nuestros corazones.
                        </p>
                        
                    </div>

                    {/* foto */}
                    <div className="col-md-5 text-center" >
                        <img src="assets/img/Nosotros/Captura.jpg" alt="" className="img-fluid" /> 
                    </div>


                    {/* foto */}
                    <div className="col-md-6 mt-3">
                    <img src="assets/img/Nosotros/Captura3.jpg" alt="" className="img-fluid" />
                    </div>

                    {/* Contenido */}
                    <div className="col-md-6 mt-3">
                        <h2 className="title text-center">Licoreria La Florida</h2>
                        <p>
                        Licorería La Florida, empresa dedicada a la elaboración, envejecimiento y envasado de bebidas alcohólicas, fue fundada en 1948 por Don Rafael en la ciudad de Cumaná, 
                        primera ciudad erigida por los españoles en tierras americanas. La empresa es hoy por hoy una de las más representativas del estado Sucre, proyectando 
                        su imagen dentro y fuera de nuestras fronteras. La excelente calidad de sus productos la ha hecho merecedora de numerosos reconocimientos nacionales e internacionales, entre los 
                        que destacan el Gold Mercury International Award, en 1981, y la Medalla de Oro de Lieja, Bélgica, en 1990. A la ancestral dedicación y esmero en la producción de licores, Licorería La Florida une hoy 
                        los más avanzados recursos tecnológicos, los cuales, junto a la mística de las personas que intervienen en el proceso, permiten obtener productos de alta calidad e insuperable sabor 
                        y aroma. Estos productos son bebidas alcohólicas tropicales, preparadas a partir de alcohol anhídro, o etílico, obtenido de la caña de azúcar.

                        </p>
                    </div>
                     
                     {/* Contenido */}
                    <div className="col-md-12 mt-3">
                        <h2 className="title text-center">Licoreria La Florida</h2>
                        <p> 
                        Una vez fermentada la melaza, se seleccionan las mejores levaduras para que acción enzimática elimine los elementos tóxicos y perturbadores que producen malestar en el organismo.
                        El envejecimiento, o añejamiento, se realiza en barricas de roble americano, confiriéndole a los productos La Florida, su aroma, color y sabor inconfundible. 
                        La extensa gama de productos cumple con todos los requerimientos exigidos por las leyes venezolanas; y los continuos análisis cromatográficos a que son sometidos, permiten mantener la uniformidad de las particulares cualidades de cada uno de ellos. Es por esto que 
                        permanentemente nos preocupamos por incorporar en cada proceso, la más avanzada tecnología, contando hoy en día con modernas líneas de envasado, laboratorio de control de calidad, y las instalaciones adecuadas para garantizar la calidad y cantidad de productos, 
                        factores necesarios para atender la exigente demanda del mercado nacional e internacional. A esto, y como parte fundamental, se agrega el esfuerzo diario del recurso humano, conformado por profesionales con un alto nivel técnico, 
                        que en armoniosa empatía con la organización, garantiza la constante superación en todos los procesos actuales, y permite encarar sin temores el futuro inmediato. os sentimos orgullosos al reconocer que nuestro personal 
                        es el principal activo de Licorería La Florida, y de ser el sostén de más de 50 familias en forma directa.
                        </p>
                    
                    {/* foto */}
                    <div className="col-md-12 mt-3">
                    <img src="assets/img/Nosotros/Captura2.jpg" alt="" className="img-fluid"/>
                    </div>
                    
                    </div>
                </div>
            </div>

            
        
        </>
    )
}