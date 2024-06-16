import { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div id='footer'>
        <p> Site done by Neo Ngwenya. ©All rights reserved. {(new Date().getFullYear())}</p>
      </div>
    )
  }
}
