import React from "react";
import Form from "./components/form";
import ContactList from "./components/contactalist";
import Filter from "./components/filter";

function App () {  
    return (
    <div>
     <Form/>
      <Filter/> 
     <ContactList/>
    </div>
  );
}

export default App;
