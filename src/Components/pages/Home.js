import React from "react";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../../redux/reducers/snackbar";
import { changeLoader } from "../../redux/reducers/loader";

export const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          dispatch(
            setSnackbar({
              message: "click on the button ",
              isOpen: true,
              state: "warning", //error,success,warning
            })
          );
        }}
      >
        show popup
      </button>

      <button
        onClick={() => {
          dispatch(changeLoader(true));
          setTimeout(() => {
            dispatch(changeLoader(false));
          }, 3000);
        }}
      >
        show loading
      </button>
    </div>
  );
};
