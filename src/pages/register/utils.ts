import * as Yup from 'yup'

export const FormSchema = Yup.object().shape({
  username: Yup.string().min(4, 'Too Short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
})
