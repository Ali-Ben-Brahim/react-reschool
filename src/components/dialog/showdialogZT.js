import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, {  useState,useEffect } from 'react';
import axios from 'axios';
import countrydata from './countydata.json';
import Autocomplete from '@mui/material/Autocomplete';
import {TextField,FormControl,MenuItem,Select,InputLabel,Button,Grid,Stack  } from '@mui/material';
export const CreateNewZT = ({ open, onClose }) => {


      const [formValue, setformValue] = React.useState({
      
        region: [],
      
  
    });
  
      const handleSubmit = async() => {
  
        const blocFormData = new FormData();
        blocFormData.append("region", formValue.region)
        
       
        console.log(blocFormData)
        axios.post("http://127.0.0.1:8000/api/zone-travail",blocFormData)
        .then((response) => {
       
          
          console.log(response)});
          onClose();
    }
    const handleChange = (event) => {
     
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
      
    }
    console.log(formValue)
    return (
      <Dialog open={open}>
        <DialogTitle textAlign="center">Créer un bloc d'établissement</DialogTitle>
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
<Grid xs={12} sm={12} item>
       

<Autocomplete 
labelId="region"
id="region"
options={countrydata}
getOptionLabel={(option) => option.state_name}
onChange={handleChange}

filterSelectedOptions
name="region"
multiple
renderInput={(params) => (
  <TextField
    {...params}
    label="Select region"
    placeholder="region"
    value={formValue.region}

  />
)}
/>





</Grid>




</Grid>

</FormControl>
 

            </Stack>
          </form>
        </DialogContent>
        <DialogActions sx={{ p: '1.25rem' }}>
          <Button onClick={onClose}>Annuler</Button>
          <Button color="primary" onClick={handleSubmit} variant="contained">
          Ajouter Zone de travail
          </Button>
        </DialogActions>
      </Dialog>
    );
  };