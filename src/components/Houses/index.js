import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Datagrid,
  Edit,
  List,
  Create,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  NumberInput,
  BooleanInput
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

export const HouseCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <NumberInput label="Resp. dni" source="responsible_dni" />
                </Grid>
                <Grid item xs={6}>
                    <TextInput label="Resp name" source="responsible_name" />
                </Grid>
                <Grid item xs={6}>
                    <TextInput label="Resp. surn" source="responsible_surname" />
                </Grid>
                <Grid item xs={6}>
                    <NumberInput label="Resp. phone" source="responsible_phone" />
                </Grid>
                <Grid item xs={6}>
                    <TextInput label="A.between" source="address_between_streets" />
                </Grid>
                <Grid item xs={6}>
                    <TextInput label="A.locality" source="address_locality"  />
                </Grid>
                <Grid item xs={6}>
                    <TextInput label="A.nhood" source="address_neighborhood" />
                </Grid>
                <Grid item xs={6}>
                    <NumberInput label="A.number" source="address_number" />
                </Grid>
                <Grid item xs={12}>
                    <TextInput label="A.street" source="address_street" />
                </Grid>
                <Grid item xs={12}>
                <BooleanInput
                    source="benefied_by_social_plan"
                />
                <BooleanInput
                    source="attends_community_dining_room"
                />
                </Grid>
                <Grid item xs={6}>
                    <NumberInput source="lat" />
                </Grid>
                <Grid item xs={6}>
                    <NumberInput source="long" />
                </Grid>
                <Grid item xs={12}>
                    <BooleanInput source="earnings_affected_isolation" /> 
                    <BooleanInput source="earnings_formal_economy" />
                    <BooleanInput source="family_emergency_plan" />
                    <BooleanInput source="food_help" />
                    <BooleanInput source="health_issues" />
                </Grid>
                <Grid item xs={6}>
                    <NumberInput label="N.members" source="number_of_members" />
                </Grid>
                <Grid item xs={6}>
                    <NumberInput label="N.minors" source="number_of_minor_members" />
                </Grid>
                <Grid item xs={12}>
                    <NumberInput label="N.olders" source="number_of_older_members" />
                </Grid>
            </Grid>
        </SimpleForm>
    </Create>
);


export const HouseEdit = (props) => (
    <Edit {...props}>
         <SimpleForm>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <TextInput label="A.between" source="address_between_streets" />
                </Grid>
                <Grid item xs={6}>
                    <TextInput label="A.locality" source="address_locality"  />
                </Grid>
                <Grid item xs={6}>
                    <TextInput label="A.nhood" source="address_neighborhood" />
                </Grid>
                <Grid item xs={6}>
                    <NumberInput label="A.number" source="address_number" />
                </Grid>
                <Grid item xs={12}>
                    <TextInput label="A.street" source="address_street" />
                </Grid>
                <Grid item xs={12}>
                <BooleanInput
                    source="benefied_by_social_plan"
                />
                <BooleanInput
                    source="attends_community_dining_room"
                />
                </Grid>
                <Grid item xs={6}>
                    <NumberInput source="lat" />
                </Grid>
                <Grid item xs={6}>
                    <NumberInput source="long" />
                </Grid>
                <Grid item xs={12}>
                    <BooleanInput source="earnings_affected_isolation" /> 
                    <BooleanInput source="earnings_formal_economy" />
                    <BooleanInput source="family_emergency_plan" />
                    <BooleanInput source="food_help" />
                    <BooleanInput source="health_issues" />
                </Grid>
                <Grid item xs={6}>
                    <NumberInput label="N.members" source="number_of_members" />
                </Grid>
                <Grid item xs={6}>
                    <NumberInput label="N.minors" source="number_of_minor_members" />
                </Grid>
                <Grid item xs={12}>
                    <NumberInput label="N.olders" source="number_of_older_members" />
                </Grid>
                <Grid item xs={6}>
                    <NumberInput label="Resp. dni" source="responsible_dni" />
                </Grid>
                <Grid item xs={6}>
                    <TextInput label="Resp name" source="responsible_name" />
                </Grid>
                <Grid item xs={6}>
                    <TextInput label="Resp. surn" source="responsible_surname" />
                </Grid>
                <Grid item xs={6}>
                    <NumberInput label="Resp. phone" source="responsible_phone" />
                </Grid>
            </Grid>
        </SimpleForm>
    </Edit>
);
