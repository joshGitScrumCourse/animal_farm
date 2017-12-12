import React, { Component } from 'react';
import PageStructure from '../PageStructure';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Carousel from '../Carousel';

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
            this.setState({pictures:data, loading:false});
        }).catch( e => {console.log(e); this.setState({loading:false})});
    }

   render() {

       const loading = (<RefreshIndicator
           size={100} left={0} top={-50} status="loading" style={{marginLeft: '0', marginTop: '25vh', display: 'inline-block',
           position: 'relative'}}
       />);
       let content = loading;
       if(!this.state.loading){
           content =  (<div><Carousel images={this.state.pictures} />  <div style={{display:"flex", justifyContent: "center", alignItems:"center"}}> Please send additional images to: test@example.com!</div></div>);

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

