import { useForm } from "../../../hooks/useForm";

export const EmailForm = () => {

    const { onInputChange, onResetForm, fullName, email, phoneNumber, description } = useForm({
        fullName: '',
        email: '',
        phoneNumber: '',
        description: ''
    });

    /*const onSubmitForm = (e) => {
        e.preventDefault();

        //console.log('Formulario enviado...');

        const newMessage = {
            fullName,
            email,
            phoneNumber,
            description
        }

        console.log(newMessage);
    }*/

    return (
        <form action="https://formsubmit.co/de1d8c0f7d83925a497fa37bdc81bb45" method="POST">                
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
                
                <div className="invalid-feedback">A name is required.</div>
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
                
                <div className="invalid-feedback">An email is required.</div>
                
                <div className="invalid-feedback">Email is not valid.</div>
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
                
                <div className="invalid-feedback">A phone number is required.</div>
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
                
                <div className="invalid-feedback">A message is required.</div>
            </div>
                            
            <div className="d-none">
                <div className="text-center mb-3">
                    <div 
                        className="fw-bolder"
                    >
                        Form submission successful!
                    </div>
                    
                    To activate this form, sign up at
                    
                    <br />
                    
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
            </div>
                            
            <div className="d-none"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            
            <div className="d-grid"><button className="btn btn-primary btn-xl" type="submit">Submit</button></div>

            <input type="hidden" name="_next" value="http://localhost:5173/" />
            <input type="hidden" name="_captcha" value="false" />
        </form>
    )
}
