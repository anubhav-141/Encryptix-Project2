import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {GrInstagram} from "react-icons/gr"
import {SiCodechef} from "react-icons/si"
import {SiCodeforces} from "react-icons/si"
import {SiLeetcode} from "react-icons/si"

const HeaderSocials = () => {
    return (
        <div className="header__socials">
        <a href="https://www.linkedin.com/in/anubhav-singh-8a8819313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/anubhav-141" target="_blank"><BsGithub/></a>
        <a href="https://codeforces.com/profile/codeforces100901" target="_blank"><SiCodeforces/></a>
        <a href="https://leetcode.com/anubhavsinghk289/" target="_blank"><SiLeetcode/></a>
        <a href="https://www.codechef.com/users/anubhavsinghk2" target="_blank"><SiCodechef/></a>
        <a href="https://www.instagram.com/" target="_blank"><GrInstagram/></a>
    </div>
    )
}
export default HeaderSocials