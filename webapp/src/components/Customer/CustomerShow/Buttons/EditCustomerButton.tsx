import React, { FC } from 'react';

const EditCustomerButton: FC = () => {
  const handleClick = () => {
    // TODO
    console.log('=============>', 'edit customer');
  };

  return (
    <span className="buttons">
      <button disabled type="button" className="btn btn-primary" onClick={handleClick}>
        Edit Customer
      </button>
    </span>
  );
};

export default EditCustomerButton;
