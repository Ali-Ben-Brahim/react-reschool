import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, {  useState,useEffect } from 'react';

import axios from 'axios';
import countrydata from './countydata.json';

import {TextField,Input,FormControl,MenuItem,Select,InputLabel,Button,Grid,Stack  } from '@mui/material';
export const CreateNewCamion = ({ open, onClose }) => {

    const[data,setData]=useState([])
    const[zoneD,setzoneD]=useState("")
    const[datazoneD,setdatazoneD]=useState([])
    useEffect(() =>  {
      let isMounted = false;
      if (!isMounted){  
      axios.get("http://127.0.0.1:8000/api/zone-travail").then(res=> setData(res.data.data))
    }
    return () => { isMounted = true };
      },
      
      [])

      const [formValue, setformValue] = React.useState({
      
        zone_travail_id: "",
        zone_depot_id:"",
        matricule:""

      
  
    });
    function zonedepot(){
    
        axios.get(`http://127.0.0.1:8000/api/zone-depot/${zoneD}`).then(res=> setdatazoneD(res.data.data))
      }
  
      const handleSubmit = async() => {
  
        const blocFormData = new FormData();
        blocFormData.append("zone_travail_id", formValue.zone_travail_id)
        blocFormData.append("zone_depot_id", formValue.zone_depot_id)
        blocFormData.append("matricule", formValue.matricule)
        blocFormData.append("volume_actuelle_plastique", 0)
        blocFormData.append("volume_actuelle_papier", 0)
        blocFormData.append("volume_actuelle_composte", 0)
        blocFormData.append("volume_actuelle_canette", 0)
       
        console.log(blocFormData)
        axios.post("http://127.0.0.1:8000/api/camion",blocFormData)
        .then((response) => {
       
          
          console.log(response)});
          onClose();
    }
    const handleChange = (event) => {
     if([event.target.name]==='id'){
        setzoneD(event.target.value)
     }
     
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
     
      
    }
    console.log(formValue)
    return (
      <Dialog open={open}>
        <DialogTitle textAlign="center">Ajouter Camion</DialogTitle>
        <DialogContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <Stack
              sx={{
                width: '100%',
                minWidth: { xs: '300px', sm: '360px', md: '400px' },
                gap: '1.5rem',
                padding:'5px'
              }}
            >
             <FormControl style={{marginLeft:"22px",marginRight:"22px"}}>

<Grid container spacing={1}>

<Grid xs={12} sm={6} item>
       
<FormControl fullWidth >
<InputLabel key={1} id="demo-simple-select-label">Zone de travail</InputLabel>
<Select 
labelId="zone_travail_id"
id="zone_travail_id"
onBlur={zonedepot}
onChange={handleChange}
label="Zone de travail"
value={formValue.zone_travail_id}
name="zone_travail_id"

>
{ data.map((e,i)=> <MenuItem  key={i}  value={e.id}>{e.region}</MenuItem>)}


</Select>
</FormControl>
</Grid>


<Grid xs={12} sm={6} item>
       
       <FormControl fullWidth >
       <InputLabel key={1} id="demo-simple-select-label">Zone de dépôt</InputLabel>
       <Select 
       labelId="zone_depot_id"
       id="zone_depot_id"
      
       onChange={handleChange}
       label="Zone de dépôt"
       value={formValue.zone_depot_id}
       name="zone_depot_id"
       
       >
       { datazoneD.map((e,i)=> <MenuItem  key={i}  value={e.id}>{e.adresse}</MenuItem>)}
       
       
       </Select>
       </FormControl>
       </Grid>   


<Grid xs={12} sm={6} item>
       
<FormControl fullWidth >
<TextField label="Matricule" onChange={handleChange} value={formValue.matricule} name="matricule" ></TextField>
</FormControl>
</Grid>



</Grid>

</FormControl>
 

            </Stack>
          </form>
        </DialogContent>
        <DialogActions sx={{ p: '1.25rem' }}>
          <Button onClick={onClose}>Annuler</Button>
          <Button color="primary" onClick={handleSubmit} variant="contained">
         Ajouter type poubelle
          </Button>
        </DialogActions>
      </Dialog>
    );
  };