import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ height: "80px", width: "100%",backgroundColor:"black",color: "white",display: "flex",alignItems: "center"}}>
      <Link to="/" style={{textDecoration: "none",fontWeight: "bold",fontSize: "20px"}}>HOME</Link>
    </div>
  );
}
