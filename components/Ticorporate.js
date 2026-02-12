import Image from 'next/image';
import TicorporateLogo from '../public/ticorporate-logo.png';
import newtabicon from '../public/new-tab-icon.png';

import { TC, TC_PORTFOLIO } from '../constants';

const Ticorporate = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-0  dark:bg-white flex-2">
      <div className="flex justify-center">
        <Image
          src={TicorporateLogo}
          alt="Logo for Ticorporate"
          width={100}
          height={100}
        />
      </div>
      <h3 className="text-lg font-bold pt-8 pb-2  ">Ticorporate</h3>
      <p className="py-2 italic">
        Ticorporate on Jamkin liiketoimintasimulaatioympäristö, jossa
        opiskelijat suunnittelevat ja kehittävät omia sovelluksia ja pelejä.
        Ympäristö on rakennettu mahdollisimman todentuntuiseksi ja tästä syystä
        esimerkiksi opiskelijoiden käyttämät teknologiat ovat samoja kuin
        työelämässä.
      </p>
      <a
        className="text-teal-800"
        href={TC}
        target="blank"
      >
        - ticorporate.fi
      </a>
      <p className="py-2">
        Ticorporatessa suunnittelimme ja kehitimme neljän hengen tiimissä
        fullstack-sovelluksen hyödyntäen Scrumia projektinhallinnassa. Tiimissä
        vastasin AWS-palveluiden käyttöönotosta ja ylläpidosta sekä toimin Scrum
        Masterina ja markkinointivastaavana.
      </p>
      <p>
        <a
          href={TC_PORTFOLIO}
          target="blank"
          className="text-teal-600 inline-flex items-center gap-1"
        >
          Ticorporate-portfolio
          <Image
            src={newtabicon}
            alt="Icon for indicating that link opens in new tab"
            width={15}
            height={15}
          />
        </a>
      </p>
    </div>
  );
};

export default Ticorporate;
