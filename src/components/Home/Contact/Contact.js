import React from 'react';
import emailjs from "emailjs-com";
const Contact = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(
            'service_99j376y',
            'template_l6aofdq',
            e.target,
            'user_ceSUy7863dIBCof87WBTS'
            ).then(res=>{
                alert("Email Sent Successfully!");
            }).catch(err=> console.log(err));
            e.target.reset();
    }
    return (
        <div className="container my-5 p-5 w-100 "
>
            {/* style={{
            backgroundImage: `url('https://t3.ftcdn.net/jpg/03/27/51/56/360_F_327515607_Hcps04aaEc7Ki43d1XZPxwcv0ZaIaorh.jpg')`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover', */}
            <div className="row d-flex gx-4">
                <h2 className="text-center">Contact Me</h2>
                <div className="col-lg-7 col-md-12 mt-3 p-4 text-start border-0" >
                   <h4>Send Email</h4>
                   <form onSubmit={sendEmail}>
                       {/* <label>Name</label> */}
                       <input type="text" name="name" className="form-control border-2 border-warning my-3" placeholder="Your Name" />
                       
                       {/* <label>Email</label> */}
                       <input type="email" name="user_email" className="form-control border-2 border-warning my-3" placeholder="Your Email" />
                       
                       {/* <label>Message</label> */}
                       <textarea name="message" rows="4" className="form-control border-2 border-warning my-3" placeholder="Your Message"/>
                       <input type="submit" name="send" className="form-control btn btn-outline-info text-white fw-bold rounded-pill mt-2" />
                   </form>
                </div>
                <div className="col-lg-5 col-md-12 mt-3 p-4 text-start">
                    {/* <img src={login} alt="" className="img-fluid"/> */}
                    <h4 className="fw-bold text-warning mb-4">You can also find me at</h4>
                    <p className=" mt-1"><i className="fas fa-phone-alt text-warning"></i> +8801630857422</p>
                    <p className=""><i className="fas fa-phone-alt text-warning"></i> +8801630857422</p>
                    <p className=""><i className="far fa-envelope text-warning"></i> sanjida.kh023@gmail.com</p>
                    <p className=""><i className="far fa-envelope text-warning"></i> sanjida.kh023@gmail.com</p>
                    <p className=""><i className="far fa-envelope text-warning"></i> sanjida.kh023@gmail.com</p>
                </div>          
            </div>
        </div>
    );
};

export default Contact;