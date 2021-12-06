import React from 'react';
import { Edit, SimpleForm, TextInput, ImageInput, ImageField } from 'react-admin';

function MenuEdit(props) {
  return (
    <Edit title="Edit an menu" {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput multiline source='description' />
        <TextInput source='price' />
        <TextInput source='imgUrl' />
      </SimpleForm>
    </Edit>
  )
}

export default MenuEdit
