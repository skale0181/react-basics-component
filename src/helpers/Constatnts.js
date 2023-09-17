import { API_KEY, BASE_URL } from "../environment";

export const axiosConstant = {
  // This is the base url for the api
  BASE_URL: BASE_URL,

  // This is the base url for the images
  IMAGE_BASE_URL: (image) => BASE_URL + image,

  // This is the base url for the FRONT Website
  FRONT_URL: "",

  // This is the base role for the user
  ROLE: "user",

  // This is the days of the week
  DAYS: [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ],

  // This is the months of the year
  MONTH: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novenber",
    "December",
  ],

  // This is the api key for the google maps
  API_KEY: API_KEY,
  FACEBOOK_SOCIAL_KEY: "2194680784253054",
  GOOGLE_SOCIAL_KEY:
    "676468211954-a06ot2q2ioifru1cam7q61ls06ts34cn.apps.googleusercontent.com",
  GOOGLE_RECAPTCHA_SITE_KEY: "",
  GOOGLE_RECAPTCHA_SECRET_KEY: "",
  GOOGLE_GEOCODE_API_KEY: "",
  GOOGLE_PLACES_API_KEY: "AIzaSyBy2l4KGGTm4cTqoSl6h8UAOAob87sHBsA", //'AIzaSyCkQqWwnxEPIrUswczekreqJehDjI1pdlQ',//'AIzaSyC2Z3e2OYYXeHP3jnD5moajfBEWP_pVzPM'
};
