import React, { Component } from 'react';
import PageStructure from '../PageStructure';

const content='placeholder';

class MatingReproduction extends Component {
  constructor(props){
    super(props);
    this.state = {
        matingInfo:[],
    }
}

  componentDidMount(){
    fetch('http://localhost:4000/panda')
        .then(results => {
            return results.json();
        }).then(data => {
        console.log(data.Mating);
        this.setState({matingInfo:data.Mating});
    }).catch( err => {console.log(err);});
  }

  render() {
    var matingContent = (
      <div>
        <p>Gestation: {this.state.matingInfo.Gestation}</p><br/>
        <p>Offspring: {this.state.matingInfo.Offspring} </p><br/>
        <p>Parenting: {this.state.matingInfo.Parenting}</p><br/>
        <p>Other:
          {/* <ul>
            <li>{this.state.matingInfo.Other.map()}</li>
          </ul> */}
        </p>


      </div>
    );
      return (
        <div className="App">
        <PageStructure
          title='Mating and Reproduction'
          content={matingContent}/>
      </div>
      );
   }
}
export default MatingReproduction;

