const Box = (props) => {
  const { style, text, textstyle } = props;
  return (
    <div className={style}>
      <p className={textstyle}>{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1>Boxes</h1>
    <div className="box-container">
      <Box style="large-box-container box" text="Large" textstyle="text" />
      <Box style="medium-box-container box" text="Medium" textstyle="text" />
      <Box style="small-box-container box" text="Small" textstyle="text" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
