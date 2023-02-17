import React from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.models.statesModel()', window.models.statesModel());
  }

  render() {
    return (
      <div>
        Replace this with the code for Project 4, Problem 2
      </div>
    );
  }
}

export default States;