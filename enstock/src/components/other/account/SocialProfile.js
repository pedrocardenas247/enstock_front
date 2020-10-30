import React, {Component} from 'react';
import { FaFacebookF,FaTwitter, FaInstagram, FaYoutube, FaSnapchatGhost } from 'react-icons/fa'

class SocialProfile extends Component {
    state = {
        socials: [
            {
                icon: <FaFacebookF />,
                url: 'https://facebook.com'
            },
            {
                icon: <FaTwitter />,
                url: 'https://twitter.com'
            },
            {
                icon: <FaSnapchatGhost />,
                url: 'https://snapchat.com'
            },
            {
                icon: <FaYoutube />,
                url: 'https://youtube.com'
            },
            {
                icon: <FaInstagram />,
                url: 'https://instagram.com'
            },
        ]
    }
    render() {
        return (
            <>
                <ul className="social-profile padding-top-30px padding-bottom-30px">
                    {this.state.socials.map((item, i) => {
                        return (
                            <li key={i}><a href={item.url}><i className="fa">{item.icon}</i></a></li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default SocialProfile;