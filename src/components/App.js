// import React, { Component, useState } from "react";
// import '../styles/App.css';

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {
   
//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
// 		}
//     }

//     // bind ArrowRight keydown event
//     componentDidMount() {
      
//     }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }
// }


// export default App;

import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  // const [posi, setPosi] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: 0,
    position: "absolute",
  });

  const handler = (e) => {
    switch (e.keyCode) {
      case 39:
        setBallPosition({
          left: ballPosition.left + 5,
          position: "absolute",
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [ballPosition]);

  const buttonClickHandler = () => {
    setRenderBall(true);
  };

  const renderBallOrButton = () => {
    if (renderBall) {
      return (
        <div className="ball"
          style={ballPosition}>
        </div>
      );
    } 
    else {
      return <button onClick={buttonClickHandler}> Click For One Ball </button>;
    }
  }

  return <div className = "playground"> {renderBallOrButton()}</div>
  };

export default App;
