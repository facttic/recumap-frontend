import React from 'react';
import { List, Datagrid, TextField, BooleanField } from 'react-admin';

export const OrgList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name" />
            <TextField source="description" />
            <BooleanField source="public" />
            <TextField source="demographics" />
        </Datagrid>
    </List>
);
