import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

function SideDishesList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="price" />
        <TextField source="additives" />
        <TextField source="menu_id" />
        <TextField source="order_id" />
        <EditButton basePath="/sideDishes" />
        <DeleteButton basePath="/sideDishes" />
      </Datagrid>
    </List> 
  )
}

export default SideDishesList
