import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import theme from "../Theme";

export default function EditProject({
  open,
  onClose,
  onEditProject,
  projectToEdit,
}) {
  const [projectData, setProjectData] = useState(
    projectToEdit || {
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      status: "En Progreso", // per default
    }
  );

  useEffect(() => {
    setProjectData(
      projectToEdit || {
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "En Progreso",
      }
    );
  }, [projectToEdit]);

  const handleClose = () => {
    onClose();
    // For clearing the form after closing
    setProjectData({
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      status: "En Progreso",
    });
  };

  const handleEditProject = () => {
    onEditProject(projectData);
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        sx={{
          color: theme.palette.text.title,
          backgroundColor: theme.palette.primary.main,
          marginBottom: "2rem",
        }}
      >
        Editar Proyecto
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Actualiza los detalles del proyecto:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Nombre del Proyecto"
          type="text"
          fullWidth
          required
          value={projectData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="description"
          label="Descripción"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={projectData.description}
          onChange={handleChange}
        />
        <TextField
          size="small"
          margin="normal"
          name="startDate"
          label="Fecha de Inicio"
          type="date"
          required
          value={projectData.startDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ width: "50%" }}
        />
        <TextField
          size="small"
          margin="normal"
          name="endDate"
          label="Fecha de Finalización"
          type="date"
          value={projectData.endDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ width: "50%" }}
        />

        <FormControl margin="normal" sx={{ minWidth: 120 }} fullWidth>
          <InputLabel id="status" name="status">
            Estado
          </InputLabel>
          <Select
            labelId="status"
            id="status"
            label="status"
            name="status"
            value={projectData.status}
            onChange={handleChange}
          >
            <MenuItem value="En progreso">En Progreso</MenuItem>
            <MenuItem value="Completado">Completado</MenuItem>
            <MenuItem value="En espera">En Espera</MenuItem>
            <MenuItem value="Cancelado">Cancelado</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{
            color: theme.palette.button.text,
            backgroundColor: theme.palette.button.cancel,
            "&:hover": {
              backgroundColor: theme.palette.button.hoverCancel,
              opacity: 0.8,
              transparence: 0.1,
            },
          }}
        >
          Cancelar
        </Button>
        <Button
          onClick={handleEditProject}
          sx={{
            color: theme.palette.button.text,
            backgroundColor: theme.palette.button.main,
            "&:hover": { backgroundColor: theme.palette.button.hover },
          }}
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
