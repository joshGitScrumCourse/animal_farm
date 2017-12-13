import React, { Component } from 'react';
import PageStructure from '../PageStructure';
import Carousel from '../Carousel';
import LoadingAnimation from '../LoadingAnimation';

class Pictures extends Component {

    constructor(props){
        super(props);
        this.state = {
            pictures:[],
            loading: true
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/Panda')
            .then(results => {
                return results.json();
            }).then(data => {
            console.log(data);
            this.setState({pictures:data.Images, loading:false});
        }).catch( e => {console.log(e); this.setState({loading:false})});
    }

   render() {

       const loading =  <LoadingAnimation />;
       let content = loading;
       if(!this.state.loading){
           content =  (<div><Carousel images={this.state.pictures} />  <div style={{display:"flex", justifyContent: "center", alignItems:"center", marginTop:'0.25em'}}> Please send additional images to: test@example.com!</div></div>);

       }

      return (
        <div className="App">
        <PageStructure
          title='The Panda Photos'
          content={content}/>
      </div>
      );
   }
}
export default Pictures;

