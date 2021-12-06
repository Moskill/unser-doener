import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

function SideCreate(props) {
  return (
    <Create title="Create an side dish" {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput multiline source='description' />
        <TextInput source='price' />
      </SimpleForm>
    </Create>
  )
}

export default SideCreate
