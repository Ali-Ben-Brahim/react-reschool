import React, {  useState,useEffect } from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowId,
  GridToolbar
  
} from '@mui/x-data-grid';
import { ThemeProvider, createTheme,Button } from '@mui/material';
import axios from 'axios';
import {makeStyles } from "@material-ui/core";
import { CreateNewEtage } from "../dialog/showdialogetage";
import { CreateNewBlocPoubelles } from "../dialog/showdialogeblocpoubelles";
import { CreateNewPoubelles } from "../dialog/showdialogpoubelle";

export default function TablePoubelles() {
    const [createModalOpen, setCreateModalOpen] = useState(false);
const[data,setData]=useState([])
const defaultMaterialTheme = createTheme();
useEffect(() =>  {
  let isMounted = false;
  if (!isMounted){
  axios.get("http://127.0.0.1:8000/api/poubelle").then(res=> setData(res.data.data))
}
return () => { isMounted = true };
  },[])
  const useStyles = makeStyles((theme) => ({
    leftSpacing: {
      marginRight: theme.spacing(1),
    },
  }));
  const columns=React.useMemo(
    () =>[
      { headerName: 'Nom d\'établissement', field: 'etablissement' },
      { headerName: 'Nom du poubelle', field: 'nom' },
      { headerName: 'Type', field: 'type' },
      { headerName: 'Etat', field: 'Etat' },
      
    

    ]);
  const classes = useStyles();
  return (
    <>
        <Button
      onClick={() => setCreateModalOpen(true)}
          variant='contained'
          color="primary"
          className={classes.leftSpacing}>
          
          Affecter un poubelle 
        </Button>
        <CreateNewPoubelles

        
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
                          axios.get(`http://127.0.0.1:8000/api/poubelle-suppression-definitif/${rowData.id}`)
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
                   
                   </>
  )
}
