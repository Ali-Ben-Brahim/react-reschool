import React, {  useState,useEffect } from "react";
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme,Button } from '@mui/material';
import axios from 'axios';
import { CreateNewAccountModal } from "../dialog/showdialogetab";
import {makeStyles } from "@material-ui/core";

export default function Tableetablissement() {
    const [createModalOpen, setCreateModalOpen] = useState(false);
const[data,setData]=useState([])
const defaultMaterialTheme = createTheme();
useEffect(() =>  {
  axios.get("http://127.0.0.1:8000/api/etablissement").then(res=> setData(res.data.data))

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
          
          Créer un établissement
        </Button>
    <CreateNewAccountModal
        
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
                          axios.get(`http://127.0.0.1:8000/api/etablissement-suppression-definitif/${rowData.id}`)
                          console.log(rowData)

                        }
                      }
                    ]}
                    options={{
                      actionsColumnIndex: -1
                      
                    }}
                    
                        columns={[
                        { title: 'Code Postal', field: 'code_postal' },
                        { title: 'Nom établissement', field: 'nom_etablissement' },
                        { title: 'Type de l\'établissment', field: 'type_etablissement' },
                      { title: 'Adresse', field: 'adresse' }
                        ]}
                        data={data}
                        
                    />
                   
                   </ThemeProvider>
  )
}
