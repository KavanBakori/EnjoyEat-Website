import React, { useState, useEffect } from 'react'
import './faq.css'; // Import your SCSS file
import AOS from 'aos';


const FaqItem = ({ title, content, isOpen, onClick, index }) => {
    return (
        <div className={`faq-accordion-item faq-accordion-item-${index}`}>
            <button
                onClick={onClick}
                aria-expanded={isOpen ? 'true' : 'false'}
                id={`faq-accordion-button-${index}`}
            >
                <span className={`faq-accordion-title-${index}`}>{title}</span>
                <span className={`faq-icon faq-icon-${index}`} aria-hidden="true"></span>
            </button>
            <div className={`faq-accordion-content-${index}`} style={{  maxHeight: isOpen ? '9em' : '0', opacity: isOpen ? 1 : 0 }}>
                <p style={{padding:'20px',textAlign:'justify'}}>{content}</p>
            </div>
        </div>
    );
};


const FAQ = () => {

    useEffect(() => {
        AOS.init({
          // Your configuration options here
          // duration: 1000,
          offset: 70,
        });
      }, []);


    const [activeIndex, setActiveIndex] = useState(null);
    const faqData = [
        {
            title: "What measures do you take to ensure the quality of your food?",
            content: "At our Restaurant, we prioritize food quality above all else. Our chefs use fresh, locally-sourced ingredients and follow strict quality control procedures. We maintain high hygiene standards, conduct regular kitchen inspections, and strive to provide a memorable dining experience.",
        },
        {
            title: "How do you handle special dietary requirements or allergies?",
            content: "We take dietary requirements and allergies seriously. Please inform our staff of any dietary restrictions or allergies when placing your order, and we will do our best to accommodate your needs. Our chefs and servers are trained to address these concerns safely.",
        },
        {
            title: "What can I expect in terms of service quality?",
            content: "Our dedicated staff is committed to providing you with exceptional service. We focus on hospitality, attentiveness, and ensuring your overall satisfaction. If you have any feedback or need assistance during your visit, please don't hesitate to ask any team member.",
        },
        {
            title: "How does your queue management system work, and how can I avoid waiting in a long line?",
            content: "Our queue management system is designed to make your visit more convenient. To avoid long lines, we recommend using our web, where you can make reservations, place orders in advance, and check wait times. Additionally, we have designated seating areas for guests who have made reservations, helping you bypass the queue.",
        },
        {
            title: "How do I know if a restaurant has good food quality?",
            content: "Look for online reviews, ratings, and recommendations from friends or family. A well-maintained restaurant with a diverse menu and fresh ingredients is usually a good sign of food quality.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="faq-container" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-accordion">
                {faqData.map((item, index) => (
                    <FaqItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={index === activeIndex}
                        onClick={() => toggleAccordion(index)}
                        index={index + 1}
                    />
                ))}
                <br />
            </div>
        </div>
    );
};

export default FAQ;
