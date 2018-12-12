import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminInfo = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is message from hoc. Do not share!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <p>you are logged in</p> : <p>please log in</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

const AdminInfo = withAdminInfo(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="details" />, document.getElementById('app'))