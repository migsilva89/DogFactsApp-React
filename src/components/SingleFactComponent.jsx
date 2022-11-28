import React from 'react'
import { Checkbox, Alert } from '@material-tailwind/react'

function SingleFactComponent(props) {
  return (
    <div className="flex justify-between items-center">
      <Alert>
        {props.index} - {props.fact}
      </Alert>
      <Checkbox
        color="red"
        type="checkbox"
        value={props.fact}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default SingleFactComponent
