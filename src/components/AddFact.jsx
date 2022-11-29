import React from 'react'
import { Button, Textarea } from '@material-tailwind/react'
import PropTypes from 'prop-types'
import Helper from './Helper'

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
            <Error/>
          ) : (
            <Helper/>
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

AddFact.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  inputError: PropTypes.bool.isRequired,
  setInputError: PropTypes.func.isRequired,
}

export default AddFact
