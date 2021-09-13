import React from "react";
import {
  makeStyles,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Favorite, Share, MoreVert } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";

const colorPalette = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: "#e5e5e5",
  },
  media: {
    height: 150,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  like: {
    color: red[500],
  },
}));

const options = ["Edit", "Delete", "More..."];

const ITEM_HEIGHT = 48;

const Cards = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [currentLike, setCurrentLike] = React.useState(props.like);

  const open = Boolean(anchorEl);

  const currentLikeHandler = (event) => {
    setCurrentLike(!currentLike);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className="avatar"
            style={{
              backgroundColor:
                colorPalette[~~(Math.random() * colorPalette.length)],
            }}
          >
            {props.title.charAt(0)}
          </Avatar>
        }
        action={
          <React.Fragment>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Edit"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </React.Fragment>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.children}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={currentLikeHandler}
          className={currentLike === true ? classes.like : ""}
        >
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Cards;
