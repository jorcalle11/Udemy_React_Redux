import React, {Component,PropTypes} from 'react'
import { connect } from 'react-redux'
import { Field,reduxForm } from 'redux-form'
import { Grid,Col,ControlLabel,FormGroup,Button } from 'react-bootstrap'
import { login } from '../authActions'

const inputFields = [
  {
    id: 1,
    name: 'email',
    type: 'email',
    tag: 'input',
    label:'Email:',
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
  }
]

const validate = values => {
  const errors = {}
  inputFields.forEach(field => {
    if(!values[field.name]) {
      errors[field.name] = field.error
    }
  })

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.'
  } 
  return errors
}

class SignIn extends Component {
  onLogin(user){
    const { email,password } = user
    this.props.login(email,password)
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

  renderField() {
    return inputFields.map(field => (
      <Field key={field.id} {...field} component={this.fieldRenderComponent}/>
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

  render() {
    const { handleSubmit,submitting } = this.props
    return (
      <div>
        <Grid>
          <Col md={6} mdOffset={3}>
            <form onSubmit={handleSubmit(this.onLogin.bind(this))}>
              <h4 className="text-center">Sign In</h4>
              {this.renderField()}
              {this.renderErrorMessage()}
              <div className="text-right">
                <Button bsStyle="success" type="submit" disabled={submitting}>Login</Button>
              </div>
            </form>
          </Col>
        </Grid>
      </div>
    )
  }
}

SignIn.propTypes ={
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  login: PropTypes.func,
  serverError: PropTypes.bool,
  errorMessage: PropTypes.string
}

const mapStateToProps = ({auth}) => {
  return {
    serverError: auth.serverResponse,
    errorMessage: auth.error
  }
}

export default connect(
  mapStateToProps,
  {login}
)(reduxForm({ form:'login',validate,touchOnBlur: false })(SignIn))
