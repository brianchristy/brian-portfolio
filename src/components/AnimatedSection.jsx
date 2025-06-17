import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reusable section wrapper that animates its children
 * when the section enters/leaves the viewport. It gives
 * a smooth fade & slide-up effect that makes the page
 * feel more interactive while scrolling.
 */
const AnimatedSection = ({ children, className = '', id, variant = 'slideUp', stagger = false, from = 'left' }) => {
  const prefersReducedMotion = useReducedMotion();

  // Determine offset based on variant / direction
  const horizontalOffset = from === 'right' ? 120 : -120;

  const variants = {
    slideUp: {
      hidden: { opacity: 0, y: 60, scale: 0.95 },
      show: { opacity: 1, y: 0, scale: 1 }
    },
    slideSide: {
      hidden: { opacity: 0, x: horizontalOffset, scale: 0.95 },
      show: { opacity: 1, x: 0, scale: 1 }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      show: { opacity: 1, scale: 1 }
    }
  };

  const chosen = prefersReducedMotion ? {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  } : variants[variant] || variants.slideUp;
  const offset = from === 'right' ? 100 : -100;
  return (
    <motion.section
      variants={chosen}
      initial="hidden"
      whileInView="show"
      id={id}
      className={className}
      
      
      viewport={{ once: false, amount: 0.25 }}
      transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.25 }}
      
    >
      {stagger ? (
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } } }}
        >
          {React.Children.map(children, (child, idx) => (
            <motion.div key={idx} variants={{ hidden: {}, show: {} }}>
              {child}
            </motion.div>
          ))}
        </motion.div>
      ) : (
        children
      )}
    </motion.section>
  );
};

export default AnimatedSection;
