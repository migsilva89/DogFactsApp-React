import React from 'react'
import SingleFactComponent from './SingleFactComponent'

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

export default FactsListComponent
