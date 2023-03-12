import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { EmojiEmotions } from "@mui/icons-material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DateRangeIcon from "@mui/icons-material/DateRange";

const MyModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "15px",
});

const Add = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <MyModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={3}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png"
              onClick={(e) => setOpen((prevOpen) => !prevOpen)}
            />
            Curry
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Say Something"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <InsertPhotoIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddAltIcon color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </MyModal>
    </div>
  );
};

export default Add;
