import React, { useContext } from "react";
import { ShowAlertContext } from "../context/AlertContext";

export default function ShowAlert() {
  const [openAlert, setOpenAlert] = useContext(ShowAlertContext);

  //   use below code to show snackbar with message
  //  setOpenAlert({type:"error", msg : "Working"})

  if (openAlert) {
    setTimeout(() => {
      setOpenAlert(null);
    }, 5000);

    return (
      <div className="position-fixed top-1 end-0 p-3">
            <div
              id="liveToast"
              className={`toast show text-bg-${openAlert.type}`}
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="toast-body">
                {openAlert.msg}
              </div>
            </div>
          </div>
      // <Stack spacing={2} sx={{ width: "100%" }}>
      //   <Snackbar open={true} autoHideDuration={5000}>
      //     <Alert severity={openAlert.type}>{openAlert.msg}</Alert>
      //   </Snackbar>
      // </Stack>
    );
  }
  return null;
}
