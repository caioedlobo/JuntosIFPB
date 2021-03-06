import React from "react";
import UserBar from "../organisms/UserBar";
import { Box } from "@mui/material";
import Layout from "./Layout";

const LayoutUserPage = (props) => {
  return (
    <div data-testid="layout-user-page">
      <Layout>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            width: "85vw",
            maxWidth: "700px",
            justifyContent: "center",
          }}
        >
          <UserBar isOutsourced={props.isOutsourced} />
          {props.children}
          {/* <Route path="/usuario" component={<UserCard />} /> */}
        </Box>
      </Layout>
    </div>
  );
};

export default LayoutUserPage;
