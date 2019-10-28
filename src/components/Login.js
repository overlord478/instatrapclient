import React,{useState} from 'react';
import axios from 'axios';

const Login = (props) => {

    const [login,setLogin] = useState({
        email:"",
        password:""
    })

    const onchange = (e) => {
        setLogin({...login,[e.target.name]:e.target.value})
    }

    const onsubmit = async (e)=>{
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/login",login)
        localStorage.setItem('x-auth-key',response.data.token)
        props.history.push('/image')
    }

    return (
        <div>
        <h2>Login</h2>
           <form onSubmit={onsubmit}>
           <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" placeholder="Enter Email id" required onChange={onchange}/>
                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div> 
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Enter password" required minLength="5" onChange={onchange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
           </form> 
        </div>
    )
}

export default Login
