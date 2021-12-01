import React from 'react';

import { 
  List, 
  Datagrid, 
  TextField, 
  ImageField, 
  EditButton, 
  DeleteButton
} from 'react-admin';  

function MenuList(props) {
  console.log(props)

  return (
    <List {...props} > 
      <Datagrid>
        <TextField source='id' ></TextField>
        <TextField source='name' ></TextField>
        <TextField source='description' ></TextField>
        <TextField source='price' ></TextField>
        <TextField source='imgUrl'></TextField>
        <EditButton basePath="/menu" />
        <DeleteButton basePath="/menu" />
      </Datagrid>
    </List>
  )
}

export default MenuList
