import Image from 'next/image';
import glueLogo from '../../public/glue-logo.png';

const data_esi = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <div className="flex justify-center">
        <Image src={glueLogo} alt="Logo for AWS Glue" width={75} height={75} />
      </div>
      <h3 className="text-lg font-bold pt-8 pb-2 ">
        Datan esikäsittely pilvialustalla
      </h3>
      <p className="py-2">
        Kurssilla perehdyttiin liiketoiminnassa hyödynnettävän datan
        esikäsittelyyn AWS:n pilvessä. Käytetyt palvelut mm. AWS Glue ja Glue
        DataBrew.
      </p>
    </div>
  );
};

export default data_esi;
