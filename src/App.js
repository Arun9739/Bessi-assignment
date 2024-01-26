import logo from "./logo.svg";
import "./App.css";
import Goal from "./img/goal.png";
import Gift from "./img/gift-card.png";
import Pay from "./img/pay.png";
import User from "./img/user1.png";
import Xarrow from "react-xarrows";

function App() {
  
  return (
    <div className="container">
      <h1 className="text-center text-black font-bold [font-family:'Montserrat'] text-[50px] mt-10">
        How It Works
      </h1>

      <div className="grid justify-center grid-cols-4 grid-rows-2 gap-4 ml-20 m-[30] mt-[150px]">
        <div  className="row-start-2 row-end-2 col-start-1 col-end-2 rounded-full h-20 w-20">
        <div className="flex flex-col items-center">
          <div id="goal-div" className="w-[200px] h-[200px] bg-[#714fff] rounded-full flex flex-col items-center justify-center">
            <img
              src={Goal}
              style={{ width: "60px", height: "60px" }}
              alt="goal"
            />
            <div className="font-bold text-white tracking-wide [font-family:'Montserrat'] text-[18px] text-center mt-4">
              Step 1:
              <br />
              Set your goal
            </div>
          </div>
        </div>
        </div>
        <div  className="row-start-2 row-end-2 col-start-3 col-end-4 rounded-full h-20 w-20">
        <div className="flex flex-col items-center">
          <div id="pay-div" className="w-[200px] h-[200px] bg-[#714fff] rounded-full flex flex-col items-center justify-center">
            <img
              src={Pay}
              style={{ width: "60px", height: "60px" }}
              alt="goal"
            />
            <div className="font-bold text-white tracking-wide [font-family:'Montserrat'] text-[18px] text-center mt-4">
              Step 3:
              <br />
              Pay amount on <br/> time
            </div>
          </div>
        </div>
        </div>
        <div  className="row-start-1 row-end-3 col-start-2 col-end-3 rounded-full h-20 w-20">
        <div  className="flex flex-col items-center">
          <div id="gift-div" className="w-[200px] h-[200px] bg-[#714fff] rounded-full flex flex-col items-center justify-center">
            <img
              src={User}
              style={{ width: "60px", height: "60px" }}
              alt="goal"
            />
            <div className="font-bold text-white tracking-wide text-[18px] [font-family:'Montserrat'] text-center mt-4">
              Step 2:
              <br />
              Create or join <br/>group
            </div>
          </div>
        </div>
        </div>
        <div  className="row-start-1 row-end-3 col-start-4 col-end-4 rounded-full h-20 w-20">
        <div className="flex flex-col items-center">
          <div id="user-div" className="w-[200px] h-[200px] bg-[#714fff] rounded-full flex flex-col items-center justify-center">
            <img
              src={Gift}
              style={{ width: "60px", height: "60px" }}
              alt="goal"
            />
            <div className="font-bold text-white tracking-wide text-[18px] [font-family:'Montserrat'] text-center mt-4">
              Step 4:
              <br />
              Earn <br/> Rewards
            </div>
          </div>
        </div>
        </div>
      </div>

      <Xarrow
        start="goal-div"
        end="gift-div"
        lineColor="gray"
        strokeWidth={7}
        dashness={{ animation: -3 }}
        startAnchor="auto"
        endAnchor="auto"
        curveness="0.2"
        headSize="4"
        headColor="gray"
      />
      <Xarrow
        start="gift-div"
        end="pay-div"
        lineColor="gray"
        strokeWidth={7}
        dashness={{ animation: -3 }}
        startAnchor="auto"
        endAnchor="auto"
        curveness="0.2"
        headSize="4"
        headColor="gray"
      />
      <Xarrow
        start="pay-div"
        end="user-div"
        lineColor="gray"
        strokeWidth={7}
        dashness={{ animation: -3 }}
        startAnchor="auto"
        endAnchor="auto"
        curveness="0.2"
        headSize="4"
        headColor="gray"
      />
    </div>
  );
}

export default App;
