import React from 'react';

const VideoList = ({videos,setSelectedVideo})=>{
    console.log('videos', videos)

    return(
        <div className='videoList' >
            {videos &&
            videos.map((video,index)=>(
                <div onClick={()=>setSelectedVideo(video)}  key={index}>
                    <img src={video.snippet.thumbnails.default.url}
                    alt={video.snippet.description} />
                </div>
            ) )
            }
        </div>
    )
}

export default VideoList;