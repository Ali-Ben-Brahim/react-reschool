import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import { PageBody, PageHeader } from "../../components";
import TableCamion from "../../components/camion/tableCamion";

const useStyles = makeStyles((theme) => ({
  leftSpacing: {
    marginRight: theme.spacing(1),
  },
}));

const Camion = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
 
      <PageBody style={{ display: "flex" }}>
        
        <Box
          flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <TableCamion/>
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default Camion;