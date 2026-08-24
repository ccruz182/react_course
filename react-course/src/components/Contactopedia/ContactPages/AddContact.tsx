import { useEffect, useState } from "react";

const AddContact = (props) => {

    const [messageState, setMessageState] = useState({ success: false, error: false });

    const handleForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const contactData = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
        }

        setMessageState(prev => ({ ...prev, success: true }));
        props.addContact(contactData);
    }

    useEffect(() => {
        if (!messageState.success && !messageState.error) return;

        const timer = setTimeout(() => {
            setMessageState({ success: false, error: false });
        }, 3000);

        return () => clearTimeout(timer);
    }, [messageState.error, messageState.success])

    return (
        <div className="border col-12 text-white p-2">
            <form onSubmit={handleForm}>
                <div className="row p-2">
                    <div className="col-12 text-white-50 text-center h5">
                        Add a new Contact
                    </div>
                    <div className="col-12 col-md-4 p-1">
                        <input name='name' placeholder="Name..." className="form-control form-control-sm" />
                    </div>
                    <div className="col-12 col-md-4 p-1">
                        <input name='email' placeholder="Email..." className="form-control form-control-sm" />
                    </div>
                    <div className="col-12 col-md-4 p-1">
                        <input name='phone' placeholder="Phone..." className="form-control form-control-sm" />
                    </div>
                </div>
                {messageState.success && <div className="col-12 text-center text-success">Contact added correctly.</div>}
                {messageState.error && <div className="col-12 text-center text-danger">Error</div>}
                <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-sm form-control">Create</button>
                </div>

                {false && <div className="col-6">
                    <button className="btn btn-danger btn-sm form-control">Cancel</button>
                </div>}
            </form>
        </div>
    );
}
export default AddContact;