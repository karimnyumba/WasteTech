import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'

// import locationIcon from '@iconify/icons-mdi/map-marker-radius-outline'
// import phoneIcon from '@iconify/icons-mdi/phone-outline'
// import emailIcon from '@iconify/icons-mdi/email-multiple-outline'

// import facebookIcon from '@iconify/icons-mdi/facebook'
// import linkedinIcon from '@iconify/icons-mdi/linkedin'
// import twitterIcon from '@iconify/icons-mdi/twitter'

import './info.css'

const contactDetails = [
  {
    value: 'Dar es Salaam Tanzania.',
    // icon: locationIcon,
  },
  { value: '+255 764564578',  },
  { value: 'support@example.com',  },
]

const renderContactDetails = () =>
  contactDetails.map(detail => (
    <p key={detail.value} className="info-detail">
     {detail.value}
    </p>
  ))

// const renderIcons = () =>
//   [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
//     <Icon icon={icon} key={key} className="info-icon" />
//   ))

const Info = () => (
  <section className="info">
    <h2 className="info-h2">Waste Tech.</h2>

    <div className="info-details-container">{renderContactDetails()}</div>

    {/* <div className="info-icons-container">{renderIcons()}</div> */}
  </section>
)

export default Info
