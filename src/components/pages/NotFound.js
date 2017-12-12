import React, { Component } from 'react';
import PageStructure from '../PageStructure';


class NotFound extends Component {
   render() {
      return (
        <div className="App">
        <PageStructure
          title='404'
          content={'PAGE NOT FOUND'}/>
      </div>
      );
   }
}
export default NotFound;

