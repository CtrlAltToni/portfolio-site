import { GITHUB_URL } from '../constants';

export const COURSES = [
  {
    id: 'devops',
    title: 'Continuous Development and Deployment',
    description: 'Kurssilla toteutettiin Docker-pohjainen mikropalveluarkkitehtuuri hyödyntämällä Docker Composea, Nginxia palveluiden reitityksessä sekä CI/CD-putkea blue–green-julkaisumallilla.',
    logo: '/devops-logo.png',
    logoWidth: 140,
    logoHeight: 67,
    link: `${GITHUB_URL}/tuni-devops-project`,
    institution: 'TUNI'
  },
  {
    id: 'c++',
    title: 'Ohjelmointi 2: Tekniikat',
    description: 'Kurssilla perehdyttiin C++-ohjelmoinnin perusteisiin, kuten modulaarisuuteen, oliopohjaiseen ohjelmointiin, STL-säiliöihin ja muistinhallintaan.',
    logo: '/c++-logo.png',
    logoWidth: 80,
    logoHeight: 92,
    institution: 'TUNI'
  },
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
    id: 'llm',
    title: 'Fine-tuning Large Language Models',
    description: 'Kurssilla käsiteltiin kielimallien eettisiä ja yhteiskunnallisia vaikutuksia, perehdyttiin kielimallien hienosäätöön ja optimointiin sekä tutustuttiin AI-agentteihin.',
    logo: '/llm-logo.png',
    logoWidth: 120,
    logoHeight: 95,
    institution: 'TUNI'
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
    id: 'spark',
    title: 'Data-Intensive Programming',
    description: 'Kurssilla käsiteltiin big dataa Apache Sparkilla Scala-kielellä erilaisten harjoitusten ja tehtävien kautta.',
    logo: '/spark-logo.png',
    logoWidth: 100,
    logoHeight: 52,
    institution: 'TUNI'
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
