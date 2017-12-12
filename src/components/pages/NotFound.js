import React, { Component } from 'react';
import PageStructure from '../PageStructure';
import Appbar from '../AppBar';


class NotFound extends Component {
   render() {
      return (
        <div className="App">
        <Appbar/>
        <PageStructure
          title='404'
          content={'PAGE NOT FOUND'}/>
      </div>
      );
   }
}
export default NotFound;

