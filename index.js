const element = (
  <div className="bg-container">
    <div className="child-container">
      <h1 className="main-heading">Congratulations</h1>
    </div>
    <div className="child-container content-container">
      <div>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
        <h1 className="name">Kiran V</h1>
        <p>Vishnu Institute Of Computer Education and Technology, Bhimavaram</p>
      </div>
      <div>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
