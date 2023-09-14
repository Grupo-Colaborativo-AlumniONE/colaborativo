import React, { useState } from "react";
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
import theme from "./Theme";

export default function CreateProject({ open, onClose, onAddProject }) {
  const teamMembers = [
    "Ninguno", // Empty option
    "Miembro 1",
    "Miembro 2",
    "Miembro 3",
    "Miembro 4",
    "Miembro 5",
  ]; // List of members

  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    teamMember: "",
    startDate: "",
    endDate: "",
    status: "In Progress", // per default
  });

  const handleClose = () => {
    onClose();
    // For clearing the form after closing
    setProjectData({
      name: "",
      description: "",
      teamMember: [],
      startDate: "",
      endDate: "",
      status: "In Progress",
    });
  };

  // This function is called when the user clicks on the "Agregar" button
  const handleAddProject = () => {
    onAddProject(projectData);
    handleClose();
  };

  // This function is called when the user types in the form
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
        Agregar Proyecto
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Ingresa los detalles del nuevo proyecto:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Nombre del Proyecto"
          type="text"
          fullWidth
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
        <FormControl margin="normal" sx={{ minWidth: 120 }} size="small">
          <InputLabel id="teamMember">Asignar a</InputLabel>
          <Select
            labelId="teamMember"
            id="teamMember"
            label="teamMember"
            name="teamMember"
            value={projectData.teamMember}
            onChange={handleChange}
          >
            {teamMembers.map((member) => (
              <MenuItem key={member} value={member}>
                {member}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          size="small"
          margin="normal"
          name="startDate"
          label="Fecha de Inicio"
          type="date"
          value={projectData.startDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
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
        <Button onClick={handleClose} sx={{
            color: theme.palette.button.text,
            backgroundColor: theme.palette.button.cancel,
            "&:hover": { backgroundColor: theme.palette.button.hoverCancel, opacity: 0.8, transparence: 0.1 }
          }}>
          Cancelar
        </Button>
        <Button
          onClick={handleAddProject}
          sx={{
            color: theme.palette.button.text,
            backgroundColor: theme.palette.button.main,
            "&:hover": { backgroundColor: theme.palette.button.hover }
          }}
        >
          Agregar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
