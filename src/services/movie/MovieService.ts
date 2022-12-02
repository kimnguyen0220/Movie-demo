import BaseService from "services/BaseService";

const BASE_URL = '/movie';

export const getListApi = () => {
    return BaseService.get(`${BASE_URL}/now_playing`)
}

export const getMovieDetailByIdApi = (id: number) => {
    return BaseService.get(`${BASE_URL}/${id}`)
}

export const getImageByMovieIdApi = (movieId: number) => {
    return BaseService.get(`${BASE_URL}/${movieId}`)
}