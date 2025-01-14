import React from 'react';
import {connect} from "react-redux";

const Total = props => {
  console.log(props)
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};
function mapStateToProps(state){
  console.log(state.additionalPrice);
  console.log(state)
  return{
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps)(Total);
