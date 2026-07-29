import {useNavigate} from "react-router-dom";

function Dashboard(){

const navigate=useNavigate();

const logout=()=>{

localStorage.removeItem("token");

navigate("/");

}

return(

<div className="dashboard">

<h1>Authentication System</h1>

<h2>🎉 Welcome</h2>

<p>

You have successfully logged in.

</p>

<br/>

<button onClick={logout}>

Logout

</button>

</div>

);

}

export default Dashboard;