import React from 'react';

class GoogleAuth extends React.Component {
    /* Necesitamos que se inicialice la librería una sola vez, cuando el componente esté renderizado por primera vez: */
    componentDidMount() {
        // buscar gapi documentation para más info sobre Google API (authentication)
        window.gapi.load('client:auth2', () => {
            // callback que se ejecuta cuando esa parte de la librería se ha cargado 
            window.gapi.client.init({
                clientId: '686641988371-qmcoa4uprps2vv7gi1tg7368nvaea959.apps.googleusercontent.com',
                // scope representa los datos que queramos del usuario (email, profile, ...)
                scope: 'email'
            })
        });
    }

    render() {
        return (
            <div>
                GoogleAuth
            </div>
        );
    }
  
}

export default GoogleAuth;