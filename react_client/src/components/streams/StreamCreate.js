import React from "react";
// Field is a component, reduxForm is a methos. That's why one starts with mayus, other with minus
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    // return (
    //   <input
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value}
    //   />
    // );
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    // Es lo mismo que esto, pero usando destructuring, asigna a esas props los valores de formProps.input
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  // ANTIGUO
  // onSubmit(event) {
  //   event.preventDefault();
  // }

  // NUEVO, CON REDUX-FORM!! ya no hace falta poner event, ni event.preventDefault(), sino pasarle los props
  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    console.log(this.props);
    return (
      // En lugar de onSubmit={this.onSubmit}, lo que tenía hasta ahora, se convierte en: onSubmit={this.props.handleSubmit(this.onSubmit)} por redux-form handleSubmit!!!
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        {/* Como label es un prop que Field no conoce, se lo va a pasar al metodo renderInput!!!
        Si necesito más parametros para este metodo, sólo los paso como props al componente Field!!! */}
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  let errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

// reduxForm va a devolver una función, e inmediatamente la llamamos con StreamCreate
export default reduxForm({
  // streamCreate es el nombre del form, que va a ser generalmente el proposito de este, con mayus o minus, no importa
  form: "streamCreate",
  // pasarle a reduxForm validate function that we just created
  validate
})(StreamCreate);
