
import secondpageimg from '../assets/secondPageImg.png'
import products from '../assets/product1.png'

function Secondpage() {
    return (
        <div className="container-fluid secondpage">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col">
                        <div className='container-fluid secondpagecontent'>
                            <h2>We are a full-service salon.</h2>
                            <hr></hr>
                            <p>What's special about your product, service,
                                or company? Use this space to highlight the things
                                that set you apart from your competition, whether
                                it's a special feature, a unique philosophy,
                                or awards and recognition that you have received.
                                Think of this as your elevator pitch to get the reader's attention.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className='container-fluid'>
                            <img src={secondpageimg} alt="haircut" style={{position:'relative',zIndex:'1',top:'100px'}}></img>
                            <img src={products} alt="products"style={{position:'absolute',zIndex:'0',right:'75px'}}></img>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Secondpage;