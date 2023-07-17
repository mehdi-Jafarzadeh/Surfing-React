import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="f-logo-c"><img className='f-logo' src="assets/logo.png" alt="" /></div>
            <div className="f-pages" >
                <p>STORIES</p>
                <p>EVENTS</p>
                <p>PLACES</p>
                <p>BOARDS</p>
            </div>
            <div className="f-social">
                <img className='f-social-icon' src="assets/tumblr.png" alt="" />
                <img className='f-social-icon' src="assets/twitter.png" alt="" />
                <img className='f-social-icon' src="assets/vimeo.png" alt="" />
            </div>
        </div>
    );
}

export default Footer;
