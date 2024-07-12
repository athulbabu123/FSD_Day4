import { TableCell, TableContainer, TableHead, TableRow , Table, TableBody} from '@mui/material'
import React from 'react'

const View = () => {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell>Department</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default View
