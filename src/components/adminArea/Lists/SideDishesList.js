import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

function SideDishesList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="additives" />
        <EditButton basePath="/sideDishes" />
        <DeleteButton basePath="/sideDishes" />
      </Datagrid>
    </List> 
  )
}

export default SideDishesList
