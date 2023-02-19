import { IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea, IonTitle } from '@ionic/react';
import './FormContainer.css';

interface ContainerProps {
    title?:string;
    fields?:any[];
  
}


const FormGroup: React.FC<ContainerProps> = (props) => {

  return (<>

        <IonTitle>{props.title}</IonTitle>
        <IonList>
        {props.fields?.map((element,index)=>{
          var required=element.required?element.required:false;
            if(element.type=="textarea"){
                return (
                    <IonItem key={index} fill="solid">
                    <IonLabel position="floating">{element.label}</IonLabel>
                    <IonTextarea required={required} value={element.defaultValue} ref={element.ref}  name={element.name} placeholder={element.placeholder}></IonTextarea>
                    </IonItem>
                );

            }else if(element.type!=="select" && element.type!=="multipleselect"){
              
                return (
                    <IonItem key={index} fill="solid">
                      <IonLabel position="floating">{element.label}</IonLabel>
                      <IonInput required={required} min={element.min} max={element.max} value={element.defaultValue} type={element.type} ref={element.ref}  name={element.name} placeholder={element.placeholder}></IonInput>
                    </IonItem>
                );
            }else{
                var multiple=false;
                if(element.type=="multipleselect")
                    multiple=true;
              return(

                  <IonItem key={index} fill="solid">
                  <IonLabel position="floating">{element.label}</IonLabel>
                  <IonSelect value={element.defaultValue} multiple={multiple} placeholder={element.placeholder} ref={element.ref}>
                    {
                      element.data?.map((e:any,index:any)=>{
                        return (<IonSelectOption key={index}  value={e.value}>{e.label}</IonSelectOption>);
                      })
                    }
                    
                  </IonSelect>
                  </IonItem>
              );
            }
        })}


        </IonList>

</>
  );
};

export default FormGroup;
