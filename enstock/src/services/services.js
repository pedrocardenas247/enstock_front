export const getCategories = async () => {
    let response = await fetch("https://enstock.herokuapp.com/apis/Full_Categories/");
    let json = await response.json();
    return json;
  };