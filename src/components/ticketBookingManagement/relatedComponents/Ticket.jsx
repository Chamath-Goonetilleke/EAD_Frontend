import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import train from "../../common/Resources/train.png";
export default function Ticket({ ticket }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#faf7ed",
        border: "2px solid #e55a15",
        width: "60%",
        padding: "1rem",
        paddingLeft: "0rem",
        marginRight: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#faf7ed",
        }}
      >
        <div style={{ flex: 1 }}>
          <img src={train} alt="train" width={80} />
        </div>
        <div style={{ flex: 3 }}>
          <center>
            <h5>{ticket.trip}</h5>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                fontSize: "0.8rem",
              }}
            >
              <div style={{ fontWeight: "bold" }}>No : {ticket.no}</div>
              <div>{ticket.className} Seats</div>
            </div>
          </center>
        </div>
      </div>
      <TableContainer>
        <Table size="small" aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Seat
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "14px" }}
              >
                Platform
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "14px" }}
              >
                DepartureTime
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{ticket.seatNo}</TableCell>
              <TableCell align="center">{ticket.platform}</TableCell>
              <TableCell align="center">{ticket.time}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
