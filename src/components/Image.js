import React,{Fragment} from 'react'
import './Image.css';

const Image = ({images}) => {

    return (
        <Fragment>
            <div className="card-columns container">
            {images.map(image => 
    <img className="card-img-top" key={image.id} src={image.value} alt="a good pixels" />)}
            </div>
        </Fragment>
    )
}

export default Image
