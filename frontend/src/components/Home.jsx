import * as React from 'react';
import Navigation from './Navigation';
import GroupedLogs from './GroupedLogs';
import '../css/Home.css';

const Home = () => {

    const formatDate = (dateString) => {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    const [logs, setLogs] = React.useState([]);

    const fetchLogs = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/logs');
            const data = await response.json();
            setLogs(data.logs);
        }
        catch (error) {
            console.error(error);
        }
    }
    
    React.useEffect(() => {
        fetchLogs();
    }, []);

    return (
        <div className='home'>
            <h1>Home</h1>
            <Navigation />
            <div className="log-dates">
                <GroupedLogs logs={logs} />
            </div>
        </div>
    )
}

export default Home;