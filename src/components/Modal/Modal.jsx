import 'styles.css';

export const Modal =({src,alt,onClose})=>{
    
     return (
         <div className="Overlay "
             onClick={onClose}
         >
        <div className="Modal">
        <img src={src} alt={alt} />
        </div>
       </div>
    )
}
