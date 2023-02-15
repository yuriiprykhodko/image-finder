import "styles.css"

export const ImageGalleryItem = ({webformatURL,tags}) => {
    return (
   
        <li className ="ImageGalleryItem">
  <img src={webformatURL} alt={tags} className="ImageGalleryItem-image"/>
        </li>
            
    )
}