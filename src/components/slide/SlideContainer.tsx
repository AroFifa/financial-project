import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonSlide, IonSlides, IonThumbnail } from '@ionic/react';
import { useRef } from 'react';
import './SlideContainer.css';

interface ContainerProps {
    style?:object,
    images: img[]
  
}

interface img{
  alt: string,
  style?: object,
  url: string
}


const SlideContainer: React.FC<ContainerProps> = (props) => {


  const slideRef = useRef<HTMLIonSlidesElement>(null);

    
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };
  return (
    <IonCard style={props.style}>








      <IonSlides pager={true} options={{...slideOpts}} ref={slideRef}>


        {props.images.map((element,index)=>{

          return (
            
          <IonSlide key={index}>
            <IonThumbnail style={element.style}>
              <img alt={element.alt} src={element.url} />
            </IonThumbnail>
          </IonSlide>
          );
        })}
        </IonSlides>



              <div style={{ display: 'flex', justifyContent: 'center' }}>






                {props.images.map((element,index)=>{

                  return (
                    

                    <div className="custom-pagination" key={index}>
                      
                      
                      <IonButton onClick={() => slideRef.current?.slideTo(index)} fill="clear" slot="start">
                        <img alt={element.alt} src={element.url} />
                      </IonButton>
                    </div>
                  );
                  })}

              </div>



    </IonCard>

  );
};

export default SlideContainer;
