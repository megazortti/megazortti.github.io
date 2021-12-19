import logo from '../logo.svg';
import '../App.css';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/InputLabel';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import {Box, TextField, Typography, Link, Avatar} from '@mui/material';
import Collapse from '@mui/material/Collapse';
// import Todolist from './todo/todo';
import Axios from 'axios'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { typography } from '@mui/system';

export default function Header(){
    return(
        <>
            <div style={{position: 'fixed',width: '100%', top: 0, zIndex: 999999999}}>
                <div id='header' style={{display: 'flex', backgroundColor: 'black', justifyContent: 'space-between', height: '50px', alignItems: 'center', width: '100%'}}>
                    <div id="left-side" style={{display: 'flex', flexDirection: 'row', backgroundColor: '',flexGrow: '0.1', justifyContent: 'space-between'}}>
                        <Typography style={{paddingLeft: '20px', color: 'red', paddingRight: '20px'}}>NETFLIX</Typography>
                        <div id="list" style={{display: 'flex'}}>
                            <Typography style={{color: 'white'}}>Início</Typography>
                            <Link id="link" underline="none"  href='www.facebook.com' style={{color: 'white', paddingLeft: '1.5vw'}}>Filmes</Link>
                            <Link underline="none" style={{color: 'white',paddingLeft: '1.5vw'}}>Séries</Link>
                            <Link underline="none" style={{color: 'white',paddingLeft: '1.5vw'}}>Filmes</Link>
                            <Link underline="none" style={{color: 'white',paddingLeft: '1.5vw'}}>Bombando</Link>
                            <Link nowrap={true} underline="none" style={{color: 'white',paddingLeft: '1.5vw'}}>Minha Lista</Link>
                        </div>
                    </div>
                    <div id="right-side" style={{color: 'white'}}>
                        <Avatar sx={{height: '35px', width: '35px', backgroundColor: 'blue', marginRight: '20px'}}>V</Avatar>
                    </div>
                </div>
            </div>
        </>
    );
}