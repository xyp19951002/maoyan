import http from "./http";

export const getPopularMovieApi = params => http.get("/rated/list", params);

export const getMovieList = params => http.get("/movies/list", params);

// 首页上拉加载
export const postMovieList = params => http.post("/movies/more", params);
