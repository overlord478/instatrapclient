import React,{Fragment} from 'react'
import './Image.css';
import ImageItem from './ImageItem'


const Image = (props) => {
    
    const {images} = props;
return (
        <Fragment>
            {images.map(image => <ImageItem  key={image.id} image={image}  />)}
        </Fragment>
    )
}

export default Image
