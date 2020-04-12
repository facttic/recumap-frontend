import React from 'react';
import {
  Datagrid,
  Edit,
  List,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput
} from 'react-admin';

export const HouseList = props => (
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


export const HouseShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="address_locality" />
            <TextField source="address_neighborhood" />
            <TextField source="food_help" />
            <TextField source="healh_issues" />
        </SimpleShowLayout>
    </Show>
);

export const HouseEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="address_locality" />
            <TextInput source="address_neighborhood" />
            <TextInput source="food_help" />
            <TextInput source="healh_issues" />
        </SimpleForm>
    </Edit>
);