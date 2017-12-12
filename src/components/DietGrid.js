/**
 * Created by Joshua on 12/12/2017.
 */
import React, { Component } from 'react';
import GridList, { GridTile } from 'material-ui/GridList';

import Subheader from 'material-ui/Subheader';

class DietGrid extends Component {

    mapFoodToGridTile(foodItem){
        return(
            <GridTile
                key={foodItem.id}
                title={foodItem.name}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
                <img src={foodItem.image} />
            </GridTile>
        );
    }

    render(){

        const empty = this.mapFoodToGridTile({ id:0, title:"Uh oh :(", img:"https://fsb.zobj.net/crop.php?r=HCqYv5liBeEW3qNR4yZ-aNiieLMLIo9Zta05orSvPGJITQ7j5noFX0tnj7RYIxkx4w8725XBac8SYvelgT964APfBXiKiLz7e9uy0tmS-slkgGhmya4z08JE7XrAMpUlMvvS-0-u7d7yGDxox-eMnjElaJqBHuCbvYs8Mg" });

        return(
            <div style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
            <GridList
                cellHeight={180}
                style={{    display: 'flex',
                    flexWrap: 'nowrap',
                    overflowX: 'auto'}}
            >
                <Subheader>Food</Subheader>
                { this.props.food.length > 0 ? this.props.food.map( f => this.mapFoodToGridTile(f) ) : [empty]}
            </GridList>
            </div>
        );
    }
}

export default DietGrid;