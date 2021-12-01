import { Button} from 'react-bootstrap';
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
                <h2 className="text-center">Contact<span className="text-info"> Me</span></h2>
                <div className="col-lg-7 col-md-12 mt-3 p-4 text-start border-0" >
                   <h4>Send Email</h4>
                   <form onSubmit={sendEmail}>
                       {/* <label>Name</label> */}
                       <input type="text" name="name" className="form-control border-2 border-info bg-dark my-3" placeholder="Your Name" />
                       
                       {/* <label>Email</label> */}
                       <input type="email" name="user_email" className="form-control border-2 border-info bg-dark my-3" placeholder="Your Email" />
                       
                       {/* <label>Message</label> */}
                       <textarea name="message" rows="4" className="form-control border-2 border-info bg-dark my-3" placeholder="Your Message"/>
                       <input type="submit" name="send" className="form-control btn btn-outline-info text-white fw-bold mt-2" />
                   </form>
                </div>
                <div className="col-lg-5 col-md-12 mt-3 p-4 text-start">
                    {/* <img src={login} alt="" className="img-fluid"/> */}
                    <h4 className="fw-bold mb-4">You can also find me at</h4>
                    <p className=" mt-1"><i className="fas fa-home text-info"></i> Rampura, Dhaka</p>
                    <p className=""><i className="fas fa-phone-alt text-info"></i> +8801630857422</p>
                    <p className=""><i className="far fa-envelope text-info"></i> sanjida.kh023@gmail.com</p>
                    <a href="https://www.linkedin.com/in/sanjida-eshrat-7831b11b9/" target="_blank">
                      <Button className='text-white mt-2 mb-3 me-1 btn-sm' variant="outline-info"><i className="fab fa-linkedin "></i> Linkedin </Button>
                    </a>
                    <a href="https://github.com/Sanjida-Eshrat" target="_blank">
                      <Button className='text-white mt-2 mb-3 btn-sm' variant="outline-info"><i className="fab fa-github "></i> Github</Button>
                    </a>
                </div>          
            </div>
        </div>
    );
};

export default Contact;