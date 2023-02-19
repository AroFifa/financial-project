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
import { analyticsOutline, analyticsSharp, archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, caretDown, caretForward, chevronForwardCircle, chevronForwardCircleOutline, chevronForwardSharp, documentTextOutline, documentTextSharp, ellipsisVerticalOutline, heartOutline, heartSharp, help, informationCircleOutline, logOut, logOutSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, pulseOutline, pulseSharp, receiptOutline, receiptSharp, returnDownBackOutline, returnDownBackSharp, saveOutline, saveSharp, speedometerOutline, speedometerSharp, swapHorizontalOutline, swapHorizontalSharp, timeOutline, timeSharp, trashOutline, trashSharp, trendingUpOutline, trendingUpSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import { useState } from 'react';
import { AppPage } from '../obj/comp_type';
import SubMenu from './menu/SubMenu';

const appPages: AppPage[] = [
  {
    title: 'Dashboard',
    url: '/page/Dashboard',
    iosIcon: speedometerOutline,
    mdIcon: speedometerSharp
  },
  {
    title: 'Expenses',
    url: '/page/expenses',
    iosIcon: receiptOutline,
    mdIcon: receiptSharp,
    submenu: [
      {
        url: "/save_expenses",
        iosIcon: bookmarkOutline,
        mdIcon: bookmarkSharp,
        title: "Save"
      },      {
        url: "/page/history_expense",
        iosIcon: timeOutline,
        mdIcon: timeSharp,
        title: "History"
      }
    ]
  },
  {
    title: 'Transaction',
    url: '/page/Transaction',
    iosIcon: swapHorizontalOutline,
    mdIcon: swapHorizontalSharp,
    submenu: [
      {
        url: "/page/RefundLoan",
        iosIcon: returnDownBackOutline,
        mdIcon: returnDownBackSharp,
        title: "Refund and Loan"
      },      {
        url: "/page/Reports",
        iosIcon: documentTextOutline,
        mdIcon: documentTextSharp,
        title: "Reports"
      }
    ]
  },
  {
    title: 'Income',
    url: '/page/Income',
    iosIcon: trendingUpOutline,
    mdIcon: trendingUpSharp,
    submenu: [
      {
        url: "/page/save_income",
        iosIcon: bookmarkOutline,
        mdIcon: bookmarkSharp,
        title: "Save"
      },      {
        url: "/page/history_income",
        iosIcon: timeOutline,
        mdIcon: timeSharp,
        title: "History"
      }
    ]
  },
  {
    title: 'Assessment',
    url: '/page/Assessment',
    iosIcon: analyticsOutline,
    mdIcon: analyticsSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Financial site</IonListHeader>
          <IonNote>@Aro</IonNote>
              <IonMenuToggle autoHide={false}>
          {appPages.map((appPage, index) => {
            if(appPage.submenu){
              return (

                <SubMenu key={index} url={appPage.url} iosIcon={appPage.iosIcon} mdIcon={appPage.mdIcon} title={appPage.title} submenu={appPage.submenu} />
              );
            }else{
            return (
                <IonItem style={{marginBottom: "20px"}} key={index} className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start"  ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                 



                </IonItem>
            );
            }
          })}


              </IonMenuToggle>
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
