import {DialogContentText, Modal, Typography} from '@mui/material'
import {TaxHistoryModalProps} from './taxHistoryModal'
import * as Styles from './taxHistoryModal.styles'
import {Button} from '@/src/components/button'
import {useQuery} from '@tanstack/react-query'
import {getGeneralTaxHistoryById} from '@/src/services/customization/taxes/getGeneralTaxHistoryById/getGeneralTaxHistoryById.service'
import {DICTIONARY} from '@/src/utils/dictionary/dictionary.util'

export function TaxHistoryModal({onClose, open, taxId}: TaxHistoryModalProps) {
  const {data, isLoading, isError, error} = useQuery(
    ['taxHistoryById', taxId],
    async () => {
      const response = await getGeneralTaxHistoryById({id: taxId})
      console.log({response})
      const formattedHistory = response.results.map(history => {
        const type = DICTIONARY[history.type]
        const price = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(history.price)

        return {
          id: history._id,
          change: `${
            history.analyst_id?.name || 'Desconhecido'
          } alterou ${type} para ${price}`,
        }
      })

      return formattedHistory
    }
  )

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Styles.ContentModal>
        {isLoading && <p>Loading...</p>}
        {isError && <p>{JSON.stringify(error)}</p>}
        {!isLoading && !isError && (
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Histórico de alterações
            </Typography>

            <Styles.Changes>
              <Styles.UpdateInformation>
                <Styles.TextModal>Tarifas</Styles.TextModal>
                {data.map(tax => (
                  <div key={tax.id}>
                    <span>{tax.change}</span>
                  </div>
                ))}
              </Styles.UpdateInformation>
              <Styles.Footer>
                <Button
                  textcolor="#756B6B"
                  bordercolor="#756B6B"
                  width="10rem"
                  height="3rem"
                  onClick={onClose}
                >
                  Voltar
                </Button>
              </Styles.Footer>
            </Styles.Changes>
          </>
        )}
      </Styles.ContentModal>
    </Modal>
  )
}
