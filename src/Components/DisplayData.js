import "./DisplayData.css";
// import DisplayList from "./DisplayList"; problem 1 +> how can i stop the rendering of this div and only render the list items is there any method;

const DisplayData = ({usersdata}) => {
  
    return (
      <div className="displayData">
        <ul>
          {
           usersdata.map((userdata) => {
            return (
          <li key={userdata.id.toString()}>
            {userdata.username} ({userdata.age} years old) And College Name : {userdata.collegename}
          </li>
          )
          })
          }
        </ul>
      </div>
    );
 
};
export default DisplayData;
