import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/cover.css';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { BrowserRouter } from 'react-router-dom';

const Cover = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/home');
    }

    return (
      <div className="cover">
        <div className="intro">
            <h1>My Diary</h1>
            <p>Write your thoughts and ideas here</p>
        </div>
        
        <Fab color="secondary" aria-label="edit" className='button' onClick={handleClick}>
            <EditIcon />
        </Fab>
      </div>
    )
}

export default Cover;