import React from 'react';

const Edit = (props) => {
  console.log(props);
  return (
    <div>
      Edit with id {props.match.params.id}
    </div>
  );
};

export default Edit;