import React from 'react'
import { Icon } from '@iconify/react'
import { TrashIcon } from "@heroicons/react/24/solid";

import './form.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Your name', placeholder: 'John Doe' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+01 234 567 8900',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },

]

const Form = () => (
  <form className="form">
    <h2 className="form-h2">Bin Locations</h2>
   {/* // Lists goes here */}

    {/* <Icon className="form-submit" icon={sendCircle} /> */}

    {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
  </form>
)

export default Form
