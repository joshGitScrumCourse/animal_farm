import React, { Component } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Carousel from './Carousel';
import Paper from 'material-ui/Paper';

export default class Gallery extends Component {

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

    render(){

        const loading = (<RefreshIndicator
            size={100} left={-50} top={-50} status="loading" style={{marginLeft: '50vw', marginTop: '50vh', display: 'inline-block',
            position: 'relative'}}
        />);
        let content = loading;
        if(!this.state.loading){
            content =  (<div><Carousel images={this.state.pictures} />  <div style={{display:"flex", justifyContent: "center", alignItems:"center", height:'32vh'}}> <Paper style={{width:'30vw', height:'10vh', textAlign:'center'}}>Please upload images!</Paper> </div></div>);

        }


        return(
            <div>
                { content }
            </div>
        );

    }

}
