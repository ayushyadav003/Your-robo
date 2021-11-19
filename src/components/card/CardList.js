import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      
      {
        robots.map((user,i) =>
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              />
        )
      }
    </div>
  );
}

export default CardList;