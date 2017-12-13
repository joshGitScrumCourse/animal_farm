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
    TableHeaderColumn,
} from 'material-ui/Table';

class MatingReproduction extends Component {
  constructor(props){
    super(props);
    this.state = {
        scienceInfo:null,
        loading: true
    }
}



  componentDidMount(){
    fetch('http://localhost:4000/panda')
        .then(results => {
            return results.json();
        }).then(data => {
        this.setState({scienceInfo:data.Species, loading:false});
    }).catch( err => {console.log(err); this.setState({loading:false})});
  }

  render() {
      const scienceInfo = this.state.scienceInfo;
      let scienceContent = <LoadingAnimation />;

      if(!this.state.loading && scienceInfo) {
        scienceContent = (
              <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
              <Table style={{marginTop: '1em', width: "75vw", marginBottom: "1em"}} selectable={false}>
                  <TableBody displayRowCheckbox={false}>
                      <TableRow>
                          <TableRowColumn>Name</TableRowColumn>
                          <TableRowColumn style={{
                              whiteSpace: 'normal',
                              wordWrap: 'break-word'
                          }}>{scienceInfo.name}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>Classification</TableRowColumn>
                          <TableRowColumn style={{
                              whiteSpace: 'normal',
                              wordWrap: 'break-word'
                          }}>{scienceInfo.classification}</TableRowColumn>
                      </TableRow>
                  </TableBody>
              </Table>
              
              <Table fixedHeader={true} style={{marginTop: '1em', width: "75vw", marginBottom: "1em"}} selectable={false}>
                  <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableHeaderColumn colSpan="2" style={{textAlign: 'center'}}>
                                Subspecies
                        </TableHeaderColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>Species 1</TableRowColumn>
                          <TableRowColumn style={{
                              whiteSpace: 'normal',
                              wordWrap: 'break-word',
                              padding:'2%'
                          }}>{scienceInfo.subspecies.list[0].text}<br/></TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>Species 2</TableRowColumn>
                          <TableRowColumn style={{
                              whiteSpace: 'normal',
                              wordWrap: 'break-word',
                              padding:'2%'
                          }}>{scienceInfo.subspecies.list[1].text}<br/></TableRowColumn>
                      </TableRow>
                  </TableBody>
              </Table>
                  <Trivia title={'Other'} subtitle={scienceInfo.subspecies.intro} items={scienceInfo.subspecies.Other}/>
              </div>
          );
      }else if(!this.state.loading && !this.state.scienceInfo){
          scienceContent = <SadPanda text="Uh Oh! Panda doesn't have a mate (Can't Get Mating Information)" />;
      }
      return (
        <div className="App">
        <PageStructure
          title='Mating and Reproduction'
          content={scienceContent}/>
      </div>
      );
   }
}
export default MatingReproduction;

