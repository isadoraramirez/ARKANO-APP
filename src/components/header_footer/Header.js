import React, { Component } from 'react';



import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';


class header extends Component {

    state = {
      drawerOpen: false
    }


    toggleDrawer = (value) => {
      this.setState({
        drawerOpen: value
      })
    }


  render() {
    return (
      <div >
         <AppBar
         position="fixed"
         style={{
          backgroundColor: '#1D889E' ,
                    boxShadow: 'none',
                    padding: '10px 0px'
         }}
         >
         
         <Toolbar>
           <div className="header_logo">

           <div className="font_righteous header_logo_venue">e-Ventas</div>
           

           </div>
           
           <IconButton
             aria-label="Menu"
             color="inherit"
             onClick={()=> this.toggleDrawer(true)}
           >
             <MenuIcon/>
           </IconButton>
           

          <SideDrawer
                open={this.state.drawerOpen}
                onClose={(value)=> this.toggleDrawer(value)}
          />

         </Toolbar>
             </AppBar>
      </div>
    );
  }
}

export default header;