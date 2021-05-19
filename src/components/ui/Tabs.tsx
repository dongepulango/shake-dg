import React from 'react';
//styles
import styled from 'styled-components';
//animations
import { motion, AnimatePresence } from 'framer-motion';

//styled
const TabsWrap = styled.div`
  position: relative;
`;

const TabItemWrap = styled(motion.div)`
  position: relative;
`;

//interfaces
interface TabProps {
  currentTab: number;
  id: number;
};

export const Tabs: React.FC = ({ children }) => {
  return (
    <TabsWrap>
      <AnimatePresence exitBeforeEnter>
        {children}
      </AnimatePresence>
    </TabsWrap>
  );
};

export const TabItem: React.FC<TabProps> = ({ children, currentTab, id }) => {

  if (currentTab === id) {
    return (
      <TabItemWrap
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        {children}
      </TabItemWrap>
    );
  }
  return null;
  
};