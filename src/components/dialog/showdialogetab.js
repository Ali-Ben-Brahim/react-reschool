import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, {  useState,useEffect } from 'react';
import axios from 'axios';
import countrydata from './countydata.json';
import {TextField,FormControl,MenuItem,Select,InputLabel,Button,Grid,Stack  } from '@mui/material';
export const CreateNewAccountModal = ({ open, onClose }) => {
   
    const[countryid, setCountryid]=useState('');
    const[delg, setdelg]=useState("");
    const[localite, setlocalite]=useState("");
    const[country, setcountry]=useState([]);
    const[state, setState]=useState([]);
    const[stateid, setStateid]= useState('');
    const[city, setCity]=useState([]);
    const[cityid, setcityid]=useState('');
    const[data,setData]=useState([])
    const[camionregion,setCamionregion]=useState("")
    const[dataCamion,setDatacamion]=useState([])
     useEffect(() =>  {
     axios.get("http://127.0.0.1:8000/api/zone-travail").then(res=> setData(res.data.data))
     setdelg(true)
     setlocalite(true)
     },
     
     [])
     const handlecounty=(e)=>{
       const getcountryId= e.target.value;
       const getStatedata= countrydata.find(country=>country.state_id===getcountryId).city;
       const country= countrydata.find(country=>country.state_id===getcountryId);
       setState(getStatedata);
       setCountryid(getcountryId);
       setCity([])
       setcityid('')
       setdelg(false)
       console.log(country);
       setformValue({
        ...formValue,
        [e.target.name]: country.state_name
      });
     //console.log(getcountryId);
     }
     const handlestate = (e)=>{
       const stateid= e.target.value;
       
      
       // setCity(getCitydata);
       setStateid(stateid);
       setcityid('')
       const getCitydata=state.find(states=>states.city_id===stateid).localite;
       const tablecity=state.find(states=>states.city_id===stateid);
      setCity(getCitydata);
      setlocalite(false)
      console.log(city);

      setformValue({
        ...formValue,
        [e.target.name]: tablecity.city_name
      });
     }
     const handleCity = (e)=>{
        const localiteid= e.target.value;
        const tablepostal=city.find(localite=>localite.localite_name===localiteid);
       
       //console.log(stateid);
       setcityid(tablepostal.code_postal);
       setformValue({
      
        ...formValue,
        [e.target.name]: tablepostal.localite_name,
        "code_postal":tablepostal.code_postal
      });
     }
       
      
    
     const [formValue, setformValue] = React.useState({
       
         zone_travail_id: "",
         camion_id: "",
         nom_etablissement: "",
         gouvernorat:"",
         delegation:"",
         localite:"",
         code_postal:"",
         type_etablissement: "",
         niveau_etablissement: "",
         nbr_personnes: "",
         url_map: "",
         adresse: "",
         longitude: "",
         latitude: "",
   
     
     });
   
     const handleSubmit = async() => {
       
       const etabFormData = new FormData();
       etabFormData.append("zone_travail_id", 0)
       etabFormData.append("camion_id", 0)
       etabFormData.append("nom_etablissement", formValue.nom_etablissement)
       etabFormData.append("gouvernorat", formValue.gouvernorat)
       etabFormData.append("delegation", formValue.delegation)
       etabFormData.append("localite", formValue.localite)
       etabFormData.append("code_postal", formValue.code_postal)
       etabFormData.append("type_etablissement", formValue.type_etablissement)
       etabFormData.append("niveau_etablissement", formValue.niveau_etablissement)
       etabFormData.append("adresse", formValue.adresse)
       etabFormData.append("nbr_personnes", formValue.nbr_personnes)
       etabFormData.append("url_map", formValue.url_map)
       etabFormData.append("longitude", formValue.longitude)
       etabFormData.append("latitude", formValue.latitude)
       etabFormData.append("quantite_dechets_plastique",0)
       etabFormData.append("quantite_dechets_composte", 0)
       etabFormData.append("quantite_dechets_papier", 0)
       etabFormData.append("quantite_dechets_canette", 0)
       etabFormData.append("quantite_plastique_mensuel", 0)
       etabFormData.append("quantite_papier_mensuel", 0)
       etabFormData.append("quantite_composte_mensuel", 0)
       etabFormData.append("quantite_canette_mensuel", 0)
   
       console.log(etabFormData)
       axios.post("http://127.0.0.1:8000/api/etablissement",etabFormData)
       .then((response) => {
      
         
         });
         onClose();
   }
   
      
   
   
     function etb(){
     
       axios.get(`http://127.0.0.1:8000/api/camion/${camionregion}`).then(res=> setDatacamion([res.data.data]))
     }
     const optionsNiveau = [
       { value: 'ecole primaire', label: 'Ecole primaire' },
       { value: 'college', label: 'College' },
       { value: 'ecole secondaire', label: 'Ecole secondaire' },
       { value: 'universite', label: 'Universite' },
       { value: 'societe', label: 'Societe' },
     ]
    
     const handleChange = (event) => {
       if (event.target.name==="zone_travail_id") {
         setCamionregion(event.target.value)
         console.log(event.target.value)
       }
       setformValue({
         ...formValue,
         [event.target.name]: event.target.value
       });
       
     }
     console.log(formValue)

  
    return (
      <Dialog open={open}>
        <DialogTitle textAlign="center">Créer un établissement</DialogTitle>
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
                    <FormControl style={{marginLeft:"22px",marginRight:"22px"}}  >
         
         <Grid container spacing={1}>

 {/* <Grid xs={12} sm={6} item>
  <FormControl fullWidth>
 
   <InputLabel  id="zone">Zone de travail</InputLabel>
   <Select
   
   labelId="zone_travail_id"
   id="zone_travail_id"
   value={formValue.zone_travail_id}
   label="Zone de travail"
   onBlur={etb}
   onChange={handleChange}
   name="zone_travail_id"
>
  {data.map((item)=> <MenuItem key={item.id} value={item.id}>{item.region}</MenuItem>)}
 
 </Select>
 
 </FormControl>
 </Grid> */}

 <Grid xs={12} sm={6} item>
  <FormControl fullWidth>
 
   <InputLabel  id="gouvernorat">Gouvernorat</InputLabel>
   <Select
   labelId="gouvernorat"
   id="gouvernorat"
   label="Gouvernorat"
   onChange={(e)=>handlecounty(e)}
   name="gouvernorat"
>
  {countrydata.map((item,index)=> <MenuItem  key={index}  value={item.state_id}>{item.state_name}</MenuItem>)}
 
 </Select>
 
 </FormControl>
 </Grid>
 <Grid xs={12} sm={6} item>
  <FormControl fullWidth>
 <InputLabel  id="délégation">Délégation</InputLabel>
   <Select
   disabled={delg}
   labelId="délégation_id"
   id="délégation_id"
   label="Délégation"
   onChange={(e)=>handlestate(e)}
   name="delegation"
>
  {state.map((item,index)=> <MenuItem key={index} value={item.city_id}>{item.city_name}</MenuItem>)}
 
 </Select>
 
 </FormControl>
 </Grid>
 <Grid xs={12} sm={6} item>
  <FormControl fullWidth>
 <InputLabel  id="localite">Localité</InputLabel>
   <Select
   disabled={localite}
   labelId="localite_id"
   id="localite_id"
   label="localite"
   onChange={(e)=>handleCity(e)}
   name="localite"
>
  {city.map((item,index)=> <MenuItem key={index} value={item.localite_name}>{item.localite_name}</MenuItem>)}
 
 </Select>
 
 </FormControl>
 </Grid>
 <Grid xs={12} sm={6} item> 
     <TextField
     disabled
     fullWidth
     
     onChange={handleChange}
       value={cityid}
       label={"Code postal"} 
       name="code_postal"
     />
</Grid>

 {/* <Grid xs={12} sm={6} item>
 <FormControl fullWidth >
   <InputLabel  id="camion" >Select matricule</InputLabel>
   <Select
  
   labelId="camion_id"
   id="camion_id"
   value={formValue.camion_id}
   label="Camion"
   onChange={handleChange}
   name="camion_id"
   
 >
  {dataCamion.map((item)=> <MenuItem key={item.id} value={item.id}>{item.matricule}</MenuItem>)}
 
 </Select>
 
 </FormControl>
 </Grid> */}
 <Grid xs={12} sm={6} item>
   <TextField
   fullWidth
       onChange={handleChange}
       value={formValue.nom_etablissement}
       label={"Nom etablissement"} 
       name="nom_etablissement"
     />
   </Grid>
   <Grid xs={12} sm={6} item>   
     <FormControl fullWidth >
   <InputLabel id="demo-simple-select-label">Type établissement</InputLabel>
   <Select 
   labelId="type_etablissement"
   id="type_etablissement"
   value={formValue.type_etablissement}
   label="Type etablissement"
   onChange={handleChange}
   name="type_etablissement"
 >
  <MenuItem key={1} value="privee">Privé</MenuItem>
  <MenuItem key={2} value="public">Public</MenuItem>
 
    </Select>
    </FormControl>
    </Grid>
    <Grid xs={12} sm={6} item> 
     <TextField
     fullWidth
       onChange={handleChange}
       value={formValue.nbr_personnes}
       label={"Nombre Personnes"} 
       name="nbr_personnes"
     />
</Grid>
<Grid xs={12} sm={6} item> 
   <FormControl fullWidth>
   <InputLabel  id="nivetab" >Niveau établissement</InputLabel>
   <Select
  
   labelId="niveau_etablissement"
   id="niveau_etablissement"
   value={formValue.niveau_etablissement}
   label="Niveau etablissement"
   onChange={handleChange}
   name="niveau_etablissement"
   
 >
  {optionsNiveau.map((item,i)=> <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>)}
 
 </Select>
 
 </FormControl>
 </Grid> 
 <Grid xs={12} sm={6} item> 

   <TextField
   fullWidth
       onChange={handleChange}
       value={formValue.url_map}
       label={"URL Map"} 
       name="url_map"
     />
  </Grid>
  <Grid xs={12} sm={6} item> 
     <TextField
     fullWidth
       onChange={handleChange}
       value={formValue.adresse}
       label={"Adresse"} 
       name="adresse"
     />
      </Grid>
      <Grid xs={12} sm={6} item> 
     <TextField
     fullWidth
       onChange={handleChange}
       value={formValue.latitude}
       label={"latitude"} 
       name="latitude"
     />
      
      </Grid>  
      <Grid xs={12} sm={6} item> 

  <TextField
  fullWidth
       onChange={handleChange}
       value={formValue.longitude}
       label={"Longitude"} 
       name="longitude"
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
          Créer un établissement
          </Button>
        </DialogActions>
      </Dialog>
    );
  };