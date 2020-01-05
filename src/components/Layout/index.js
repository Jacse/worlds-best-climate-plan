import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import SupportModalProvider from '../../components/SupportModal';

const Layout = ({ children }) => (
  <SupportModalProvider>
    <Menu />
    {children}
    <Footer />
    <script
      key="cookie-bar"
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?tracking=1&thirdparty=1&always=1&scrolling=1"
    ></script>
  </SupportModalProvider>
);

export default Layout;
