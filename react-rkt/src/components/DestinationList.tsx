import { useState } from "react";
import { useDeleteDestinationMutation, useGetAllDestinationsQuery, useUpdateDestinationMutation } from "../api/destinationAPI";


const DestinationList = () => {
    const { data, isLoading, isSuccess, isError, error } = useGetAllDestinationsQuery();
    const [deleteDestinationMutation, resultobjDel] = useDeleteDestinationMutation();
    const [updateDestinationMutation, resultobjUpd] = useUpdateDestinationMutation();

    const [btnText, setBtnText] = useState("Edit");
    const [editStatus, setEditStatus] = useState(false);
    const [editData, setEditData] = useState({ city: '', country: '' });

    let content;

    const deleteDestination = (destinationId) => {
        deleteDestinationMutation({ id: destinationId });
    }

    const handleEdit = destination => {
        if ("Edit" === btnText) {
            setBtnText("Update");
            setEditStatus(true);
            setEditData({ city: destination.city, country: destination.country });
        } else if ("Update" === btnText) {
            updateDestinationMutation({... editData, id: destination.id});
            setBtnText("Edit");
            setEditStatus(false);
        }
    }



    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isError) {
        content = <p>{error}</p>
    } else if (isSuccess) {
        content = data.map(d => {
            return (
                <div className="row py-1 border-top" key={d.id}>
                    {!editStatus && <div className="col-4 offset-1">
                        {d.city}, {d.country}
                    </div>}
                    {editStatus && <div className="col-4 offset-1">
                        <input value={editData.city} onChange={(e) => setEditData({... editData, city: e.target.value})} /> 
                        <input value={editData.country} onChange={(e) => setEditData({... editData, country: e.target.value})} />
                    </div>}
                    <div className="col-2 text-info">{d.daysNeeded} days</div>
                    <div className="col-2">
                        <button className="btn form-control btn-danger" onClick={() => deleteDestination(d.id)}>Delete</button>
                    </div>
                    <div className="col-2">
                        <button className="btn form-control btn-primary" onClick={() => handleEdit(d)}>{btnText}</button>
                    </div>
                </div>
            )
        });
    }


    return (
        <div>
            {content}
        </div>
    )
}

export default DestinationList;