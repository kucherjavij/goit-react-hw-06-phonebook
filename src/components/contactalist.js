import PropTypes from "prop-types";
import {  useDispatch, useSelector } from "react-redux";
import { DeleteBtn, ContactListItem } from "./contactList.styled"
import contactAction from "../contacts/contacts-actions"
import { filterContacts } from "../contacts/contacts-selectors"

export default function ContactList() {
    const onRender = useSelector(filterContacts )
    const dispatch = useDispatch()
    const deleteContacts = id => dispatch(contactAction.deleteContact(id))

     return  (<div>
      <h2>Contacts</h2>
      <ul>
     {onRender.map(contact => (<ContactListItem key={contact.id}>
       {contact.name} : {contact.number} 
       <DeleteBtn
           type='button'
           onClick={() => deleteContacts(contact.id)}>Delete
       </DeleteBtn>
     </ContactListItem>))}
   </ul></div>)
  
}
ContactList.propTypes={
  onRender:  PropTypes.array,
  deleteContacts: PropTypes.func
}

   
       


 
