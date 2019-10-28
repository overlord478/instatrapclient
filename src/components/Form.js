import React ,{useState} from 'react'
import axios from 'axios'
import './form.css'


const Form = () => {

    
        
    const [user,setUser] = useState({
        id:"",
        name:""
    })

    


    
    const {id,name} =user
    

    const onsubmit = async e =>{
        e.preventDefault();
        
        try {
            const response =  await axios.post('http://localhost:5000/insert',{
            id:id,
            name:name
        })
    console.log(response.data)
        } catch (error) {
            console.error(error)
        }

        setUser({id:'',name:''})
      

    }
    const onchange = e => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    return (
        <div className="form">
            <h1>Add Users</h1>
        <form onSubmit={onsubmit} className="form-control">
            <label htmlFor="id">ID:</label>
            <input type="number" name="id" value={id} onChange={onchange}  required/>
            <label htmlFor="name">NAME:</label>
            <input type="text" name="name" value={name} onChange={onchange} required/>
            <button type="submit">Submit</button> 
        </form>
        </div>
    )
}

export default Form
