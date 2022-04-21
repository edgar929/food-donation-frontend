import axios from 'axios';
// import cogoToast from 'cogo-toast'
import {errorToast} from "./toastMessages"


const httpRequest = async (method, url, data = null,headers=null) => {
  try {
    const response = await axios({
      method,
       url,
      data,
      headers,
    });
    console.log(response)
    return { response };
  } catch (error) {
    const errorMessage = (error.response) ? error.response.error || error.response.data.error : 'Failed Try again later';
    errorToast(errorMessage);
    return { error };
  }
};

export { httpRequest };