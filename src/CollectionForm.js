import { useForm, useFieldArray } from 'react-hook-form'

export const CollectionForm = ({ value, onSubmit }) => {
  const { register, control, handleSubmit } = useForm()
  const { fields, append, remove } = useFieldArray()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input
              name={`obj[${index}].name`}
              ref={register()}
              defaultValue={item.name}
            />
          </li>
        ))}
      </ul>
    </form>
  )
}
