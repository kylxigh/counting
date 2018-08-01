import React, { Component } from 'react';
import Picker from './picker';

export default class App extends Component {
  render() {
    return (
      <div class="grid">
      <h1 class="grid__title">Birthday Countdown</h1>

      <div class= "grid__skew-dark-one-box"></div>
      <div class= "grid__skew-dark-two"></div>
     <div class= "grid__skew-dark-three"></div>

      <div class="grid__skew-light-one"></div>
      <div class="grid__skew-light-two"></div>
      <div class="grid__skew-light-three-box"></div>

      <Picker/>
      </div>
    );
  }
}
