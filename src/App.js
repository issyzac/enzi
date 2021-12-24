import './App.css';

// Import Pages
import Index from './pages/HomePage/Index';
import SubscriptionPage from './pages/SubscriptionPage/Index.js';

// Import styles and resources
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SubscriptionProvider } from './contexts/SubscriptionContext';
import ShopIndex from './pages/Shop/ShopIndex';

import ReactGa from 'react-ga4';

ReactGa.initialize(
  [
    {
      trackingId: 'G-0TZY0WHDK4',
      gaOptions: {
        name: 'landingPage'
      }
    },
    {
      trackingId: 'G-J3K6NQDR09',
      gaOptions: 'webapp'
    }
  ], {debug: true});

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <SubscriptionProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Index} />  
            <Route path="/subscribe" component={SubscriptionPage} />
            <Route path="/shop" component={ShopIndex} />
          </Switch>
        </div>
      </Router>
    </SubscriptionProvider>
  );
}

export default App;
