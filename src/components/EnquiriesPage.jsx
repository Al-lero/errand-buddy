import React, { useState } from 'react';  
import './Style/info.css'

const EnquiriesPage = () => {  
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    message: '',  
  });  

  const [submitted, setSubmitted] = useState(false);  
  const [error, setError] = useState('');  

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setFormData((prevData) => ({  
      ...prevData,  
      [name]: value,  
    }));  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    // Basic validation  
    if (!formData.name || !formData.email || !formData.message) {  
      setError('Please fill in all fields.');  
      return;  
    }  
    setError('');  
    console.log('Enquiry Submitted:', formData);  
    setSubmitted(true);  
    
  };  

  return (  
    <div className="enquiries-container">  
      <h2>Submit your Enquiry</h2>  
      {submitted && <p>Thank you for your enquiry! We will get back to you soon.</p>}  
      {error && <p style={{ color: 'red' }}>{error}</p>}  
      <form onSubmit={handleSubmit}>  
        <div>  
          <label htmlFor="name">Name:</label>  
          <input  
            type="text"  
            id="name"  
            name="name"  
            value={formData.name}  
            onChange={handleChange}  
            required  
          />  
        </div>  
        <div>  
          <label htmlFor="email">Email:</label>  
          <input  
            type="email"  
            id="email"  
            name="email"  
            value={formData.email}  
            onChange={handleChange}  
            required  
          />  
        </div>  
        <div>  
          <label htmlFor="message">Message:</label>  
          <textarea  
            id="message"  
            name="message"  
            value={formData.message}  
            onChange={handleChange}  
            required  
          />  
        </div>  
        <button type="submit">Submit</button>  
      </form>  
    </div>  
  );  
};  

export default EnquiriesPage;