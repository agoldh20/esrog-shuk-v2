import React, { FC } from 'react';

const EditCustomerButton: FC = () => {
  const handleCLick = () => {
    // TODO
    console.log('=============>', 'edit customer');
  };

  return (
    <span className="buttons">
      <button disabled type="button" className="btn btn-primary" onClick={handleCLick}>
        Edit Customer
      </button>
    </span>
  );
};

export default EditCustomerButton;
