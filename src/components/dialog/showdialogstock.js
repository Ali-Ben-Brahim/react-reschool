import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, {  useState,useEffect } from 'react';

import axios from 'axios';
import countrydata from './countydata.json';

import {TextField,Input,FormControl,MenuItem,Select,InputLabel,Button,Grid,Stack  } from '@mui/material';
export const CreateNewStock = ({ open, onClose }) => {


      const [formValue, setformValue] = React.useState({
      
        type_poubelle: "",
        quantite_disponible:"",
        description:"",
        photo:""

      
  
    });
  
      const handleSubmit = async() => {
  
        const blocFormData = new FormData();
        blocFormData.append("type_poubelle", formValue.type_poubelle)
        blocFormData.append("quantite_disponible", formValue.quantite_disponible)
        blocFormData.append("description", formValue.description)
        blocFormData.append("photo", formValue.photo)
       
        console.log(blocFormData)
        axios.post("http://127.0.0.1:8000/api/stock-poubelle",blocFormData)
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
        <DialogTitle textAlign="center">Ajouter type poubelle</DialogTitle>
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
       
       <FormControl fullWidth >
       <Input id="raised-button-file" style={{display: 'none'}} onChange={handleChange} value={formValue.photo} name="photo" type='File'></Input>
       <label htmlFor="raised-button-file">
         <Button variant="contained" component="span" >
           Upload
         </Button>
       </label> 
       </FormControl>
       </Grid> 
<Grid xs={12} sm={6} item>
       
<FormControl fullWidth >
<InputLabel key={1} id="demo-simple-select-label">Type poubelle</InputLabel>
<Select 
labelId="type_poubelle"
id="type_poubelle"
onChange={handleChange}
label="Type poubelle"
value={formValue.type_poubelle}
name="type_poubelle"

>
<MenuItem  key={1}  value='plastique'>Plastique</MenuItem>
<MenuItem  key={2}  value='canette'>Canette</MenuItem>
<MenuItem  key={3}  value='papier'>papier</MenuItem>
<MenuItem  key={4}  value='composte'>Composte</MenuItem>


</Select>
</FormControl>
</Grid>


       




<Grid xs={12} sm={6} item>
       
<FormControl fullWidth >
<TextField label="Quantité" onChange={handleChange} value={formValue.quantite_disponible} name="quantite_disponible" type='Number'></TextField>
</FormControl>
</Grid>

<Grid xs={12} sm={12} item>
       
<FormControl fullWidth >
<TextField label="Déscription" multiline rows={4} onChange={handleChange} value={formValue.description} name="description" ></TextField>
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