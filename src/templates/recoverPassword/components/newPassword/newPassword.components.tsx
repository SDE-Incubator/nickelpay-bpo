
import { Button } from "@/src/components/button";
import { Input } from "@/src/components/input";
import { useRouter } from "next/router";
import { Text } from "@/src/components/text";


export function NewPassword() {

  const router = useRouter()

  function handleCancel() {
    router.push('/entrar')
  }

  return (
    <>

      <Text title='Redefinição de senha' 
        variant='h6' 
        marginbottom="1.2rem"
    
      />
      <Text title='Digite o código que foi enviado para seu email' 
        variant='body1'
        marginbottom="4.5rem"
      />

      <Input label="Nova senha"/>
      <Input label="Repetir nova senha"/>

      <div className="containerButton">
          <Button
            width="9.6rem"
            height="3rem"
            textcolor="#756B6B"
            bordercolor="#756B6B"
            variant="outlined"
            onClick={handleCancel}
          >
            Cancelar
          </Button>

          <Button
            bghover="#303F9F"
            bgcolor="#756B6B"
            textcolor="#fff"
            width="9.6rem"
            height="3rem"
            variant="contained" 
          >
            Alterar
          </Button>

      </div>
      
    </>
  )
}