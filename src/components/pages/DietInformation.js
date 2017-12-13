/**
 * Created by Joshua on 12/12/2017.
 */
import React, { Component } from 'react';

import PageStructure from '../PageStructure';
import DietGrid from '../DietGrid';
import LoadingAnimation from '../LoadingAnimation';
import SadPanda from '../SadPanda';

import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
export default class DietInformation extends Component {

    constructor(props){
        super(props);
        this.state = {
            dietInfo: null,
            loading: true
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/Panda')
            .then(results => {
                return results.json();
            }).then(data => {
            this.setState({dietInfo:data.Diet, loading:false});
        }).catch( e => {console.log(e); this.setState({loading:false})});
    }

    render(){
        const empty = [];
        const dietInfo = this.state.dietInfo;
        let content = <LoadingAnimation />;

        if(!this.state.loading && dietInfo) {
            content = (
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>

                    <DietGrid food={dietInfo.Resources || empty}/>
                    <Table style={{marginTop: '1em', width: "75vw", marginBottom: "1em"}} selectable={false}>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn>What does it eat?</TableRowColumn>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>{dietInfo.What}</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>How often does it eat?</TableRowColumn>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>{dietInfo.Frequency}</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>How much does it eat?</TableRowColumn>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>{dietInfo.Quantity}</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            );
        }else if(!this.state.loading && !dietInfo){
            content = <SadPanda text="Uh oh! Panda is Hungry (Diet Info Can't be loaded)"/>;
        }

        return(
            <div className="App">
                <PageStructure
                    title='Diet Information'
                    content={content}/>
            </div>
        );
    }
}