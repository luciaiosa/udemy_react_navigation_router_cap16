import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../reduxStore/actions";

class GoogleAuth extends React.Component {
  /* Necesitamos que se inicialice la librería una sola vez, cuando el componente esté renderizado por primera vez: */
  componentDidMount() {
    // buscar gapi documentation para más info sobre Google API (authentication)
    window.gapi.load("client:auth2", () => {
      // callback que se ejecuta cuando esa parte adicional de la librería se ha cargado
      // client.init executes an asyncronous network request over to Google API Server in order to initialize our client
      // when we call load(), load only alows us to get a signal or a notification of when the loading process is complete by passing in a callback function
      window.gapi.client
        .init({
          clientId:
            "686641988371-qmcoa4uprps2vv7gi1tg7368nvaea959.apps.googleusercontent.com",
          // scope representa los datos que queramos del usuario (email, profile, ...)
          scope: "email"
          // when we call init(), we don't hahe to call a callback function, init() returns a Promise
        })
        .then(() => {
          // I get a reference to the auth object and save a reference to it in my component class!!
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // El componente llama el action creator signIn con el id del user como param,
  // el action creator devuelve un action con el type y el payload (userId)
  // que recibe el reducer y devuelve el nuevo estado, que incluye el userId!!

  onAuthChange = isSignedIn => {
    // call the appropiate action creator whether isSignedIn
    if (isSignedIn) {
      // cuando llamo este action creator, paso como parametro el id del user que está logeado
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
