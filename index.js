const Button = (props) => {
  const { style, name } = props;
  return <button className={style}>{name}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Social Buttons</h1>
    <div className="button-container">
      <Button style="button like-button" name="Like" />
      <Button style="button comment-button" name="Comment" />
      <Button style="button share-button" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
