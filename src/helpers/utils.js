import React from "react"
import axios from "axios"

const urlFetcher = url => fetch(url).then(r => r.json())
const urlPoster = (url, data) =>
  axios({ method: "POST", url, data }).then(r => r.data)


export function MovieSearch(key) {
    return urlFetcher(`https://api.themoviedb.org/3/search/movie?query=${key}&api_key=cfe422613b250f702980a3bbf9e90716`)
}
export function InfoMovie(id) {
    return urlFetcher(`https://api.themoviedb.org/3/movie/${id}?&api_key=cfe422613b250f702980a3bbf9e90716`)
}
