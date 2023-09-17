import { useEffect } from "react";
import { setSnackbar, snackObj } from "../../redux/reducers/snackbar";
import { useDispatch, useSelector } from "react-redux";

export const Snackbar = () => {
  const dispatch = useDispatch();
  const snackbarObj = useSelector(snackObj);

  useEffect(() => {
    if (snackbarObj?.isOpen) {
      setTimeout(() => {
        dispatch(
          setSnackbar({
            message: "",
            isOpen: false,
            state: "warning", //error,success,warning
          })
        );
      }, 6000);
    }
  }, [snackbarObj]);

  return (
    <>
      {snackbarObj?.isOpen ? (
        <div
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: "999999",
            width: "300px",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          className={`snackbar ${snackbarObj?.state}`}
        >
          <div className="snackbar__message">{snackbarObj?.message}</div>
        </div>
      ) : null}
    </>
  );
};
