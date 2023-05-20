const Notification = props => {
  const {containerstyle,innercontainer,textstyle,text,imageurl,imagestyle} = props
  console.log(containerstyle,innercontainer,textstyle,text,imageurl);
  return(
      <div className={containerstyle}>
        <div className={innercontainer}>
            <img src={imageurl} className={imagestyle}  />
            <p className={textstyle}>{text}</p>
        </div>
      </div>
  )
}



const notificationImgUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png";
const successImgUrl = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png";
const warningImgUrl = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png";
const errorImgUrl = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png";


const element = (
    <div className="bg-container">
    <h1 className="main-heading"> Notifications</h1>
  <Notification containerstyle = "content-container notification-container" innercontainer="inner-container" textstyle="text-style" text="Information Message" imageurl = {notificationImgUrl} imagestyle = 'img-style' />
  <Notification containerstyle = "content-container success-container" innercontainer="inner-container" textstyle="text-style" text="Success Message" imageurl = {successImgUrl} imagestyle = 'img-style' />
  <Notification containerstyle = "content-container warning-container" innercontainer="inner-container" textstyle="text-style" text="Warning Message" imageurl = {warningImgUrl} imagestyle = 'img-style' />
  <Notification containerstyle = "content-container error-container" innercontainer="inner-container" textstyle="text-style" text="Error Message" imageurl = {errorImgUrl} imagestyle = 'img-style' />
    </div>
)


ReactDOM.render(element, document.getElementById('root'))
 