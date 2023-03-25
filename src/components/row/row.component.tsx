import {useRef, useState} from 'react'
import {
  Box,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'

import {
  Permission,
  PermissionKey,
} from '@/src/templates/accessProfileDetails/accessProfileDetails'
import {
  ModulesAccessControlProps,
  SubmodulesProps,
} from '@/src/templates/accessProfileDetails/modulesAccessControl'
import * as Styles from './row.styles'
// import {DownArrowIcon, RightArrowIcon} from '@/public'
import {cloneDeep} from 'lodash'
import Image from 'next/image'

type RowProps = {
  item: ModulesAccessControlProps
  permissions: Permission[]
}

export function Row({item, permissions}: RowProps) {
  const [open, setOpen] = useState(false)
  const moduleItem = cloneDeep(item)

  const getCheckedGroup = (action: PermissionKey) => {
    if (!moduleItem) return false

    const {submodules} = moduleItem
    const currentSubmoduleLength = submodules.length
    let currentActionLength = 0

    for (const submodule of submodules) {
      getCheckedItem(submodule, action)
      if (submodule?.permissions?.includes(action)) {
        currentActionLength += 1
      }
    }
    const isActive = currentSubmoduleLength === currentActionLength

    return isActive
  }

  const getCheckedItem = (
    submodule: SubmodulesProps,
    action: PermissionKey
  ) => {
    const isActive = permissions.some(
      permission =>
        permission.action === action && submodule.id === permission.id
    )

    if (isActive) {
      const prevPermissions = submodule?.permissions
        ? submodule.permissions.filter(value => typeof value === 'string')
        : []
      const uniquePermissions = [...prevPermissions, action].filter(
        (value, index, self) => self.indexOf(value) === index
      )
      Object.assign(submodule, {
        checked: true,
        permissions: uniquePermissions,
      })
    }

    return isActive
  }

  return (
    <>
      <TableRow onClick={() => setOpen(!open)}>
        <TableCell sx={{border: 'none'}}>
          {moduleItem.name}
          <Styles.ButtonOpen onClick={() => setOpen(!open)}>
            {open ? (
              <Image src="/DownArrowIcon.svg" alt="" width={15} height={15} />
            ) : (
              <Image src="/RightArrowIcon.svg" alt="" width={15} height={15} />
            )}
          </Styles.ButtonOpen>
        </TableCell>
        <TableCell align="left" sx={{border: 'none'}}>
          <Styles.Check disabled checked={getCheckedGroup('list')} />
        </TableCell>
        <TableCell align="left" sx={{border: 'none'}}>
          <Styles.Check disabled checked={getCheckedGroup('detail')} />
        </TableCell>
        <TableCell align="left" sx={{border: 'none'}}>
          <Styles.Check disabled checked={getCheckedGroup('create')} />
        </TableCell>
        <TableCell align="left" sx={{border: 'none'}}>
          <Styles.Check disabled checked={getCheckedGroup('update')} />
        </TableCell>
        <TableCell align="left" sx={{border: 'none'}}>
          <Styles.Check disabled checked={getCheckedGroup('delete')} />
        </TableCell>
      </TableRow>
      <TableRow sx={{border: 'none'}}>
        <TableCell
          style={{paddingBottom: 0, paddingTop: 0, border: 'none'}}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Ver listagem</TableCell>
                    <TableCell>Ver detalhes</TableCell>
                    <TableCell>Criar</TableCell>
                    <TableCell>Editar</TableCell>
                    <TableCell>Deletar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {moduleItem.submodules.map(access => (
                    <TableRow key={access.id} sx={{border: 'none'}}>
                      <TableCell component="th" scope="row">
                        {access.name}
                      </TableCell>

                      <TableCell align="left">
                        <Styles.Check
                          disabled
                          checked={getCheckedItem(access, 'list')}
                        />
                      </TableCell>
                      <TableCell>
                        <Styles.Check
                          disabled
                          checked={getCheckedItem(access, 'detail')}
                        />
                      </TableCell>
                      <TableCell>
                        <Styles.Check
                          disabled
                          checked={getCheckedItem(access, 'create')}
                        />
                      </TableCell>
                      <TableCell>
                        <Styles.Check
                          disabled
                          checked={getCheckedItem(access, 'update')}
                        />
                      </TableCell>
                      <TableCell>
                        <Styles.Check
                          disabled
                          checked={getCheckedItem(access, 'delete')}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
