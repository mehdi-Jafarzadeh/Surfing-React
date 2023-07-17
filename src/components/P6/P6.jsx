import './P6.css'

const P6 = () => {
    return (
        <div className='P6'>
            <hr className="p6-l" />
            <h1 className="p6-title" >Join the Club</h1>
            <p className="p6-dec" >By better understanding the various aspects of surfing. yopu will improve faster</p>
            <p className="p6-dec" >and have more fun in the water.</p>
            <div className="p6-inputs">

            <input type="text" className="p6-input" placeholder='Y O U R  E - M A I L' />
            <button className='p6-btn'>{">"}</button>
            </div>
        </div>
    );
}

export default P6;
