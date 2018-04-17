import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpened: false
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer() {
        this.setState({ drawerOpened: !this.state.drawerOpened });
    }

    render() {
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton color="inherit" onClick={this.toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        React Books App
                    </Typography>
                </Toolbar>
                <Drawer open={this.state.drawerOpened} onClose={this.toggleDrawer}>
                    <div
                        role="button"
                        onClick={this.toggleDrawer}
                        onKeyDown={this.toggleDrawer}>
                        <List>
                            <ListItem button>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Search" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Recommended" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Bookshelves" />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </AppBar>
        )
    }
}

export default Header;