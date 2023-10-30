import React from "react";

interface BannerProps {
    addClass: string
}

const Banner = React.memo(({ addClass }: BannerProps) => {
    return (
        <div className={`banner ${addClass}`}>
            <strong>DEMONSTRATION - ASCALON - UNCLASSIFIED</strong>
        </div>
    );
});

export default Banner;