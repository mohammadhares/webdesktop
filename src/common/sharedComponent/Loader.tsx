const Loader = ( props : { addClass ?: string }) => {
    const { addClass } = props;
    return (
        <div className={`loading ${addClass}`}>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
        
    );
}

export default Loader;