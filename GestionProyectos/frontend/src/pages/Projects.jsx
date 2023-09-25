import React, { useState } from "react";
import CreateProject from "../components/Projects/CreateProject";
import EditProject from "../components/Projects/EditProject";
import ProjectList from "../components/Projects/ProjectList";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteProject from "../components/Projects/DeleteProject";
import theme from "../components/Theme";

export default function Projects() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleOpenDeleteDialog = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  const handleEditProject = (updatedProjectData) => {
    const updatedProjects = projects.map((project) =>
      project.id === selectedProjectId
        ? { ...project, ...updatedProjectData }
        : project
    );

    setProjects(updatedProjects);
    setIsEditDialogOpen(false);
  };

  const handleAddProject = (newProjectData) => {
    const newProject = {
      id: projects.length + 1,
      ...newProjectData,
    };

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    setIsAddDialogOpen(false);
  };

  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== projectId
    );
    setProjects(updatedProjects);

    setSelectedProjectId(projectId);
    handleOpenDeleteDialog();
  };

  const handleOpenEditDialog = (projectId) => {
    const project = projects.find((project) => project.id === projectId);

    setSelectedProjectId(projectId);
    setIsEditDialogOpen(true);
    setProjectToEdit(project);
  };

  const handleOpenAddDialog = () => {
    setIsAddDialogOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddDialogOpen(false);
  };

  const handleSpeedDialOpen = () => {
    setOpen(!open);
  };
  const actions = [
    {
      icon: <AddCircleIcon />,
      name: "Agregar",
      onClick: handleOpenAddDialog,
      color: "white",
      sx: { color: theme.palette.button.add },
    },
  ];
  return (
    <div>
      <ProjectList
        projects={projects}
        onEdit={handleOpenEditDialog}
        onDelete={handleDeleteProject}
      />

      <CreateProject
        open={isAddDialogOpen}
        onClose={handleCloseModal}
        onAddProject={handleAddProject}
      />

      <EditProject
        open={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        projectToEdit={projectToEdit}
        selectedProjectId={selectedProjectId}
        onEditProject={handleEditProject}
      />

      <DeleteProject
        open={isDeleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        onDeleteProject={handleDeleteProject}
      />

      {/*This is the button that opens the speed dial menu */}
      <SpeedDial
        ariaLabel="Menu de acciones"
        sx={{
          position: "absolute",
          bottom: 10,
          right: 16,
          zIndex: 1000,
          color: theme.palette.button.add,
        }}
        icon={<SpeedDialIcon />}
        onClose={handleSpeedDialOpen}
        onOpen={handleSpeedDialOpen}
        open={open}
      >
        {/*These are the actions that will be displayed in the speed dial menu*/}
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
            sx={{ color: theme.palette.button.add }}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
