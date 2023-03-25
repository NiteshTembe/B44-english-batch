import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Container } from "@mui/system";
import { Box } from "@mui/material";

export default function CopyrightFooter(props) {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          {...props}
        >
          {"Copyright © "}
          <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}
