import React from 'react';

import {
    FacebookShareButton,
    FacebookIcon,
    EmailShareButton,
    EmailIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
  } from "react-share";

function SocialMediaButtons(props) {
    return (
        <div>
          <FacebookShareButton 
              url={"http://www.musictheory.co.za"}
              quote={"Music theory tuition by videoconference from Stellenbosch"}
              hashtag={"#MusicTheoryByVideoconference"}
              className={SocialMediaButtons}>
            <FacebookIcon size={36} borderRadius={15}/>
          </FacebookShareButton>
          {/*}
           <EmailShareButton
                url={"http://www.musictheory.co.za"}
                subject={"Music theory tuition by videoconference"}
                body={"Music theory tuition by videoconference from Stellenbosch. Link -> "}
                children={SocialMediaButtons}>
             <EmailIcon size={36} round={true} />
          </EmailShareButton>
          <WhatsappShareButton
                url={"http://www.johnoosthuizen.co.za"}
                title={"Music Theory Online Tuition from Stellenbosch"}
                className={SocialMediaButtons}>
              <WhatsappIcon size={36} round={true} />
            </WhatsappShareButton>
          {*/}  
        </div>    
    );
}

export default SocialMediaButtons;