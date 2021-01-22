import React from 'react';
import UserCard from '../userCard/userCard';

export default function UserList (props) {
    return (
        <React.Fragment>
            {props.users.map( row => <UserCard key={row.cell} user={row} />)}
        </React.Fragment>
    )
}