import React from "react";
import { Box } from "@material-ui/core";
import { PageBody, PageHeader } from "../../components";
import TableZoneTravail from "../../components/zonetravail/tablezonetravail";
const ZoneDeTravail = () => {
  
  return (
    <React.Fragment>
      <PageBody style={{ display: "flex" }}>
        <Box
          flexGrow='1'
          
          width={"100%"}
          flexDirection='column'
          alignItems='start'
          justifyContent='space-around'
          
          >
             
          <TableZoneTravail/>
    
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default ZoneDeTravail;
