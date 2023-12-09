
import React from 'react';

const StatusCounts = ({ tickets }) => {
    const getStatusCount = status => tickets.filter(ticket => ticket.status === status).length;

    return (
        <div className="status-counts">
            <p>Total: {tickets.length}</p>
            <p>In Progress: {getStatusCount('In progress')}</p>
            <p>Todo: {getStatusCount('Todo')}</p>
            <p>Done: {getStatusCount('Done')}</p>
            <p>Backlog: {getStatusCount('Backlog')}</p>
        </div>
    );
};

export default StatusCounts;
