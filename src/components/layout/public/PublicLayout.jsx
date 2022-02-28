import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const PublicLayout = ({ children }) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{ m: 1, bgcolor: 'default.main', width: 56, height: 75 }}
          src="https://cdn-icons-png.flaticon.com/128/6769/6769119.png"
        />
        <Typography component="h1" variant="h5">
          Qhatu
        </Typography>
        {children}
      </Box>
    </Container>
  );
};

export default PublicLayout;
