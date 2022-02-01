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
    value:  PropTypes.string,
    onChange: PropTypes.func
}

const mapStateToProps = (state) => ({
        value: state.contacts.filterReducer  
})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value))
  
})


export default connect(mapStateToProps,mapDispatchToProps )(Filter);