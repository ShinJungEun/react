import React from 'react';
import TaskList from './TaskList';
import PropTypes from 'prop-types';

import styles from './Card.css';

export default class Card extends React.Component {

    constructor(){
        super(...arguments);
        this.state = {
            showDetails: false
        }
    }
    
    onTitleClick(event){
        this.setState({
            showDetails: !this.state.showDetails
        });
    }
    
    render() {


        return (
        <div className={ styles.Card }>
            <div className={ styles[`SideBar--${ this.props.status }`] } />
            <div 
                className={ styles[this.state.showDetails ? 'Title--is-open' : 'Title'] }  
                onClick={this.onTitleClick.bind(this) }>
                { this.props.title }
            </div>

            { !this.state.showDetails ? null : <div className={ styles.Card__Details }>
                                                    {this.props.description}
                                                    <TaskList tasks={this.props.tasks} />
                                                </div> 
            }
        </div>
        );
    }
}

Card.propTypes = {
    // Custom Proptype Validator
    title: (props, propName, component) => (!props[propName] || typeof props[propName] !== 'String' || props[propName].length > 50) ? new Error(`${propName} in ${component} is longer than 50 Characters`) : null,
    description: PropTypes.string.isRequired,
    color: PropTypes.string,
    task: PropTypes.arrayOf(PropTypes.string)

}