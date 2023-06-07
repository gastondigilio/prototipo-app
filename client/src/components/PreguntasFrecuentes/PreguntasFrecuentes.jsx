import React, { useState } from 'react';
import preguntasFrecuentes from './PreguntasFrecuentes.module.css';

const PreguntasFrecuentes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  

  const faqData = [
    {
      question: '¿Pregunta 1?',
      answer: 'Respuesta 1',
    },
    {
      question: '¿Pregunta 2?',
      answer: 'Respuesta 2',
    },
    {
      question: '¿Pregunta 3?',
      answer: 'Respuesta 3',
    },
  ];

  return (
    <div className={preguntasFrecuentes.faqContainer}>
      <h2 className={preguntasFrecuentes.faqTitle}>Preguntas frecuentes</h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`${preguntasFrecuentes.faqItem} ${activeIndex === index ? preguntasFrecuentes.active : ''}`}
          onClick={() => handleClick(index)}
        >
          <div className={preguntasFrecuentes.question}>{faq.question}</div>
          {activeIndex === index && <div className={preguntasFrecuentes.answer}>{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default PreguntasFrecuentes;
