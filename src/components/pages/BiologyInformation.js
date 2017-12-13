/**
 * Created by Joshua on 13/12/2017.
 */
import React, { Component } from 'react';
import PageStructure from '../PageStructure';

import LoadingAnimation from '../LoadingAnimation';
import SadPanda from '../SadPanda';
import Trivia from '../Trivia';

import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class BiologyInformation extends Component {
    constructor(props){
        super(props);
        this.state = {
            biologyInfo:null,
            loading: true
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/panda')
            .then(results => {
                return results.json();
            }).then(data => {
            this.setState({biologyInfo:data.Biology, loading:false});
        }).catch( err => {console.log(err); this.setState({loading:false})});
    }

    render() {
        const biologyInfo = this.state.biologyInfo;
        let biologyContent = <LoadingAnimation />;

        if(!this.state.loading && biologyInfo) {
            biologyContent = (
                <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
                    <Table style={{marginTop: '1em', width: "75vw", marginBottom: "1em"}} selectable={false}>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>Size</TableRowColumn>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>{biologyInfo.Size}</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>Characteristics</TableRowColumn>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>{biologyInfo.Characteristics}</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>Breathing</TableRowColumn>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>{biologyInfo.Breathing}</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>Lifespan</TableRowColumn>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>{biologyInfo.Lifespan}</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Trivia items={biologyInfo.Other}/>
                </div>
            );
        }else if(!this.state.loading && !this.state.biologyInfo){
            biologyContent = <SadPanda text="Uh Oh! Panda doesn't have a physical or chemical structure  (Can't Get Anatomy and Biology Information)" />;
        }
        return (
            <div className="App">
                <PageStructure
                    title='Anatomy and Biology'
                    content={biologyContent}/>
            </div>
        );
    }
}
export default BiologyInformation;

