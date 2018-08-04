import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { Form, Button } from 'semantic-ui-react';

import './Contact-Form.sass';

import classnames from 'classnames';

class ContactForm extends Component {

  renderField = ({ input, name, placeholder, type, field, meta: { touched, error } }) => (
    <div className="contact-form__row">
      <label className="contact-form__label" htmlFor={name}>
        {
          (() => {
            switch (field) {
              case "INPUT":
                return <input {...input} className={classnames("contact-form__input", { "-error": touched && error })} id={name} type={type} placeholder={placeholder} />
              case "TEXTAREA":
                return <textarea {...input} className={classnames("contact-form__textarea", { "-error": touched && error })} id={name} type={type} placeholder={placeholder} />
            }
          })()
        }
      </label>
      {touched && error && <span className="contact-form__alert">{error.message}</span>}
    </div>
  )


  render() {
    const { contact, handleSubmit, pristine, submitting, stateContact } = this.props;
    const renderField = this.renderField;

    return (
      <div className="contact-form">
        <h3 className="contact-form__title">{contact.title}</h3>
        <div className="contact-form__content">
          <Form className="contact-form__form" onSubmit={handleSubmit} loading={stateContact.loading}>
            {contact.data.map((item, index) => (
              <Field key={index} name={item.name} type={item.type} field={item.field} component={renderField} placeholder={item.placeholder} />
            ))}
            <div className="contact-form__navigation">
              <Button className="contact-form__button" type="submit" disabled={pristine || submitting}>{contact.submit.text}</Button>
            </div>
            {
              stateContact.errors.global ?
                <div className="contact-form__alert">{stateContact.errors.global}</div> :
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

  console.log(values)

  Object.entries(values).forEach(([index, item]) => {
    switch (index) {
      case "email":
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(item)) {
          errors[index] = {
            message: `Invalid ${index} address`
          }
        }
        break;
      case "phone":
        if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(item)) {
          errors[index] = {
            message: `Invalid ${index} number`
          }
        }
        break;
    }
  })

  return errors;
}

export default reduxForm({ form: "contact", validate })(ContactForm);
