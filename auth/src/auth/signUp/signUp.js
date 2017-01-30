import React, {Component,PropTypes} from 'react'
import { connect } from 'react-redux'
import { Field,reduxForm } from 'redux-form'
import { Grid,Col,ControlLabel,FormGroup,Button } from 'react-bootstrap'
import {signUp} from '../authActions'

const inputFields = [
  {
    id: 1,
    name: 'email',
    type: 'email',
    tag: 'input',   
    label: 'Email:',
    placeholder: 'Enter a email',
    error: 'Email is required'
  },
  {
    id: 2,
    name: 'password',
    type: 'password',
    tag: 'input',
    label: 'Password:',
    placeholder: 'Enter a password',
    error: 'Password is required'
  },
  {
    id: 3,
    name: 'confirmPassword',
    type: 'password',
    tag: 'input',
    label: 'Confirm Password:',
    placeholder: 'Enter a password',
    error: 'Password is required'
  }
]

const validate = values => {
  const errors = {}
  inputFields.forEach(field => {
    if (!values[field.name]) {
      errors[field.name] = field.error
    }
  })
  if (values.password !== values.confirmPassword) {
    errors['confirmPassword'] = 'Passwords must match'
  }
  return errors
}

class SignUp extends Component {
  onSignUp(user) {
    const { email, password } = user
    this.props.signUp(email,password)
  }

  renderField() {
    return inputFields.map(field => (
      <Field key={field.id} {...field} component={this.fieldRenderComponent} />
    ))
  }

  renderErrorMessage() {
    if (this.props.serverError) {
      return(
        <div className="text-danger">
          {this.props.errorMessage}
        </div>
      )
    }
  }

  fieldRenderComponent(props) {
    const { meta: {touched,error,warning},input } = props
    return (
      <FormGroup className={touched && error ? 'has-error':'' || touched && warning ? 'has-warning':''}>
        <ControlLabel htmlFor={input.name}>{props.label}</ControlLabel>
          <props.tag {...props.input} className="form-control" type={props.type} placeholder={props.placeholder}/>
          {touched && ((error && <p className="text-danger">{error}</p>) || (warning && <p className="text-warning">{warning}</p>))}
      </FormGroup>
    )
  }

  render() {
    const { handleSubmit,submitting } = this.props
    return (
      <div>
        <Grid>
          <Col md={6} mdOffset={3}>
            <form onSubmit={handleSubmit(this.onSignUp.bind(this))}>
              <h4 className="text-center">Sign Up</h4>
              {this.renderField()}
              {this.renderErrorMessage()}
              <div className="text-right">
                <Button bsStyle="primary" type="submit" disabled={submitting}>SignUp</Button>
              </div>
            </form>
          </Col>
        </Grid>
      </div>
    )
  }
}

SignUp.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  serverError: PropTypes.bool,
  errorMessage: PropTypes.string,
  signUp: PropTypes.func
}

const mapStateToProps = ({auth}) => {
  return {
    serverError: auth.serverResponse,
    errorMessage: auth.error
  }
}

export default connect(
  mapStateToProps,
  { signUp }
)(reduxForm({ form:'signup',validate,touchOnBlur:false })(SignUp))
