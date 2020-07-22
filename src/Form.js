import React from 'react'

export default function Form(props) {

    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className= 'form container' onSubmit = {onSubmit}>
            <div className= 'form-group submit'>
                <h2>Add Teammate</h2>
                <button disabled = { !values.name || !values.email || !values.role }>submit</button>
            </div>
            <div className = 'form-group inputs'>
            <label htmlFor = 'NameInput'>Name:&nbsp;
                <input
                id = 'nameInput'
                name = 'name'
                type = 'text'
                placeholder = 'Enter Name'
                maxLength = '20'
                value = {values.username}
                onChange = {onChange}
                />
                </label>

            <label htmlFor = 'emailInput'>Email:&nbsp;
                <input
                    id = 'emailInput'
                    name = 'email'
                    type = 'email'
                    placeholder = 'Enter email'
                    maxLength = '25'
                    value = {values.email}
                    onChange = {onChange}
                    />
            </label>
                
            <label>Role:&nbsp;
            <select name = 'role' value = {values.role} onChange = {onChange}>
            <option value = ''>Select a role</option>
            <option value = 'Student'>Student</option>
            <option value = 'Instructor'>Instructor</option>
            <option value = 'TL'>Team Lead</option>
            </select>
            </label>
            </div>
            </form>
    )
}