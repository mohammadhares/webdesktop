import React from 'react';

interface Props {
    img: string,
    name: string,
    path: string
}

const MenuItem: React.FC<Props> = ({ img, name, path }) => {
    return (
        <span className="links">
            <div className="menu-item">
                <div className="img">
                    <img src={img} title={name} alt={name} className="img img-responsive" />
                </div>
                <p>{name}</p>
            </div>
        </span>
    );
}

export default MenuItem;