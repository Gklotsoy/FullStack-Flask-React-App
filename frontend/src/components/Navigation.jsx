import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const Navigation = () => {
    
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route);
    }

    return (
        <Box>
            <ButtonGroup variant="text" aria-label="Basic button group">
                <Button onClick={()=>handleClick('/home')}>Home</Button>
                <Button onClick={()=>handleClick('/write')}>Write</Button>
                <Button onClick={()=>handleClick('/')}>Close</Button>
            </ButtonGroup>
        </Box>
    )
}

export default Navigation;