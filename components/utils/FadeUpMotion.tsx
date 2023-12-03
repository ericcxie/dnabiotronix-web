import { motion } from "framer-motion";
import { ReactNode } from "react";
interface FadeUpMotionDivProps {
  children: ReactNode;
  [key: string]: any;
}

const FadeUpMotionDiv = ({ children, ...props }: FadeUpMotionDivProps) => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={fadeUpVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpMotionDiv;
