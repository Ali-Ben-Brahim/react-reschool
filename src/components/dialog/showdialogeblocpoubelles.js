import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, {  useState,useEffect } from 'react';
import axios from 'axios';
import {TextField,FormControl,MenuItem,Select,InputLabel,Button,Grid,Stack  } from '@mui/material';
export const CreateNewBlocPoubelles = ({ open, onClose }) => {
   
    const[data,setData]=useState([])
    const[blocetage,setBlocEtage]=useState("")
    const[etageid,setetageid]=useState("")
    const[dataBloc,setDataBloc]=useState([])
    const[dataEtage,setDataEtage]=useState([])
    const[numblocp,setnumblocp]=useState("")
    useEffect(() =>  {
      axios.get("http://127.0.0.1:8000/api/etablissement").then(res=> setData(res.data.data))
      
      },
      
      [])
      const [formValue, setformValue] = React.useState({
      
        nom_etablissement: "",
        bloc_etablissement_id: "",
        etablissement_id:"",
        nom_etage_etablissement: "",
        nom_bloc_poubelles: "",
        nom_bloc_etablissement:""
    });
  
      const handleSubmit = async() => {
  
        const blocFormData = new FormData();
        blocFormData.append("etablissement_id", formValue.etablissement_id)
        blocFormData.append("nom_bloc_etablissement", formValue.nom_bloc_etablissement)
        blocFormData.append("etage_etablissement_id", formValue.bloc_etablissement_id)
        blocFormData.append("nom_bloc_poubelles", formValue.nom_bloc_poubelles)
        axios.post("http://127.0.0.1:8000/api/bloc-poubelle",blocFormData)
        .then((response) => {
       
          
          console.log(response)});
          onClose()
    }
    const handleChange = (event) => {
      if (event.target.name==="nom_etablissement") {
          setBlocEtage(event.target.value)
          
         
          
          
        }
      if (event.target.name==='bloc_etablissement_id') {
    
        setetageid(event.target.value)
       
      }
            
         
          
          
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value,
      });
      
    }
    function bloc(){
    
      axios.get(`http://127.0.0.1:8000/api/bloc-etablissement-liste/${blocetage}`).then(res=> setDataBloc(res.data))
    }
    function etage(){
    
        axios.get(`http://127.0.0.1:8000/api/etage-etablissement-liste/${blocetage}/${etageid}`).then(res=> setDataEtage(res.data))
       
      }
     
      console.log(formValue)
    return (
      <Dialog open={open}>
        <DialogTitle textAlign="center">Affecter un bloc poubelle</DialogTitle>
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
<InputLabel key={1} id="demo-simple-select-label">Nom de l'établisement</InputLabel>
<Select 
labelId="nom_etablissement"
id="nom_etablissement"
onBlur={bloc}
onChange={handleChange}
label="Nom du l'établissement"
value={formValue.nom_etablissement}
name="nom_etablissement"
>
{data.map((e,i)=><MenuItem key={i} value={e.nom_etablissement}>{e.nom_etablissement}</MenuItem>) }


</Select>
</FormControl>
</Grid>
<Grid xs={12} sm={12} item>
       
       <FormControl fullWidth >
     <InputLabel key={1} id="demo-simple-select-label">Nom du bloc</InputLabel>
     <Select 
     labelId="nom_bloc_etablissement"
     id="nom_bloc_etablissement"
     onBlur={etage}
     onChange={handleChange}
     label="Nom du l'établissement"
     value={formValue.bloc_etablissement_id}
     name="bloc_etablissement_id"
   >
   {dataBloc.map((e,i)=><MenuItem key={i} value={e.nom_bloc_etablissement}>{e.nom_bloc_etablissement}</MenuItem>) }
    
   
      </Select>
      </FormControl>
      </Grid>
      <Grid xs={12} sm={12} item>
       
       <FormControl fullWidth >
     <InputLabel key={1} id="demo-simple-select-label">Nom du étage</InputLabel>
     <Select 
     labelId="nom_etage_etablissement"
     id="nom_etage_etablissement"
     onChange={handleChange}
     label="Nom du l'étage"
     value={formValue.nom_etage_etablissement}
     name="nom_etage_etablissement"
   >
   { dataEtage.map((e,i)=><MenuItem key={i} value={e.nom_etage_etablissement}>{e.nom_etage_etablissement}</MenuItem>) }
    
   
      </Select>
      </FormControl>
      </Grid>
<Grid xs={12} sm={12} item>
<TextField
fullWidth
onChange={handleChange}
label={"Nom du bloc de la poubelle"} 
name="nom_bloc_poubelles"
value={numblocp}
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
          Affecter un bloc poubelle
          </Button>
        </DialogActions>
      </Dialog>
    );
  };