import React, { FC, ReactElement } from 'react'
import { CardLabelProps } from '../utils/types'

const CardLabel: FC<CardLabelProps> = ({ label }): ReactElement => {
  return (
    <div className="bg-dark-gray text-white text-sm shadow px-2 py-1 rounded">
      {label}
    </div>
  )
}

export default CardLabel
