import {BrowserRouter as Router, HashRouter, Link, Redirect, Route, Switch} from 'react-router-dom';
import Acerca from '../Pages/Acerca';
import Contacto from '../Pages/Contacto';
import Dashboard from '../Pages/Dashboard';
import Error404 from '../Pages/Error404';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Productos from '../Pages/Productos';
import Usuario from '../Pages/Usuario';
import MenuConceptos from './MenuConceptos';
import PrivateRoute from './PrivateRoute';

function ConceptosBasicos() {
    return (
        <div>
            <h2>Hash Router</h2>
            <HashRouter>
                <nav>
                <Link to= '/'>Home</Link>
                <Link to= '/acerca'>Acerca</Link>
                <Link to= '/contacto'>Contacto</Link>
                </nav>
                <Switch>
                 <Route exact path='/' component={Home} />
                 <Route exact path='/acerca' component={Acerca} />
                 <Route exact path='/contacto' component={Contacto} />
                 <Route path='*'component={Error404} />
                </Switch>
            </HashRouter>
            <hr/>
            <h2>Conceptos Básicos</h2>
            <Router>
                <MenuConceptos />
                <Switch>
                    <Route exact path='/'component={Home} />
                    <Route exact path='/acerca' component={Acerca} />
                    <Route exact path='/contacto' component={Contacto} />
                    <Route exact path= '/usuario/:username' component={Usuario} />
                    <Route exact path= '/productos' component={Productos} />
                    <Route exact path= '/about'>
                        <Redirect to= 'acerca'/>
                    </Route>
                    <Route exact path = '/contact'>
                        <Redirect to= '/contacto' />
                    </Route>
                    <Route exact path='/login' component={Login} />
                    <PrivateRoute exact path='/dashboard' component={Dashboard} />
                    <Route path='*'>
                        <Error404 />
                    </Route>
                </Switch>
            </Router>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}


// const ConceptosBasicos = () => {
//     return (
//         <div>
//             <h2>Conceptos Básicos</h2>
//             <Router>
//                 <Switch>
//                  <Route exact path='/'>
//                     <h3>Home</h3>
//                     <p>Bienvenidos al tema de las rutas en React</p>
//                  </Route>
//                  <Route exact path= '/acerca'>
//                     <Acerca />
//                  </Route>
//                  <Route exact path = '/contacto'>
//                     <Contacto />
//                  </Route>
//                 </Switch>
//             </Router>
//         </div>
//     );
// };

export default ConceptosBasicos;