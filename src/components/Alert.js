import React from 'react'

function Alert(props) {
  return (
    props.alert && <div>
    <div className={`alert alert-${props.alert.tp} fade show`} role="alert">
  <strong>{props.alert.tp}</strong> {props.alert.msg}
</div>
    </div>
  )
}

export default Alert
