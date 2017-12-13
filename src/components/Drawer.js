import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import Subheader from 'material-ui/Subheader';

const styles={  textAlign:'left',
position:'fixed',
left:0,top:0,
div: {
  paddingTop:'10vh',
}
};

export default class AppDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <Drawer open={this.props.isOpen}>
        <AppBar
          title="The Panda" 
          style={styles}
          onLeftIconButtonClick={this.props.toggleDrawer}
        />
        <div style={styles.div}>
            <Subheader>Navigation</Subheader>
            <MenuItem containerElement={<Link to="/" />}onClick={this.props.toggleDrawer}> Home</MenuItem>
            <MenuItem containerElement={<Link to="/pictures" />}onClick={this.props.toggleDrawer}> Pictures </MenuItem>
            <MenuItem containerElement={<Link to="/dietinfo" />}onClick={this.props.toggleDrawer}> Diet Information </MenuItem>
            <MenuItem containerElement={<Link to="/mating" />}onClick={this.props.toggleDrawer}> Mating and Reproduction </MenuItem>
            <MenuItem containerElement={<Link to="/habitat" />}onClick={this.props.toggleDrawer}> Animal Habitat Information </MenuItem>
            <MenuItem containerElement={<Link to="/scientific" />}onClick={this.props.toggleDrawer}> Scientific Info </MenuItem>
            <MenuItem containerElement={<Link to="/behaviour" />}onClick={this.props.toggleDrawer}> Animal Behaviour </MenuItem>
            
        </div>  
        </Drawer>
      </div>
    );
  }
}


