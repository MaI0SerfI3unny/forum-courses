import countries from '@/utils/country.json'
export const fieldsDefinition = [
  {
    labelId: 'login.email',
    fieldId: 'email',
    autoComplete: 'email',
    type: 'email',
  },
  {
    labelId: 'login.name',
    fieldId: 'name',
    autoComplete: 'username',
    type: 'text',
  },
  {
    labelId: 'login.country',
    fieldId: 'country',
    type: 'select',
    options: countries,
  },
  {
    labelId: 'login.password',
    fieldId: 'password',
    autoComplete: 'off',
    type: 'password',
  },
  {
    labelId: 'login.repeat_password',
    fieldId: 'repeatPassword',
    autoComplete: 'off',
    type: 'password',
  },
]
