import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

function MenuSideDishesList(props) {
  return (
    <List {...props} >
      <Datagrid>
        <TextField source="m_id" />
        <TextField source="sd_id" />
      </Datagrid>
    </List>
  )
}

export default MenuSideDishesList
