import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import "styles.css"

export const ImageGallery=({hits})=>{
    
            return (
                <div>
                    <ul className="ImageGallery">
                        {hits.map(({ id, webformatURL, tags, largeImageURL }) =>
                            <li key={id}>
                            <ImageGalleryItem
                                key={id}
                                webformatURL={webformatURL}
                                tags={tags}
                                largeImageURL={largeImageURL}
                                   />
                                   </li>
                                )}
                             
                    </ul>
                   
                </div>
            )
        }
   