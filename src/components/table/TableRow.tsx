import { IonCol, IonRouterLink, IonRow } from '@ionic/react';
import { getValue } from '../../obj/comp_func';
import './TableRow.css';

interface ContainerProps {
  object?: object;
  additional_col?: any[]; 
  header?: object[];
}

const TableRow: React.FC<ContainerProps> = (props) => {

var obj:any=props.object;
var add=props.additional_col;
var header:any=props.header;


  return (

    
    <IonRow>
      {header?.map((element:any,index:any)=>{
        var value=getValue(obj,element.col);
        
        
        return(<IonCol key={index}>{value}</IonCol>);
      })}

      {add?.map((element,index)=>{

        var link=element.link;

        element.params.map((element:any,index:any)=>{
          link+="/"+getValue(obj,element);
        })
            return(
              <IonCol key={index}>
                {link&&(<IonRouterLink href={link}>{element.column}</IonRouterLink>)}
              </IonCol>);
      })}
    </IonRow>
  );
};

export default TableRow;