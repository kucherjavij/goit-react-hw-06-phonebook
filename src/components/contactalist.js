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

const mapStateToProps = (state) => ({
onRender: state.contacts.contactReducer
})
const mapDispatchToProps = dispatch => ({
  deleteContacts: (id) => dispatch(contactAction.deleteContact(id))
  
})
export default connect(mapStateToProps, mapDispatchToProps )(ContactList) 
// class ContactList extends Component{

//     render (){
//        return  (<div>
//         <h2>Contacts</h2>
//         <ul>
//        {this.props.onRender.map(contact => (<ContactListItem key={contact.id}>
//          {contact.name} : {contact.number} 
//          <DeleteBtn
//              type='button'
//              onClick={() => this.props.deleteContacts(contact.id)}>Delete
//          </DeleteBtn>
//        </ContactListItem>))}
//      </ul></div>)
//     }
// }
// ContactList.propTypes={
//     onRender:  PropTypes.array,
//     deleteContacts: PropTypes.func
// }
// export default ContactList