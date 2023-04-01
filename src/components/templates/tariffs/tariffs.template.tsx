import Image from 'next/image'
import {useState} from 'react'
import {Header} from '@/src/components/header'
import {History} from '@mui/icons-material'
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

import {useTariffs} from './hooks/useTariffs'
import {DICTIONARY} from '@/src/utils/dictionary/dictionary.util'
import {TaxHistoryModal} from './components/TaxHistoryModal'
import * as Styles from './tariffs.styles'

export function TariffsTemplate() {
  const [open, setOpen] = useState(false)
  const [selectedTaxId, setSelectedTaxId] = useState<string | null>(null)

  const handleOpen = (taxId?: string) => {
    if (taxId) {
      setSelectedTaxId(taxId)
    }
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const {data, isLoading, isError, error} = useTariffs()

  if (isError) {
    return <p>{JSON.stringify(error)}</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Styles.Container>
      <Styles.Content>
        <Header title="Tarifas" />
        <Styles.Main>
          <Styles.StandardRates>
            <Typography variant="h6">Tarifas padrão</Typography>
            <Styles.ContentStandardRates>
              {data.results.map((result, index) => (
                <Styles.Information key={result._id}>
                  <Typography>{DICTIONARY[result.type]}</Typography>
                  <Styles.EditableValue>
                    <Typography>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(result.price)}
                    </Typography>
                    <IconButton onClick={() => handleOpen(result._id)}>
                      <History color="inherit" />
                    </IconButton>
                  </Styles.EditableValue>
                </Styles.Information>
              ))}
            </Styles.ContentStandardRates>
          </Styles.StandardRates>

          <Styles.PartnerRates>
            <Styles.PartnerRatesHead>
              <Typography variant="body1">Tarifas por parceiro</Typography>
            </Styles.PartnerRatesHead>
            <TableContainer sx={{height: '85%'}}>
              <Table
                sx={{
                  tr: {
                    '&:hover': {background: '#f5f5f5'},
                  },
                }}
                stickyHeader
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Parceiros</TableCell>
                    <TableCell>Configuração</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow onClick={() => handleOpen()}>
                    <TableCell>Nickelpay</TableCell>
                    <TableCell>Personalizado</TableCell>
                    <TableCell>
                      <IconButton>
                        <Image
                          src="/rightArrowIcon.svg"
                          alt="seta para a direita"
                          width={10}
                          height={10}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Styles.PartnerRates>
        </Styles.Main>
      </Styles.Content>
      {selectedTaxId && (
        <TaxHistoryModal
          onClose={handleClose}
          open={open}
          taxId={selectedTaxId}
        />
      )}
    </Styles.Container>
  )
}
