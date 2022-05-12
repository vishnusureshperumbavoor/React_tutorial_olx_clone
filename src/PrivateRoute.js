import { useContext, createContext} from 'react'
import { Route, Redirect} from 'react-router-dom'
import { AuthContext } from './store/AuthContext'

function PrivateRoute({component:Component , ...rest}) {
    const {user} = useContext(AuthContext)
    return(
        <Route {...rest} render={props=>{
            return user ? <Component {...props}/> : <Redirect to="/login"/>
        }}>
        </Route>
    )
    
}

export default PrivateRoute