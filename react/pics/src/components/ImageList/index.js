import React from 'react';

import ImageCard from '../ImageCard'
import './styles.css'

const ImageList = ({ images }) =>{
    const arrayImages = images.map((img, index) => {
        return <ImageCard key={ img.id } image={ img } />
    });

    return <div className='image-list'>{ arrayImages }</div>
}

export default ImageList;