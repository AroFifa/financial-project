import { IonCol, IonGrid, IonRow } from '@ionic/react';
import './CardContainer.css';
import FicheContainer from '../fiche/FicheContainer';
import { additional_col, header } from '../../obj/comp_class';
import { CardContainerProps } from '../../obj/comp_type';


const CardContainer: React.FC<CardContainerProps> = (props) => {
  var header:any=props.header;

  return (
      <IonGrid>


        <IonRow>
        {props.data?.map((element,index)=>{
            var info={title: ""};
            var obj:any=element;
            var s:string=props.size?props.size:'3';
            
            return (
              <IonCol key={index} size={s}>
                <FicheContainer info={info} img={obj.image} object={element} additional_column={props.additional_column} toshow={props.header} />
              </IonCol>
            );
          
        })}
        

        </IonRow>


      </IonGrid>

  );
};

export default CardContainer;
