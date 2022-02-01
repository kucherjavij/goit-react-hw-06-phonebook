import React, {useState, useEffect} from "react";
import Form from "./components/form";
import { nanoid } from 'nanoid'
import ContactList from "./components/contactalist";
import Filter from "./components/filter";
import useLocalStorage from "./useLocalStorage";




function App () {  

// if (contacts.find(tel => tel.name.toLowerCase() === contact.name.toLowerCase()) ||
// contacts.find(tel => tel.number === contact.number)) {
//   alert(`${contact.name} contact is already exists!`);
//   return;
// }


    return (
    <div>
     <Form/>
      <Filter/> 
     <ContactList/>
    </div>
  );
}



export default App;
