import React, {useState, useEffect, useCallback} from 'react'
import { useDropzone} from 'react-dropzone'
import './Dropzone.css'
import {BsCloudUpload} from 'react-icons/bs'
import { SingleFileUploadProgress } from './drop/SingleFileUploadProgress';
import { Grid, Typography } from '@material-ui/core'
import { useField } from 'formik';
import { UploadError } from './drop/UploadError';

let currentId = 0;

function getNewId() {
  // we could use a fancier solution instead of a sequential ID :)
  return ++currentId + Date.now;
}

export default function Dropzone({ name }) {
  const [field, meta, helpers] = useField(name)

  const [files, setFiles] = useState([])
  const onDrop = useCallback((accFiles, rejFiles) => {
    const mappedAcc = accFiles.map((file) => ({file, errors: [], id: getNewId()}))
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles])
  }, [])
  
  useEffect(() => {
    const ac = new AbortController();
    helpers.setValue(files,  {signal: ac.signal})
    return () => ac.abort()
  }, [files])

  useEffect(
    () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  function onUpload(file, url){
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url}
        }
        return fw
    })
    )
  }

  // delete file uploaded
  function onDelete(file) { 
      setFiles((curr) => curr.filter((fw) => fw.file !== file))  
  }
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop, 
    accept: ['image/*', '.pdf', '.doc', '.docx', '.html', '.txt', '.pdf', '.xls'],
  })

  return (
    <React.Fragment>
      <Grid item>
        <div
          {...getRootProps()}
          className= {`dropzone ${isDragActive ? 'active' : null}`}
        >
          <input {...getInputProps()} ></input>
          <div className="title-container">
            <div className='icon'><BsCloudUpload size={80} style={{ fill: '#9e9e9e' }} /></div>
            <div className='icon-title'>
              <Typography variant="h5" gutterBottom color="textSecondary" >
                Seleccione los archivos
              </Typography>
              <Typography variant="h6" gutterBottom color="textSecondary">
                O arrastre y suelte
              </Typography>
            </div>
          </div>
        </div>
      </Grid>

      {/* {JSON.stringify(files)}  */}

          {files.map((fileWrapper, index) => {
              return (
                <Grid item key={fileWrapper.id}>
                  {fileWrapper.errors.length ? (
                    <UploadError
                      file={fileWrapper.file}
                      errors={fileWrapper.errors}
                      onDelete={onDelete}
                    />
                  ) : (
                      <SingleFileUploadProgress
                        onDelete={onDelete}
                        onUpload={onUpload}
                        file={fileWrapper.file}
                      />
                  )}
                </Grid>
              )
            })}
    </React.Fragment>
  )
}

