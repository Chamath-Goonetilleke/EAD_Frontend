import React, { Component } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { updateResevationScheduleTrainStatus, updateNewScheduleTrainStatus } from "../../../services/scheduleService";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
// import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class ControlPanel extends Component {
  // constructor(props) {
  //   super(props);
    
  // }
  state = {
    checked: this.props.IsCancled,
    train_id: this.props.train_id,
    isAlertMsg: false,
    alertseverity: "success",
    scheduleId: this.props.scheduleId,
    status: this.props.IsCancled,
    open: false,
  };
  handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ isAlertMsg: false });
  };

  handleChange = (event) => {
    this.setState({ checked: event.target.checked });
  };
  //   warning
  updateTrainReservation = async () => {
    try {
      const { data } = await updateResevationScheduleTrainStatus(
        this.props.scheduleId,
        this.state.checked
      );console.log("data>>>>>>>>>>>>>>>",data)
      // this.setState({ open: data });
      // this.props.handleControlPanelDialogClose();
      console.log(data)
      this.props.fetchSchedules();
    } catch (error) {
      // Handle error if needed
      this.setState({ open: true });
      this.setState({checked: this.props.isPublished})
      console.log("data>>>>>>>>>>>>>>>",error.request.status)
      console.log(error);
    }
  };
  handleClose = () => {
    this.setState({open: false})
  };

  render() {
    const { checked } = this.state;
    // const { train_status } = this.props;
    // const { train_id } = this.props;

    return (
      <Box sx={{ width: "350px", maxWidth: 360, bgcolor: "background.paper" }}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                style={{ textAlign: "left" }}
              >
                Train Reservation Status
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                {this.props.IsCancled ? (
                  <Chip color="warning" label="CANCELED" />
                ) : (
                  <Chip color="success" label="NOT CANCLED" />
                )}
              </Typography>
            </Grid>
          </Grid>
          {/* <Typography color="text.secondary" variant="body2">
            Update trains for reservations
          </Typography> */}
        </Box>
        {this.state.open ? <Alert severity="warning">Current Schedule have Reservation</Alert> : ""}
        
        <Divider variant="middle" />
        <Box sx={{ m: 2 }}>
          <Typography gutterBottom variant="body1">
            Select Status{" "}
            <Switch
              checked={checked}
              onChange={this.handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            {checked ? (
              <Chip
              color="warning"
              label="CANCELED"
              style={{ float: "right" }}
            />
            ) : (
              <Chip
                color="success"
                label="NOT CANCLED"
                style={{ float: "right" }}
              />
            )}
          </Typography>
          <Stack direction="row" spacing={1}></Stack>
        </Box>
        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
          <Button onClick={this.updateTrainReservation} variant="outlined">
            Update
          </Button>
        </Box>
        <Snackbar
          open={this.state.isAlertMsg}
          autoHideDuration={6000}
          onClose={this.handleAlertClose}
        >
          <Alert
            onClose={this.handleAlertClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Successfully Created!
          </Alert>
        </Snackbar>
        {/* <Dialog
            open={this.state.open}
            onClose={this.handleDialogClose}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>Cannot Cancled Train. You have Resevations</DialogTitle>
          </Dialog> */}
      </Box>
    );
  }
}

export default ControlPanel;
