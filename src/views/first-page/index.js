import React, { Component } from "react";
import ACTIONS from "./first-page-action";
import { connect } from "react-redux";
import {
  withStyles,
  Grid,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  primary: {
      backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});

const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#e60014'
        }
      }
    },
  )

class FirstPage extends Component {
  state = {};

  render() {

    return (
        <MuiThemeProvider theme={theme}>
            <div>
        <div>
          <Grid item container justify="space-evenly" alignItems="center">
          <Button onClick={this.props.showText} color="primary" variant="contained">mostra texto</Button>
          </Grid>
        </div>
      </div>
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    showText: () => dispatch(ACTIONS.showText())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FirstPage));