import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AdressFormFormik from './AdressFormFormik';
import { Form, Formik } from 'formik';
import { CircularProgress } from '@material-ui/core'
import { object, string, array } from 'yup';
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Dualecto
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const stepsLabels = ['Ordene ahora'];


const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

export default function Checkout() {
  
  return (
        <FormikStepper
          initialValues={{
            files: [],
            name: '',
            lastName: '',
            email: '',
            message: ''
        }}
          onSubmit={async (values) => {
            await sleep(3000);
            console.log('values', values);
          }}
        >
          <FormikStep
            validationSchema={object().shape({
              files: array(),
              name: string().required('Ingrese su nombre'),
              lastName: string().required('Ingrese su apellido'),
              email: string().email().required('Ingrese una dirección de email'),
          })}
          >
            <AdressFormFormik />
          </FormikStep>
        </FormikStepper>
        
  )
}

export function FormikStep({ children }) {
  return <>{children}</>
}

export function FormikStepper({children, ...props}) {
  const [serverState, setServerState] = useState()
  const handleServerResponse = (ok, msg) => setServerState({ok, msg})
  const handleOnSubmit = (values, actions) => {
    axios({
      method: 'POST',
      url: 'https://translation-app-server.herokuapp.com/orders',
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
    }


  const classes = useStyles();

  const childrenArray = React.Children.toArray(children) 
  const [step, setStep] = useState(0)
  const currentChild = childrenArray[step]
  const [completed, setCompleted] = useState(false)

  function isLastStep(){
    return step === childrenArray.length - 1
  }

  return (
    <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
        <Paper className={classes.paper}>
          
            <React.Fragment>
            { step === stepsLabels.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    ¡Gracias por su pedido!
                  </Typography>
                  <Typography variant="subtitle1">
                    Le enviaremos un correo con el precio junto a la información necesaria; y por favor siéntase libre en respondernos.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                    <Formik { ...props} 
                      validationSchema={currentChild.props.validationSchema}
                      onSubmit={async (values, helpers) => {
                        if(isLastStep()) {
                          await props.onSubmit(values, helpers)
                          setCompleted(true)
                          handleOnSubmit(values)
                          setStep(1)
                        }
                         else {
                          setStep((s) => s + 1)
                          helpers.setTouched({});
                        }
                      }}>

                        {({ isSubmitting, handleSubmit }) => (
                        <Form onSubmit={handleSubmit} autoComplete="off" >
                          <Typography component="h1" variant="h4" align="center" gutterBottom >
                            Qué desea traducir:
                          </Typography>

                          {currentChild}
                          
                          <div className={classes.buttons}>
                          { step > 0 ? <Button 
                            type="button" 
                            disabled={isSubmitting}  
                            className={classes.button} 
                            color="primary" 
                            variant="contained" 
                            onClick={() => {
                              setStep((s) => s - 1)}}                          
                          >                    
                            Atrás
                          </Button> : null}

                          <Button startIcon={isSubmitting ? <CircularProgress size="1rem"/> : null} 
                            disabled={isSubmitting} 
                            className={classes.button} 
                            color="primary" 
                            variant="contained"
                            type="submit"
                          >
                            {isSubmitting ? 'Enviando' : isLastStep() ? "Enviar" : "Siguiente" }
            
                            
                            </Button>
                          </div>
                        </Form>
                        )}
                      </Formik>
                </React.Fragment>
            )}
          </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </React.Fragment>  
  )
}
