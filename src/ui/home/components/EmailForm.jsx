
import { useState } from "react";
import { useForm } from "react-hook-form";

const initialState = {
    enviando: false,
    enviado: false,
    mensaje: ''
}


export const EmailForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [alerta, setAlerta] = useState( initialState );

    const { enviado, mensaje, enviando } = alerta;
    
    
    const onSubmit = (data) => {
        //console.log(data);

        setAlerta({
            ...alerta,
            enviando: true
        });

        //Enviando la info a la API
        fetch("https://formsubmit.co/ajax/de1d8c0f7d83925a497fa37bdc81bb45", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            setAlerta({
                enviado: true,
                mensaje: 'Su mensaje se ha enviado con exito. Pronto lo contactaremos',
                enviando: false
            })

            setTimeout(() => {
                setAlerta( initialState )
            }, 3000)
        })
        .catch(error => console.log(error));

        reset();
    }



    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="form-floating mb-3">
                <input 
                    className="form-control" 
                    id="name" 
                    type="text" 
                    {...register("name", {
                        required: true,
                        maxLength: 50
                    })} 
                />
                
                <label htmlform="name">Full name</label>
                
                {/* Mensaje de error */}
                { errors.name?.type === 'required' && <p>El campo Full name es Requerido</p> }
                { errors.name?.type === 'maxLength' && <p>El campo Full name no debe exceder los 50 caracteres</p> }

                {/* Mensaje de error de la plantilla (no funciona) */}
                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>
                            
            <div className="form-floating mb-3">
                <input 
                    className="form-control" 
                    id="email" 
                    type="email" 
                    {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
                    })}
                />
                
                <label htmlform="email">Email address</label>
                
                {/* Mensaje de error */}
                { errors.email?.type === 'required' && <p>El campo Email es Requerido</p> }
                { errors.email?.type === 'pattern' && <p>El formato del Email es incorrecto</p> }

                {/* Mensaje de error de la plantilla (no funciona) */}
                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
            </div>
                            
            <div className="form-floating mb-3">
                <input 
                    className="form-control" 
                    id="phone" 
                    type="tel" 
                    {...register("phone", {
                        required: true,
                        maxLength: 11
                    })}
                />
                
                <label htmlform="phone">Phone number</label>

                {/* Mensaje de error */}
                { errors.phone?.type === 'required' && <p>El campo Numero Telefonico name es Requerido</p> }
                { errors.phone?.type === 'maxLength' && <p>El campo Numero Telefonico no debe exceder los 11 caracteres</p> }

                {/* Mensaje de error de la plantilla (no funciona) */}
                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
            </div>
                            
            <div className="form-floating mb-3">
                <textarea 
                    className="form-control" 
                    id="message" 
                    type="text" 
                    style={{ height: "10rem" }} 
                    {...register("message", {
                        required: true
                    })}
                />
                    
                <label htmlform="message">Message</label>

                {/* Mensaje de error */}
                { errors.message?.type === 'required' && <p>El campo Message es Requerido</p> }

                {/* Mensaje de error de la plantilla (no funciona) */}
                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
            </div>

            {
                (enviado) 
                && (
                    <div  id="submitSuccessMessage">
                        <div className="text-center mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            { mensaje }
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                )
            }              
            
           
            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
           
            <div className="d-grid">
                <button 
                    className={`btn btn-primary btn-xl ${ (enviando) ? 'disabled' : '' }`}
                    id="submitButton" 
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}
