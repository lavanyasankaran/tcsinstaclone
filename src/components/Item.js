import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import { Grid } from "@material-ui/core";
//import { useHistory } from "react-router-dom";

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import {  blueGrey } from '@material-ui/core/colors';




import { LazyLoadComponent } from 'react-lazy-load-image-component';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blueGrey[500],
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

 function Item(props) {
   const {list}=props;
    const[data,setData] = useState([]);
    const[sortTypeAsc,setSortTypeAsc]=useState();
    const[sortTypeDesc,setSortTypeDesc] = useState();
    const classes = useStyles();
    useEffect(() => {
      setData(list)
      
    }, [list])
    useEffect(() =>{
        const sortArray = type =>{
          const types={
            likes :'likes',
            timestamp:'timestamp'
          };
          const sortProperty = types[type];
          
          const sorted = [...list].sort((a,b) => b[sortProperty] -a[sortProperty])
          setData(sorted);
        };
        sortArray(sortTypeDesc);
      },[sortTypeDesc])
      useEffect(() =>{
        const sortArray = type =>{
          const types={
            likes :'likes',
            timestamp:'timestamp'
          };
          const sortProperty = types[type];
          
          const sorted = [...list].sort((a,b) => (a[sortProperty] -b[sortProperty]));
          setData(sorted);
        };
        sortArray(sortTypeAsc);
      },[sortTypeAsc])
  //const history = useHistory();
  

  return (
      <div style={{ backgroundColor: "grey" }}>
          <FormControl className={classes.formControl}>
        <Select
          value={(e) => e.target.value}
          onChange={(e) => setSortTypeDesc(e.target.value)}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Desc</em>
          </MenuItem>
          <MenuItem value="likes">likes(max to min)</MenuItem>
          <MenuItem value="timestamp">timestamp(max to min)</MenuItem>
          
        </Select>
        
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          value={(e) => e.target.value}
          onChange={(e) => setSortTypeAsc(e.target.value)}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Asc</em>
          </MenuItem>
          <MenuItem value="likes">likes(min to max)</MenuItem>
          <MenuItem value="timestamp">timestamp(min to max)</MenuItem>
          
        </Select>
        
      </FormControl>
        <Grid item xs={6} lg={12}>
          <Typography align="right" color="textSecondary">
            {" "}
            
          </Typography>
          <Typography
            variant="h3"
            align="right"
          >{`Insta clone`}</Typography>
        </Grid>
        
          <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      {console.log("data",data)}
      {data.map((ro)=>{return(
        <Grid item xs={6} sm={3} key={ro.id}>
    <Card className={classes.root}>
    <CardActionArea
              /*onClick={() => {
                history.push(`/recipes/${ro.id}`);
              }}*/
            >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        
        
      />
      <LazyLoadComponent>
      <CardMedia
        className={classes.media}
        image={ro.Image} 
      />
      </LazyLoadComponent>
      </CardActionArea>
      <CardContent>
      <Grid container>
                <Grid item xs={6}>
                  <Typography align="right" variant="subtitle1">
                    {"Likes  :"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" color="textSecondary">
                    {ro.likes}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
              <Grid item xs={6}>
                  <Typography align="right" variant="subtitle1">
                    {"Timestamp  :"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" color="textSecondary">
                    {ro.timestamp}
                  </Typography>
                </Grid>
              </Grid>
              
      </CardContent>
     
      
    </Card>
    </Grid>
    )})}
    
    </Grid>
    </div>
  );
  
}
export default Item;