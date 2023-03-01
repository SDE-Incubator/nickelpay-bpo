import { Button } from '@/src/components/button'; 
import { Input } from '../../components/input'
import { CircularProgress } from '@mui/material';
import { useState } from 'react'
import  { SideLogo }  from '../../components/sideLogo'
import { Container, Form, StyleLink, ImageContainer } from "./login.styles";
import { useFormik } from 'formik';
import { loginFormValidation } from './login.schemas';
import { TloginForm } from './login';

export function LoginTemplate() {
  const [isLoading] = useState(false)

  const {handleSubmit, touched, errors, handleChange, handleBlur, values} = useFormik<TloginForm>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginFormValidation,
    onSubmit: values => {
     
    }
  })


  return (
    <Container>
      <SideLogo />

      <Form onSubmit={handleSubmit}>
        
        <ImageContainer src="https://source.unsplash.com/800x600/?face" alt="foto do usuario"/>
        <Input 
          label="Email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          
        />
          {touched.email && errors.email ? (
         <div className='errorRequired'>
            {errors.email}
          </div>
       ) : null}
 



        <Input 
          label="Senha"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          
        />

        {touched.password && errors.password ? (
         <div className='errorRequired'>{errors.password}</div>
       ) : null}
 


        <StyleLink href="/esqueci-senha">Esqueci minha senha</StyleLink>

        {
          isLoading ? < CircularProgress /> : <Button bghover='#303F9F' bgcolor='#756B6B' textcolor='#fff' width='8.8rem' type="submit" variant='contained'><span>Entrar</span></Button>
          
        }

      </Form>

    </Container>
  );
}
