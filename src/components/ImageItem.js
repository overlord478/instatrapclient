import React from 'react'
import axios from 'axios'

const ImageItem = (props) => {

    const {image} = props
    
    
    

    const ondelete = async()=>{

         await axios.delete(`http://localhost:5000/image/${image.id}`,{
            
            headers:{
                'x-auth-token':localStorage.getItem('x-auth-key')
            }
            
        })
        window.location.href = "http://localhost:3000/image";
    }

    return (
        
            <div className="card" style={{width:"auto",height:"auto"}}>
                <img  className="card-img-top" src={image.value}  alt="A good test"/>
                <div className="card-body">
                    <button className="btn btn-danger btn-sm" onClick={ondelete} >Delete</button>
                </div>
            </div>
        
        )
}

export default ImageItem
