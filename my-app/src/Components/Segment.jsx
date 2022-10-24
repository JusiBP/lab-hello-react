function Segment({seg}){
    let {image, name, description} = seg;
    return (
        <div >
            <img src={image} alt=""></img>
            <h2>{name}</h2>
            <p className="App-Seg">{description}</p>
        </div>
    )
}
export default Segment;