import React, { Component } from 'react'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

class Gallery extends Component {
    renderSearchResult() {
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
    noSearchResults() {
        return(
            <div> No Books found </div>
        )
    }
    render() {
        if(this.props.items.length) {
           return this.renderSearchResult();
        } else {
           return this.noSearchResults();
        }
    }
}

export default Gallery