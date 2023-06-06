import { EmailForm } from "./EmailForm"

export const Contact = () => {
    return (
        <section className="page-section" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0">Pongase en contacto!</h2>
                        <hr className="divider" />
                        
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">
                        {/*----------Formulario--------------------*/}
                        <EmailForm />
                    </div>

                    <div className="col-lg-6">
                        {/*----------Mapa--------------------*/}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1237.5443283993877!2d-64.18305493037725!3d10.472233018119997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c32719011a1684d%3A0x22158d2b18e8df61!2sLicoreria%20La%20Florida!5e1!3m2!1ses!2sve!4v1686063396895!5m2!1ses!2sve" 
                            width="600" height="450" style={{border: "0"}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-4 text-center mb-5 mb-lg-0">
                        <i className="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>+58 (212) 771-4339</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
