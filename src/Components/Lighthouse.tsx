import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';





const Lighthouse = (props:any) => {
  const images = props.images;
  const [state, setstate] = useState(props.state);
  const displayingGallery = () => {
    return state.map((item:any,i:any)=>{
      return(
        <div key={i} className="card " style={{paddingBottom:"8px", backgroundColor:"#eee"}}>
          <img src={item.image} alt={item.name} onClick={()=> setisOpen(true)} width="400px" height={props.height} />
          {item.name}
        </div>
        
      )
    })
  }
 
  const [photoIndex, setphotoIndex] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <div className="images-in-grid">
     {displayingGallery()}
     </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setisOpen(false)}
            onMovePrevRequest={() =>
              setphotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setphotoIndex((photoIndex + 1) % images.length)
            }
          />
        )
        }
    </div>
  );
};

export default Lighthouse;