import './Video.css'
function Video(props)
{
    let topic="React js"
    let bg='dark';
    return (<div>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Placeholder" width="440" height="400" />
      <div className={bg} style={{backgroundColor:'red'}} >{topic}</div>
        Video</div>)
}
export default Video;
