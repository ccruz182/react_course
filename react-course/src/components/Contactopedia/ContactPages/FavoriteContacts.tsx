import Contact from "./Contact";

const FavoriteContacts = (props) => {
    return (
        <div className="col-12 p-2">
            <div className="text-center text-white-50">Favorites</div>

            <div className="p-2">
                {props.contacts.map((c, i) => (<Contact contact={c} key={c.id} favoriteClick={props.favoriteClick} deleteContact={props.deleteContact} />))}

            </div>
        </div>
    )
}

export default FavoriteContacts;