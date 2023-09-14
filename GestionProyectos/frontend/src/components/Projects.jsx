import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import CreateProject from "./CreateProject";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

export default function Projects() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  //This is for the data to see how it looks
  const { data } = useDemoData({
    dataSet: "users",
    rowLength: 10,
    maxColumns: 10,
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddProject = (projectName) => {
    // Here we should add the project to the database
    console.log(`Agregando proyecto: ${projectName}`);
  };
  const actions = [
    { icon: <EditIcon />, name: "Editar" },
    { icon: <AddCircleIcon />, name: "Agregar", onClick: handleOpenModal },
    {
      icon: <DeleteForeverIcon />,
      name: "Eliminar",
    },
  ];
  return (
    <div>
      <Box
        sx={{
          height: 330,
          transform: "translateZ(0px)",
          flexGrow: 1,
          position: "absolute",
          bottom: 0,
          right: 16,
        }}
      >
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: "absolute", bottom: 10, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      </Box>
      {/* With this we show the data */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          {...data}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </div>
      <CreateProject
        open={isModalOpen}
        onClose={handleCloseModal}
        onAddProject={handleAddProject}
      />
    </div>
  );
}
