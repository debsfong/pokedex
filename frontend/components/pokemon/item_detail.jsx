import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <section>
      <h2>Item: {item.name}</h2>
      <ul>
        <li>Happiness: {item.happiness}</li>
        <li>Price: {item.price}</li>
      </ul>
    </section>
  );
};

export default ItemDetail;
