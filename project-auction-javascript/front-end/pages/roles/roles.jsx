import * as React from "react";
import {
  Paper,
  TableCell,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Link,
  Button,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useSWR from "swr";

export default function Roles() {
  const [open, setOpen] = React.useState(false);
  const rolesApi = "http://localhost:4000/v1/roles";
  const fetcher = async (url) =>
    await axios.get(url).then((res) => {
      return res.data.data;
    });
  const { data, error } = useSWR(rolesApi, fetcher);

  function openDeleteModal() {
    setOpen(true);
  }

  function deleteHandler(id) {
    axios.delete(`http://localhost:4000/v1/roles/delete/${id}`).then((res) => {
      if (res.status === 200) {
        setOpen(false);
        location.reload();
      }
    });
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Role Name</TableCell>
            <TableCell>Role Status</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((role) => {
            return (
              <TableRow
                key={role.role_name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{role._id}</TableCell>
                <TableCell>{role.role_name}</TableCell>
                <TableCell>{role.role_status}</TableCell>
                <TableCell>
                  <Link href={`/roles/edit/${role._id}`}>
                    <EditIcon />
                  </Link>
                </TableCell>
                <TableCell>
                  <Button onClick={openDeleteModal}>
                    <DeleteForeverIcon />
                  </Button>
                </TableCell>
                <Modal
                  open={open}
                  onClose={() => {
                    setOpen(false);
                  }}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      bgcolor: "background.paper",
                      borderRadius: 5,
                      boxShadow: 24,
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 3,
                      color: "black",
                    }}
                  >
                    <Typography>Delete?</Typography>
                    <div style={{ display: "flex", gap: 15 }}>
                      <Button
                        variant="contained"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          deleteHandler(role._id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </Box>
                </Modal>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
