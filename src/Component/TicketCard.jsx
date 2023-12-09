// TicketCard.jsx
import React from 'react';
import './TicketCard.css';
import Image from '../Assets/user.png';
import InProgress from '../Assets/inprogress.png';
import ToDo from '../Assets/todo.png';
import Backlog from '../Assets/backlog.png';

const TicketCard = ({ ticket, users }) => {
    const user = users.find(user => user.id === ticket.userId) || {};

    return (
        <div className="ticket-card">
            <div className="ticket-details">
                <div className="line">
                    <div className="left-section">
                        <p className="user-name">{ticket.id || 'Unknown User'}</p>
                    </div>
                    <div className="right-section">
                        <img
                            src={Image}
                            alt="Ticket Image"
                            className="ticket-image small"
                        />
                    </div>
                </div>
                <div className="line">
                    <div className="progress-icon">
                        {ticket.status === 'Todo' && <img
                            src={ToDo}
                            alt="Todo"
                            className="icon small"
                        />}
                        {ticket.status === 'Backlog' && <img
                            src={Backlog}
                            alt="Backlog"
                            className="icon small"
                        />}
                        {ticket.status === 'In progress' && <img
                            src={InProgress}
                            alt="In Progress"
                            className="icon small"
                        />}
                    </div>
                    <p className="title">{truncateText(ticket.title, 30)}</p>
                </div>
                <div className="content-section">
                    <p className="tags">{ticket.tag.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

export default TicketCard;
