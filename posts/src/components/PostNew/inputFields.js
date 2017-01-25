export const inputFields = [
  {
    id: 1,
    name: 'title',
    type: 'input',
    label: 'Titulo',
    placeholder: 'My awesome title',
    error: 'El titulo del post es requerido'
  },
  {
    id: 2,
    name: 'categories',
    type: 'input',
    label: 'Categorias',
    placeholder: 'react,redux',
    error: 'Escribe por lo menos una categoria'
  },
  {
    id: 3,
    name: 'content',
    type: 'textarea',
    label: 'Contenido',
    placeholder: 'escribe algo...',    
    error: 'Escribe un breve contenido',
    warn : 'El post deberia tener mas de 20 caracteres.'
  }
]

export const validate = values => {
  const errors = {}
  inputFields.forEach(field => {
    if (!values[field.name]) {
      errors[field.name] = field.error
    }
  })
  return errors
}

export const warn = values => {
  const warnings = {}
  if (values.content && values.content.length > 3 && values.content.length < 20) {
    warnings.content = 'El post deberia tener mas de 20 caracteres.'
  }
  return warnings
}
