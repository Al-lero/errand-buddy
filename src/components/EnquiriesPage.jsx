import { useState } from 'react';
import './Style/Enquiry.css'
const Enquiry = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enquiry submitted successfully!');
  };

  return (
      <section id="enquiries" className="enquiry-container">
        <h2>Enquiries</h2>
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
          />
          <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
          <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
          />
          <button type="submit">Submit Enquiry</button>
        </form>
      </section>
  );
};

export default Enquiry;
