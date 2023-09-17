import { createSlice } from "@reduxjs/toolkit";
import { STORAGE } from "../../helpers/LocalVariable";
import addDeleteGetLocalStorage from "../../prototype/addDeleteGetLocalStorage";
import globalRequest from "../../prototype/globalRequest";
import { API_ROUTES } from "../../helpers/ApiRoutes";

const getGetUserProductsCount = async () => {
  const token = addDeleteGetLocalStorage(STORAGE.USER_TOKEN, {}, "get");
  if (
    token !== undefined &&
    token !== null &&
    token !== "null" &&
    token !== ""
  ) {
    try {
      const res = await globalRequest(
        "get",
        API_ROUTES.GET_CART_WISHLIST_COUNT,
        {},
        {},
        true
      );
      return res?.data; // Return the data object
    } catch (error) {
      return { cartcount: 0, wishlistcount: 0 }; // Return default values on error
    }
  }
  return { cartcount: 0, wishlistcount: 0 }; // Return default values if user token is not available
};

export const fetchUserProductsCount = () => async (dispatch) => {
  const data = await getGetUserProductsCount();
  dispatch(changeUserProductsCount(data)); // Dispatch the retrieved data to the store
};

export const userProductsCount = createSlice({
  name: "userProductsCount",
  initialState: {
    value: { cartcount: 0, wishlistcount: 0 },
  },
  reducers: {
    changeUserProductsCount: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUserProductsCount } = userProductsCount.actions;
export const userProductsObj = (state) => state.userProductsCount.value;
export default userProductsCount.reducer;
