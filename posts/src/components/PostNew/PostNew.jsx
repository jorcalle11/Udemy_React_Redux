import React, { Component,PropTypes } from 'react'
import { FormGroup,Button,ButtonGroup,ControlLabel } from 'react-bootstrap'
import { Field,reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { createPost } from '../../actions/posts.action'
import { inputFields,validate,warn } from './inputFields'

class PostNew extends Component {

  handleCreatePost(post) {
    this.props.createPost(post)
      .then(() => this.context.router.push('/'))
  }

  componentField(props) {
    const { touched,error,warning } = props.meta
    const { name } = props.input
    return (
    <FormGroup className={touched && error ? 'has-error':'' || touched && warning ? 'has-warning':''}>
      <ControlLabel htmlFor={name}>{props.label}</ControlLabel>
        <props.type {...props.input} className="form-control" type={props.type} placeholder={props.placeholder}/>
        {touched && ((error && <p className="text-danger">{error}</p>) || (warning && <p className="text-warning">{warning}</p>))}
    </FormGroup>      
    )
  }

  renderField() {
    return inputFields.map(({id,name,type,label,placeholder}) => (
      <Field
        key={id}
        name={name}
        component={this.componentField}
        type={type}
        placeholder={placeholder}
        label={label}/>
    ))
  }

  render() {
    const { handleSubmit,reset,pristine,submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleCreatePost.bind(this))}>
        {this.renderField()}
        <ButtonGroup className="pull-right">
          <Link to={'/'} className="btn btn-danger" onClick={reset}>Cancelar</Link>
          <Button bsStyle="default" disabled={pristine || submitting} onClick={reset}>Limpiar</Button>
          <Button bsStyle="success" disabled={submitting} type="submit">Guardar</Button>
        </ButtonGroup>
      </form>
    )
  }
}

PostNew.contextTypes = {
  router: PropTypes.object
}

PostNew.propTypes = {
  createPost: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
}

export default connect(null,{ createPost })(reduxForm({ form: 'PostNew',validate,warn })(PostNew))
