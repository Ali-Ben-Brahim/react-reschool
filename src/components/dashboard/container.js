import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
export const Budget = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
          >
            {props.type}
          </Typography>
          <Typography
            color="textSecondary"
            variant="h5"
          >
            {props.quantite}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'main',
              height: 56,
              width: 56
            }}
          >
            <img width={56} src={process.env.PUBLIC_URL + `/images/${props.type}.png`} alt={`${props.type}`} />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          {props.number} 
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Poubelles en stock
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
