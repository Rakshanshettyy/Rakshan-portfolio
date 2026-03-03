import { motion } from "framer-motion";

export const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starts invisible and 50px lower
      whileInView={{ opacity: 1, y: 0 }} // Animates to visible and original position
      viewport={{ once: true, margin: "-50px" }} // Triggers once when scrolled into view
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth easing
    >
      {children}
    </motion.div>
  );
};