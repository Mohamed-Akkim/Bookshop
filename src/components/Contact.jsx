import React from 'react';
import './Contact.css';

const Contact = () => {
    const Submit = () =>{
        alert("Thank You For Your Response")
        
    }


  return (
    <div className='body'>
      <div className="container">
        <div className="form-container">
          <div className="left-container">
            <div className="left-inner-container">
              <h2>Let's Chat</h2>
              <p>Whether you have a question, want to start a project or simply want to connect.</p>
              <br />
              <p>Feel free to send me a message in the contact form</p>
            </div>
          </div>
          <div className="right-container">
            <div className="right-inner-container">
              <form action="/" onSubmit={Submit} >
                <h2 className="lg-view">Contact</h2>
                <h2 className="sm-view">Let's Chat</h2>
                <p>* Required</p>
                <input type="text" placeholder="Name *" required />
                <input type="email" placeholder="Email *" required/>
                <input type="phone" placeholder="Phone" required/>
                <textarea rows="4" placeholder="Message" required></textarea>
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
