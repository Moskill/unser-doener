import React from 'react';
import { Edit, SimpleForm, TextInput, ImageInput, ImageField } from 'react-admin';

function UserEdit(props) {
  return (
    <Edit title="Edit an user" {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='first_name' />
        <TextInput source='last_name' />
        <TextInput source='street' />
        <TextInput source='house_no' />
        <TextInput source='city' />
        <TextInput source='zip' />
        <TextInput source='phone' />
        <TextInput source='email' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit
