import Navbar from "./Navbar";
import Footbar from "./Footbar";

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Navbar />
      <main>{children}</main>
      <Footbar />
    </div>
  );
}
