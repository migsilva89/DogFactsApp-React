import React from 'react'
import { Checkbox, Alert } from '@material-tailwind/react'
import PropTypes from 'prop-types'

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

SingleFactComponent.propTypes = {
  fact: PropTypes.string.isRequired,
  checked: PropTypes.array.isRequired,
  setChecked: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}

export default SingleFactComponent
