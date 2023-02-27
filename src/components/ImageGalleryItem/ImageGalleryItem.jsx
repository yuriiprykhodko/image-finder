import "styles.css"
import React, { Component } from 'react';
import {Modal} from '../Modal/Modal';

export class ImageGalleryItem extends Component{
    state = {
        showModal: false,
    }
    toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
    }
    
        handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
            this.toggleModal()
        }
    };
// componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown)
//     };
// componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//     };
//     handleKeyDown = e => {
//         if (e.code === 'Escape') {
//      this.toggleModal()
//     }
//   };
    render() {
        const { webformatURL, tags, largeImageURL } = this.props;
        const { showModal } = this.state;
        return (
            <div>
                <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" onClick={this.toggleModal}/>
                {showModal && <Modal src={largeImageURL} alt={tags} onClose={this.handleBackdropClick} />}

            </div>
   
       
       
    )
    }
    
}