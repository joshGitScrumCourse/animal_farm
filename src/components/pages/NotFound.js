import React, { Component } from 'react';
import PageStructure from '../PageStructure';
import SadPanda from '../SadPanda';

class NotFound extends Component {

   render() {
      const content = (
          <SadPanda text="Uh Oh! Panda is lost (Page Not Found)"/>
      );

      return (
        <div className="App">
        <PageStructure
          title='404'
          content={content}/>
      </div>
      );
   }
}
export default NotFound;

