import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormLabel, IconButton, Radio, RadioGroup, Toolbar } from '@mui/material';
import companyDataServices from '../services/company.services'
import { useNavigate } from "react-router-dom";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Form() {
  const [name, setName] = React.useState("")
  const [address, setAddress] = React.useState("")
  const [city, setCity] = React.useState("")
  const [state, setState] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [companyname, setCompanyname] = React.useState("")
  const [team, setTeam] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [problem, setProblem] = React.useState("")
  const [solution, setSolution] = React.useState("")
  const [competative, setCompetative] = React.useState("")
  const [propositiion, setPropositiion] = React.useState("")
  const [revenue, setRevenue] = React.useState("")
  const [market, setMarket] = React.useState("")
  const [services, setServices] = React.useState("")
  const [proposal, setProposal] = React.useState("")
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate('')



 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = {
      name,
      address,
      city,
      state,
      email,
      companyname,
      team,
      company,
      problem,
      solution,
      competative,
      propositiion,
      revenue,
      market,
      services,
      proposal,
    }

    setName("")
    setAddress("")
    setCity("")
    setState("")
    setEmail("")
    setCompanyname("")
    setTeam("")
    setCompany("")
    setProblem("")
    setSolution("")
    setCompetative("")
    setPropositiion("")
    setRevenue("")
    setMarket("")
    setServices("")
    setProposal("")
    

    try {
      setOpen(true);
      await companyDataServices.addUser(details)
    } catch (error) {
      console.log(error)
    }

  };
  const handleClose = () => {
    setOpen(false);
  };
const handleLogout = () => {
  navigate('/signin')
}
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              INCUBATION-MANAGEMENT
            </Typography>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              APPLICATION  FORM
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5, width: '75%', }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField

                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    autoComplete="address"
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ mt: 3 }}>
                  <TextField

                    required
                    fullWidth
                    id="city"
                    label="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    name="city"
                    autoComplete="city"
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ mt: 3 }}>
                  <TextField

                    required
                    fullWidth
                    id="state"
                    label="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    name="state"
                    autoComplete="state"
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ mt: 3 }}>
                  <TextField

                    required
                    fullWidth
                    id="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ mt: 3 }}>
                  <TextField

                    required
                    fullWidth
                    id="phone"
                    label="Phone no"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone"
                    autoComplete="phone"
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ mt: 3 }}>
                  <TextField

                    required
                    fullWidth
                    id="companyname"
                    value={companyname}
                    onChange={(e) => setCompanyname(e.target.value)}
                    label="Company Name"
                    name="comname"
                    autoComplete="comname"

                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ mt: 3 }}>
                  <TextField

                    name="upload-photo"
                    type="file"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 3 }}>
                  <TextField
                    required
                    fullWidth
                    id="Team"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    label="Describe Your Team And Background"
                    name="Team"
                    autoComplete="Team"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 3 }}>
                  <TextField
                    required
                    fullWidth
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}

                    label="Describe Your Company And Product"
                    name="company"
                    autoComplete="company"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 3 }}>
                  <TextField
                    required
                    fullWidth
                    id="problem"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}

                    label="Describe The Problem Your Trying To solve"
                    name="problem"
                    autoComplete="problem"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 3 }}>
                  <TextField
                    required
                    fullWidth
                    id="solution"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    label="What Is Unique About Your Solution"
                    name="solution"
                    autoComplete="solution"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 3 }}>
                  <TextField
                    required
                    fullWidth
                    id="propositiion"
                    value={propositiion}
                    onChange={(e) => setPropositiion(e.target.value)}

                    label="What is your Value Propositiion for the customer"
                    name="propositiion"
                    autoComplete="propositiion"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 3 }}>
                  <TextField
                    required
                    fullWidth
                    id="competative"
                    value={competative}
                    onChange={(e) => setCompetative(e.target.value)}
                    label="Who are Your competitors and What is your competative advantage?"
                    name="competative"
                    autoComplete="competative"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 3 }}>
                  <TextField
                    required
                    fullWidth
                    id="revenue"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    label="Explain Your revenue model"
                    name="revenue"
                    autoComplete="revenue"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 3 }}>
                  <TextField
                    required
                    fullWidth
                    id="market"
                    value={market}
                    onChange={(e) => setMarket(e.target.value)}

                    label="What is your potential market size of product?"
                    name="market"
                    autoComplete="market"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 3 }}>
                  <TextField
                    required
                    fullWidth
                    id="services"
                    value={services}
                    onChange={(e) => setServices(e.target.value)}

                    label="How do you market or plan to market your product and services?"
                    name="services"
                    autoComplete="services"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 3 }}>

                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Type of Incubation needed</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Physical Incubation" />
                      <FormControlLabel value="male" control={<Radio />} label="Virtual Incubation" />
                    </RadioGroup>
                  </FormControl>


                </Grid>
                <Grid item xs={12} sx={{ mt: 3 }}>
                  <TextField
                    required
                    fullWidth
                    id="proposal"
                    value={proposal}
                    onChange={(e) => setProposal(e.target.value)}
                    label="Upload a detailed buisness proposal"
                    name="proposal"
                    autoComplete="proposal"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ mt: 3 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >

                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Form Submitted Seccesfully
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                      ok
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
              <Grid item xs={12} sx={{ mt: 3 }}>

              </Grid>

            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}