// KanbanBoard.jsx
import React from 'react';
import TicketColumn from './TicketColumn';
// import './KanbanBoard.css';g

const KanbanBoard = ({ tickets, users, groupingOption, sortOption }) => {
    const groupTickets = () => {
        if (groupingOption === 'status') {
            const uniqueStatuses = [...new Set(tickets.map(ticket => ticket.status))];
            return uniqueStatuses.map(status => ({
                title: status,
                tickets: tickets.filter(ticket => ticket.status === status),
            }));
        } else if (groupingOption === 'priority') {
            const sortedPriorities = [4, 3, 2, 1, 0].map(priority => ({
                title: priority,
                tickets: tickets.filter(ticket => ticket.priority === priority),
            }));
            return sortedPriorities;
        } else {
            // Default to 'userId' grouping if no valid option is selected or if 'userId' is selected
            const uniqueUserIds = [...new Set(tickets.map(ticket => ticket.userId))];
            return uniqueUserIds.map(userId => ({
                title: userId,
                tickets: tickets.filter(ticket => ticket.userId === userId),
            }));
        }
    };

    const sortedColumns = groupTickets();

    return (
        <div className="kanban-board">
            {sortedColumns.map(column => (
                <TicketColumn
                    key={column.title}
                    title={column.title}
                    tickets={column.tickets}
                    groupingOption={groupingOption}
                    users={users}
                />
            ))}
        </div>
    );
};

export default KanbanBoard;
