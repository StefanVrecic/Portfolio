import React from 'react';
import Button from 'react-bootstrap/Button';



const Hover = ( props ) => {

    const open = () => {
    alert(props.link);
}

    return (
    <div className="portfolio-item__cover--hover-button">
          <Button variant="link" href={props.link} className="hover-button" >{props.children}</Button>
        {/* <input type="button" onClick={open} value={props.children} className="hover-button"/> */}
    </div>
    );
};

export default Hover;
