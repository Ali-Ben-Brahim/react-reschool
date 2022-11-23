import React, {  useState,useEffect } from "react";
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme,Button } from '@mui/material';
import axios from 'axios';
import {makeStyles } from "@material-ui/core";
import { CreateNewEtage } from "../dialog/showdialogetage";
import { CreateNewBlocPoubelles } from "../dialog/showdialogeblocpoubelles";

export default function TableBlocPoubelles() {
    const [createModalOpen, setCreateModalOpen] = useState(false);
const[data,setData]=useState([])
const defaultMaterialTheme = createTheme();
useEffect(() =>  {
  axios.get("http://127.0.0.1:8000/api/bloc-poubelle").then(res=> setData(res.data.data))

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
          
          Affecter un bloc poubelle 
        </Button>
        <CreateNewBlocPoubelles

        
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
       
      />
                    <MaterialTable 
                   title="Tous les blocs poubelles"
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
                    
                        columns={[
                        { title: 'Nom d\'établissement', field: 'etablissement' },
                        { title: 'Nom du bloc', field: 'bloc_etabl' },
                        { title: 'Nom d\'étage', field: 'etage' },
                        
                        ]}
                        data={data}
                        
                    />
                   
                   </ThemeProvider>
  )
}
