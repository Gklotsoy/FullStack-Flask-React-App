import * as React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './Navigation';
import LogForm from './LogForm';
import Button from '@mui/material/Button';
import '../css/EditLog.css';

const EditLog = () => {
    const {id} = useParams();
    const [logData, setLogData] = React.useState({
        date: '',
        title: '',
        content: '',
    });


    const fetchLog = async () => {
        const url = `http://127.0.0.1:5000/log/${id}`;
        try {
            const response = await fetch(url);
            if(response.ok) {
                const data = await response.json();
                const log = data.log;
                log.date = new Date(log.date).toISOString().split('T')[0];
                
                setLogData({
                    date: log.date || '',
                    title: log.title || '',
                    content: log.content || '',
                });
            }
        }
        catch (error) {
            const data = await error.response.json();
            alert(data.message);
        }
    };
        
    React.useEffect(()=> {
        fetchLog();
    },[id]);

    const handleChange = (e) => {
        setLogData({
            ...logData,
            [e.target.name]: e.target.value
        });
    }

    const deleteLog = async () => {
        const url = `http://127.0.0.1:5000/delete_log/${id}`;
        const options = {
            method: "DELETE",
        };

        try {
            const response = await fetch(url, options);
            if(response.ok) {
                alert('Log deleted successfully');
                window.location.href = '/home';
            }
        }
        catch (error) {
            const data = await error.response.json();
            alert(data.message);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(logData);

        const data = {
            date: logData.date,
            title: logData.title,
            content: logData.content
        }

        const url = `http://127.0.0.1:5000//update_log/${id}`;
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(url, options);
            if(response.ok) {
                alert('Log updated successfully');
                fetchLog();
            }
        }
        catch (error) {
            const data = await error.response.json();
            alert(data.message);
        }
    };

    return (
        <div className='edit-log'>
            <h1>Edit Log</h1>
            <Navigation />
            <div className="delete-btn">
                <Button 
                    variant="contained" 
                    color="error"
                    onClick={deleteLog}
                >
                    Delete
                </Button>
            </div>
            <LogForm logData={logData} onSubmit={onSubmit} handleChange={handleChange}/>
 
        </div>
    )

}
    
export default EditLog;