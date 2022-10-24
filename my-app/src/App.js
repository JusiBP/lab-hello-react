import './App.css';
import Segment from "./Components/Segment.jsx"
import Icon1 from "./Images/1_69RcxrWXuk385lSxkIYYLA.png";
import Icon2 from "./Images/588a64cdd06f6719692a2d0d.png";
import Icon3 from "./Images/ICON_TOOLS.png";
import Icon4 from "./Images/ICON_MULTIMEDIA.png";
import Icon5 from "./Images/ICON_SETTINGS.png";
import Icon6 from "./Images/ICON_CODE.png";

const seg1 = {
  image: Icon3,
  name: "Declarative",
  description: "React makes it paintless to create interactive UIs."
}
const seg2 = {
  image: Icon4,
  name: "Components",
  description: "Build encapsulated components that manage their state."
}
const seg3 = {
  image: Icon5,
  name: "Single-Way",
  description: "Aset of immutable values are passed to the component's."
}
const seg4 = {
  image: Icon6,
  name: "JSX",
  description: "Statically-typed designed to run on modern browsers."
}

function App() {
  return (
    <div className="App">
    <header className = "App-header">
      <div className='App-icons'>
        <img src={Icon1} alt="" />
        <img src={Icon2} alt="" />
      </div>
      <div className='App-info'>
        <h1>Say hello to <br></br> ReactJS</h1>
        <p>You will learn how to use <br></br> the most popular frontend library, <br></br> and become a super Ninja developer</p>
        <button className='App-button' type= "button"> Awesome </button>
      </div>
    </header>  
    <main className="App-main">
    
        <Segment seg={seg1}/>
        <Segment seg={seg2}/>
      
        <Segment seg={seg3}/>
        <Segment seg={seg4}/>
     
    </main>  
    </div>
  );
}

export default App;
