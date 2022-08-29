import React from 'react';

export default function Progress(props) {

    console.log(props)
    return (
        <div className="progress fixed-top">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{width:props.percentage + "%"}} aria-valuenow="10"
                 aria-valuemin={props.percentage} aria-valuemax="100">
            </div>
        </div>
    );
}
