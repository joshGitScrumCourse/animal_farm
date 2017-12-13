import React, { Component } from 'react';
import PageStructure from '../PageStructure';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  content = (
      <div style={{paddingLeft:'2%'}}>
        <h3 style={{textAlign:'left'}} >Purpose of site:</h3> <br/>
        We should do everything we can to save the giant panda because we are the ones that have driven it to the edge of extinction. <strong>And because we can.</strong>
          <div> 
            <p><br/>But pandas also play a crucial role in Chinas bamboo forests by spreading seeds and helping the vegetation to grow. So by saving pandas, we will also be saving so much more. We will be helping to protect not only these unique forests but also the wealth of species that live in them. Want to find out more? Navigate through each page for more information.</p>
          </div>
          <div>
            <img style={{height:'38vh', padding:'1vh'}} src="https://i.pinimg.com/originals/19/98/0f/19980f5db03c9fac79cbf0ed8aa06bac.jpg" alt="panda on a rocking toy"/>
          </div>
      </div>
    );

   render() {
      return (
        <div className="App">
        <PageStructure
          title='The Panda'
          content={this.content}/>
      </div>
      );
   }
}
export default Home;

