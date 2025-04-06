import { useState, useRef } from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendAutoReply = async (templateParams) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log('Auto-reply sent successfully');
    } catch (error) {
      console.error('Error sending auto-reply:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    
    // Create a formatted timestamp
    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    // Create template parameters including the time
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: formattedTime
    };
    
    try {
      // Send notification email to you
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', result.text);
      
      // Send auto-reply to the sender
      await sendAutoReply(templateParams);
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FiMail />
              </div>
              <div>
                <h3>Email</h3>
                <p>chamilasenaratne04@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div>
                <h3>Location</h3>
                <p>Kandy, Sri Lanka</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${status === 'sending' ? 'sending' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <p className="success-message">Your message has been sent successfully! A confirmation email has been sent to your inbox.</p>
              )}
              
              {status === 'error' && (
                <p className="error-message">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: var(--primary-color);
          padding: 100px 0;
        }

        .section-subtitle {
          color: var(--text-secondary);
          max-width: 700px;
          margin-bottom: 40px;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 40px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .contact-icon {
          font-size: 24px;
          color: var(--highlight-color);
          min-width: 40px;
          height: 40px;
          background-color: rgba(100, 255, 218, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-item h3 {
          font-size: 18px;
          margin-bottom: 5px;
          color: var(--text-primary);
        }

        .contact-item p {
          color: var(--text-secondary);
        }

        .contact-form-container {
          background-color: var(--secondary-color);
          padding: 30px;
          border-radius: 8px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 16px;
          color: var(--text-primary);
        }

        .form-group input,
        .form-group textarea {
          padding: 12px;
          background-color: var(--primary-color);
          border: 1px solid rgba(136, 146, 176, 0.3);
          border-radius: 4px;
          color: var(--text-primary);
          font-size: 16px;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--highlight-color);
        }

        .submit-btn {
          background-color: transparent;
          border: 1px solid var(--highlight-color);
          color: var(--highlight-color);
          padding: 12px;
          font-size: 16px;
          font-weight: 500;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .submit-btn:hover:not(:disabled) {
          background-color: rgba(100, 255, 218, 0.1);
        }

        .submit-btn.sending {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-message {
          color: var(--highlight-color);
          text-align: center;
          margin-top: 10px;
        }

        .error-message {
          color: #ff6b6b;
          text-align: center;
          margin-top: 10px;
        }

        @media screen and (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;