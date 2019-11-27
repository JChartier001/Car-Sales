import React from 'react';
import {connect} from "react-redux";
import {removeAddedFeature} from "../actions/index"
import {useDispatch } from "react-redux";


const AddedFeature = props => {
  const dispatch = useDispatch();
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>dispatch(removeAddedFeature(props.feature))}>X</button>
      {props.feature.name}
    </li>
  );
};

function mapStateToProps(state){
  return {
    car: state.car
  }
}

const mapDispatchToProps = {
  removeAddedFeature
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);

