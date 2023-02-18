import { IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { caretDown, caretForward, help } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AppPage } from "../../obj/comp_type";

const SubMenu: React.FC<AppPage> = (props) => {

  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();


  // Check if any of the submenu items is selected
  const isSelected = props.submenu?.some(
    (submenu) => location.pathname === submenu.url
  );

  // Show the submenu and select the parent item if any of the submenu items is selected
//   useEffect(() => {
//     if (isSelected) {
//       setIsVisible(true);
//     }
//   }, [isSelected]);
    return (
        <>
        


        <IonItem
                      button
                      onClick={() => {
                      setIsVisible(true);
                      if (isVisible === true) {
                          setIsVisible(false);
                      }
                      }}

                    className={isSelected ? "selected" : ""}
                  >
                      <IonIcon slot="start"  ios={props.iosIcon} md={props.mdIcon} ></IonIcon>
                      <IonLabel>{props.title}</IonLabel>
                      <IonIcon
                      slot="end"
                      icon={isVisible ? caretDown : caretForward}
                      ></IonIcon>
                  </IonItem>
                    <IonList>

                      {props.submenu?.map((element, index)=>{
                        return (
                            <IonItem key={index}
                              hidden={!isVisible}
                              button
                              className={location.pathname === element.url ? 'selected' : ''}
                              routerLink={element.url}
                              routerDirection="none" lines="none" detail={false}
                            >
                                <IonIcon slot="start"  ios={element.iosIcon} md={element.mdIcon} ></IonIcon>
                              <IonLabel>{element.title}</IonLabel>
                            </IonItem>
                        );
                      })}

                    </IonList>
        
        </>
    );
};

export default SubMenu;