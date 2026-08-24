import Contact from "./Contact";

const GeneralContacts = (props) => {
    return (
        <div
            className="col-12 p-2"
            style={{ borderRadius: "10px", backgroundColor: "#323637" }}
        >
            <div className="text-center text-white-50">General</div>
            <div className="p-2">
                {props.contacts.map(c => <Contact contact={c} key={c.id} favoriteClick={props.favoriteClick} deleteContact={props.deleteContact}></Contact>)}
            </div>
        </div>
    );
}

export default GeneralContacts;