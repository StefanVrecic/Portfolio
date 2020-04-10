import React from 'react';



const Hover = ( props ) => {

    const open = () => {
    alert(props.link);
}

    return (
    <div className="portfolio-item__cover--hover-button">
        <input type="button" onClick={open} value={props.children} className="hover-button"/>
    </div>
    );
};

export default Hover;
