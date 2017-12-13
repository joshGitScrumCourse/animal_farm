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
            <GridTile key={id}>
              <Card containerStyle={{whiteSpace:"normal",
                  display:"inline-block", width:"30vh", backgroundColor:grey200}}>
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
                padding={4}
                cellHeight={"auto"}
                      style={{
                          display: 'flex',
                          flexWrap: 'nowrap',
                          overflowX: 'auto',
                      width:'80vw',
                      }}
            >
                {this.props.items.map( item => this.mapTriviaCards(item))}
            </GridList>
            </div>
        );
    }
}

export default Trivia;