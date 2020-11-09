export const getCategories = async () => {
    let response = await fetch("http://127.0.0.1:8000/apis/Full_Categories/");
    let json = await response.json();
    return json;
  };