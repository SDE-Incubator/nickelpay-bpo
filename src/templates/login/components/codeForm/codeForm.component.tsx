import {Form} from './codeForm.styles'
import {Button} from '@/src/components/button'
import {Input} from '../../../../components/input'
import {useFormik} from 'formik'
import {codeFormValidation} from './code.schemas'
import {codeFormProps, TCodeForm} from './codeForm'
import { Text } from '@/src/components/text'
import Link from 'next/link'
import Image from 'next/image'
import arrowLeft from '../../../../../public/arrow-left.svg'




export function CodeForm({onClickBack}: codeFormProps ) {

  const {handleSubmit, errors, handleChange, handleBlur, values} =
    useFormik<TCodeForm>({
      initialValues: {
        codeValidation: '',
      },
      validationSchema: codeFormValidation,
      onSubmit: async values => {
      },
    })


  return (
    <>
       <Form onSubmit={handleSubmit}>

          <Link onClick={onClickBack} href="/entrar"> 

            <Image 
              src={arrowLeft} 
              alt="voltar"
              width={20}
              
            /> 
            
          </Link>

          <Text 
            title="Foi enviado um email com o código de confirmação para o endereço nerytaynan@gmail.com. Por favor insira o código abaixo" 
            variant='body1' 
            marginbottom='2.5rem'
            margintop='2.5rem'
          
          />
          
          <Input
            label="Código de verificação"
            name="codeValidation"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.codeValidation}
            inputError={errors?.codeValidation}
          />

          <Button
            bghover="#303F9F"
            bgcolor="#756B6B"
            width="8.8rem"
            type="submit"
            variant="contained"
            margintop='2.5rem'
          
            >
              Entrar
          </Button>
      
      </Form>
    
    </>
  )
}
