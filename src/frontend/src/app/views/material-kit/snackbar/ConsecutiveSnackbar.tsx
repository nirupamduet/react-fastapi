import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Snackbar } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Message {
  message: string;
  key: number;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.5)
}));

const ConsecutiveSnackbars = () => {
  const [queue, setQueue] = useState<Message[]>([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState<Message | undefined>(undefined);

  const handleClick = (message: string) => () => {
    setQueue((prev) => [...prev, { message, key: new Date().getTime() }]);

    if (open) {
      // Dismiss current message to show new one
      setOpen(false);
    } else {
      processQueue();
    }
  };

  const processQueue = () => {
    if (queue.length > 0) {
      const next = queue[0];
      setMessageInfo(next);
      setQueue((prev) => prev.slice(1));
      setOpen(true);
    }
  };

  const handleClose = (_: any, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const handleExited = () => {
    processQueue();
  };

  return (
    <Box>
      <Button onClick={handleClick("Message A")}>Show message A</Button>
      <Button onClick={handleClick("Message B")}>Show message B</Button>

      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        onDragExit ={handleExited}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        message={<span id="message-id">{messageInfo?.message}</span>}
        action={
          <>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <StyledIconButton color="inherit" size="small" onClick={handleClose}>
              <CloseIcon />
            </StyledIconButton>
          </>
        }
      />
    </Box>
  );
};

export default ConsecutiveSnackbars;
