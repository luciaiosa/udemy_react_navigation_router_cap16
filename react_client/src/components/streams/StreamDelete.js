import React from "react";
import Modal from "../modals/Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../reduxStore/actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  renderActions = () => {
    const { id } = this.props.match.params;
    // no puedo devolver dos buttons, sin estar dentro de un div, no es jsx valido!!!
    // para no romper los estilos, poniendo un div extra, uso React.Fragment!!
    return (
      // Esto es lo mismo que <React.Fragment>!!!
      <>
        {/* Utilizo arrow function en onClick, para que la accion no se llame siempre, sino cuando se pulsa el boton */}
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  };

  renderContent = () => {
    if (!this.props.stream) {
      return this.props.content;
    }

    return `Are you sure you want to delete the stream with the title: ${this.props.stream.title}?`;
  };
  render() {
    return (
      <Modal
        title="Delete stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
