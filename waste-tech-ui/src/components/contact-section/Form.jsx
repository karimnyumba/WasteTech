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
    <ol>
      <li>National Examination Council</li>
      <li>College of Information and Communication Technology CoICT</li>
      <li>Institute of Social Work</li>
    </ol>
    <a href='http://wastemanage.azurewebsites.net/'>
      <h3>
        The AI Model For Waste Classification
      </h3>
    </a>
    <hr />
    <h1>Latest Transactions </h1>
    <a href='https://goerli.etherscan.io/tx/0x6e8ca8b23d5c67fbbf9077e578d2f905cac66db3c66f77510aace7868340d5c5'>
      Last Transactions
    </a>
    {/* <Icon className="form-submit" icon={sendCircle} /> */}

    {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
  </form>
)

export default Form
