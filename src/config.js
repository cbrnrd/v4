module.exports = {
  siteTitle: 'Carter Brainerd | Software Engineer',
  siteDescription: '',
  siteKeywords:
    'Carter Brainerd, Carter, Brainerd, cbrnrd, software engineer, back-end engineer, cybersecurity, java, ruby, northeastern',
  siteUrl: 'https://carterbrainerd.me',
  siteLanguage: 'en_US',
  //  googleAnalyticsID: 'UA-45666519-2',
  //  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Carter Brainerd',
  location: 'Boston, MA',
  email: '0xCB@protonmail.com',
  github: 'https://github.com/cbrnrd',
  twitterHandle: '@carterbrainerd',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/cbrnrd',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/carter-brainerd-b2112a190/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/c.arterb',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/carterbrainerd',
    },
    {
      name: 'Pgp',
      url: './pgp.txt',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 350,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
