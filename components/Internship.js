import Image from 'next/image';
import SkillwellLogo from '../public/skillwell-logo.png';
import JamkLogo from '../public/jamk-logo.png';
import { SKILLWELL_URL } from '../constants';

const Internship = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-0 dark:bg-white flex-1 relative">
      <div className="absolute top-3 right-3">
        <Image
          src={JamkLogo}
          alt="JAMK logo"
          width={45}
          height={45}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src={SkillwellLogo}
          alt="Logo for Skillwell"
          width={160}
          height={90}
        />
      </div>
      <h3 className="text-lg font-bold pt-8 pb-2 ">Harjoittelujakso</h3>
      <p className="py-2 italic">
        Skillwell on vuonna 2018 Jyväskylässä perustettu kotimainen teknologiayritys, 
        joka toimii sertifioituna AWS-kumppanina auttaen yrityksiä hyödyntämään 
        Amazon Web Services -pilvipalveluita tehokkaasti ja hallitusti.
      </p>
      <a
        className="text-teal-800"
        href={SKILLWELL_URL}
        target="blank"
      >
        - skillwell.fi
      </a>
      <p className="py-2">
        Vastasin harjoittelujaksoni aikana mobiilisovelluksen kehittämisestä 
        React Native -teknologialla ja Expo-frameworkilla. Työskentelin UI-suunnitelmien 
        pohjalta ja vastasin sovelluksen kehityksestä aina Google Play -kauppaan julkaisuun asti. 
        Kehitystyön ohessa osallistuin sovelluksen suunnitteluun ja teknisten ratkaisujen 
        hiomiseen. Lisäksi syvensin osaamistani pilvipalveluista osallistumalla projektin 
        SaaS-pohjaisen AWS-arkkitehtuurin toteutukseen.
      </p>
    </div>
  );
};

export default Internship;
