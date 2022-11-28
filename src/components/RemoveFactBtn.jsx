import React from 'react'
import { Button } from '@material-tailwind/react'

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

export default RemoveFactBtn
