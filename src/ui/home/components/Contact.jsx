import { EmailForm } from "./EmailForm"

export const Contact = () => {
    return (
        <section className="page-section" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
<<<<<<< HEAD:src/ui/componets/Contact.jsx
                        <h2 className="mt-0">Mantengámonos En Contacto</h2>
                        <hr className="divider" />
                        <p className="text-muted mb-5">Envíenos un mensaje y nos pondremos en contacto con usted lo antes posible</p>
=======
                        <h2 className="mt-0">Pongase en contacto!</h2>
                        <hr className="divider" />
                        
>>>>>>> Nosotros:src/ui/home/components/Contact.jsx
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">
                        {/*----------Formulario--------------------*/}
<<<<<<< HEAD:src/ui/componets/Contact.jsx
                        <section className="page-section" id="Contactanos">
                            <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                                <div className="col-lg-6"></div>
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                            
                                        <div className="form-floating mb-3">
                                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                                <label>Nombre completo</label>
                                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                        </div>
                                            
                                        <div className="form-floating mb-3">
                                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                                <label>Direccion de correo electronico</label>
                                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                        </div>
                                            
                                        <div className="form-floating mb-3">
                                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                                <label>Numero de telefono</label>
                                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                        </div>
                                            
                                        <div className="form-floating mb-3">
                                                <textarea 
                                                    className="form-control" 
                                                    id="message" 
                                                    type="text"
                                                >
                                                </textarea>

                                                <label>Mensaje</label>
                                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                        </div>
                                            
                                        <div className="d-none" id="submitSuccessMessage">
                                                <div className="text-center mb-3">
                                                    <div className="fw-bolder">Form submission successful!</div>
                                                    To activate this form, sign up at
                                                    <br />
                                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                                </div>
                                        </div>
                                            
                                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                            
                                        <div className="d-grid"><button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Enviar</button></div>
                                </form>
                            </div>
                        </section>
=======
                        <EmailForm />
>>>>>>> Nosotros:src/ui/home/components/Contact.jsx
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
