import React, { Component } from 'react'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

class Gallery extends Component {
    render() {
        const alternateImage = '/build/assets/no-image-ebook.png';
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let { title, imageLinks, infoLink } = item.volumeInfo;
                        return (

                            <a 
                            key={index} 
                            className='book'
                            href={infoLink}
                            target='_blank'
                            >
                                <img
                                    src={
                                        imageLinks !== 'undefined' ?
                                            imageLinks.thumbnail : alternateImage
                                    }
                                    alt={title}
                                    className="book__cover" />
                                <div className="book__title">
                                    {title}
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery