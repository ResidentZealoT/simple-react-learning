// the head component to be rendered by main.jsx in the render-target location of main.html

// all components need to import basic packages
import React, { Component } from 'react';
// these are imports for material-ui, they help with the styling of the components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import  Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
// import all child components

// styles defined for components
const styles = {
  appBar: {
    position: 'fixed',
  },
  heroImage: {
    height: 'auto',
    width: '100%',
  },
  // social proof confessions
  imageStyle: {
    width: 150,
    height: 150,
    display: 'table',
    margin: 'auto',
  },
  socialProof: {
    width: 150,
    height: 150,
    margin: 'auto',
    position: 'flex',
    overflow: 'hidden',
  },
  // for offerslider
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'yellow',
  },
};

// data for offers slider
const tilesData = [
  {
    img: 'WebOffer1.jpg',
    title: 'Custom Design',
  },
  {
    img: 'WebOffer2.jpg',
    title: 'Modern Components',
  },
  {
    img: 'WebOffer3.jpg',
    title: 'Targeted Branding',
  },
  {
    img: 'WebOffer4.jpg',
    title: 'Clean and Effective',
  },
  {
    img: 'WebOffer5.png',
    title: 'Personally Influenced',
  },
  {
    img: 'WebOffer6.jpg',
    title: 'Sell your Product',
  },
];

// sets the material ui theme
const muiTheme = getMuiTheme({
});
// component holds all the page informaiton
export default class App extends Component {
// handle state with constructor
  constructor(props) {
    super(props);
    this.state = { examples: [] };
  }
// load data when component starts
  componentWillMount() {
    this.setState({ examples: [{
      _id: 1,
      exampleString: "bla bla",
      exampleFloat: 1,
      exampleStringOptional: "optional text",
    },
  ]});
  }
// render will return() the html of the component
  render() {

// define component parts
const appBarComponent = (
  <AppBar
    title="Client Name"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    showMenuIconButton={false}
    style = {styles.appBar}
    />
);

const heroComponent = (
  <div>
      <img src = "HeroFace.png" style = {styles.heroImage}/>
  </div>
);

const socialProofComponent = (
  <div>
    <div className = "row">
      <div className = "col s4">
        <Paper style = {styles.socialProof} circle = {true} zDepth = {1}>
          <img src = "socialFace1.jpg" style = {styles.imageStyle} />
        </Paper>
      </div>
      <div className = "col s4">
        <Paper style = {styles.socialProof} circle = {true} zDepth = {1}>
          <img src = "socialFace2.jpg" style = {styles.imageStyle} />
        </Paper>
      </div>
      <div className = "col s4">
        <Paper style = {styles.socialProof} circle = {true} zDepth = {1}>
          <img src = "socialFace3.jpg" style = {styles.imageStyle} />
        </Paper>
      </div>
    </div>
  </div>
);

const GridListSlider = (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="yellow" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

    return (
// arange components
      <MuiThemeProvider muiTheme = {muiTheme}>
        <div>
          {appBarComponent}
          <div className = "container">
            <div className = "row">
              {heroComponent}
            </div>
            <div className = "row">
              {GridListSlider}
            </div>
            {socialProofComponent}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
