module.exports = {
  siteTitle: 'Sasitha Sonnadara | Software Engineer',
  siteDescription:
    'Sasitha Sonnadara is a software engineer and a full-stack developer based in Colombo, Sri Lanka specializing in developing robust,' +
    ' scalable and modern web platforms. ',
  siteKeywords:
    'sasitha sonnadara, sasitha, sonnadara, wathmal, software engineer, full-stack engineer, front-end engineer, web developer, javascript,' +
    ' node js, react, australia',
  siteUrl: 'http://wathmal.xyz',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Sasitha Sonnadara',
  location: 'Colombo, Sri Lanka',
  email: 'sasithawathmal@gmail.com',
  github: 'https://github.com/wathmal',
  twitterHandle: '@wathmal',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/wathmal',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/wathmal',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/wathmal',
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
      name: 'Work',
      url: '/#projects',
    },
    /*{
      name: 'Contact',
      url: '/#contact',
    },*/
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
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
