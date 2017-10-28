import { Component } from 'react';
import { Route, Switch } from 'react-router';
import AppContainer from '../app-container/AppContainer';
import TestPage from '../../pages/TestPage';

class App extends Component {
  render() {
    return (
        <Switch>
          <AppContainer>
            <Route exact path="/" component={TestPage} />
          </AppContainer>
        </Switch>
    );
  }
}

export default App;
