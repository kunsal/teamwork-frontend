import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {
    state = { 
        data: {},
        errors: {}
     }

     validate = () => {
        const { error } = Joi.validate(this.state.data, this.schema, {abortEarly: false});
        if (!error) return null;
        const errors = {};
        for (let item of error.details) {
          errors[item.path[0]] = item.message
        }
        return errors;
      }
    
      validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = { [name]: this.schema[name]}
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
      }

      handleSubmit = e => {
        e.preventDefault();
        const errors  = this.validate();
        this.setState({errors: errors });
        if (errors) return;
        this.doSubmit();
      };

      handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
    
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data, errors })
      }

      renderSubmitButton = (label) => {
        return (<button type="submit" className="btn btn-primary" disabled={this.validate()}>
                    {label}
                </button>)
      } 

      renderInput = (name, label, type="text") => {
          const { data, errors } = this.state;
          return (
            <Input 
              name={name} 
              type={type} 
              id={name} 
              label={label} 
              value={data[name]} 
              onChange={this.handleChange} 
              error={errors === null ? null : errors[name]} 
            />
          )
      }

      renderSelect = (name, label, id, options) => {
        const { data, errors } = this.state;
          return <Select 
                    name={name}
                    id={id}
                    label={label}
                    options={options}
                    onChange={this.handleChange}
                    value={data[name]}
                    error={errors[name]}
                />
      }

    //   renderSelect = (name, label, id, options, optionKey, optionValue) => {
    //     return (
    //         <Select 
    //             name={name}
    //             id={id}
    //             label={label}
    //             options={options}
    //             optionKey={optionKey}
    //             optionValue={optionValue} 
    //             onChange={this.handleChange}
    //         />
    //     )
    //   }

}
 
export default Form;