
import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import { CustomeTextField } from '../components/CTextField/custome-textfield';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const LoginPage = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}></span>;
  const LoginCard = <Card className={classes.root}>
  <CardContent>
    <Typography variant="h5" component="h2" style={{textAlign:"center"}}>
      Login Form{bull}
    </Typography>
  </CardContent>

  <CardContent>
    <CustomeTextField placeholder="Username"/>
    <br/>
    <CustomeTextField placeholder="Password"/>
  </CardContent>

  <CardActions>
    <Button variant="contained" color="primary">Login</Button>
  </CardActions>
</Card>
    return <Fragment>
        <div style={{
            display:"flex",
            justifyContent:"center",
            minHeight:"100vh",
            alignItems:"center",
        }}
        >
        {LoginCard}
        </div> 
    </Fragment>
}

export default LoginPage