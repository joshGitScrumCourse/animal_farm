import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
    position:'absolute',
    padding:'5%',
    top:'5vh',
    paper : {
        padding:'5%',
        'padding-top':'1%',
    }
}

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
    