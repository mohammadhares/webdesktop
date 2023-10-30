import { Link } from "react-router-dom";

const NotAllowed = () => {
    let background = localStorage.getItem('theme-img');
    return ( 
        <section className="dashboard" style={{ backgroundImage: `url(${background})`}}>
            <Link to="/" className="links">
                <div id="back-btn">
                    <span className="fa fa-arrow-left"></span> Back 
                </div>
            </Link>
            <div className="container content text-center p-5">
                <h3 className="text-red">Access is not allowed! ⛔️</h3>
                <hr />
                <p>Only Admin User can use this services</p>
            </div>
        </section>
     );
}
 
export default NotAllowed;