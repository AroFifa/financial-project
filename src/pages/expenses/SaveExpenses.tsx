import { SelectOption } from '@ionic/core/dist/types/components/select-option/select-option';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useRef, useState } from 'react';
import { useParams } from 'react-router';
import DatalistSelect from '../../components/input/DatalistSelect';
import './SaveExpenses.css';
import { trailSignOutline } from 'ionicons/icons';
import FormContainer from '../../components/form/FormContainer';

const SaveExepenses: React.FC = () => {

    const [selectedExpense, setSelectedExpense] = useState("");

    


    const expenses=[
      {label: "homme" , value: "1"},
      {label: "femme" , value: "2"}
      ]

      const [data, setData] = useState(expenses)
      
      
      const onCreateOption = (newoption:  string)=> {
        const newExpenses = [...expenses, { label: newoption, value: newoption }];
        setData(newExpenses);
      
    }
    
    const handleExpenseSelect = (value: string) => {
      setSelectedExpense(value);
    };



    







  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Save expenses</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Save Expenses</IonTitle>
          </IonToolbar>
        </IonHeader>


                {/* call the DataList component */}
        <DatalistSelect label='Gender' onCreateOption={onCreateOption} data={data} style={{width: "200px"}} onSelect={handleExpenseSelect} />

      </IonContent>
    </IonPage>
  );
};

export default SaveExepenses;
