import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid } from '@material-ui/core'; 

import Posts from '../components/Posts/Posts'; 
import Form from '../components/Form/Form'; 
import useStyles from './styles'; 

import { useDispatch } from 'react-redux'; 

import { getPosts } from '../actions/posts'; 

const Home = () => {
    const classes = useStyles(); 
    const dispatch = useDispatch(); 
  
    const [currentId, setCurrentId] = useState(null); 
  
    useEffect(() => {
      dispatch(getPosts()); 
    }, [currentId, dispatch]); 

  return (
    <Grow in>
        <Container>
        <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
        </Grid>
        </Container>
    </Grow>
  )
}

export default Home