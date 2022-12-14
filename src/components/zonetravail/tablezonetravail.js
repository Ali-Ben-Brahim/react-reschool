import React, {  useState,useEffect } from "react";
import { ThemeProvider, Box,Button } from '@mui/material';
import axios from 'axios';
import {makeStyles } from "@material-ui/core";
import { CreateNewZT } from "../dialog/showdialogZT";

import EditIcon from '@mui/icons-material/Edit';
  import DeleteIcon from '@mui/icons-material/Delete';
import {
  DataGrid,
  GridActionsCellItem,
  GridRowId,
  GridToolbar
  
} from '@mui/x-data-grid';

const useStyles = makeStyles((theme) => ({
  leftSpacing: {
    marginRight: theme.spacing(1),
    
  },
}));
export default function TableZoneTravail() {
const [createModalOpen, setCreateModalOpen] = useState(false);
const[data,setData]=useState([])
useEffect(() =>  {
  let isMounted = false;
  if (!isMounted){ 
  axios.get("http://127.0.0.1:8000/api/zone-travail").then(res=> setData(res.data.data))
}
return () => { isMounted = true };
  },[])
  const columns=React.useMemo(
    () =>[
    { headerName: 'Region', field: 'region',width: 350,
    } , {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ( params ) => 
[
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
            />,
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              color="error"
              onClick={(event)=> {axios.get(`http://127.0.0.1:8000/api/zone-travail-suppression-definitif/${params.id}`)}}

            />,
          ]
},
    

    ]);

  const classes = useStyles();
  return (
    <Box width={"100%"} height={"80%"}>
      
        <Button
      onClick={() => setCreateModalOpen(true)}
          variant='contained'
          color="secondary"
          className={classes.leftSpacing}>
          
          Ajouter zone de travail
        </Button>
    <CreateNewZT
        
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
       
      />
                    <DataGrid 
                  
                   components={{ Toolbar: GridToolbar }}
                  
                    actions={[
                      {
                        icon: "edit",
                        tooltip: 'Edit user',
                        onClick: (event, rowData) => {
                        }
                      },
                      {
                        icon: 'delete',
                        tooltip: 'Delete User',
                        
                        onClick: (event, rowData)=> {
                          axios.get(`http://127.0.0.1:8000/api/zone-travail-suppression-definitif/${rowData.id}`)
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
