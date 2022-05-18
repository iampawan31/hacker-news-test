import moment from 'moment'
import React, { FC, ReactElement } from 'react'

const Footer: FC = (): ReactElement => {
  const currentYear = moment().format('YYYY')

  return (
    <div className="bg-white w-full py-4 flex justify-center items-center">
      <div>Pawan Kumar - {currentYear}</div>
    </div>
  )
}

export default Footer
