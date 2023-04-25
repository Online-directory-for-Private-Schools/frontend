const apiGetRequestHandler: Function = async (
  route: string,
  query: string,
  token: string
) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + route + query,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    ).catch((e) => console.log(e));

    console.log(process.env.NEXT_PUBLIC_BACKEND_URL + route + query);
    if (!!res.error)
      // if an error occurred
      return {
        error: {
          message: res.error.message,
        },
      };
    else {
      return {
        data: res,
      };
    }
  } catch (e: any) {
    // if an error occurred
    return {
      error: {
        message: e.message,
      },
    };
  }
};

export default apiGetRequestHandler;