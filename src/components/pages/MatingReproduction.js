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

class MatingReproduction extends Component {
  constructor(props){
    super(props);
    this.state = {
        matingInfo:null,
        loading: true
    }
}

  componentDidMount(){
    fetch('http://localhost:4000/panda')
        .then(results => {
            return results.json();
        }).then(data => {
        console.log(data.Mating);
        this.setState({matingInfo:data.Mating, loading:false});
    }).catch( err => {console.log(err); this.setState({loading:false})});
  }

  render() {
      const matingInfo = this.state.matingInfo;
      let matingContent = <LoadingAnimation />;

      if(!this.state.loading && matingInfo) {
          matingContent = (
              <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
              <Table style={{marginTop: '1em', width: "75vw", marginBottom: "1em"}} selectable={false}>
                  <TableBody displayRowCheckbox={false}>
                      <TableRow>
                          <TableRowColumn>Gestation</TableRowColumn>
                          <TableRowColumn style={{
                              whiteSpace: 'normal',
                              wordWrap: 'break-word'
                          }}>{matingInfo.Gestation}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>Offspring</TableRowColumn>
                          <TableRowColumn style={{
                              whiteSpace: 'normal',
                              wordWrap: 'break-word'
                          }}>{matingInfo.Offspring}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>Parenting</TableRowColumn>
                          <TableRowColumn style={{
                              whiteSpace: 'normal',
                              wordWrap: 'break-word'
                          }}>{matingInfo.Parenting}</TableRowColumn>
                      </TableRow>
                  </TableBody>
              </Table>
                  <Trivia items={matingInfo.Other}/>
              </div>
          );
      }else if(!this.state.loading && !this.state.matingInfo){
          matingContent = <SadPanda text="Uh Oh! Panda doesn't have a mate (Can't Get Mating Information)" />;
      }
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

