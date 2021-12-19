import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/InputLabel';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import {Box, TextField, Typography, Link, Avatar} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Todolist from './todo/todo';
import Axios from 'axios'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Notification from '@bit/ahojukka5.bloglist.notification';
import { typography } from '@mui/system';
import Header from './header/header';



function App() {
  const moviesStyle={
    display: 'flex',
    flexFlow: 'wrap',
    marginLeft: '30px '
  }
  const movieStyle={
    marginRight: '10px',
    marginLeft: '10px',
    marginBottom: '10px',
    marginTop: '50px'
    
  }
  return ( 
    <>
        <Header/>
        <Collapse in={1==1}>
          <div id="movies" style={moviesStyle}>
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
            <div id="movie" style={movieStyle}>
              <Skeleton style={{backgroundColor: 'gray',}} variant="text" width={'400px'} height={'35px'} />
              <Skeleton style={{backgroundColor: 'gray',}} variant="rectangular" width={'400px'} height={'200px'} />
            </div>            
          </div>
        </Collapse>
    </>
  );
}

export default App;
