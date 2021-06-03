import logo from './logo.svg';
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

library.add(fab, faCheckSquare, faCoffee)

function App() {

  return (
    <SubscriptionProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Index} />  
            <Route path="/subscribe" component={SubscriptionPage} />
          </Switch>
        </div>
      </Router>
    </SubscriptionProvider>
  );
}

export default App;
