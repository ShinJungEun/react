import React from 'react';

export default class Task extends React.Component {
    render() {
        return (
            <div className='App'>
                <KanbanBoard  cards={ data } />
            </div>
        );
    }
}