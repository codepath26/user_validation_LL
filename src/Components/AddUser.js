import { useRef} from 'react'
import './AddUser.css'

const AddUser = (props)=>{
  const enteredUsername = useRef();
  const enteredAge = useRef();
  const enteredCollegeName = useRef();

  const formSubmitHandler =(e)=>{
    e.preventDefault();
    const username = enteredUsername.current.value;
    const age = enteredAge.current.value;
    const collegename = enteredCollegeName.current.value
    if(username === '' || age === '' || collegename === ''){
      props.openDialog('Please Enter The Correct Details');

    }
    else if(Number(age) < 0){
      props.openDialog('Please Enter the age Greater then 0');
     
    }else{
   props.saveDetaile(username , age ,collegename);
  }
}
return(
  <div className="fromContainer">
    <form onSubmit={formSubmitHandler}>
      <div className="inputField">
        <label htmlFor="username">Username</label>
        <input ref={enteredUsername}  type="text" id='username' />
      </div>
      <div className="inputField">
        <label htmlFor="age">Age(Years)</label>
        <input  ref={enteredAge}  type="number" id='age' />
      </div>
      <div className="inputField">
        <label htmlFor="collegeName">College Name</label>
        <input  ref={enteredCollegeName}  type="text" id='collegeName' />
      </div>
      <div className="buttons">
      <button type='submit'>Add User</button>
      </div>
    </form>
  </div>
)
}
export default AddUser;