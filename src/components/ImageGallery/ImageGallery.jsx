import React, { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { api } from '../services/api';

import "styles.css"

const KEY = '21893173-2e6903a6fb362f8aa14208207';

export class ImageGallery extends Component {
    state = {
        hits: null,
        error: null,
        status: 'idle',
        page:1
    }
    resetPage = () => {
        this.setState({page:1})
    }
    nextPage = () => {
        this.setState(prevState=>this.setState({page:prevState.page + 1}))
    }
    componentDidUpdate(prevProps, prevState) {
        
        const { page } = this.state;
        const { query } = this.props;

        if (prevProps.query !== query) {
            this.resetPage();
            this.setState({ status: 'pending' })
           api.fetchImages(query,page,KEY).then(({ hits }) => this.setState({ hits, status: 'resolved' })).catch(error => this.setState({ error, status: 'rejected' }))
        }
    }
    render() {
        const { error,status, hits } = this.state;
    
        if (status === 'idle') {
            return <div>Введите имя покемона</div>
        }
        if (status === 'rejected') {
            return <h1>{error.message}</h1>
        }
        if (status === 'pending') {
            return <h1>Загружаем...</h1>
        }
        if (status === 'resolved') {
            return (
                <div>
                    <ul className="ImageGallery">
                        {hits.map(({ id, webformatURL, tags }) =>
                            <ImageGalleryItem
                                key={id}
                                webformatURL={webformatURL}
                                tags={tags} />)}
                    </ul>
                    <Button />
                </div>
            )
    
        }
   
    }
}