import React from 'react';
import {
  Create,
  Datagrid,
  Edit,
  List,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  BooleanInput,
  NumberInput
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

export const HouseCreate = props => (
    <Create title="Agregar Hogar" {...props}>
	<SimpleForm>
	   <h2>Datos del Responsable</h2>
	   <TextInput label="Nombre del responsable" source="responsible_name" />
	   <TextInput label="Apellido del responsable" source="responsible_surname" />
	   <TextInput label="DNI del responsable" source="responsible_dni" />
	   <TextInput label="Teléfono del responsable" source="responsible_phone" />
	   <h2>Datos del Hogar</h2>
	   <TextInput label="Calle" source="address_street" />
	   <NumberInput label="Número" source="address_number" />
	   <TextInput label="Barrio" source="address_neighborhood" />
	   <TextInput label="Entre calles" source="address_between_streets" />
	   <TextInput label="Locality" source="address_locality" />
	   <NumberInput source="lat" />
	   <NumberInput source="long" />
	   <h2>Integrantes del hogar</h2>
	   <NumberInput label="Canidad de integrantes" source="number_of_members" />
	   <NumberInput label="Cantidad de menores en el hogar" source="number_of_minor_members" />
	   <NumberInput label="Cantidad de adultos en el hogar" source="number_of_older_members" />
	   <BooleanInput label="¿Algún problema de salud" source="healh_issues" />
           <h2>Ingresos</h2>
	   <BooleanInput label="¿Recibe Ingresos de la economía formal?" source="earnings_formal_economy" />
	   <BooleanInput label="¿Se vieron afectados sus ingresos por el Aislamiento Preventivo Obligatorio?" source="earnings_affected_isolation" />
	   <BooleanInput label="¿Recibe IFE?" source="family_emergency_plan" />
	   <BooleanInput label="¿Es beneficiarie de algún plan social?" source="benefited_by_social_plan" />
	   <h2>Necesidades</h2>
	   <BooleanInput label="¿Retira bolsón de comida en alguna institución educativa o municipal cercana a su domicilio?" source="attends_community_dining_room" />
	   <BooleanInput label="¿Asiste a algún comedor?" source="food_help" />
	</SimpleForm>
    </Create>
);

export const HouseShow = props => (
    <Show {...props}>
	 <SimpleShowLayout>
	   <h2>Datos del Responsable</h2>
	   <TextField label="Nombre del responsable" source="responsible_name" />
	   <TextField label="Apellido del responsable" source="responsible_surname" />
	   <TextField label="DNI del responsable" source="responsible_dni" />
	   <TextField label="Teléfono del responsable" source="responsible_phone" />
	   <h2>Datos del Hogar</h2>
	   <TextField label="Calle" source="address_street" />
           <TextField label="Número" source="address_number" />
	   <TextField label="Barrio" source="address_neighborhood" />
	   <TextField label="Entre calles" source="address_between_streets" />
	   <TextField label="Locality" source="address_locality" />
	   <TextField source="lat" />
	   <TextField source="long" />
	   <h2>Integrantes del hogar</h2>
	   <TextField label="Canidad de integrantes" source="number_of_members" />
	   <TextField label="Cantidad de menores en el hogar" source="number_of_minor_members" />
	   <TextField label="Cantidad de adultos en el hogar" source="number_of_older_members" />
	   <TextField label="¿Algún problema de salud" source="healh_issues" />
	   <h2>Ingresos</h2>
	   <TextField label="¿Recibe Ingresos de la economía formal?" source="earnings_formal_economy" />
	   <TextField label="¿Se vieron afectados sus ingresos por el Aislamiento Preventivo Obligatorio?" source="earnings_affected_isolation" />
	   <TextField label="¿Recibe IFE?" source="family_emergency_plan" />
	   <TextField label="¿Es beneficiarie de algún plan social?" source="benefited_by_social_plan" />
	   <h2>Necesidades</h2>
	   <TextField label="¿Retira bolsón de comida en alguna institución educativa o municipal cercana a su domicilio?" source="attends_community_dining_room" />
	   <TextField label="¿Asiste a algún comedor?" source="food_help" />
	 </SimpleShowLayout>
    </Show>
);

export const HouseEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
	   <h2>Datos del Responsable</h2>
	   <TextInput label="Nombre del responsable" source="responsible_name" />
	   <TextInput label="Apellido del responsable" source="responsible_surname" />
	   <TextInput label="DNI del responsable" source="responsible_dni" />
	   <TextInput label="Teléfono del responsable" source="responsible_phone" />
	   <h2>Datos del Hogar</h2>
	   <TextInput label="Calle" source="address_street" />
           <NumberInput label="Número" source="address_number" />
	   <TextInput label="Barrio" source="address_neighborhood" />
	   <TextInput label="Entre calles" source="address_between_streets" />
	   <TextInput label="Locality" source="address_locality" />
	   <NumberInput source="lat" />
	   <NumberInput source="long" />
	   <h2>Integrantes del hogar</h2>
	   <NumberInput label="Canidad de integrantes" source="number_of_members" />
	   <NumberInput label="Cantidad de menores en el hogar" source="number_of_minor_members" />
	   <NumberInput label="Cantidad de adultos en el hogar" source="number_of_older_members" />
	   <BooleanInput label="¿Algún problema de salud" source="healh_issues" />
           <h2>Ingresos</h2>
	   <BooleanInput label="¿Recibe Ingresos de la economía formal?" source="earnings_formal_economy" />
	   <BooleanInput label="¿Se vieron afectados sus ingresos por el Aislamiento Preventivo Obligatorio?" source="earnings_affected_isolation" />
	   <BooleanInput label="¿Recibe IFE?" source="family_emergency_plan" />
	   <BooleanInput label="¿Es beneficiarie de algún plan social?" source="benefited_by_social_plan" />
	   <h2>Necesidades</h2>
	   <BooleanInput label="¿Retira bolsón de comida en alguna institución educativa o municipal cercana a su domicilio?" source="attends_community_dining_room" />
	   <BooleanInput label="¿Asiste a algún comedor?" source="food_help" />

	</SimpleForm>
    </Edit>
);
