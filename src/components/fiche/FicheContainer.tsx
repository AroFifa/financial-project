import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonRouterLink } from '@ionic/react';
import { additional_col } from '../../obj/comp_class';
import { getValue } from '../../obj/comp_func';
import './FicheContainer.css';
import { FicheContainerProps } from '../../obj/comp_type';


const FicheContainer: React.FC<FicheContainerProps> = (props) => {
    var info:any=props.info;
    var object:any=props.object;


var img:any=props.img?props.img:require("./card-media.png");


  return (
    <IonCard>      
      

      <IonCardHeader>
        <IonCardTitle>{info.title}</IonCardTitle>
        <IonCardSubtitle>{info.subtitle}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonList>
        {props.toshow?.map((element,index)=>{
            return (
                <IonItem key={index}>
                    <IonLabel ><strong>{element.label} :</strong></IonLabel>
                    <IonLabel text-wrap>{getValue(object,element.col)}</IonLabel>
                </IonItem>
            );
        })}

      {props.additional_column?.map((element,index)=>{

        var link=element.link;

        element.params.map((element:any,index:any)=>{
          link+="/"+getValue(props.object,element);
        })
            return(
              <IonItem key={index}>
                <IonLabel>
                {link&&(<IonRouterLink href={link}>{element.column}</IonRouterLink>)}
                </IonLabel>
              </IonItem>);
        })}
        </IonList>
      </IonCardContent>
    </IonCard>

  );
};

export default FicheContainer;
