import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';

const styles={  textAlign:'left',
position:'fixed',
left:0,top:0,
div: {
  'padding-top':'9vh',
}
}

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
          <MenuItem containerElement={<Link to="/" />}> Home</MenuItem>
          <MenuItem containerElement={<Link to="/pictures" />}> Pictures </MenuItem>
        </div>  
        </Drawer>
      </div>
    );
  }
}


