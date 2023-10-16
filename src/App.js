import { useState } from "react";
import AddUser from "./Components/AddUser";
import DisplayData from "./Components/DisplayData";
import Dialog from "./Components/Dialog";

function App() {
  const [usersData ,setUsersData] = useState([]);
  const [diastyle , setDiaStyle] = useState(false);
  const [message , setMessage] = useState('')


 const openDialog = (message) => {
    setDiaStyle(true);
    setMessage(message);
};

 const closeDialog = () => {

  setDiaStyle(false);
};

  const getDetails = (name, newAge , collegename) => {
    const newUser = {
      username : name,
      age : newAge,
      collegename :collegename,
      id : Math.random()
    }
    setUsersData([...usersData , newUser])
  }
 
  return (
    <>
   <h1>hellow world</h1>
   <AddUser saveDetaile = {getDetails} openDialog = {openDialog}/>

   <DisplayData usersdata = {usersData} />
   {diastyle && <Dialog Dialogclose = {closeDialog} msg = {message}/>}
    </>
  );
}

export default App;
