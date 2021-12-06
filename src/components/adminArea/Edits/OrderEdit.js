import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

function OrderEdit(props) {
  return (
    <Edit title="Edit an Order" {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='orders' />
        <TextInput source='sideDishes' />
        <TextInput source='total' />
        <TextInput source='invoiceId' />
        <TextInput source='createdAt' />
      </SimpleForm>
    </Edit>
  )
}

export default OrderEdit
