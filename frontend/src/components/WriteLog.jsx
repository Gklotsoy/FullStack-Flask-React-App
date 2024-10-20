import * as React from 'react';
import Navigation from './Navigation';
import LogForm from './LogForm';
import '../css/WriteLog.css';

const WriteLog = () => {

    const [logData, setLogData] = React.useState({
        date: '',
        title: '',
        content: '',
    });

    const handleChange = (e) => {
        setLogData({
            ...logData,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(logData);

        const data = {
            date: logData.date,
            title: logData.title,
            content: logData.content
        }
        const url = "http://127.0.0.1:5000//create_log";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        try {
            const response = await fetch(url, options);
            if(response.ok) {
                alert('Log created successfully');    
                setLogData({
                    date: '',
                    title: '',
                    content: ''
                });
            }
        }
        catch (error) {
            const data = await error.response.json();
            alert(data.message);
        }
    }

    return (
        <div className='write-log'>
            <h1>Write Log</h1>

            <Navigation />

            <LogForm logData={logData} handleChange={handleChange} onSubmit={onSubmit} />

        </div>
    )
}

export default WriteLog;