import React from "react";
import { useRouter } from "next/router";
import { Box, Button, TextField, Typography } from "@mui/material";
import useSWR from "swr";
import axios from "axios";

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => {
      return res.data.data;
    });
  const { data, error } = useSWR(
    `http://localhost:4000/v1/roles/${id}`,
    fetcher
  );

  function submitHandler(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/v1/roles/update?id=${id}`, {
        role_name: e.target.roleName.value,
        role_status: e.target.roleStatus.value,
      })
      .then((res) => {
        if (res.status === 200) {
          router.push("/roles/roles");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
      <Box
        component="form"
        style={{
          backgroundColor: "white",
          color: "black",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
        }}
        onSubmit={submitHandler}
      >
        <Typography>Edit Role</Typography>
        <TextField
          label="Role Name"
          defaultValue={data?.role_name}
          name="roleName"
        ></TextField>
        <TextField
          label="Role Status"
          defaultValue={data?.role_status}
          name="roleStatus"
        ></TextField>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </Box>
    </div>
  );
}
