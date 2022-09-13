import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState, useEffect } from "react";

export default function getRoles() {
  const [roles, setRoles] = useState();
  useEffect(() => {
    axios.get("http://localhost:4000/v1/roles").then((res) => {
      setRoles(res.data.data);
    });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Role Name</TableCell>
            <TableCell>Role Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles?.map((role) => {
            return (
              <TableRow
                key={role.role_name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{role._id}</TableCell>
                <TableCell>{role.role_name}</TableCell>
                <TableCell>{role.role_status}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
