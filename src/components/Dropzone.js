import React, {useState, useEffect, useCallback, useRef} from 'react'
import { useDropzone} from 'react-dropzone'
import './Dropzone.css'
import {BsCloudUpload} from 'react-icons/bs';
import { RiFileUploadLine } from "react-icons/ri";
import { SingleFileUploadProgress } from './drop/SingleFileUploadProgress';
import { Grid, Typography } from '@material-ui/core'
import { useField } from 'formik';
import { UploadError } from './drop/UploadError';

let currentId = 0;

function getNewId() {
  // we could use a fancier solution instead of a sequential ID :)
  return ++currentId + Date.now;
}

export default function Dropzone({ name, isDangerFile }) {
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

  // Make sure to revoke the data uris to avoid memory leaks
  useEffect(
    () => {
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
          // shake-little
          // ${isDragActive ? ' active' : ''}
          className= {`dropzone ${isDangerFile ? 'upload-danger shake-little' : 'upload-success'} ${isDragActive ? ' active' : ''}`}
        >
          <input {...getInputProps()} ></input>
          <div className="title-container">
            <div className='icon'><RiFileUploadLine size={80} style={{ fill: '#9e9e9e' }} /></div>
            <div className='icon-title'>
              <div className='top-dropzone-text'>
                <Typography variant="h5" gutterBottom color="textSecondary" >
                  Subir archivos
                </Typography>
              </div>
              <div className='bottom-dropzone-text'>
                <Typography variant="h6" gutterBottom color="textSecondary">
                  tocando Aquí
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Grid>

      {/* {JSON.stringify(files)} */}
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

