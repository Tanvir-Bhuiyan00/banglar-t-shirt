import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
  const aungti = useContext(RingContext)
  return (
    <div>
      <h2>Special</h2>
      <p><small>Ring: {aungti}</small></p>
    </div>
  );
};

export default Special;