
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { Button } from "@/src/components/button";
import { Input } from "@/src/components/input";
import { useEffect, useState } from "react";
import { Container, Text, ContentButton } from "./recoverPassword.styles";
import { recoverPasswordCodeFormProps } from './recoverPassword';


export function RecoverPasswordCodeForm() {


    const [totalTimeInSeconds, setTotalTimeInSeconds] = useState( 60 )

    const minute = Math.floor(totalTimeInSeconds / 60)
    const seconds = totalTimeInSeconds % 60

    const router = useRouter()

    function handleResetTime() {
      setTotalTimeInSeconds(60)
    }

    function handleBack() {
      router.push("/entrar")
    }
  
    useEffect(() => {
        if(totalTimeInSeconds <= 0 ) {
            return
        }
        const timeOut = setTimeout(() => {
            setTotalTimeInSeconds(prevState => prevState - 1)
        }, 1000)

        return () => {
            clearTimeout(timeOut)
        }
    }, [totalTimeInSeconds])
    

    const {handleBlur, values, errors, touched, handleChange, handleSubmit} = useFormik<recoverPasswordCodeFormProps>({
      initialValues: {
        recoverCode: ''
      },
      validationSchema: Yup.object<recoverPasswordCodeFormProps>({
        recoverCode: Yup.string().required('Preencha o campo')
      }),
      onSubmit: values => {

      },
    })

    return (


      <Container>
        <Text>Digite o código que lhe enviamos por email</Text>
        <form onSubmit={handleSubmit}>

          <Input 
            label="Código de mudança de senha" 
            name='recoverCode'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.recoverCode}
          />

          {touched.recoverCode && errors.recoverCode ? (
            <div className='errorRequiredCode'>{errors.recoverCode}</div>
          ) : null}
                
          {
            totalTimeInSeconds === 0 ?  <ContentButton> <Button bghover='#F5F5F5' textcolor='black' onClick={handleResetTime}> reenviar código </Button> </ContentButton>  :
              (
                <div className="containerSeconds">
                  <span>{minute.toString().padStart(2, "0")}</span>
                    <span>:</span>
                    <span>{seconds.toString().padStart(2, "0")}</span>
                </div>
              )
          }
          <div className='containerButton'>
                
            <Button
              width='9.6rem'
              height='3rem'
              textcolor="#756B6B"
              bordercolor="#756B6B"
              variant='outlined'
              onClick={handleBack}
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
              type='submit'
            >
                
              Enviar
                
            </Button>
              
        </div>
        </form>

      </Container>
    )
}