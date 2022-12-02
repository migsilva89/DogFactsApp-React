import React from 'react'
import { Button } from '@material-tailwind/react'
import PropTypes from 'prop-types'

function RemoveFactBtn(props) {
  return (
    <div className="mx-8">
      <Button
        color="red"
        onClick={props.handleRemoveFact}
        className="w-full"
        disabled={props.isLoading}
      >
        Remove {props.checked.length} selected facts
      </Button>
    </div>
  )
}

RemoveFactBtn.propTypes = {
  handleRemoveFact: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  checked: PropTypes.array.isRequired,
}

export default RemoveFactBtn
