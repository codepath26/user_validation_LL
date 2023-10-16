import { useState } from 'react'
import './AddUser.css'

const AddUser = (props)=>{
  const [username , setUsername]= useState('')
  const [age , setAge]= useState('')
 
  const usernameHandler = (e)=>{
    setUsername(e.target.value);
    console.log(e.target.value);
  }
  const ageHandler = (e)=>{
    setAge(e.target.value);
    console.log(e.target.value);
  }
  const formSubmitHandler =(e)=>{
    e.preventDefault();
    if(username === '' || age === ''){
      props.openDialog('Please Enter The Correct Details');

    }
    else if(Number(age) < 0){
      props.openDialog('Please Enter the age Greater then 0');
     
    }else{
   props.saveDetaile(username , age);
   setUsername('');
   setAge('');
  }
}
return(
  <div className="fromContainer">
    <form onSubmit={formSubmitHandler}>
      <div className="inputField">
        <label htmlFor="username">Username</label>
        <input value={username} onChange={usernameHandler} type="text" id='username' />
      </div>
      <div className="inputField">
        <label htmlFor="age">Age(Years)</label>
        <input value={age} onChange={ageHandler} type="number" id='age' />
      </div>
      <div className="buttons">
      <button type='submit'>Add User</button>
      </div>
    </form>
  </div>
)
}
export default AddUser;