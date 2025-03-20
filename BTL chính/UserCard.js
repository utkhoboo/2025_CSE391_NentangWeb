import React from 'react';
import './UserCard.css';

function UserCard(props) {
    return (
        <div className='user-card'>
            <h2>{props.name}</h2>
            <img className="user-image" src={props.image} alt={props.name} />
            <p>{props.role}</p>
        </div>
    );
}
export default UserCard;
