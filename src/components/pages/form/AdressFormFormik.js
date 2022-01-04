import React from 'react';
import Grid from '@material-ui/core/Grid';
import Dropzone from '../../Dropzone';
import { Typography } from '@material-ui/core';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

export default function AdressFormFormik() {
    return (
        <React.Fragment>
        <Typography variant='button'  color='inherit'>
            {/* Suba sus documentos */}
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Dropzone name="files" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field fullWidth name="name" component={TextField} label="Nombre *" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field fullWidth name="lastName" component={TextField} label="Apellido *"/>
            </Grid>
            <Grid item xs={12}>
                <Field fullWidth name="email" type="email" component={TextField} label="Email *"/>
            </Grid>
            <Grid item xs={12} >
                <Field fullWidth  name="message"  variant="outlined" component={TextField} label="Idioma a traducir seguido de un mensaje *" multiline
          rows={4}/>
            </Grid>
            </Grid>
        </React.Fragment>
    )
}

