import React from 'react';
import { Admin, Resource } from 'react-admin';
import MenuList from './Lists/MenuList';
import UserList from './Lists/UserList';
import SideDishesList from './Lists/SideDishesList';
import MenuSideDishesList from './Lists/MenuSideDishesList';
import MenuCreate from './Creators/MenuCreate';
import SideDishCreate from './Creators/SideDishCreate'
import dataProvider from '../../dataProvider';

function AdminArea() {

  return (
    <>
      <Admin dataProvider={dataProvider}>
        <Resource name='menu' list={MenuList} create={MenuCreate} />
        <Resource name='users' list={UserList} />
        <Resource name='sideDishes' list={SideDishesList} create={SideDishCreate} />
        <Resource name='menuSideDishes' list={MenuSideDishesList} />
      </Admin>
    </>
  )
}

export default AdminArea
