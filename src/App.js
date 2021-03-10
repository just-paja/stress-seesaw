import { useState } from 'react'
import { CollectionForm } from './CollectionForm'
import { Swing } from './Swing'

import './App.css'

const countWeight = objects =>
  objects.reduce((aggr, obj) => aggr + obj.weight, 0)

function App () {
  const [requests, setRequests] = useState([])
  const [resources, setResources] = useState([])
  const requestsWeight = countWeight(requests)
  const resourcesWeight = countWeight(resources)
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Stress swing</h1>
        <CollectionForm onSubmit={setRequests} collection={requests} />
        <CollectionForm onSubmit={setResources} collection={resources} />
        <Swing left={requestsWeight} right={resourcesWeight} />
      </header>
    </div>
  )
}

export default App
