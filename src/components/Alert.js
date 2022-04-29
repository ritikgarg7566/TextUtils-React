import React from 'react'

export default function Alert(props) {
    let alert = props.alert
    if (alert!=="null") {
        return (
            <div>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{props.alert.type}</strong> : {props.alert.msg}

                </div>
            </div>
        )
    }
}
