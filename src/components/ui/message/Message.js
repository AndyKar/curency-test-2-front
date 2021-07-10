import React from "react"

function Message(props) {
  return (
    <React.Fragment>
      {props.error || props.success
          ? <div className="messages">
              {props.error?<span className="errorMessage">{props.error}</span>:null}
              {props.success?<span className="successMessage">{props.success}</span>:null}
          </div>
          :null
      }
    </React.Fragment>
  );
}

export default Message;
