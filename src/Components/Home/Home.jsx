import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allactors, setAllactors] = useState([]);
  const [selectActors, setSelectActors] = useState([])
  const [remaining, setRemaining] = useState(0)
  const [totalcost, setTotalCost] = useState(0)

  useEffect(() => {
    // Fetch and set the data when the component mounts
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllactors(data)) // Update the state with the fetched data
      .catch((error) => console.error(error)); // Handle errors
  }, []);
  const handaleSelectActors = (actor) => {
    const isExist = selectActors.find((item) => item.id === actor.id);
  
    if (isExist) {
      alert('This actor is already selected.');
    } else {
      const updatedSelectActors = [...selectActors, actor];
      let totalCost = 0;
  
      updatedSelectActors.forEach((item) => {
        totalCost += item.salary;
      });
  
      if (totalCost > 20000) {
        alert('Total cost exceeds 20000!');
      } else {
        setSelectActors(updatedSelectActors);
        setTotalCost(totalCost);
        setRemaining(20000 - totalCost);
      }
    }
  };
  
  
  return (
    <div className="flex display-flex w-600">
      <div className="w-2/3 flex display-flex flex-wrap gap-5">
        {allactors.map((actor, index) => (
          <div key={index}>
            <div className="w-48 h-76 rounded-xl border-2 border-green-500 p-4">
              <div>
                <img
                  className="rounded-full"
                  src={actor.image}
                  alt={actor.name}
                />
              </div>
              <div className="mt-2">
                <h1 className="text-xl font-semibold">{actor.name}</h1>
                <p className="text-sm text-gray-500">{actor.description}</p>
              </div>
              <div className="flex justify-evenly mt-2">
                <div className="text-sm font-semibold">
                  Salary: {actor.salary}
                </div>
                <div className="text-sm font-semibold">Role: {actor.role}</div>
              </div>
              <div>
                <button onClick={()=>handaleSelectActors(actor)} className="btn btn-info">Select</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/3">
       <Cart setSelectActors={selectActors} remaining={remaining} totalcost={totalcost} ></Cart>
      </div>
    </div>
  );
};

export default Home;
