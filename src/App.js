import React from 'react';

// import components
import Navbar from "./components/navbar/navbar"
import Layout from "./components/Layout/Layout";
import Contribution from "./components/Contribution/Contribution";
import ContactData from "./components/ContactData/ContactData";
import Checkout from "./components/Checkout/Checkout";


const App = () => {

  return(
    <div className="App">
        <Navbar />
        <Layout>
          <Contribution />
        </Layout>
        <Layout>
          <ContactData />
        </Layout>
        <Layout >
          <Checkout />
        </Layout >
    </div>
  );
};

export default App;
