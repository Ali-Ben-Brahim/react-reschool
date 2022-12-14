import React, {  useState,useEffect } from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowId,
  GridToolbar
  
} from '@mui/x-data-grid';import { ThemeProvider, createTheme,Button } from '@mui/material';
import axios from 'axios';
import {makeStyles } from "@material-ui/core";
import { CreateNewEtage } from "../dialog/showdialogetage";
import { CreateNewBlocPoubelles } from "../dialog/showdialogeblocpoubelles";

export default function TableBlocPoubelles() {
    const [createModalOpen, setCreateModalOpen] = useState(false);
const[data,setData]=useState([])
useEffect(() =>  {
  let isMounted = false;
  if (!isMounted){
  axios.get("http://127.0.0.1:8000/api/bloc-poubelle-all").then(res=> setData(res.data.data))

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
      { headerName: 'Nom du bloc', field: 'bloc_etabl' },
      { headerName: 'Nom d\'étage', field: 'etage' },
      { headerName: 'Nom d\'bloc poubelle', field: 'nom_bloc_poubelle' },
    

    ]);
  return (
    <>
        <Button
      onClick={() => setCreateModalOpen(true)}
          variant='contained'
          color="primary"
          className={classes.leftSpacing}>
          
          Affecter un bloc poubelle 
        </Button>
        <CreateNewBlocPoubelles

        
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
                          axios.get(`http://127.0.0.1:8000/api/bloc-poubelle-suppression-definitif/${rowData.id}`)
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
