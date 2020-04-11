import React from 'react';
import { Create, Edit, List, Datagrid, DateInput, DateField, EditButton, SimpleForm, TextField, TextInput, EmailField } from 'react-admin';

export const ResourceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);


export const ResourcePost = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="teaser" options={{ multiLine: true }} />
           
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
        </SimpleForm>
    </Create>
);

export const ResourceEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" />
            <TextInput multiline source="teaser" />
           
            <DateInput label="Publication date" source="published_at" />
         
                <Datagrid>
                    <TextField source="body" />
                    <DateField source="created_at" />
                    <EditButton />
                </Datagrid>
          
        </SimpleForm>
    </Edit>
);
