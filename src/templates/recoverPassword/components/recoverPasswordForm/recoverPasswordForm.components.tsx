import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from "@/src/components/input"
import { Text, Container} from "./recoverPassword.styles"
import { Button } from '@/src/components/button';
import { recoverPasswordFormProps, validationEmailProps } from './recoverPasswordForm';



export function RecoverPasswordForm ({onSubmit}: recoverPasswordFormProps) {

  const router = useRouter()
  
  function handleCancel() {
    router.push("/entrar")
  }


  const {handleBlur, values, errors, touched, handleChange, handleSubmit} = useFormik<validationEmailProps>({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object<validationEmailProps>({
      email: Yup.string().email('Email inválido').required('Email não pode ser vazio')
    }),
    onSubmit: values => {
      onSubmit()
    },
  })


  return (     
    <Container>        
      <Text variant='subtitle1'> Digite seu email de cadastro e lhe enviaremos as informações por email </Text>
      <form onSubmit={handleSubmit}>

        <Input 
          label="Email" 
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />   

        {touched.email && errors.email ? (
          <div className='errorRequiredEmail'>{errors.email}</div>
        ) : null}
  

        <div className='containerButton'>
                    
          <Button 
            width='9.6rem' 
              height='3rem' 
              textcolor="#756B6B"
              bordercolor="#756B6B"
              variant='outlined' 
              onClick={handleCancel}
            > 
              cancelar 
                    
          </Button>
        
          <Button 
            bghover='#303F9F' 
            bgcolor='#756B6B' 
            textcolor='#fff' 
            width='9.6rem' 
            height='3rem'
            variant='contained'
            type="submit"
          >
            
            Enviar
        
          </Button>  
        
        </div>
      </form>
        
    </Container>
      
  )
}