export const getData = (response: any) => {
  return response.data;
};

export const getResponse = (response: any) => {
  const { code } = response;

  switch (code) {
    case 200:
      return { status: true, body: getData(response) };
    case 400:
      return { status: false, body: getData(response) };
    default:
      return { status: false, body: getData(response) };
  }
};
