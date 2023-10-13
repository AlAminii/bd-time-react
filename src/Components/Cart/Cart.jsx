/* eslint-disable react/prop-types */

const Cart = ({ setSelectActors, remaining, totalcost }) => {
  console.log(setSelectActors);

  return (
    <div>
      <h1>This is cart</h1>
     <h4>remaining: {remaining}</h4>
     <h4>totalcost: {totalcost}</h4>
      <ul>
        {setSelectActors.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
