import axios from '../../axios'

export async function register({ name, email, password }) {
  console.log('register',  {name, email, password});
  return await axios.post('/users', {
    name,
    email,
    password
  })
}

export async function login({ email, password }) {
  return await axios.post('/login', {
    email,
    password
  })
}
