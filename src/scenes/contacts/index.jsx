import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "Passport_Id", headerName: "Passport_Id" },
    {
      field: "Sample_Number",
      headerName: "Sample_Number",
      flex: 1,
      cellClassNumber: "Sample number-column--cell",
    },
    {
      field: "Sample_Name",
      headerName: "Sample_Name",
      flex: 1,
      cellClassName: "Sample Name-column--cell",
    },
    {
      field: "Created_Date",
      headerName: "Created_Date",
      flex: 1,
    },
    {
      field: "Created_User",
      headerName: "Created_User",
      flex: 1,
    },
    {
      field: "Nuntaglalt",
      headerName: "Nuntaglalt",
      flex: 1,
    },
    {
      field: "Standart",
      headerName: "Standart",
      flex: 1,
    },
    {
      field: "Sample_Date",
      headerName: "Sample_Date",
      flex: 1,
    },
    {
      field: "Sample_User",
      headerName: "Sample_User",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Шинжилгээний хариу"
        subtitle="Шинжилгээний хариу"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
