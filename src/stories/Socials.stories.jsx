import React from 'react';
import { storiesOf } from '@storybook/react';

import {
    YoutubeIcon,
    FacebookIcon,
    GithubIcon,
    TwitterIcon,
    InstagramIcon,
} from '../components/Socials';

const Socials = storiesOf('Socials', module);

Socials.add('YoutubeIcon', () => {
    return <YoutubeIcon />;
});

Socials.add('FacebookIcon', () => {
    return <FacebookIcon />;
});

Socials.add('GithubIcon', () => {
    return <GithubIcon />;
});
Socials.add('TwitterIcon', () => {
    return <TwitterIcon />;
});
Socials.add('InstagramIcon', () => {
    return <InstagramIcon />;
});
