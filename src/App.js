import React from 'react';

// import components
import Navbar from "./components/navbar/navbar"
import Layout from "./components/Layout/Layout";
import Contribution from "./components/Contribution/Contribution";


const App = () => {

  return(
    <div className="App">
        <Navbar />
        <Layout >
          <Contribution />
        </Layout >
    </div>
  );
};

export default App;
