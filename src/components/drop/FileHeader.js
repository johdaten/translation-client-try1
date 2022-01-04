import React from 'react'
import { Grid, Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

export function FileHeader({ file, onDelete }) {
    return (
    <Grid container justify="space-between" alignItems="center">
        <Grid item>{file.name}</Grid>
        <Grid item>
            <Button 
                variant="contained" 
                size="small" 
                onClick={()=>{onDelete(file)}}
                startIcon={<DeleteIcon />}
            >
                Eliminar
            </Button>
        </Grid>
    </Grid>
    )
}