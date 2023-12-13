import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataLoad = () => {
        var [users,setUsers] = useState([])
        const loadData=()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then((res)=>{
                   console.log(res.data)
                   setUsers(res.data)
            })
            .catch(err=>console.log(err))
        }



    return(
        <div>
            <Button variant="contained" onClick={loadData}>Load Data</Button>
            <TableContainer>
               <Table>
                  <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>USERNAME</TableCell>
                        <TableCell>EMAIL</TableCell>
                    </TableRow>
                  </TableHead>
            <TableBody>
                {users.map((val,i)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.username}</TableCell>
                            <TableCell>{val.email}</TableCell>
                        </TableRow>
                    )
            })}
            </TableBody>
        </Table>
      </TableContainer>
        </div>
    )
        }

export default DataLoad
