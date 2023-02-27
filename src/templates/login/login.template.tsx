import { ButtonStyles } from '@/src/components/button'; 
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
      console.log("values", values)
    }
  })


  return (
    <Container>
      <SideLogo />

      <Form onSubmit={handleSubmit}>
        <ImageContainer src="https://source.unsplash.com/800x600/?face" alt="foto do usuario"/>
        <Input 
          label="email"
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
          label="senha"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          
        />

        {touched.password && errors.password ? (
         <div className='errorRequired'>{errors.password}</div>
       ) : null}
 


        <StyleLink href="/esqueci-senha">Esqueci minha senha</StyleLink>

        {isLoading ? < CircularProgress /> : <ButtonStyles type="submit" variant='contained' title="Entrar"/>}

      </Form>

    </Container>
  );
}
