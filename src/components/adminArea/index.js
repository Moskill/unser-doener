import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from '../../dataProvider';

import MenuList from './Lists/MenuList';
import UserList from './Lists/UserList';
import SideDishesList from './Lists/SideDishesList';
import MenuSideDishesList from './Lists/MenuSideDishesList';

import OrderList from './Lists/OrderList';
import MenuCreate from './Creators/MenuCreate';
import SideDishCreate from './Creators/SideDishCreate';
import OrderCreate from './Creators/OrderCreate';

import MenuEdit from './Edits/MenuEdit';
import OrderEdit from './Edits/OrderEdit';
import SideDishEdit from './Edits/SideDishEdit';
import UserEdit from './Edits/UserEdit';


function AdminArea() {

  return (
    <>
      <Admin dataProvider={dataProvider}>
        <Resource name='menu' list={MenuList} create={MenuCreate} edit={MenuEdit} />
        <Resource name='users' list={UserList} edit={UserEdit}/>
        <Resource name='sideDishes' list={SideDishesList} create={SideDishCreate} edit={SideDishEdit} />
        <Resource name='menuSideDishes' list={MenuSideDishesList} />
        <Resource name='orders' list={OrderList} create={OrderCreate} edit={OrderEdit} />
      </Admin>
    </>
  )
}

export default AdminArea
