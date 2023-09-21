import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import React from "react";
import theme from "../Theme";

export default function DeleteProject({ open, onClose, onDeleteProject }) {
  const handleDelete = () => {
    // missing the logic to delete the project
    onDeleteProject();
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    // This is the dialog that will be shown when the user clicks on the delete button
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <p>¿Estás seguro de que deseas eliminar este proyecto?</p>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleDelete}
          sx={{
            backgroundColor: theme.palette.button.delete,
            color: theme.palette.text.title,
            "&:hover": {
              backgroundColor: theme.palette.button.hoverCancel,
              opacity: 0.8,
              transparence: 0.1,
            },
          }}
        >
          Eliminar
        </Button>
        <Button
          onClick={handleClose}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.title,
            "&:hover": { backgroundColor: theme.palette.button.hover },
          }}
        >
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
