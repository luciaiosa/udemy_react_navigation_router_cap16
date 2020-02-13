import React from "react";
// Field is a component, reduxForm is a methos. That's why one starts with mayus, other with minus
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    // return (
    //   <input
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value}
    //   />
    // );

    // Es lo mismo que esto, pero usando destructuring, asigna a esas props los valores de formProps.input
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    console.log(this.props);
    return (
      <form className="ui form">
        {/* Como label es un prop que Field no conoce, se lo va a pasar al metodo renderInput!!!
        Si necesito más parametros para este metodo, sólo los paso como props al componente Field!!! */}
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
      </form>
    );
  }
}

// reduxForm va a devolver una función, e inmediatamente la llamamos con StreamCreate
export default reduxForm({
  // streamCreate es el nombre del form, que va a ser generalmente el proposito de este, con mayus o minus, no importa
  form: "streamCreate"
})(StreamCreate);
