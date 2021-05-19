import React from 'react';
//styles
import styled from 'styled-components';
//framer-motion
import { motion } from 'framer-motion';

//styled
const PageMotion = styled(motion.div)``;


const PageFade: React.FC = ({ children }) => {
  return (
    <PageMotion
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        }
      }}
      exit={{ opacity: 0 }}>
      {children}
    </PageMotion>
  );
};

export default PageFade;