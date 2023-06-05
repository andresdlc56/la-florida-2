import { useForm } from "react-hook-form";


//import { useForm } from "../../../hooks/useForm";


export const EmailForm = () => {

    /*const { onInputChange, onResetForm, fullName, email, phoneNumber, description } = useForm({
        fullName: '',
        email: '',
        phoneNumber: '',
        description: ''
    });*/

    
    //const { register, formState: { errors }, handleSubmit } = useForm();
    //const onSubmit = (data) => console.log(data);


    /*
    const onSubmitForm = (e) => {
        e.preventDefault();

        const newMessage = {
            fullName,
            email,
            phoneNumber,
            description
        }

        //Enviando la info a la API
        fetch("https://formsubmit.co/ajax/de1d8c0f7d83925a497fa37bdc81bb45", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newMessage)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
    */

    return (
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="form-floating mb-3">
                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                <label htmlFor="name">Full name</label>
                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>
                            
            <div className="form-floating mb-3">
                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                <label htmlForm="email">Email address</label>
                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
            </div>
                            
            <div className="form-floating mb-3">
                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                <label htmlFor="phone">Phone number</label>
                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
            </div>
                            
            <div className="form-floating mb-3">
                <textarea 
                    className="form-control" 
                    id="message" 
                    type="text" 
                    placeholder="Enter your message here..." 
                    style="height: 10rem" 
                    data-sb-validations="required">
                    </textarea>
                    
                <label htmlFor="message">Message</label>
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
           
            <div className="d-grid"><button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
        </form>
    )
}
