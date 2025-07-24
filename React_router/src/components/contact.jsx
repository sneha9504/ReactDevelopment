import React from 'react';

const Contact = () => {
  return (
    <div>
      <div>
        <h2>Contact Us</h2>
        <p>
          Have questions or want to work with us? Send us a message and we'll get back to you as soon as possible.
        </p>

        <form>
          <div>
            <input
              type="text"
              placeholder="Your Name"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
            />
          </div>

          <div>
            <textarea
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
