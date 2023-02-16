import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonPopover,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';

import { useHistory, useLocation } from 'react-router-dom';
import { analyticsOutline, analyticsSharp, archiveOutline, archiveSharp, bookmarkOutline, chevronForwardCircle, chevronForwardCircleOutline, chevronForwardSharp, ellipsisVerticalOutline, heartOutline, heartSharp, logOut, logOutSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, pulseOutline, pulseSharp, speedometerOutline, speedometerSharp, swapHorizontalOutline, swapHorizontalSharp, trashOutline, trashSharp, trendingUpOutline, trendingUpSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import { useState } from 'react';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  options?: string[];
}


const appPages: AppPage[] = [
  {
    title: 'Dashboard',
    url: '/page/Inbox',
    iosIcon: speedometerOutline,
    mdIcon: speedometerSharp
  },
  {
    title: 'Movement',
    url: '/page/Outbox',
    iosIcon: pulseOutline,
    mdIcon: pulseSharp,
    options: ["save","history"]
  },
  {
    title: 'Transaction',
    url: '/page/Favorites',
    iosIcon: swapHorizontalOutline,
    mdIcon: swapHorizontalSharp
  },
  {
    title: 'Income',
    url: '/page/Archived',
    iosIcon: trendingUpOutline,
    mdIcon: trendingUpSharp
  },
  {
    title: 'Assessment',
    url: '/page/Trash',
    iosIcon: analyticsOutline,
    mdIcon: analyticsSharp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();


  // const [popoverState, setShowPopover] = React.useState({
  //   showPopover: false,
  //   event: undefined,
  // });


  // const renderPopover = (options: string[]) => {
  //   return (
  //     <IonPopover
  //       className="my-custom-class"
  //       event={popoverState.event}
  //       isOpen={popoverState.showPopover}
  //       onDidDismiss={() =>
  //         setShowPopover({ showPopover: false, event: undefined })
  //       }
  //     >
  //       <IonList>
  //         {options.map((option, index) => (
  //           <React.Fragment key={index}>
  //             {renderOption(option)}
  //           </React.Fragment>
  //         ))}
  //       </IonList>
  //     </IonPopover>
  //   );
  // };

  // const renderOption = (option: string) => {
  //   return (
  //     <IonItem button routerLink={option}>
  //       <IonLabel>{option}</IonLabel>
  //     </IonItem>
  //   );
  // };

  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined
  });

  const openPopover = (event: any) => {
    setShowPopover({
      showPopover: true,
      event
    });
  };

  const closePopover = () => {
    setShowPopover({
      showPopover: false,
      event: undefined
    });
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Financial site</IonListHeader>
          <IonNote>@Aro</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start"  ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                 



                    {appPage.options && (
                        <div className="dropdown-container" slot="end">
                          <button className="dropdown-button" onClick={(event) => openPopover(event)}>
                            <IonIcon slot="start" icon={chevronForwardSharp} />
                          </button>
                          <IonPopover
                            isOpen={popoverState.showPopover}
                            event={popoverState.event}
                            onDidDismiss={() => closePopover()}
                          >
                            <IonList>
                              {appPage.options?.map((option, index) => (
                                // <IonItem key={index} button onClick={() => {
                                //   history.push(`${appPage.url}/${option}`);
                                //   closePopover();
                                // }}>

                                <IonItem key={index} className={location.pathname === `${appPage.url}/${option}` ? 'selected' : ''} routerLink={`${appPage.url}/${option}`} routerDirection="none" lines="none" detail={false} onClick={()=>closePopover()}>
                                  {option}
                                </IonItem>
                              ))}
                            </IonList>
                          </IonPopover>
                        </div>
                      )}




                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="inbox-list">
          <IonListHeader></IonListHeader>
                <IonItem routerLink='/logout' routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start"  ios={logOut} md={logOutSharp} />
                  <IonLabel>Logout</IonLabel>
                </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
