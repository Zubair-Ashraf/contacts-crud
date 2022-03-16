import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { ManageContacts } from 'routes/ManageContacts';

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<ManageContacts />} />
      <Route path='/contacts'>
        <Route path='' element={<ManageContacts />} />
        <Route path=':id' element={<ManageContacts />} />
      </Route>
    </Switch>
  );
};

export default Routes;
