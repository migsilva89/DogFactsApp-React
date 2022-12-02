import React from 'react'
import SingleFactComponent from './SingleFactComponent'
import PropTypes from 'prop-types'

function FactsListComponent(props) {
  return (
    <section className="space-y-5 mx-8">
      {props.facts.map((fact, index) => (
        <SingleFactComponent
          fact={fact}
          index={index + 1}
          key={fact + '_' + index}
          setChecked={props.setChecked}
          checked={props.checked}
          handleChange={props.handleChange}
        />
      ))}
    </section>
  )
}

FactsListComponent.propTypes = {
  facts: PropTypes.array.isRequired,
  checked: PropTypes.array.isRequired,
  setChecked: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default FactsListComponent
