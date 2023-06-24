
export  const GET_POSTS = "GET_POSTS";

export  const   getItemAC = (data) => {
    return {
        type : GET_POSTS,
        payload: data
    }
}
