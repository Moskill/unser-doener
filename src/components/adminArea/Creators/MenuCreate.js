import React from 'react';
import { Create, SimpleForm, TextInput, ImageInput, ImageField } from 'react-admin';

function MenuCreate(props) {
  return (
    <Create title="Create an menu" {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput multiline source='description' />
        <TextInput source='price' />
        <ImageInput source='menu' accept='image/*' name="imageUpload">
          <ImageField source='upload' />
        </ImageInput>
      </SimpleForm>
    </Create>
  )
}

export default MenuCreate
