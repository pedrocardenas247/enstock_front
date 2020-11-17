const URL_BACKEND ="http://localhost:8000";

export const getCategories = async () => {
    let response = await fetch(`${URL_BACKEND}/apis/Full_Categories/`);
    let json = await response.json();
    return json;
  };


  export const getStores = async () => {
    let response = await fetch(`${URL_BACKEND}/apis/Full_Stores/`);
    let json = await response.json();
    return json;
  };


  export const getListStores = async () => {
    let response = await fetch(`${URL_BACKEND}/apis/Full_ListStores/`);
    let json = await response.json();
    return json;
  };