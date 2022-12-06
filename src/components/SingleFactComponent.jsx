import React from 'react'
import { Alert } from '@material-tailwind/react'
import PropTypes from 'prop-types'

function SingleFactComponent(props) {
  return (
    <div className="flex justify-between items-center">
      <Alert>
        {props.index} - {props.fact}
      </Alert>
      <div class="block">
        <div class="mt-2 hover:bg-gray-200 rounded-full m-2 px-2">
          <input
            type="checkbox"
            value={props.fact}
            onChange={props.handleChange}
            className="my-2"
          />
        </div>
      </div>
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
