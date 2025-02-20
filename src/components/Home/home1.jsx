import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Reusable ScrollSection Component
const ScrollSection = ({ Component, bgColor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      style={{
        background: bgColor,
        padding: "20px",
        marginBottom: "50vh",
        borderRadius: "10px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Component /> {/* Render the passed component */}
    </motion.div>
  );
};

// Different Section Components
const AboutSection = () => (
  <div style={{ fontSize: "24px", color: "#fff" }}>
    <h2>About Us</h2>
    <p>We are a tech company building awesome products.</p>
  </div>
);

const ServicesSection = () => (
  <div style={{ fontSize: "24px", color: "#fff" }}>
    <h2>Our Services</h2>
    <ul>
      <li>Web Development</li>
      <li>Mobile Apps</li>
      <li>Cloud Solutions</li>
    </ul>
  </div>
);

const ContactSection = () => (
  <div style={{ fontSize: "24px", color: "#fff" }}>
    <h2>Contact Us</h2>
    <p>Email: contact@company.com</p>
  </div>
);

// Main Page
export default function Appe() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Scroll Down to See Sections</h1>

      <ScrollSection Component={AboutSection} bgColor="#0077b6" />
      <ScrollSection Component={ServicesSection} bgColor="#0096c7" />
      <ScrollSection Component={ContactSection} bgColor="#00b4d8" />
    </div>
  );
}
