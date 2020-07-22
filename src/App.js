import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import logo from './logo.svg';
import './App.css';
import Form from './Form'

const initialTeamList = [
  {
    id: uuid(),
    name: 'Leo',
    email: 'leo@leo.com',
    role: 'Web Designer'
  }
]

const initialValues = {
  name: '',
  email: '',
  role: '',
}

const AxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamList })
}

const AxiosPost = ( url, { name, email, role }) => {
  const newTeammate = { id: uuid(), name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeammate })
}

function App() {
  const [ team, setTeam ] = useState([])

  const [ formValues, setFormValues ] = useState(initialValues)

  const updateForm = ( inputName, inputValue ) => {
    setFormValues({ ...formValues, [inputName]:inputValue })
  }

 const submitForm = () => {
   const newTeammate = {
     name: formValues.name.trim(),
     email: formValues.email.trim(),
     role: formValues.role,
   }

   if (!newTeammate.name || !newTeammate.email || !newTeammate.role ) return

   AxiosPost('fakeapi.com', newTeammate)
    .then(res => {
      const mateFromAPI = res.data
      setTeam([ mateFromAPI, ...team ])
      setFormValues(initialValues)
    })
 }

 useEffect(() => {
   AxiosGet('fakeapi.com').then(res => setTeam(res.data))
 }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form
          values = {formValues}
          update = {updateForm}
          submit = {submitForm}
        />

        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

