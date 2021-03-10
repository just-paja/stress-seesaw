import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import { CollectionForm } from './CollectionForm'
import { SwingBoard } from './SwingBoard'

import styles from './App.module.css'

const countWeight = objects =>
  objects.reduce((aggr, obj) => aggr + parseInt(obj.weight, 10), 0)

function App () {
  const [requests, setRequests] = useState({ data: [] })
  const [resources, setResources] = useState({ data: [] })
  console.log(requests, resources)

  const requestsWeight = countWeight(requests.data)
  const resourcesWeight = countWeight(resources.data)
  return (
    <div>
      <div className={styles.forms}>
        <Container>
          <h1>Stress swing</h1>
          <Row>
            <Col lg={6}>
              <h2>Requirements</h2>
              <CollectionForm onSubmit={setRequests} collection={requests} />
            </Col>
            <Col lg={6}>
              <h2>Resources</h2>
              <CollectionForm onSubmit={setResources} collection={resources} />
            </Col>
          </Row>
        </Container>
      </div>
      <SwingBoard left={requestsWeight} right={resourcesWeight} />
    </div>
  )
}

export default App
