import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { Form, Button } from 'semantic-ui-react';

import "./Footer-Newsletter.sass";

import classnames from "classnames";

import IconPlane from "react-icons/lib/io/ios-paperplane-outline";

class FooterNewsletter extends Component {

  renderField = ({ input, placeholder, type, meta: { error } }) => (
    <input {...input} className={classnames("footer-newsletter__input", { "-error": error })} type={type} placeholder={placeholder} />
  )

  render() {
    const { newsletter, handleSubmit, pristine, submitting, stateNewsletter } = this.props;
    return (
      <div className="footer-newsletter" >
        <h3 className="footer-newsletter__title">{newsletter.title}</h3>
        <div className="footer-newsletter__content">
          <Form className="footer-newsletter__form" onSubmit={handleSubmit} loading={stateNewsletter.loading}>
            <div className="footer-newsletter__inputbox">
              <Field name="email" type="email" component={this.renderField} placeholder={newsletter.input.placeholder} />
              <Button className="footer-newsletter__button" type="submit" disabled={pristine || submitting}>
                <IconPlane size={30} />
              </Button>
            </div>
            {
              stateNewsletter.errors.global ?
                <div className="footer-newsletter__alert">{stateNewsletter.errors.global}</div> :
                ""
            }
          </Form>
        </div>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (values.email) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = {
        message: "Invalid email address"
      }
    }
  }
  return errors;
}

export default reduxForm({ form: "newsletter", validate })(FooterNewsletter);
