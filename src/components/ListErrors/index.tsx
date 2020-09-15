import React from 'react'
import { isNil } from 'ramda'

type IProps = {
  errors: { [key: string]: string[] | undefined } | undefined
}

export function ListErrors({ errors }: IProps) {
  if (isNil(errors)) {
    return null
  }

  return (
    <ul className="error-messages">
      {Object.keys(errors).map((key) => {
        return (
          <li key={key}>
            {key} {errors[key]}
          </li>
        )
      })}
    </ul>
  )
}
