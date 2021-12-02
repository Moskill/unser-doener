import React from 'react';

import { 
  List, 
  Datagrid, 
  TextField, 
  EditButton, 
  DeleteButton
} from 'react-admin';  

function MenuList(props) {
  console.log(props)

  return (
    <List {...props} > 
      <Datagrid>
        <TextField source='id' ></TextField>
        <TextField source='menus' ></TextField>
        <TextField source='sideDishes' ></TextField>
        <TextField source='total' ></TextField>
        <TextField source='invoiceId'></TextField>
        <EditButton basePath="/order" />
        <DeleteButton basePath="/order" />
      </Datagrid>
    </List>
  )
}

export default MenuList
