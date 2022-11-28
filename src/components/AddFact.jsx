import React from 'react'
import { Button, Textarea } from '@material-tailwind/react'

function AddFact(props) {
  return (
    <section>
      <form onSubmit={props.handleSubmit} className="mx-8">
        <div className="w-full mt-16">
          <Textarea
            onChange={(event) => {
              props.setText(event.target.value), props.setInputError(false)
            }}
            type="text"
            variant="outlined"
            value={props.text}
            label="Insert a fact about dogs"
            error={props.inputError}
            className="w-full"
            disabled={props.isLoading}
          />
          {props.inputError ? (
            <div className="text-red-400 text-xs">
              Please recheck your fact...
            </div>
          ) : (
            ''
          )}
          <Button
            disabled={props.isLoading}
            color="green"
            type="submit"
            className="h-1/2 w-full my-5"
          >
            Add fact
          </Button>
        </div>
      </form>
    </section>
  )
}

export default AddFact
