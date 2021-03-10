import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import React, { memo, useEffect } from 'react'

import { useForm, useFieldArray } from 'react-hook-form'

import styles from './CollectionForm.module.scss'

export const CollectionForm = memo(({ collection, onSubmit }) => {
  const { register, control, handleSubmit, watch } = useForm({
    defaultValues: collection
  })
  const { fields, append, remove } = useFieldArray({
    name: 'data',
    control
  })
  const data = watch(undefined, collection)
  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(collection)) {
      onSubmit(data)
    }
  }, [data])
  console.log(data)
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <ListGroup>
        {fields.map((item, index) => (
          <ListGroup.Item key={item.id}>
            <Form.Row>
              <Col xs={6}>
                <Form.Group controlId={`data[${index}].name`}>
                  <Form.Label srOnly>Name</Form.Label>
                  <Form.Control
                    name={`data[${index}].name`}
                    placeholder='Name'
                    ref={register()}
                    defaultValue={item.name}
                  />
                </Form.Group>
              </Col>
              <Col xs={3}>
                <Form.Group controlId={`data[${index}].weight`}>
                  <Form.Label srOnly>Weight</Form.Label>
                  <Form.Control
                    ref={register()}
                    placeholder='Weight'
                    defaultValue={item.weight}
                    name={`data[${index}].weight`}
                    type='number'
                    autoComplete='off'
                    min={0}
                  />
                </Form.Group>
              </Col>
              <Col xs={3}>
                <Button
                  variant='danger'
                  className={styles.deleteButton}
                  onClick={() => remove(index)}
                >
                  x
                </Button>
              </Col>
            </Form.Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button
        variant='secondary'
        onClick={() => append({ name: '', weight: 1 })}
      >
        Add
      </Button>
    </Form>
  )
})
