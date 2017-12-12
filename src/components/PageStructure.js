import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height: "89vh",
    paper : {
        height: '74vh',
        width:'90vw',
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
    