import { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

function Login(){

const navigate=useNavigate();

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const loginUser=async(e)=>{

e.preventDefault();

try{

const res=await axios.post("http://localhost:5000/api/auth/login",{
email,password
});

localStorage.setItem("token",res.data.token);

navigate("/dashboard");

}catch(err){

alert(err.response?.data?.message||"Login Failed");

}

}

return(

<div className="container">

<h1>🔐 Login</h1>

<form onSubmit={loginUser}>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button>
Login
</button>

</form>

<p>

Don't have an account?

<br/>

<Link to="/register">

Create Account

</Link>

</p>

</div>

);

}

export default Login;