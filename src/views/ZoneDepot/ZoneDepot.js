import React from "react";
import { Box } from "@material-ui/core";
import { PageBody } from "../../components";
import TableZoneDepot from "../../components/zone de depot/tabeZoneDepot";
const ZoneDepot = () => {
  return (
    <React.Fragment>
      <PageBody style={{ display: "flex" }}>
        <Box
          flexGrow='1'
          width={"100%"}
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          
          >
      <TableZoneDepot/>
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default ZoneDepot;
