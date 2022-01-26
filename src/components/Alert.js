import React from 'react';

function Alert(props) {
    return (
    props.alert&&<div class="alert alert-success d-flex align-items-center" role="alert">
                {/* <vg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill" /></vg> */}
                <div>
                    {props.alert.msg}
                </div>
            </div>
    
    )
}



export default Alert;
