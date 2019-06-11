import React, { FunctionComponent } from 'react'
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom'

interface OwnProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const PrivateRoute: FunctionComponent<OwnProps> = ({
  component: Component,
  ...rest
} : OwnProps) => (
  <Route
    {...rest}
    render={props => (true ? ( // put your authenticate logic here
      <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        ))
      }
  />
  )

export default PrivateRoute
