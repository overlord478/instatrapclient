import React,{useState} from 'react'
import axios from 'axios';

const Register = (props) => {

    const [user,setUser] = useState({
        
        name:"",
        email:"",
        password:""
    });

    const onchange = e => setUser({...user,[e.target.name]:e.target.value});

    const onsubmit = async e => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/register',user)
        localStorage.setItem('x-auth-key',response.data.token)
        props.history.push('/image')
    }

    return (
        <div>
            <h2>Register </h2>
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Enter user name..." onChange={onchange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter Email id" onChange={onchange} required/>
                    <small className="form-text muted-text">We'll never share you email with anyone else</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control"  name="password"  placeholder=" Enter Password" onChange={onchange} required minLength="8"/>
                </div>
                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
        </div>
    )
}

export default Register
