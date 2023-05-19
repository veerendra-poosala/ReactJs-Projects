const viewPort = window.innerWidth;

const element = (
  <div className="bgContainer">
    <div>
      <h1 className="mainHeading">Super Over League</h1>
    </div>
    <div>
      <img src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" />
      <img src="https://assets.ccbp.in/frontend/react-js/csk-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
