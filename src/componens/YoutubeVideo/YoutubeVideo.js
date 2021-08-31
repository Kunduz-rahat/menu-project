import React from "react";
const YoutubeVideo =({youtube}) =>{
  return (
    <iframe  title='yootube' width="360" height="315" src={`https://www.youtube.com/embed/${youtube}/" title="YouTube video player`}
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen></iframe>
  )
}
export default YoutubeVideo