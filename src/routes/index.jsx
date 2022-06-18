import { Switch, Route, useHistory } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import DashBoard from "../pages/DashBoard"

function Routes() {
  const routesController = useHistory()

  return (
    <Switch>
      <Route exact path="/">
        <Home routesController={routesController} />
      </Route>
      <Route exact path="/register">
        <Register routesController={routesController} />
      </Route>
      <Route exact path="/login">
        <Login routesController={routesController} />
      </Route>
      <Route exact path="/dashboard">
        <DashBoard routesController={routesController} />
      </Route>
    </Switch>
  )
}

export default Routes
