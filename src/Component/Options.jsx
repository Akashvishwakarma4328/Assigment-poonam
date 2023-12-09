import React from 'react';

const Options = ({ displayOption, groupingOption, sortOption, onDisplayChange, onGroupingChange, onSortChange }) => {
    return (
        <div className="options">
            <label>
                Display:
                <select onChange={e => onDisplayChange(e.target.value)}>
                    <option value="">Display</option>
                    <option value="grouping">Grouping</option>
                    <option value="ordering">Ordering</option>
                </select>
                
                {displayOption === 'grouping' && (
                    <select onChange={e => onGroupingChange(e.target.value)}>
                        <option value="status">Status</option>
                        <option value="userId">User</option>
                        <option value="priority">Priority</option>
                    </select>
                )}
               
                {displayOption === 'ordering' && (
                    <select onChange={e => onSortChange(e.target.value)}>
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                )}
            </label>
        </div>
    );
};

export default Options;
