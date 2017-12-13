import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from './Drawer';
import LightbulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import IconButton from 'material-ui/IconButton';

const styles={  textAlign:'left',
                left:0,top:0
            };


export default class appBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          open: false
        };

        this.toggleAppDrawer = this.toggleAppDrawer.bind(this);
      }

    toggleAppDrawer() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div>
                <AppBar
                    title="The Panda" 
                    style={styles}
                    onLeftIconButtonClick={this.toggleAppDrawer}
                    iconElementRight={<IconButton title="Change Theme"><LightbulbIcon /></IconButton>}
                    onRightIconButtonClick={this.props.changeThemeCallback}
                />
            <Drawer
            isOpen={this.state.open}
            toggleDrawer={this.toggleAppDrawer}/>
            </div>
        )
    };
}
