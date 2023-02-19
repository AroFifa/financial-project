import { InputChangeEventDetail, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useState } from "react";
import { selectData } from "../../obj/comp_type";
import "./DatalistSelect.css";

interface DatalistProps {
  label: string;
  style?: object;
  placeholder?: string;
  data: selectData[];
  onSelect: (value: string) => void;

  onCreateOption?: any;
}

const DatalistSelect: React.FC<DatalistProps> = ({ label, data , onSelect ,onCreateOption,style , placeholder }) => {

  const [showCreateButton, setShowCreateButton] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const [isLabelFloating, setIsLabelFloating] = useState(false);

  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);



  const handleCreate = () => {
    setShowModal(true);
  };
  const handleNewOptionValueChange = (event: CustomEvent<InputChangeEventDetail>) => {
    setValue(event.detail.value || '');
  };
  
  const handleNewOptionSubmit = () => {
    onSelect(value);
    setShowModal(false);
    if(onCreateOption)
      onCreateOption(value);


  };
  


//   const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
//     const value = event.currentTarget.value;
//     setInputValue(value);

//     // If the input value matches one of the option labels, select that option
//     const selectedOption = data.find(option => option.label === value);
//     if (selectedOption) {
//       onSelect(selectedOption.value);
//     }


//   console.log(selectedOption);
//   };


  const handleFocus = () => {
    setIsLabelFloating(true);
  };

  const handleBlur = () => {
    setIsLabelFloating(inputValue !== "");
  };

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {    


    
    
    
    const option = data.find((item) => item.label === event.currentTarget.value);
    setValue(option ? option.value : event.currentTarget.value);
    setInputValue(option ? option.label : event.currentTarget.value);



    setShowCreateButton(option ? false : true);

    if(event.currentTarget.value===""){
      setShowCreateButton(false)
    }


      


  };
  
  


  return (
    <div className="datalist-select">

    <IonItem  fill="solid">
                      
        <IonLabel
          position= {isLabelFloating ? "stacked" : "floating"}
        >
          {label}
        </IonLabel>
      <input style={style}
        className="custom-select"
        type="text"
        value={inputValue}
        onChange={handleSelect}
        list="datalist"
        placeholder={placeholder}

        onFocus={handleFocus}

        onBlur={handleBlur}
      />

{showCreateButton && (
  <>
          <IonButton onClick={handleCreate} fill="clear" size="small">
            Create
          </IonButton>
{/* 
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
      <input type="text" value={value} onChange={handleNewOptionValueChange} />
      <button onClick={handleNewOptionSubmit}>Submit</button>
    </IonModal> */}
<IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Create {label}</IonTitle>
      <IonButtons slot="end">
        <IonButton onClick={() => setShowModal(false)}>Cancel</IonButton>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
  <IonContent>
    <IonList>
      <IonItem>
        <IonLabel position="floating">{label}</IonLabel>
        <IonInput type="text" value={value} onIonChange={handleNewOptionValueChange}></IonInput>
      </IonItem>

      <IonButton expand='block' onClick={handleNewOptionSubmit} type='submit'>
        <IonIcon slot="start" icon={add}></IonIcon>
      </IonButton>
    </IonList>
  </IonContent>
</IonModal>




  </>
        )}
                          
    </IonItem>

      <datalist id="datalist">
        {data.map((item, index) => (
          <option key={index} value={item.label}>
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default DatalistSelect;
