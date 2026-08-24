import { useState } from "react";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import AddContact from "./AddContact";

const ContactIndex = () => {
    const [contactList, setContactList] = useState([
        { id: 1, name: 'Ben', phone: '555', email: 'ben@gmail.com', isFavorite: false },
        { id: 2, name: 'Jake', phone: '111', email: 'jake@gmail.com', isFavorite: true },
        { id: 3, name: 'Pedro', phone: '222', email: 'pedro@gmail.com', isFavorite: true },
        { id: 4, name: 'Evelyn', phone: '246', email: 'eve@gmail.com', isFavorite: false }
    ]);

    const handleToggleFavorite = (contact) => {
        setContactList(prev => {
            return prev.map(c => {
                if (c.id === contact.id) return { ...c, isFavorite: !c.isFavorite }
                return c
            })
        })
    }

    const deleteContact = idxContact => {
        setContactList(prev => prev.filter(c => c.id != idxContact))
    }

    const handleAddContact = contact => {
        setContactList(prev => [...prev, {...contact, isFavorite: false}]);
    }


    return (
        <div className="container" style={{ minHeight: '85vh' }}>
            <div className="py-3">
                <div className="row py-2">
                    <div className="col-6">ADD CONTACT</div>
                    <div className="col-6">REMOVE CONTACT</div>
                </div>
            </div>
            <div className="py-2">
                <div className="col-12"><AddContact addContact={handleAddContact}/></div>
            </div>

            <div className="py-2">
                <div className="col-12"><FavoriteContacts contacts={contactList.filter(c => c.isFavorite)} favoriteClick={handleToggleFavorite} deleteContact={deleteContact} /></div>
            </div>

            <div className="py-2">
                <div className="col-12"><GeneralContacts contacts={contactList.filter(c => !c.isFavorite)} favoriteClick={handleToggleFavorite} deleteContact={deleteContact} /></div>
            </div>
        </div>
    )
}

export default ContactIndex;