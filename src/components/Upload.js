import React,{useState,Fragment,useEffect} from 'react'
import axios from'axios';
import uuid from 'uuid'
import Image from './Image'


const Upload = () => {

    const [file,setFile] = useState(null);
    const [id,setId] = useState('');
    const [images,setImages] = useState([]);


    function arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }

    useEffect(()=>{


        const cb = async()=> {


        
        if(images.length === 0) {

            const response = await axios.get('/image',{
                headers:{
                'x-auth-token':localStorage.getItem('x-auth-key')
                }
            })
                
                const len = response.data.length;
                
                for(let j=0;j<len;j++) {
    
                    let imgValue = arrayBufferToBase64(response.data[j].image.data.data)
                    let  imgFlag = 'data:'+response.data[j].image.contentType+';base64,'
                    imgValue = imgFlag+imgValue;
                    setImages(prevState=>[...prevState,{
                        id:response.data[j]._id,
                        value:imgValue
                    }]);
                }
        }

        else {
            const response = await axios.get('/image/one',{
                headers:{
                'x-auth-token':localStorage.getItem('x-auth-key')
                }
            });
            
            let imgValue = arrayBufferToBase64(response.data.image.data.data)
                    let  imgFlag = 'data:'+response.data.image.contentType+';base64,'
                    imgValue = imgFlag+imgValue;
                    setImages(prevState=>[...prevState,{
                        id:response.data._id,
                        value:imgValue
                    }]);

        }
    }
        cb();
     //eslint-disable-next-line
    },[id])
    
    const onsubmit= async e =>{
        e.preventDefault();
        setId(uuid.v4())
        const image = new FormData()
        image.append('image',file)
        image.append('image',id)
        
        
        try {
           const response = await axios.post('http://localhost:5000/image',image,{
               headers:{
                   'Content-Type':'multipart/form-data',
                   'x-auth-token':localStorage.getItem('x-auth-key')
               }
           });
           console.log(response.data);
           setFile(null);
        } catch (error) {
            console.error(error);
        }
    }

    const onchange = e => {
        setFile(e.target.files[0]);
        
    }
    

    return (
        <Fragment>
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <label htmlFor="Upload">Upload</label>
                    <input type="file" className="form-control-file" name="image" onChange={onchange}/>
                    <button type="submit" className="btn btn-primary">Upload</button>
                </div>
            </form>
            <Image  images={images}/>
            

        </Fragment>
    )
}

export default Upload
