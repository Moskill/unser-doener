import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

function UserList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="Fist_name" />
        <TextField source="last_name" />
        <TextField source="street" />
        <TextField source="house_no" />
        <TextField source="city" />
        <TextField source="zip" />
        <TextField source="phone" />
        <TextField source="email" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List> 
  )
}
export default UserList;