import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRouterLink, IonRow, IonSlide, IonSlides, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './signin.css';
import FormContainer from '../../components/form/FormContainer';
import { useRef } from 'react';
import SlideContainer from '../../components/slide/SlideContainer';


const Signin: React.FC = () => {

  const username =useRef<HTMLIonInputElement>(null);
  const passwd =useRef<HTMLIonInputElement>(null);

  const signin = async (e: React.FormEvent) => {

    e.preventDefault();


  };



    
  var info={title: ""}
  
  var fields=[
    {title: "", fields: [

            {label: "Username",name: "username",type:"text",placeholder: "username",ref: username,required: true},
            {label: "Password",name: "passwd",type:"password", placeholder: "password", ref: passwd,required: true},
    ]
    },
  ]

  var button={label: "Login" }

  const images=[
    {alt: "",url: "/assets/img/img6.jpg",style:{ margin: 20 , width: '100%', height: '100%', objectFit: 'cover' }},
    {alt: "",url: "/assets/img/img7.jpg",style:{ margin: 20 , width: '100%', height: '100%', objectFit: 'cover' }},
    {alt: "",url: "/assets/img/img2.jpg",style:{ margin: 20 , width: '40%', height: '40%', objectFit: 'cover' }}
  ]



  // <IonSlide>
  // <IonThumbnail style={{ margin: 20 , width: '100%', height: '100%', objectFit: 'cover' }}>
  //   <img alt="" src="/assets/img/img7.jpg" />


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Authentication</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sign In</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol size='6'>



            <FormContainer style={{width: '100%' , height: '100%' , padding: '20px'}} info={info} fields={fields} button={button} onsubmit={signin}/>
          


            
          </IonCol>
          <IonCol size='6'>


            <SlideContainer images={images} />



          </IonCol>
        </IonRow>
        
      </IonContent>
    </IonPage>
  );
};

export default Signin;
