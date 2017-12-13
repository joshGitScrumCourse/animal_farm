/**
 * Created by Joshua on 12/12/2017.
 */
import React, { Component } from 'react';

import GridList, {GridTile} from 'material-ui/GridList';
import {Card, CardText} from 'material-ui/Card';
import { grey200 } from 'material-ui/styles/colors';
class Trivia extends Component {

    mapTriviaCards({id, trivia}){
        return(
            <GridTile>
              <Card key={id} containerStyle={{whiteSpace:"normal",
                  display:"inline-block", width:"25vh", height:"21vh", backgroundColor:grey200}}>
              <CardText color="black">
                  {trivia}
              </CardText>
              </Card>
            </GridTile>
        );
    }

    render(){
        return(
            <div>
                <h4>Trivia</h4>
            <GridList
                cellHeight={"auto"}
                      style={{
                          display: 'flex',
                          flexWrap: 'nowrap',
                          overflowX: 'auto',
                      width:'80vw'}}
            >
                {this.props.items.map( item => this.mapTriviaCards(item))}
            </GridList>
            </div>
        );
    }
}

export default Trivia;