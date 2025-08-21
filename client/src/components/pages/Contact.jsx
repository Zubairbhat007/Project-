import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { axiosInstance } from '../../utils/axiosInstance';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // You can update this endpoint as needed
      const res = await axiosInstance.post('/contact/sendMessage', formData);
      if (res.status === 200) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message.');
    }
  };

  return (
    <section className="contact spad">
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-lg-6">
            <div className="contact__info">
              <h4>Contact Information</h4>
              <ul>
                <li><strong>Address:</strong> Srinagar, Jammu & Kashmir, India</li>
                <li><strong>Phone:</strong> +91 98765 43210</li>
                <li><strong>Email:</strong> info@example.com</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="contact__form">
              <h4>Get in Touch</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="site-btn mt-2">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
