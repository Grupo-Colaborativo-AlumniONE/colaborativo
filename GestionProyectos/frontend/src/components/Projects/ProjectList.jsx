import React from "react";
import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import theme from "../Theme";

export default function ProjectList({ projects, onEdit, onDelete }) {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nombre", width: 200 },
    { field: "description", headerName: "Descripción", width: 200 },
    { field: "startDate", headerName: "Fecha de inicio", width: 200 },
    { field: "endDate", headerName: "Fecha de finalización", width: 200 },
    { field: "status", headerName: "Estado", width: 200 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <div>
          <EditIcon
            onClick={() => onEdit(params.row.id)}
            sx={{
              cursor: "pointer",
              color: theme.palette.button.main,
              "&:hover": { color: theme.palette.button.hover },
            }}
          />
          <DeleteForeverIcon
            onClick={() => onDelete(params.row.id)}
            sx={{
              cursor: "pointer",
              color: theme.palette.button.delete,
              "&:hover": { color: theme.palette.button.hoverDelete, opacity: 0.7 },
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      {/* With this DataGrid we show the data*/}
      <DataGrid
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        rows={projects}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
