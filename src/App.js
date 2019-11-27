import React from 'react';
import {connect} from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  
  return (
    <div className="App">
      <h2 className="title">Car Sales</h2>
      <p className="para">To calculate total cost, add the features the customer is interested in to the base model.</p>
    <div className="boxes">
      <div className="box">
        
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total /> 
      </div>
    </div>
    </div>
  );
};


export default connect()(App);
