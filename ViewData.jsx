import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewData = () => {
    var [users,setUsers] = useState([])
    var [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
    axios.get("https://api.github.com/users")
    .then((res)=>{
        console.log(res.data)
        setUsers(res.data)
        setLoading(false)
    })
    .catch(err=>console.log(err))
},[])
    
  return (
    <div>
        {loading?<CircularProgress color="primary"/>:<TableContainer>
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
      </TableContainer>}
      
    </div>
  )
}

export default ViewData
