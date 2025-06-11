import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_fe4f3te',    
      'template_9jne6fe',   
      formData,
      'kz3a8LJzHdl0DzeN'     
    ).then(() => {
      setFormData({ name: '', email: '', message: '' });
    }).catch(err => {
      alert('Message sent successfully!');
      console.error(err);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} /><br />
      <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} /><br />
      <textarea name="message" placeholder="Your message" required value={formData.message} onChange={handleChange} /><br />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactUs;
