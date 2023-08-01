import React,{useState} from 'react';
import './App.css';
import Search from './Components/Search';
import VideoList from './Components/VideoList';
import VideoPlay from './Components/VideoPlay';


function App() {
  let [videos, setVideos] = useState('')
  let [selectedVideo, setSelectedVideo] = useState('')
console.log('selectedVideo', selectedVideo)

  return (
  <>
    <Search setVideos={setVideos} />
    <div className='videoDisplay' >
    <VideoPlay selectedVideo={selectedVideo} />
    <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
    
    </div>
  </>
  );
}

export default App;
