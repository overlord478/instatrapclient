import React from 'react'
import './Image.css';
import ImageItem from './ImageItem'



const Image = (props) => {
    
    const {images} = props;
    return (
        
            <div className="card-columns">
                {images.map(image => <ImageItem  key={image.id} image={image}  />)}
            </div>
        )
    
}



export default Image
