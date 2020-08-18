import React from 'react';
import Navbar from './component/Header';
import MainPage from './component/Mainpage';
import PersonalInfo from './component/personelInfo/personelInfo'
import Repos from './component/Repos'
import ContactPart from './component/Contact'
import Footer from './component/footer'
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <MainPage/>
      <PersonalInfo/>
      <Repos/>
      <ContactPart />
      <Footer />
    </>
  );
}

export default App;
