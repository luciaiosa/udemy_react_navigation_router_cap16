import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../reduxStore/actions";
import StreamForm from "./StreamForm";
import _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  // props tiene history, location, match que vienen de Route component (en App: StreamEdit está siendo renderizado por Route component)
  // el id del stream lo cogemos de props.match.params (id o el nombre que hayamos puesto en path, :id)

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          // En caso de que no se quiera pasar todo el objeto como prop, initialValues={this.props.stream}, porque la API no permite pasar datos como id, userId:
          // initialValues={{title: this.props.stream.title, description: this.props.stream.description )} es lo mismo que:
          initialValues={_.pick(this.props.stream, "title", "description")}
        ></StreamForm>
      </div>
    );
  }
}

// mapStateToProps SIEMPRE RECIBE state, pero puede recibir his own component state too!!!
const mapStateToProps = (state, ownProps) => {
  console.log(state.streams[ownProps.match.params.id]);
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
