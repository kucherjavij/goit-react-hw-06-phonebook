import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DeleteBtn, ContactListItem } from "./contactList.styled"
import contactAction from "../contacts/contacts-actions"
function ContactList ({deleteContacts, onRender}){

  
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

   const filterContacts = (allContacts, filtered) => {
      const normalizedFilter = filtered.toLowerCase()
     
        return allContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };
       

const mapStateToProps = (state) => {
  const { filterReducer, contactReducer } = state.contacts
       const visibleContact = filterContacts( contactReducer, filterReducer)
return {onRender: visibleContact}
}
const mapDispatchToProps = dispatch => ({
  deleteContacts: (id) => dispatch(contactAction.deleteContact(id))
  
})
export default connect(mapStateToProps, mapDispatchToProps )(ContactList) 
