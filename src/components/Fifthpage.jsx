
import bgVideo from '../assets/dad-boy.mp4'
import organicImg from '../assets/icons/organic.png'
import treeImg from '../assets/icons/tree.png'
import wavesImg from '../assets/icons/waves.png'

function Fifthpage() {
    return (
        <div className='fifthpage'>
            <video src={bgVideo} loop autoPlay muted className='videobg'></video>
            <div className='container' style={{ position: 'relative', bottom: '650px', color: 'white', textAlign: 'center' }}>
                <h3 >THE PRODUCTS WE USE</h3>
                <hr className='whiteHr'></hr>

                <div className="container fifthpageGrid">
                    <div className="row">
                        <div className="col">
                            <img className='fifthpageGridImg' src={organicImg}  alt='organic img'></img>
                            <h2>Organic</h2>
                        </div>
                        <div className="col">
                            <img className='fifthpageGridImg'  src={wavesImg}alt='waves img'></img>
                            <h2>Non-toxic</h2>
                        </div>
                        <div className="col">
                            <img className='fifthpageGridImg'  src={treeImg}alt='tree img'></img>
                            <h2>Eco-friendly</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Fifthpage;