import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

function SideDishEdit(props) {
  return (
    <Edit title="Edit side dish" {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput multiline source='description' />
        <TextInput source='price' />
      </SimpleForm>
    </Edit>
  )
}

export default SideDishEdit
