import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../contacts/contacts-actions";


function Filter ({value, onChange}) {
    return (
        <label>
            <span>Find contacts by name</span>
            <br/>
            <input
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

Filter.propTypes={
    value:  PropTypes.array,
    onChange: PropTypes.func
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

    return {
        value: visibleContact
    }
}

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value))
  
})


export default connect(mapStateToProps,mapDispatchToProps )(Filter);