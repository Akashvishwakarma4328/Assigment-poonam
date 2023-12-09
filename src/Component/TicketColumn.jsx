// TicketColumn.jsx
import React from 'react';
import TicketCard from './TicketCard';
import './TicketColumn.css';
import LowPriorityImage from '../Assets/low priority.png';
import HighPriorityImage from '../Assets/high priority.png';
import FullSignalImage from '../Assets/fullSignal.png';
import MediumSignalImage from '../Assets/mediumSignal.png';
import LowSignalImage from '../Assets/lowSignal.png';
import User from '../Assets/user.png';
import todo from '../Assets/todo.png';
import inprogress from '../Assets/inprogress.png';
import backlog from '../Assets/backlog.png';
const TicketColumn = ({ title, tickets, groupingOption, users }) => {
    const getName = () => {
        if (groupingOption === 'priority') {
            const priorityImages = {
                0: { image: LowPriorityImage, label: 'No Priority' },
                1: { image: LowSignalImage, label: 'Low' },
                2: { image: MediumSignalImage, label: 'Medium' },
                3: { image: FullSignalImage, label: 'High' },
                4: { image: HighPriorityImage, label: 'Urgent' },
            };

            const priority = tickets.length > 0 ? tickets[0].priority : null;
            const count = tickets.filter(ticket => ticket.priority === priority).length;

            return (
                <div className="priority-info">
                    {priority !== null && (
                        <>
                            <img
                                className="priority-image"
                                src={priorityImages[priority].image}
                                alt={priorityImages[priority].label}
                            />
                            <span className="priority-label">{priorityImages[priority].label}</span>
                            <span className="priority-count">{count}</span>
                        </>
                    )}
                </div>
            );
        } else if (groupingOption === 'userId') {
            const userId = tickets.length > 0 ? tickets[0].userId : null;
            const user = users.find(user => user.id === userId);
            return (
                <div className="priority-info">
                    <img src={User} className='priority-image'></img>
                    <span className="priority-label">{user ? user.name : 'Unknown User'}</span>
                    <span className="priority-count">{tickets.filter(ticket => ticket.userId === userId).length}</span>
                </div>
            );
        } else if (groupingOption === 'status') {
            const statusImages = {
                'Todo': todo,
                'In progress': inprogress,
                'Backlog': backlog,
               
            };

            const count = tickets.filter(ticket => ticket.status === title).length;

            return (
                <div className="priority-info">
                    {statusImages[title] && (
                        <>
                            <img
                                className="priority-image"
                                src={statusImages[title]}
                                alt={title}
                            />
                            <span className="priority-label">{title + "  "}</span>
                            <span className="priority-count">{count}</span>
                        </>
                    )}
                </div>
            );
        }
    };

    return (
        <div className="ticket-column">
            <ul>
                <h2 className="column-title">
                    {getName()}
                </h2>
                {tickets.map(ticket => (
                    <TicketCard key={ticket.id} ticket={ticket} users={users} groupingOption={groupingOption} />
                ))}
            </ul>
        </div>
    );
};

export default TicketColumn;
