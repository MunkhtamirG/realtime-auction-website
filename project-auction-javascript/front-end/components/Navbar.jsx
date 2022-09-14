import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <Link href={"/"}>
        <Button>Main</Button>
      </Link>
      <Link href={"/roles/roles"}>
        <Button>Roles</Button>
      </Link>
    </div>
  );
}
