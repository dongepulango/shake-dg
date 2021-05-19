import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
//store
import store from './redux/store';
//routes
import routes from './routes';
//styles
import styled, { createGlobalStyle } from 'styled-components';
import reset from './components/styles/Reset';
import typography from './components/styles/Typography';
//components
import Sidebar from './components/ui/Sidebar';
import Layout from './components/ui/Layout';
//image
import icon from './assets/images/bb-icon.png';
//framer-motion
import { AnimatePresence } from 'framer-motion';

//Reset & Default Styles
const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
`;

const AppWrap = styled.section`
  position: relative;
  min-height: 100vh;
  padding-left: 64px;
`;

render(
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <AppWrap>
        <Sidebar icon={icon} />
        <Layout>
          <AnimatePresence exitBeforeEnter>
            {routes}
          </AnimatePresence>
        </Layout>
      </AppWrap>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);

if (module.hot) module.hot.accept();
