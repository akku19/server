import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Bannersection from './Bannersection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mission from './Mission';
import Collection from './Collection';
import Traits from './Traits';
import Roadmap from './Roadmap';
import Faq from './Faqs';
import Footer from './Footer';
import Contact from './Contact';

ReactDOM.render(
  
  <>
    <Header />
   <Bannersection/>
    <Mission />
   <Traits />
   <Faq />
   <Footer />
   {/* <Contact /> */}
  </>,
  document.getElementById('root')
);


