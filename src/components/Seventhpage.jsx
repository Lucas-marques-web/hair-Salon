
import Seventhpageimg from '../assets/bgImgSeventhpage.png'

function Seventhpage() {
    return (
        <div className="seventhpage" style={{ 
            backgroundImage: `url(${Seventhpageimg})`}}>
            <div className="container seventhpagecontent">
                <h2>We take care of our clients and our people.</h2>
                <hr className='whiteHr'></hr>
                <p>Share your company's mission, vision, or background with your potential clients.
                 Set yourself apart from the competition with a strong brand persona that puts your 
                 clients first.</p>
            </div>
        </div>
    )
}

export default Seventhpage;