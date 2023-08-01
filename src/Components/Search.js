import React,{useState} from 'react';
import axios from 'axios';

const Search = ({setVideos})=>{
    let [search,setSearch] = useState('')
    // let [videos,setVideos] = useState('')
    // console.log(videos)

    function implementSearch() {       
        axios.get('https://www.googleapis.com/youtube/v3/search',{
            params: {
                key: 'AIzaSyBC9N7ib0CThl-d5Iwnz0tDjVB2iUTh4-U',
                part: 'snippet',
                maxResults: '25',
                type: 'video',
                q: search
            }
        })
        .then(response=> setVideos(response.data.items))
        .catch(err => console.log(err))
    }

    return(
        <div className='searchBar' >
                <input onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search' />
                <button onClick={implementSearch} >Search</button>
        </div>
    )
}

// fetch("link", {
//      method: "POST",
//         headers: {},
//         params: {},
//         body: JSON.stringify({}),

// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

export default Search;
