import React, {  useState,useEffect } from "react";
import { DataGrid,GridActionsCellItem,GridToolbar } from '@mui/x-data-grid';

import EditIcon from '@mui/icons-material/Edit';
  import DeleteIcon from '@mui/icons-material/Delete';
  import {makeStyles } from "@material-ui/core";
  import axios from 'axios';
  import {createTheme,Button,Box } from '@mui/material';
import { CreateNewZD } from "../dialog/showdialogZD";

export default function TableZoneDepot() {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const[data,setData]=useState([])
  const defaultMaterialTheme = createTheme();
  useEffect(() =>  {
    let isMounted = false;
    if (!isMounted){
    axios.get("http://127.0.0.1:8000/api/zone-depot").then(res=> setData(res.data.data))
  
  }return () => { isMounted = true };
},[])
const useStyles = makeStyles((theme) => ({
  leftSpacing: {
    marginRight: theme.spacing(1),
  },
}));

const classes = useStyles();
const columns=React.useMemo(
  () =>[
   
    { headerName: 'Adresse', field: 'adresse',minWidth:350 },

    {
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
              onClick={(event)=> { axios.get(`http://127.0.0.1:8000/api/zone-depot-suppression-definitif/${params.id}`)}}

            />,
          ]
},
  ]);
  
  return (
    <Box width={"100%"} height={"80%"}>
      
    <Button
  onClick={() => setCreateModalOpen(true)}
      variant='contained'
      color="secondary"
      className={classes.leftSpacing}>
      
      Ajouter zone de dépôt
    </Button>
<CreateNewZD
    
    open={createModalOpen}
    onClose={() => setCreateModalOpen(false)}
   
  />
                <DataGrid 
              
               components={{ Toolbar: GridToolbar }}

                columns={columns}
                    rows={data}
                    
                />
               </Box>
  )
}
