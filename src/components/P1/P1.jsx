import './P1.css'

const P1 = () => {
    return (
        <div className='P1'>
            <img src="/assets/img.png" alt="" />
            <div className="p1-texts">
                <p className='p-t1'>YOUR</p>
                <h1 className="p1-title">Beautiful Escape</h1>
                <p className="p1-dec">One of the greatest things about the sport of surfing isthat you need only three t h i  ngs : your body,<br />a surfbord, and a wave</p>
                <p className='p1-control'>
                    <img src="assets/left arrow.png" alt="" />
                    <pre className="p1-c-1">1 </pre>{"  / 5 "}
                    <img src="assets/right arrow.png" alt="" />
                </p>
            </div>
        </div>
    );
}

export default P1;
