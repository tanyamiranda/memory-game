import React from 'react';

import './card-table-header.styles.css';

import {ReactComponent as GameLogo} from '../../assets/logo-blue-green-black.svg';

const CardTableHeader = () => {

    return (
        <div className="card-table-header">
            <div className="card-table-header-logo"><GameLogo/></div>  
            <div className="card-table-header-title">Train Your Brain - Memory Game</div>
        </div>
    )
}

export default CardTableHeader;