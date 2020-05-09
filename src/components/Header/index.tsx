import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: '2em',
      cursor: 'pointer',
    },
    toolbar: theme.mixins.toolbar,
  })
);

const Header: React.FC = (props) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Link href="/">
            <Typography variant="h1" className={classes.title}>
              TAKEOUT
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </>
  );
};

export default Header;
