import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './SwingBoard.module.scss'

import { Swing } from './Swing'

export const SwingBoard = ({ left, right }) => (
  <Container className={styles.container}>
    <Row>
      <Col xs={6}>
        <div>Left: {left}</div>
      </Col>
      <Col xs={6}>
        <div>Right: {right}</div>
      </Col>
    </Row>
    <Swing left={left} right={right} />
  </Container>
)
