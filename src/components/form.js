import React, {useState} from "react";
import PropTypes from "prop-types";
import {Input} from "./input.styled"
import {DeleteBtn } from "./contactList.styled"
import { connect } from "react-redux";
import contacActions from "../contacts/contacts-actions"

function Form ({onSubmit}){
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');
   
    
   const hendleInputChange = e => {
        const {name, value} = e.target

        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
            default:
                return;
        }
        }
    
        const handleSubmit = e=> {
            
            e.preventDefault();
        onSubmit({name, number})  
        setName('')
        setNumber('')

        }
        
    
   
        return(
            <form onSubmit={handleSubmit}>
          <label>
            Name
            <br/>
          <Input
      type="text"
      value={name}
      onChange={hendleInputChange}
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    /></label><br/>
    <label>
        Number<br/>
    <Input
      type="tel"
      value={number}
      onChange={hendleInputChange}
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    /></label>
    <br/>
    <DeleteBtn type="submit" >Add contact</DeleteBtn>
    </form>
        )}


Form.propTypes={
    onSubmit:  PropTypes.func
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (names, number) => dispatch(contacActions.addContact(names, number))
})

export default connect(null,mapDispatchToProps )(Form)