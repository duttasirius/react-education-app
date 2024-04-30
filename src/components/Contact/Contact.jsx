import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cde9bf9a-db78-4278-9751-a9e85b020a97");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (res.success) {
        console.log("Success", res)
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem deleniti, quibusdam porro blanditiis vitae aut quos minima, ea praesentium quasi perspiciatis officiis quod ipsa exercitationem. Quia neque doloribus voluptatum!</p>
        <ul>
            <li> <img src={mail_icon} alt="" />    contac@dutta.com</li>
            <li> <img src={phone_icon} alt="" />+7453789072</li>
            <li> <img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br />MA 02139, USA</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>
                Your name
            </label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your messages here</label>
            <textarea name="" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'  >Submit now <img src={white_arrow} alt="" /></button>
            <span>{result}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact
