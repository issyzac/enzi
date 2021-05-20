import logo from './logo.svg';
import './App.css';

// Import Pages
import Index from './pages/Index';
import SubscriptionPage from './pages/SubscriptionPage'

// Import styles and resources
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />  
          <Route path="/subscribe" component={SubscriptionPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
