import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    margin:'1em',
    paper : {
        width:'90vw',
        paddingTop:'0.2em',
        paddingBottom:'0.5em'
    }
};

export default class appBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return (
            <div style={styles}>
                <Paper style={styles.paper}>
                <h1> {this.props.title} </h1>
                {this.props.content}
                </Paper>    
            </div>
        )
    };
}
    