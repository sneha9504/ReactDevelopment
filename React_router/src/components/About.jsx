import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        We are a passionate team of developers, designers, and strategists dedicated to building modern digital experiences.
        With a strong focus on quality and innovation, we help businesses grow by providing tailored solutions in web development,
        branding, and marketing.
      </p>

      <div>
        <Link to="/about/mission">
          <h3>Our Mission</h3>
          <p>
            To empower businesses through technology and creative solutions that drive real results.
          </p>
        </Link>

        <div>
          <h3>Why Choose Us</h3>
          <p>
            We combine experience, innovation, and attention to detail to deliver high-impact results tailored to your goals.
          </p>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default About;
