import { useState } from "react";
import { useAddDestinationMutation } from "../api/destinationAPI";

function AddDestination() {
  const [addDestinationMutation, resultobj] = useAddDestinationMutation();
  const [destination, setDestination] = useState({ city: '', country: '' })

  const handleAddDestination = formData => {
    addDestinationMutation({ ...destination, id: Math.random() * 100, daysNeeded: parseInt(Math.random() * 10) + 1 });

    setDestination({ city: '', country: '' });
  }


  return (
    <div className="py-4 border">
      <form action={handleAddDestination}>
        <div className="row col-10 offset-1">
          <h4>Enter a new Destination</h4>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city..."
              value={destination.city}
              onChange={(e) => setDestination({ ...destination, city: e.target.value })}
            />
          </div>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter country..."
              value={destination.country}
              onChange={(e) => setDestination({ ...destination, country: e.target.value })}
            />
          </div>
          <div className="col-2 p-1">
            <button className="btn btn-success form-control">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;