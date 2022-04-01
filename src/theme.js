import * as React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
});

LinkBehavior.propTypes = {
  href: PropTypes.oneOfType([
    PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    PropTypes.string,
  ]).isRequired,
};

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
  children: PropTypes.node,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#333",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
        underline: "none",
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {
          border: 0,
          borderRadius: "15px",
          color: "white",
          width: "100%",
          background: "linear-gradient(to bottom right, #2f6933, #28b00a)",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  
});

export default function LinkRouterWithTheme() {
  return (
    <Stack sx={{ typography: 'body1' }} alignItems="center" spacing={1}>
      <ThemeProvider theme={theme}>
        <Router>
          <Link href="/">Link</Link>
          <Button href="/" variant="contained">
            Link
          </Button>
        </Router>
      </ThemeProvider>
    </Stack>
  );
}


/* export const theme = createTheme({
  palette: {
    primary: {
      main: "#333",
    },
  },
  components: {
    MuiLink: { defaultProps: { underline: "none" } }, 
    MuiButton: {
      defaultProps: {
        sx: {
          border: 0,
          borderRadius: "15px",
          color: "white",
          width: "100%",
          background: "linear-gradient(to bottom right, #2f6933, #28b00a)",
        },
      },
    },
  },
}); */
