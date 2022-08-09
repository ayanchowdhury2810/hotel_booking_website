import React from 'react';
import Featured from '../../Components/Featured';
import FeaturedProperties from '../../Components/FeaturedProperties';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import MailList from '../../Components/MailList';
import Navbar from '../../Components/Navbar';
import PropertyList from '../../Components/PropertyList';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle"> Browse by property type </h1>
        <PropertyList />
        <h1 className="homeTitle"> Home guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
