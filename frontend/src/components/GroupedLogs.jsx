import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import '../css/GroupedLogs.css';

const GroupedLogs = ({ logs }) => {
    const [groupedLogs, setGroupedLogs] = React.useState({});
    const [openLogGroupIndex, setOpenLogGroupIndex] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(() => {
        const groupByDate = logs.reduce((acc, log) => {
            const date = new Date(log.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(log);
            return acc;
        }, {});
        setGroupedLogs(groupByDate);
    }, [logs]);

    const handleLogGroupClick = (index) => {
        setOpenLogGroupIndex(openLogGroupIndex === index ? null : index);
    }

    const editLog = (id) => {
        console.log('edit log', id);
        navigate(`/edit/${id}`);
    }

    return (
        <div className="group-by-day">
            {Object.keys(groupedLogs).map((date, index) => (
                <div key={index} className="log-group">
                    <div 
                        className="date"
                        onClick={() => handleLogGroupClick(index)}
                    >
                        <h2>
                            {date}

                        </h2>
                        <span><hr /></span>
                    </div>
                    <div 
                    className="logs"
                    style={{
                        display: openLogGroupIndex === index ? 'block' : 'none'
                    }}
                    >
                        {groupedLogs[date].map((log, index) => (
                            <div 
                            key={index} 
                            id={log.id} 
                            className="log-entry"
                            onClick={()=>editLog(log.id)}>
                                <h4>{log.title}</h4>
                            </div>
                            
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GroupedLogs;