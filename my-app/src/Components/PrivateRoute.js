import { Redirect, Route } from "react-router-dom";

// const PrivateRoute = (props) => {
//     return(
//         <Route exact={props.exact} path={props.path} component={props.component} />
//     );
// }; 



//Simular autenticación

let auth;
auth=true; // Para validar la autentificacion mover el true por debajo del null
auth=null;
                    // A component lo renombramos con mayuscula para poder llamarlo como un componente de React
const PrivateRoute = ({component:Component, ...rest}) => {
    return (<Route {...rest} >{auth? <Component/>:<Redirect to='/login'/> }</Route>
    );                         //Componente React: son de color verde y empiezan com mayusculas
};                             //Componentes JSX: son de color azul y se escriben con minúsculas

export default PrivateRoute;