import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import { analyticsOutline, analyticsSharp, archiveOutline, archiveSharp, bookmarkOutline, chevronForwardCircle, chevronForwardCircleOutline, chevronForwardSharp, ellipsisVerticalOutline, heartOutline, heartSharp, logOut, logOutSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, pulseOutline, pulseSharp, speedometerOutline, speedometerSharp, swapHorizontalOutline, swapHorizontalSharp, trashOutline, trashSharp, trendingUpOutline, trendingUpSharp, warningOutline, warningSharp } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Signin from './pages/login/signin';
import SideMenu from './components/menu/SideMenu';
import SaveExepenses from './pages/expenses/SaveExpenses';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu/>
          <IonRouterOutlet id="main">
            <Route path="/page/:name" exact={true}>
              <Page />
            </Route>

            <Route path="/save_expenses" exact={true}>
              <SaveExepenses />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>


{/* WITHOUT THE NAVIGATION BAR */}
      <IonReactRouter>

        <Route path="/" exact={true}>
          <Redirect to="/signin" />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>


      </IonReactRouter>
    </IonApp>
  );
};

export default App;
