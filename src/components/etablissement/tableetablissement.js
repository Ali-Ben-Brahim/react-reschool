import React, {  useState,useEffect } from "react";


import {
  DataGrid,
  GridActionsCellItem,
  GridRowId,
  GridToolbar
  
} from '@mui/x-data-grid';
import {createTheme,Button,Box } from '@mui/material';
import axios from 'axios';
import { CreateNewAccountModal } from "../dialog/showdialogetab";
import {makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  leftSpacing: {
    marginRight: theme.spacing(1),
    
  },
}));
export default function Tableetablissement() {
  const classes = useStyles();
    const [createModalOpen, setCreateModalOpen] = useState(false);
const[data,setData]=useState([])
  useEffect(() =>  {
  axios.get("http://127.0.0.1:8000/api/etablissement").then(res=> setData(res.data.data))

  },[])
 
  const columns=React.useMemo(
    () =>[
      { headerName: 'Code Postal', field: 'code_postal' },
      { headerName: 'Nom établissement', field: 'nom_etablissement' },
      { headerName: 'Type de l\'établissment', field: 'type_etablissement' },
      { headerName: 'Adresse', field: 'adresse' }
    

    ]);
 
  return (
    <Box width={"100%"} height={"80%"}>
        <Button
      onClick={() => setCreateModalOpen(true)}
      variant='contained'
      color='primary'
      >
          
          Créer un établissement
        </Button>
        
    <CreateNewAccountModal
        
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
       
      />
                    <DataGrid  
components={{ Toolbar: GridToolbar }}
                  
                    actions={[
                      {
                        icon: "edit",
                        tooltip: 'Edit ',
                        onClick: (event, rowData) => {
                        }
                      },
                      {
                        icon: 'delete',
                        tooltip: 'Delete ',
                        
                        onClick: (event, rowData)=> {
                          axios.get(`http://127.0.0.1:8000/api/etablissement-suppression-definitif/${rowData.id}`)
                          console.log(rowData)

                        }
                      }
                    ]}
                    options={{
                      actionsColumnIndex: -1
                      
                    }}
                    
                        columns={columns}
                        rows={data}
                        
                    />
                    </Box>
                  
  )
}
