/**
 * Created by Joshua on 12/12/2017.
 */
import React, { Component } from 'react';

import PageStructure from '../PageStructure';
import DietGrid from '../DietGrid';

const homeContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default class DietInformation extends Component {

    constructor(props){
        super(props);
        this.state = {
            food: [],
            loading: true
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/Panda')
            .then(results => {
                return results.json();
            }).then(data => {
                console.log(data);
            this.setState({food:data.Diet.Resources, loading:false});
        }).catch( e => {console.log(e); this.setState({loading:false})});
    }

    render(){
        return(
            <div className="App">
                <PageStructure
                    title='Diet Information'
                    content={<DietGrid food={this.state.food}/>}/>
            </div>
        );
    }
}