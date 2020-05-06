import React from "react"

import IconTwitter from "../../assets/svg/icons/icon-twitter.svg";
import IconGithub from "../../assets/svg/icons/icon-github.svg";
import IconLinkedin from "../../assets/svg/icons/icon-linkedin.svg";
import IconTwitch from "../../assets/svg/icons/icon-twitch.svg";
import IconYoutube from "../../assets/svg/icons/icon-youtube.svg";
import IconEmail from "../../assets/svg/icons/icon-email.svg";

let iconTwitter = () => <IconTwitter />,
    iconGithub = () => <IconGithub />,
    iconLinkedin = () => <IconLinkedin />,
    iconTwitch = () => <IconTwitch />,
    iconYoutube = () => <IconYoutube />,
    iconEmail = () => <IconEmail />

export const networks = {
  twitter: {
    title: 'Twitter',
    nickname: '@julian_duque',
    arialLabel: 'Network-Twitter',
    url: 'https://twitter.com/julian_duque',
    icon:  iconTwitter()
  },
  github: {
    title: 'GibHub',
    nickname: '@julianduque',
    arial_label: 'Network-GibHub',
    url: 'https://github.com/julianduque',
    icon: iconGithub()
  },
  linkedin: {
    title: 'Linkedin',
    nickname: 'Julián David Duque',
    arial_label: 'Network-Linkedin',
    url: 'https://www.linkedin.com/in/juliandavidduque',
    icon: iconLinkedin()
  },
  twitch: {
    title: 'Twitch',
    nickname: 'julianduque',
    arial_label: 'Network-Twitch',
    url: 'https://www.twitch.tv/julianduque',
    icon: iconTwitch()
  },
  youtube: {
    title: 'YouTube',
    nickname: 'julianduquej',
    arial_label: 'Network-Youtube',
    url: 'https://www.youtube.com/user/julianduquej',
    icon: iconYoutube()
  },
  email: {
    title: 'Email',
    nickname: 'hola@julianduque.co',
    arial_label: 'Network-Email',
    url: 'mailto:hola@julianduque.co',
    icon: iconEmail()
  }
}