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
} from "@mui/material";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useSWR from "swr";

export default function Roles() {
  const rolesApi = "http://localhost:4000/v1/roles";
  const fetcher = async (url) =>
    await axios.get(url).then((res) => {
      return res.data.data;
    });
  const { data, error } = useSWR(rolesApi, fetcher);

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
                  <Link href={`/roles/delete/${role._id}`}>
                    <DeleteForeverIcon />
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
