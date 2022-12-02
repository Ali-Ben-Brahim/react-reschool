import React, {  useState,useEffect } from "react";
import { Box,Container ,Grid} from "@material-ui/core";
import PersonIcon from '@mui/icons-material/Person';
import { Budget } from "../../components/dashboard/container";
import { Employe } from "../../components/dashboard/employe";
import axios from 'axios';
import { ImUserTie } from 'react-icons/im';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessIcon from '@mui/icons-material/Business';
import StairsIcon from '@mui/icons-material/Stairs';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import DeleteIcon from '@mui/icons-material/Delete';
import ExploreIcon from '@mui/icons-material/Explore';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ErrorIcon from '@mui/icons-material/Error';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Dashboard = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  const[data,setData]=useState([])
  useEffect(() =>  {
    axios.get("http://127.0.0.1:8000/api/dashboard").then(res=> setData([res.data]))
  console.log(data)
    },[])
  return (
    <React.Fragment>

              <>
    
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget type='plastique' quantite={`${data.map((e)=>e.qt_dechet_plastique)} kg`} number={`${data.map((e)=>e.nbr_poubelle_plastique)} `} />
            
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
           <Budget type='canette' quantite={`${data.map((e)=>e.qt_dechet_canette)} kg`} number={`${data.map((e)=>e.nbr_poubelle_canette)} `} />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
          <Budget type='papier'  quantite={`${data.map((e)=>e.qt_dechet_papier)} kg`} number={`${data.map((e)=>e.nbr_poubelle_papier)} `} />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
           <Budget type='composte' quantite={`${data.map((e)=>e.qt_dechet_composte)} kg`} number={`${data.map((e)=>e.nbr_poubelle_composte)} `} />
          </Grid>
          <Grid
            item
            lg={4}
            md={12}
            xl={3}
            xs={12}
          >
              <Employe 
              title1="ouvrier" icon1={<PersonIcon/>} quantite1={`${data.map(e=>e.nbr_ouvrier)}`}
              title2="Acheteurs" icon2={<ImUserTie size={24}/>} quantite2={`${data.map(e=>e.nbr_ouvrier)}`}
              title3="Mécanicien" icon3={<EngineeringIcon/>} quantite3={`${data.map(e=>e.nbr_mecanicien)}`}
              title4="Fournisseurs" icon4={<PersonIcon/>} quantite4={`${data.map(e=>e.nbr_fournisseur)}`}
              title5="Resp-étab" icon5={<ImUserTie size={24}/>} quantite5={`${data.map(e=>e.nbr_responsable_etablissement)}`}
              title6="Répar-poub" icon6={<EngineeringIcon/>} quantite6={`${data.map(e=>e.nbr_reparteur_poubelle)}`}

              />

            {/* <Sales /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={12}
            xl={3}
            xs={12}
          >
            <Employe
            title1="Zone-trav" icon1={<ExploreIcon/>} quantite1={`${data.map(e=>e.nbr_zone_travail)}`}
            title2="Etablissements" icon2={<ApartmentIcon/>} quantite2={`${data.map(e=>e.nbr_etablissement)}`}
            title3="Blocs" icon3={<BusinessIcon/>} quantite3={`${data.map(e=>e.nbr_bloc_etablissement)}`}
            title4="Etages" icon4={<StairsIcon/>} quantite4={`${data.map(e=>e.nbr_etage_etablissement)}`}
            title5="Blocs-Poub" icon5={<FolderDeleteIcon size={24}/>} quantite5={`${data.map(e=>e.nbr_bloc_poubelle)}`}
            title6="Poubelles" icon6={<DeleteIcon/>} quantite6={`${data.map(e=>e.nbr_poubelle_vendus)}`}
            />
            {/* <TrafficByDevice sx={{ height: '100%' }} /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={12}
            xl={3}
            xs={12}
          >
            <Employe
                title1="Zone-dep" icon1={<PinDropIcon/>} quantite1={`${data.map(e=>e.nbr_zone_depot)}`}
                title2="Dépots" icon2={<KeyboardDoubleArrowDownIcon/>} quantite2={`${data.map(e=>e.nbr_depot)}`}
                title3="Camion" icon3={<LocalShippingIcon/>} quantite3={`${data.map(e=>e.nbr_camion)}`}
                title4="Commandes déchets" icon4={<ShoppingCartIcon/>} quantite4={`${data.map(e=>e.nbr_commande_dechet)}`}
                title5="Pannes poubelles" icon5={<ErrorIcon size={24}/>} quantite5={`${data.map(e=>e.nbr_panne_poubelle)}`}
                title6="Pannes camions" icon6={<ErrorIcon/>} quantite6={`${data.map(e=>e.nbr_panne_camion)}`}
            />
            {/* <TrafficByDevice sx={{ height: '100%' }} /> */}
          </Grid>
          
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <LatestProducts sx={{ height: '100%' }} /> */}
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <LatestOrders /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
             
            
    
    </React.Fragment>
  );
};

export default Dashboard;
