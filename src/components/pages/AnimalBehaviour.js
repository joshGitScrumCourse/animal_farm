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
        behaviour:null,
        loading: true
    }
}

  componentDidMount(){
    fetch('http://localhost:4000/panda')
        .then(results => {
            return results.json();
        }).then(data => {
        this.setState({behaviour:data.Behaviour, loading:false});
    }).catch( err => {console.log(err); this.setState({loading:false})});
  }

  render() {
      const behaviour = this.state.behaviour;
      let behaviourContent = <LoadingAnimation />;

      if(!this.state.loading && behaviour) {
        behaviourContent = (
              <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
              <Table style={{marginTop: '1em', width: "75vw", marginBottom: "1em"}} selectable={false}>
                  <TableBody displayRowCheckbox={false}>
                      <TableRow>
                          <TableRowColumn>Food</TableRowColumn>
                          <TableRowColumn style={{
                              whiteSpace: 'normal',
                              wordWrap: 'break-word',
                              padding:'2%'
                          }}>{behaviour.Food}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>Protection</TableRowColumn>
                          <TableRowColumn style={{
                              whiteSpace: 'normal',
                              wordWrap: 'break-word',
                              padding:'2%'
                          }}>{behaviour.Protection}</TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>Sleeping</TableRowColumn>
                          <TableRowColumn style={{
                              whiteSpace: 'normal',
                              wordWrap: 'break-word',
                              padding:'2%'
                          }}>{behaviour.Sleeping}</TableRowColumn>
                      </TableRow>
                  </TableBody>
              </Table>
                <Trivia title={'Trivia'} items={behaviour.Other}/>
              </div>
          );
      }else if(!this.state.loading && !this.state.behaviour){
        behaviourContent = <SadPanda text="Uh Oh! The Panda has become extinct :'(  (Can't Get Scientific Information)" />;
      }
      return (
        <div className="App">
        <PageStructure
          title='Mating and Reproduction'
          content={behaviourContent}/>
      </div>
      );
   }
}
export default MatingReproduction;

