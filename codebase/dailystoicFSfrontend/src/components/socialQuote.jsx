import clipboardCopy from 'clipboard-copy';
import { useState } from 'react';
import { WhatsappShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import plus from '../assets/images/plus.svg';

const SocialShare = () => {
    const [copied, setCopied] = useState(false);
    const shareURL = 'https://dailystoicreminders.uk/#wisdom';
    const handleCopyLink = () => {
        const url = 'https://dailystoicreminders.uk/#wisdom';
        clipboardCopy(url);

        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };
    return (
        <div className="flex text-center lg:mt-20 mt-6 lg:w-9/12 w-11/12 mx-auto gap-6 justify-center">
            <p className="lg:text-4xl text-xl font-playfair">
                <span className="font-gothic">S</span>hare quote:
            </p>
            <div className="lg:text-2xl leading-tight text-xl font-playfair justify-center gap-6 ">
                <ul className="social-links">
                    <li className="flex align-center">
                        <p className="text-xl">01.</p>
                        <div className="social-link" onClick={handleCopyLink}>
                            {copied ? 'Copied!' : 'Copy link'}
                            <img src={plus} alt="Plus Sign" className="social-plus" />
                        </div>
                    </li>
                    <li className="flex align-center">
                        <p className="text-xl">02.</p>
                        <WhatsappShareButton url={shareURL} className="social-link">
                            Twitter
                            <img src={plus} alt="Plus Sign" className="social-plus" />
                        </WhatsappShareButton>
                    </li>
                    <li className="flex align-center">
                        <p className="text-xl">03.</p>
                        <TwitterShareButton url={shareURL} className="social-link">
                            Whatsapp
                            <img src={plus} alt="Plus Sign" className="social-plus" />
                        </TwitterShareButton>
                    </li>
                    <li className="flex align-center">
                        <p className="text-xl">04.</p>
                        <LinkedinShareButton url={shareURL} className="social-link">
                            LinkedIn
                            <img src={plus} alt="Plus Sign" className="social-plus" />
                        </LinkedinShareButton>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SocialShare;
