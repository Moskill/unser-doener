import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

function MenuCreate(props) {
  return (
    <Create title="Create an menu" {...props}>
      <SimpleForm>
        <TextInput source='menus' />
        <TextInput source='sideDihes' />
        <TextInput source='total' />
        <TextInput source='invoiceId' />
        <TextInput source='createdAt' />
      </SimpleForm>
    </Create>
  )
}

export default MenuCreate
