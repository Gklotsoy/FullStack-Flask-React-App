import * as React from 'react';
import "../css/LogForm.css";

const LogForm = ({ logData, handleChange, onSubmit }) => {

    return (
        <div className="log-form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    name="date"
                    value={logData.date}
                    onChange={handleChange}
    
                />
            </div>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={logData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    value={logData.content}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default LogForm;