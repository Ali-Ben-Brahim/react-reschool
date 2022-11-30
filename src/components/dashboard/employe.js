import { Card, CardContent, Grid, Typography ,Box} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    Apartment,
   
  } from "@material-ui/icons";
import { Container } from '@material-ui/core';
export const Employe = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
        <Typography align='center'>Gestion</Typography>
      <Grid
     spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}
        container
        
        sx={{ justifyContent: 'space-between' }}
      >
      <Grid  item xs={2} sm={2} md={4}>
        <Box  flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
        <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
            align='center'
          
          >
            {props.title1}
          </Typography>
         
    
          {props.icon1}
        
         
          <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
            align='center'
            
          >
            {props.quantite1}
          </Typography>
          </Box>
        </Grid>
        <Grid  item xs={2} sm={2} md={4}>
        <Box  flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
        <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
            align='center'
          
          >
          
          
          {props.title2}
          </Typography>
         
    
          {props.icon2}
        
         
          <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
            align='center'
           
          >
            {props.quantite2}
          </Typography>
          </Box>
        </Grid>
        <Grid  item xs={2} sm={2} md={4}>
        <Box  flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
        <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
            align='center'
          >
            {props.title3}
          </Typography>
         
    
          {props.icon3}
        
         
          <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
            align='center'
           
          >
            {props.quantite3}
          </Typography>
          </Box>
        </Grid>
        <Grid  item xs={2} sm={2} md={4}>
        <Box  flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
        <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
            align='center'
          >
           {props.title4}
          </Typography>
         
    
          {props.icon4}
        
         
          <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
            align='center'
           
          >
            {props.quantite4}
          </Typography>
          </Box>
        </Grid>
        <Grid  item xs={2} sm={2} md={4}>
        <Box  flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
        <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
            align='center'
          >
            {props.title5}
          </Typography>
         
    
          {props.icon5}
        
         
          <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
            align='center'
           
          >
            {props.quantite5}
          </Typography>
          </Box>
        </Grid>
        <Grid  item xs={2} sm={2} md={4}>
        <Box  flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
        <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
            align='center'
          >
            {props.title6}
          </Typography>
         
    
          {props.icon6}
        
         
          <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
            align='center'
           
          >
            {props.quantite6}
          </Typography>
          </Box>
        </Grid>

      </Grid>
     
    </CardContent>
  </Card>
);
