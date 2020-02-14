import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../reduxStore/actions";

// El componente va a ser class porque quiero llamar el action creator fetchStreams en componentDidMount!!!

class StreamList extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchStreams();
  }

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  // Convierte el objeto a array de streams, porque es más fácil trabajar con un array a la hora de pintar un listado!!!
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
