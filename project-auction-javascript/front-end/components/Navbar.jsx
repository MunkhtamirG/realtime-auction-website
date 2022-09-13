import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <Link href={"/"}>
        <Button>Main</Button>
      </Link>
      <Link href={"/roles/getRoles"}>
        <Button>Roles</Button>
      </Link>
    </div>
  );
}
