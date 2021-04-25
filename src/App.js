import List from './List/List';
import Model from './Model/Model'
import Edit from './Edit/Edit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {



  return (
    <>
      <Router>
        <List/>
        <Switch>
          <Route exact path='/:id'>
            <Model />
          </Route>
          <Route path='/:id/edit'>
            <Edit />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
