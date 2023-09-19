import axios from "axios"
const baseUrl='https://qtify-backend-labs.crio.do'

export const fetchAlbums=async()=>{
const topAlbums= (await axios.get(`${baseUrl}/albums/top`)).data;
const newAlbums= (await axios.get(`${baseUrl}/albums/new`)).data;
return {
    topAlbums,
    newAlbums
}
}

export const fetchSongs=async()=>{
    return (await axios.get(`${baseUrl}/songs`)).data
}
export const fetchAlbumData=async(slug)=>{
    return (await axios.get(`${baseUrl}/${slug}`)).data
}
export const fetchFaqData=async()=>{
    return (await axios.get(`${baseUrl}/faq`)).data
}
export const fetchGenreData=async()=>{
    return (await axios.get(`${baseUrl}/genres`)).data
}