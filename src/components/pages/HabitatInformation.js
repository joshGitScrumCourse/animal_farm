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

class HabitatInformation extends Component {
    constructor(props){
        super(props);
        this.state = {
            habitatInfo:null,
            loading: true
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/panda')
            .then(results => {
                return results.json();
            }).then(data => {
            this.setState({habitatInfo:data.Habitat, loading:false});
        }).catch( err => {console.log(err); this.setState({loading:false})});
    }

    render() {
        const habitatInfo = this.state.habitatInfo;
        let habitatContent = <LoadingAnimation />;

        if(!this.state.loading && habitatInfo) {
            habitatContent = (
                <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
                    <Table style={{marginTop: '1em', width: "75vw", marginBottom: "1em"}} selectable={false}>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>Where on earth is the animal found?</TableRowColumn>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>{habitatInfo.Where}</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>What natural surroundings does the animal need to thrive?</TableRowColumn>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>{habitatInfo.Surroundings}</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>Where does this animal make its home?</TableRowColumn>
                                <TableRowColumn style={{
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word'
                                }}>{habitatInfo.Nesting}</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Trivia items={habitatInfo.Other}/>
                </div>
            );
        }else if(!this.state.loading && !this.state.habitatInfo){
            habitatContent = <SadPanda text="Uh Oh! Panda doesn't have a mate (Can't Get Mating Information)" />;
        }
        return (
            <div className="App">
                <PageStructure
                    title='Animal Habitat Information'
                    content={habitatContent}/>
            </div>
        );
    }
}
export default HabitatInformation;

