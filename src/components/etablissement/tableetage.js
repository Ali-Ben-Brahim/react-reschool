import React, {  useState,useEffect } from "react";

import { ThemeProvider, createTheme,Button } from '@mui/material';
import axios from 'axios';
import {makeStyles } from "@material-ui/core";
import { CreateNewEtage } from "../dialog/showdialogetage";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowId,
  GridToolbar
  
} from '@mui/x-data-grid';
export default function Tableetage() {
    const [createModalOpen, setCreateModalOpen] = useState(false);
const[data,setData]=useState([])
const defaultMaterialTheme = createTheme();
useEffect(() =>  {
  let isMounted = false;
  if (!isMounted){
  axios.get("http://127.0.0.1:8000/api/etage-etablissement").then(res=> setData(res.data.data))

}
return () => { isMounted = true };
  },[])
  const useStyles = makeStyles((theme) => ({
    leftSpacing: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const columns=React.useMemo(
    () =>[
      { headerName: 'Nom d\'établissement', field: 'etablissement' },
      { headerName: 'Nom du bloc', field: 'bloc_etablissement' },
      { headerName: 'Nom d\'étage', field: 'nom_etage_etablissement' },
      
    ]);
  return (
    <>
        <Button
      onClick={() => setCreateModalOpen(true)}
          variant='contained'
          color="primary"
          className={classes.leftSpacing}>
          
          Affecter un etage 
        </Button>
    <CreateNewEtage
        
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
                          axios.get(`http://127.0.0.1:8000/api/etage-etablissement-suppression-definitif/${rowData.id}`)
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
