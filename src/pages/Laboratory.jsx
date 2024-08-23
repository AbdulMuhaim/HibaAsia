import img from "../assets/woman-working-laboratory-close-up.jpg";
import headerBgImage from "../assets/hand-with-protective-gloves-holding-blood-samples-covid-test.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Laboratory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const headerImage = `url(${headerBgImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  const { t } = useTranslation();


  return (
    <div>




      <div className="flex justify-center ">
      <div className="grid lg:grid-cols-2 border-b-2 gap-10 max-w-[1315px] p-3 sm:py-20 sm:px-28">
        <div className="w-full">
          <img src={img} className="rounded-xl" alt="" />
        </div>

        <div className="w-full flex flex-col items-center justify-center mx-auto ">
          <div className="w-full">
          <h1 className=" text-4xl  font-bold  mb-4 uppercase">
          {t('Laboratory')}
          </h1>
          </div>

          <p className="president-message max-w-4xl">
          {t('LabPara1')}
          </p>
          <p className="president-message max-w-4xl">
          {t('LabPara2')}
          </p>

          <div className="w-full">
          <h2 className="text-2xl font-bold my-7">
          {t('servicesInclude')}:
          </h2>
          <ul className="list-disc list-inside president-message max-w-4xl">
            <li className="mb-2">{t('labService1')}</li>
            <li className="mb-2">
            {t('labService2')}
            </li>
            <li className="mb-2">{t('labService3')}</li>
            <li className="mb-2">{t('labService4')}</li>
            <li className="mb-2">{t('labService5')}</li>
            <li className="mb-2">{t('labService6')}</li>
            <li className="mb-2">{t('labService7')}</li>
            <li className="mb-2">{t('labService8')}</li>
            <li className="mb-2">{t('labService9')}</li>
            <li className="mb-2">{t('labService10')}</li>
            <li className="mb-2">{t('labService11')}</li>
          </ul>
          </div>
        </div>
      </div>
      </div>




      <div>
      </div>
    </div>
  );
}

export default Laboratory;
