import React from 'react';

const Table = (props) =>{
    return(
        <tr>
            <td>{props.data.Name}</td>
            <td>{props.data.Location}</td>
        </tr>
    );
}

export default Table;