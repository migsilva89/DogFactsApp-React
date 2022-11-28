import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import FactsListComponent from './components/FactsListComponent'
import AddFact from './components/AddFact'
import Header from './components/Header'
import RemoveFactBtn from './components/RemoveFactBtn'
import LoadingComponent from './components/LoadingComponent'

function App() {
  const [facts, setFacts] = useState([])
  const [checked, setChecked] = useState([])
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [inputError, setInputError] = useState(false)

  const sleep = async () => new Promise((resolve) => setTimeout(resolve, 1000))

  const handleFactsApiRequest = async () => {
    setIsLoading(true)
    const { data } = await axios({
      method: 'GET',
      url: 'https://dog-api.kinduff.com/api/facts?number=5',
    })
    setFacts(data.facts)
    await sleep()
    setIsLoading(false)
  }

  useEffect(() => {
    handleFactsApiRequest()
  }, [])

  const addFact = (fact) => {
    setFacts((prevFacts) => {
      return [...prevFacts, fact]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputError(false)
    if (text !== '' && text.length > 30 && text.indexOf(' ') >= 0) {
      addFact(text)
      setText('')
    } else {
      setInputError(true)
    }
  }

  const handleChange = (e) => {
    let updatedList = [...checked]
    if (e.target.checked) {
      updatedList = [...checked, e.target.value]
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1)
    }
    setChecked(updatedList)
  }

  const handleRemoveFact = () => {
    const factsToDeleteSet = new Set(checked)
    const filteredFacts = facts.filter((fact) => {
      return !factsToDeleteSet.has(fact)
    })

    setFacts(filteredFacts)
    setChecked([])
  }

  return (
    <main className="max-w-7xl mx-auto my-16">
      <Header />
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <section>
          <FactsListComponent
            facts={facts}
            checked={checked}
            setChecked={setChecked}
            handleChange={handleChange}
            isLoading={isLoading}
          />
        </section>
      )}
      <AddFact
        handleSubmit={handleSubmit}
        text={text}
        setText={setText}
        isLoading={isLoading}
        inputError={inputError}
        setInputError={setInputError}
      />
      <RemoveFactBtn
        handleRemoveFact={handleRemoveFact}
        checked={checked}
        isLoading={isLoading}
      />
    </main>
  )
}

export default App
