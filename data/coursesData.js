import { GITHUB_URL } from '../constants';

export const COURSES = [
  {
    id: 'ict_infrastructure',
    title: 'ICT-infrastruktuuri pilvialustalla',
    description: 'Kurssilla tutustuttiin AWS:n infrastruktuurin pystyttämiseen (VPC, aliverkot, muut resurssit) IaC-metodeilla sekä tarkasteltiin näitä asioita operoinnin, monistettavuuden ja ylläpidon näkökulmasta.',
    logo: '/aws-logo.png',
    logoWidth: 100,
    logoHeight: 60,
    link: `${GITHUB_URL}/ict-infra-lopputyo`,
    institution: 'JAMK'
  },
  {
    id: 'ai_ml_services',
    title: 'Tekoäly- ja koneoppimispalvelut pilvialustalla',
    description: 'Kurssilla perehdyttiin tekoäly- ja koneoppimispalveluihin AWS:n pilvessä. Käytetyt palvelut mm. Amazon SageMaker, Forecast, Rekognition ja Polly.',
    logo: '/sagemaker-logo.png',
    logoWidth: 100,
    logoHeight: 81,
    institution: 'JAMK'
  },
  {
    id: 'data_preprocessing',
    title: 'Datan esikäsittely pilvialustalla',
    description: 'Kurssilla perehdyttiin liiketoiminnassa hyödynnettävän datan esikäsittelyyn AWS:n pilvessä. Käytetyt palvelut mm. AWS Glue ja Glue DataBrew.',
    logo: '/glue-logo.png',
    logoWidth: 75,
    logoHeight: 75,
    institution: 'JAMK'
  },
  {
    id: 'backend_1',
    title: 'Backend-sovelluskehitys 1',
    description: 'Kursilla tutustuttiin backend-sovellusten toimintatapoihin sekä kehitettiin moderneja backend-sovelluksia NodeJS:llä, Express-sovelluskehyksellä ja WebSocketilla.',
    logo: '/restapi-logo.png',
    logoWidth: 100,
    logoHeight: 82,
    link: `${GITHUB_URL}/backend-1-lopputyo`,
    institution: 'JAMK'
  },
  {
    id: 'backend_2',
    title: 'Backend-sovelluskehitys 2',
    description: 'Kursilla keskityttiin backendin rakentamiseen serverless-teknologioilla pilvialustojen päälle.',
    logo: '/serverless-logo.png',
    logoWidth: 100,
    logoHeight: 79,
    link: `${GITHUB_URL}/sst-framework-demo`,
    institution: 'JAMK'
  },
    {
    id: 'programming_js_ts',
    title: 'Ohjelmointi 1 & 2',
    description: [
      'Ohjelmointi 1 -kurssilla tutustuttiin ohjelmoinnin perusteisiin ja hyviin käytänteisiin JavaScript-ohjelmointikielellä.',
      'Ohjelmointi 2 -kurssi syvensi asioita TypeScript-ohjelmointikielen kautta.'
    ],
    logo: '/js-logo.png',
    institution: 'JAMK'
  },
  {
    id: 'frontend_frameworks',
    title: 'Frontend-frameworks',
    description: 'Svelte-kurssi toimi johdantona moderniin frontend-sovelluskehitykseen. Angular ja React -kurssit syvensivät asioita frontend-kehityksen parissa.',
    logo: '/frontend-logo.png',
    logoWidth: 100,
    logoHeight: 101,
    institution: 'JAMK'
  },
  {
    id: 'webui',
    title: 'Web UI',
    description: 'Kurssilla tutustuttiin responsiivisten verkkosivujen totettamiseen HTML- ja CSS-teknologioilla. Kurssi toimi samalla johdantona HTML- ja CSS-ulkoasukirjastoihin ja -sovelluskehyksiin.',
    logo: '/code.png',
    link: `${GITHUB_URL}/web-ui-lopputyo`,
    institution: 'JAMK'
  },
  {
    id: 'python',
    title: 'Python-ohjelmointi',
    description: 'Kurssilla tutustuttiin olio-ohjelmointikielen perusasioihin Pythonilla.',
    logo: '/python-logo.png',
    logoWidth: 100,
    logoHeight: 100,
    institution: 'JAMK'
  },
];
