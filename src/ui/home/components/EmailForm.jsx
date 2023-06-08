import { useForm } from "../../../hooks/useForm";

export const EmailForm = () => {

    const { onInputChange, onResetForm, fullName, email, phoneNumber, description } = useForm({
        fullName: '',
        email: '',
        phoneNumber: '',
        description: ''
    });

    const onSubmitForm = (e) => {
        e.preventDefault();

        console.log('Formulario enviado...');
    }

    return (
        <form onSubmit={ onSubmitForm }>                
            <div className="form-floating mb-3">
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Ingrese su nombre completo" 
                    name="fullName"
                    value={ fullName }
                    onChange={ onInputChange }
                />
                
                <label>Nombre</label>
                
                <div className="invalid-feedback">Se requiere un nombre.</div>
            </div>
                            
            <div className="form-floating mb-3">
                <input 
                    className="form-control" 
                    type="email" 
                    placeholder="name@example.com"
                    name="email"
                    value={ email } 
                    onChange={ onInputChange }
                />
                
                <label>Correo Electronico</label>
                
                <div className="invalid-feedback">Se requiere un email.</div>
                
                <div className="invalid-feedback">El correo no es válido.</div>
            </div>
                            
            <div className="form-floating mb-3">
                <input 
                    className="form-control" 
                    type="tel" 
                    placeholder="(123) 456-7890"
                    name="phoneNumber" 
                    value={ phoneNumber }
                    onChange={ onInputChange }
                />
                                
                <label>Numero Telefonico</label>
                
                <div className="invalid-feedback">Se requiere un número de teléfono.</div>
            </div>
                            
            <div className="form-floating mb-3">
                <textarea 
                    className="form-control" 
                    type="text" 
                    placeholder="Ingrese su mensaje aqui..." 
                    style={{height: "10rem"}}
                    name="description"
                    value={ description }
                    onChange={ onInputChange }
                >
                </textarea>
                                
                <label>Mensaje</label>
                
                <div className="invalid-feedback">Se requiere un mensaje.</div>
            </div>
                            
            <div className="d-none">
                <div className="text-center mb-3">
                    <div 
                        className="fw-bolder"
                    >
                        Envío de formulario exitoso!

                    </div>
                    
                    Para activar este formulario, regístrate en
                    
                    <br />
                    
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
            </div>
                            
            <div className="d-none"><div className="text-center text-danger mb-3">¡Error al enviar el mensaje!</div></div>
                            
            <div className="d-grid"><button className="btn btn-primary btn-xl" type="submit">Entregar</button></div>
        </form>
    )
}
