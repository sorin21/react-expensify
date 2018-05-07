import React from 'react';
import {Link} from 'react-router-dom';

// destruct the props
const ExpenseListItem = ({id, description, amount, createdAt, note}) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>{amount} - {createdAt}</p>
      <p>{note}</p>
      {/* <button onClick={() => {
        dispatch(removeExpense({id: id}));
      }}>Remove</button> */}
    </div>
  );
};


export default ExpenseListItem;
