import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import TTT from './TTT';
import PlaywithAI from './PlaywithAI';
import PlayWithFriend from './PlayWithFriend'
import BattlewithAI from './BattlewithAI';
import BattlewithFriend from './BattlewithFriend';
function App() {
  return (
    <div className="App">.

      <Router>
        <Switch>
          <Route path="/play-ai">
           <PlaywithAI></PlaywithAI>
          </Route>
           <Route path="/playwithfriendcard">
           <PlayWithFriend></PlayWithFriend>
          </Route>
          <Route path="/battlewithai">
           <BattlewithAI></BattlewithAI>
          </Route>
          <Route path="/battlewithfriend">
           <BattlewithFriend></BattlewithFriend>
          </Route>
          <Route path="/">
           <TTT></TTT>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
