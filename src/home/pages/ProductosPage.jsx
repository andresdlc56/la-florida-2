
import { getProductosByCateg } from "../../productos/helpers/getProductosByCateg";
import { Header2, Navbar2 } from "../../ui/componets";
import { ProductoCard } from "../../ui/productos/ProductoCard";

export const ProductosPage = () => {
    const dulces = getProductosByCateg('Licores Dulces');
    const anejos = getProductosByCateg('Ron Añejos');
    const secos = getProductosByCateg('Rones Secos');
    const espirituosos = getProductosByCateg('Espirituosos');

    return (
        <>
            <Navbar2 />

            <Header2 />

            <div className="container">
                <div className="row">
                    {/*----------Dulces-------------*/}
                    <div className="col-md-12 text-center mt-5">
                        <h4>Licores Dulces</h4>
                        <hr className="divider"/>
                    </div>

                    {
                        dulces.map((item) => { 
                            return ( 
                                <ProductoCard key={ item.id } producto={ item } />
                            )
                        })
                    }

                    {/*----------Añejos-------------*/}
                    <div className="col-md-12 text-center mt-5">
                        <h4>Rones Añejos</h4>
                        <hr className="divider"/>
                    </div>

                    {
                        anejos.map((item) => { 
                            return ( 
                                <ProductoCard key={ item.id } producto={ item } />
                            )
                        })
                    }

                    {/*----------Secos-------------*/}
                    <div className="col-md-12 text-center mt-5">
                        <h4>Rones Secos</h4>
                        <hr className="divider"/>
                    </div>

                    {
                        secos.map((item) => { 
                            return ( 
                                <ProductoCard key={ item.id } producto={ item } />
                            )
                        })
                    }

                    {/*----------Espirituosas-------------*/}
                    <div className="col-md-12 text-center mt-5">
                        <h4>Bebidas Esperituosas Secas</h4>
                        <hr className="divider"/>
                    </div>

                    {
                        espirituosos.map((item) => { 
                            return ( 
                                <ProductoCard key={ item.id } producto={ item } />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
