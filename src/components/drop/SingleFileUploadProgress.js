import React, { useState, useEffect } from "react"
import { Grid, LinearProgress } from '@material-ui/core'
import { FileHeader } from "./FileHeader"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    margin: {
      marginBottom: "10px"
    },
  });

export function SingleFileUploadProgress({file, onDelete, onUpload}) {
    const classes = useStyles();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        async function upload() {
            const url = await uploadFile(file, setProgress)
            onUpload(file, url)
        }

        upload()
    }, [])

    return (
            <Grid item className={classes.margin}>
                <FileHeader file={file} 
                    onDelete={onDelete}
                />
                <LinearProgress variant="determinate" value={progress} />
                
            </Grid>
    )}

function uploadFile(file, onProgress) {
    const url = 'https://api.cloudinary.com/v1_1/demo/auto/upload';
    const key = 'docs_upload_example_us_preset';

    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', url)

        xhr.onload = () => {
            const resp = JSON.parse(xhr.responseText)
            res(resp.secure_url)
        }
        xhr.onerror = (evt) => rej(evt)
        xhr.upload.onprogress = (event) => {
            if(event.lengthComputable) {
                const percentage = (event.loaded/event.total)*100
                onProgress(Math.round(percentage))
            }
        } 

        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', key)

        xhr.send(formData)
    })
}