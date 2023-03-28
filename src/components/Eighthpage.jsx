
import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';


function Eighthpage() {
    return (
        <div className="container-fluid eighthpage">
            <h3>CONTACT US</h3>
            <hr className="whiteHr"></hr>
            <div className="container text-center eighthpagecontent">
                <div className="row">
                    <div className="col">
                        <h2>Phone</h2>
                        <h2>(123) 456-7890</h2>
                    </div>
                    <div className="col">
                        <h2>Email</h2>
                        <h2>hello@reallygreatsite.com</h2>
                    </div>
                    <div className="col">
                        <h2>Social</h2>
                        <div className="container">
                            <img className='social' src={facebook} alt="facebook"></img>
                            <img className='social' src={twitter} alt="facebook"></img>
                            <img className='social' src={instagram} alt="facebook"></img>
                        </div>
                    </div>
                </div>
            </div>
            <p className="eighthpage-p">Our salons are fully accessible.<br></br>
                Please reach out for further accommodations.</p>
        </div>
    )
}

export default Eighthpage;