import React, {  useState,useEffect } from "react";
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme,Button } from '@mui/material';
import axios from 'axios';
import {makeStyles } from "@material-ui/core";
import { CreateNewBlocEtab } from "../dialog/showdialogblocetba";

export default function Tableblocetab() {
    const [createModalOpen, setCreateModalOpen] = useState(false);
const[data,setData]=useState([])
const defaultMaterialTheme = createTheme();
useEffect(() =>  {
  axios.get("http://127.0.0.1:8000/api/bloc-etablissement").then(res=> {
    
    setData(res.data.data)})

  },[])
  const useStyles = makeStyles((theme) => ({
    leftSpacing: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
        <Button
      onClick={() => setCreateModalOpen(true)}
          variant='contained'
          color="primary"
          className={classes.leftSpacing}>
          
          Créer un bloc d'établissement
        </Button>
    <CreateNewBlocEtab
        
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
       
      />
                    <MaterialTable 
                   title="Tous les établissements"
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
                          axios.get(`http://127.0.0.1:8000/api/bloc-etablissement-suppression-definitif/${rowData.id}`)
                          console.log(rowData)

                        }
                      }
                    ]}
                    options={{
                      actionsColumnIndex: -1
                    }}
                    
                        columns={[
                        { title: 'Nom d\'établissement', field: 'etablissement' },
                        { title: 'Nom du bloc', field: 'nom_bloc_etablissement' },
                        { title: 'Nombre d\'étage', field: 'nombre_etage' },
                        
                        ]}
                        data={ data}
                        
                    />
                   
                   </ThemeProvider>
  )
}
