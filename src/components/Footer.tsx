import moment from 'moment'
import React from 'react'

const Footer = () => {
  const currentYear = moment().format('YYYY')
  return (
    <div className="bg-white w-full py-4 flex justify-center items-center">
      <div>Pawan Kumar - {currentYear}</div>
    </div>
  )
}

export default Footer
