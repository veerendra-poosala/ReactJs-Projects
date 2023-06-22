import {Switch, Route} from 'react-router-dom'

import NotFound from './components/NotFound'
import Home from './components/Home'
import LoginForm from './components/LoginForm/index'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
