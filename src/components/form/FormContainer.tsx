import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import './FormContainer.css';
import FormGroup from './FormGroup';

interface ContainerProps {
    style?:object;
    method?:string;
    fields?:any[];
    info: object; 
    button: any;
    onsubmit?: any;
  
}


const FormContainer: React.FC<ContainerProps> = (props) => {
    var info:any=props.info;

  return (
    <IonCard style={props.style}>
      <IonCardHeader>
        <IonCardTitle>{info.title}</IonCardTitle>
        <IonCardSubtitle>{info.subtitle}</IonCardSubtitle>
      </IonCardHeader>
      <form method={props.method} onSubmit={props.onsubmit}>
      <IonCardContent>
        {props.fields?.map((element,index)=>{
          return(<FormGroup key={index} title={element.title} fields={element.fields}/>);
        })}
      <IonButton expand='block' type='submit'>
        <IonIcon slot="end" icon={props.button.icon}></IonIcon>
        {props.button.label}
      </IonButton>
      </IonCardContent>
      </form>
    </IonCard>

  );
};

export default FormContainer;
