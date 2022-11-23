import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, {  useState,useEffect } from 'react';
import axios from 'axios';
import {TextField,FormControl,MenuItem,Select,InputLabel,Button,Grid,Stack  } from '@mui/material';
export const CreateNewBlocEtab = ({ open, onClose }) => {
   
    const[data,setData]=useState([])
    useEffect(() =>  {
      axios.get("http://127.0.0.1:8000/api/etablissement").then(res=> setData(res.data.data))
      
      },
      
      [])
      const [formValue, setformValue] = React.useState({
      
        etablissement_id: "",
        nom_bloc_etablissement: "",
  
    });
  
      const handleSubmit = async() => {
  
        const blocFormData = new FormData();
        blocFormData.append("etablissement_id", formValue.etablissement_id)
        blocFormData.append("nom_bloc_etablissement", formValue.nom_bloc_etablissement)
       
        console.log(blocFormData)
        axios.post("http://127.0.0.1:8000/api/bloc-etablissement",blocFormData)
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
       
<FormControl fullWidth >
<InputLabel key={1} id="demo-simple-select-label">Nom de l'etablisement</InputLabel>
<Select 
labelId="etablissement_id"
id="etablissement_id"
onChange={handleChange}
label="Nom du l'établissement"
value={formValue.etablissement_id}
name="etablissement_id"
>
{data.map((e,i)=><MenuItem key={i} value={e.id}>{e.nom_etablissement}</MenuItem>) }


</Select>
</FormControl>
</Grid>
<Grid xs={12} sm={12} item>
<TextField
fullWidth
onChange={handleChange}
label={"Nom du bloc de l'établissement"} 
name="nom_bloc_etablissement"
value={formValue.nom_bloc_etablissement}
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
          Créer un bloc d'établissement
          </Button>
        </DialogActions>
      </Dialog>
    );
  };