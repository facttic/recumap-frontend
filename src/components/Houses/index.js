import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

export const HousesList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="address_locality" />
            <TextField source="address_neighborhood" />
            <TextField source="food_help" />
            <TextField source="healh_issues" />
        </Datagrid>
    </List>
);
