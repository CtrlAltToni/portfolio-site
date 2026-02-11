import Image from 'next/image';
import SvelteLogo from '/public/svelte-logo.png';
import newtabicon from '/public/new-tab-icon.png';

import { GITHUB_URL } from '../../constants';

const frontend_perusteet = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <Image src={SvelteLogo} alt="Logo for Svelte" width={100} height={100} />
      <h3 className="text-lg font-bold pt-8 pb-2 ">Frontend-perusteet</h3>
      <p className="py-2">
        Kurssi toimi johdantona moderniin frontend-sovelluskehitykseen
        hyödyntäen Svelteä.
      </p>
      <a
        href={`${GITHUB_URL}/artisti-info`}
        target="blank"
        className="text-teal-600"
      >
        Kurssin lopputyön GH-repositorio
        <Image
          src={newtabicon}
          alt="Icon for indicating that link opens in a new tab"
          width={15}
          height={15}
        />
      </a>
    </div>
  );
};

export default frontend_perusteet;
