import React, { useState } from "react";
import { useContext } from "react";
import {
  arrowDown,
  arrowForward,homeOutline,
  informationCircleOutline,help, caretDown, caretForward
} from "ionicons/icons";
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from "@ionic/react";
import { useLocation } from "react-router";

const SideMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location=useLocation();

  return (
    <React.Fragment>
      <IonMenu content-id="main-content">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>
              Hi, Aro
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonMenuToggle auto-hide="false">
                <IonList>
              
              <IonItem button routerLink="/page/Inbox">
                <IonIcon slot="start" icon={homeOutline}></IonIcon>
                <IonLabel>HOME</IonLabel>
              </IonItem>
                </IonList>

            <IonItem
                button
                onClick={() => {
                setIsVisible(true);
                if (isVisible === true) {
                    setIsVisible(false);
                }
                }}
            >
                <IonIcon slot="start" icon={informationCircleOutline}></IonIcon>
                <IonLabel>HELP</IonLabel>
                <IonIcon
                slot="end"
                icon={isVisible ? caretDown : caretForward}
                ></IonIcon>
          </IonItem>
            <IonList>
              <IonItem
                hidden={!isVisible}
                button
                routerLink="/page/Outbox"
              >
                <IonIcon slot="start" icon={help}></IonIcon>
                <IonLabel>Sub Item 1</IonLabel>
              </IonItem>
              <IonItem
                hidden={!isVisible}
                button
                routerLink="/page/Trash"
              >
                <IonIcon slot="start" icon={help}></IonIcon>
                <IonLabel>Sub Item 2</IonLabel>
              </IonItem>
            </IonList>

            </IonMenuToggle>


        </IonContent>
      </IonMenu>
    </React.Fragment>
  );
};

export default SideMenu;