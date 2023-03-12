import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const Post = () => {
  return (
    <div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="AROUND THE GLOBE: KIA MVP RACE TIGHTENING UP"
          subheader="March 11, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://cdn.nba.com/manage/2023/03/GettyImages-1460406996-scaled-e1678488266439-1536x863.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            There still isn’t a clear frontrunner with less than 20
            regular-season games remaining. International superstars Nikola
            Jokic, Giannis Antetokounmpo and Joel Embiid each present strong
            claims.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
