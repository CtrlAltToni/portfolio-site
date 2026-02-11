import Head from 'next/head';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import Image from 'next/image';
import me from '../public/me.png';
import Ticorporate from './courses/tc';
import WebUI from './courses/webui';
import FrontendPerusteet from './courses/frontend_perusteet';
import FrontendKehitys from './courses/frontend_kehitys';
import Ohjelmointi from './courses/ohjelmointi';
import Backend_1 from './courses/backend_1';
import Backend_2 from './courses/backend_2';
import ICTInfra from './courses/ict_infra';
import Tekoaly from './courses/tekoaly';
import DataEsi from './courses/data_esi';
import Algoritmit from './courses/algoritmit';
import ReactPerusteet from './courses/react';
import PythonPerusteet from './courses/python';
import { GITHUB_URL, LINKEDIN_URL, REFERENCE_GITHUB_URL } from '../constants';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? '' : 'dark'}>
      <Head>
        <title>Toni H Portfolio</title>
        <meta
          name="description"
          content="Toni Hiidenvuon portfolio tietojenkäsittelyn ja tietojenkäsittelytieteiden opinnoista"
        />
        <meta name="author" content="Toni Hiidenvuo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-fit">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl">toni.hiidenvuo@gmail.com</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
        </section>

        <section>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Toni Hiidenvuo
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              <p>Tietojenkäsittelytieteiden<br/>maisteriopiskelija Tampereella</p>
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Matkalla mainiosta asiakaspalvelijasta IT-alan ammattilaiseksi
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href={LINKEDIN_URL}
                target="blank"
              >
                <AiFillLinkedin />
              </a>
              <a href={GITHUB_URL} target="blank">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={me}
                alt="My picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 320px, 384px"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Suorittamani opintojaksot
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Opintojeni aikana suorittamiani relevantteja kursseja. Kurssista
              on lyhyt kuvaus sekä linkki GitHub-repositorioon tai vastaavaan,
              jos kurssista sellainen on.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <Ticorporate />
            <ICTInfra />
            <Tekoaly />
            <DataEsi />
            <Ohjelmointi />
            <Backend_1 />
            <Backend_2 />
            <WebUI />
            <FrontendPerusteet />
            <FrontendKehitys />
            <ReactPerusteet />
            <PythonPerusteet />
            <Algoritmit />
          </div>
        </section>

        <section>
          <div className="flex">
            <p className="text-sm text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-sm">
              Sivusto toteutettu{' '}
              <a
                href={REFERENCE_GITHUB_URL}
                target="blank"
                className="text-teal-600 inline-flex items-center gap-1"
              >
                react-portfolio-with-tailwind
              </a>
              -repositorion pohjalta
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
