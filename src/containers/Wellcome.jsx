import trendyolLogo from "../assets/svg/trendyol.svg";
import instagramLogo from "../assets/svg/instagram.svg";
import BannerImage from "../assets/images/banner/banner.webp";
import Sertifika1 from "../assets/images/sertifikalar/amfori.webp";
import Sertifika2 from "../assets/images/sertifikalar/bsci.webp";
import Sertifika3 from "../assets/images/sertifikalar/walt-disney.webp";
import Sertifika4 from "../assets/images/sertifikalar/sedex.webp";
const Wellcome = () => {
  return (
    <section
      id="hakkimizda"
      className="bg-gray-50 pt-[var(--header-spacer)] min-h-[calc(100vh-var(--header-spacer))] flex flex-col"
    >
      <div className="container pt-12  mx-auto max-w-6xl px-6 lg:px-0 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Turkuaz Terlik
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p className="text-lg">
                  Yenilenen ve Büyüyen firmamız da özel tasarım ve marka
                  koleksiyon çalışmalarınızı kalite ve 25 yıllık tecrübemizle
                  buluşturmaya davet ediyoruz.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 justify-center">
              <div className="flex w-40 flex-col items-end justify-end gap-2">
                <a
                  href="https://www.trendyol.com/magaza/evalupe-m-469260?channelId=1&sst=0&adjust_t=mk12x3o_m4o2h83&adjust_tracker_limit=999999999&utm_term=3515500&link_userID=3515500&adjust_creative=469260&utm_campaign=469260&utm_medium=android_sellerstore_free&adjust_adgroup=3515500&link_sellerid=469260&adjust_campaign=android_sellerstore_free_2025112716_TR&utm_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-end justify-end gap-2 text-black hover:text-gray-600 transition-colors duration-200"
                >
                  <img
                    src={trendyolLogo}
                    alt="Trendyol"
                    className="w-full h-auto object-contain"
                  />
                </a>
              </div>
              <div className="flex w-40 flex-col items-end justify-end gap-2">
                <a
                  href="https://www.instagram.com/_evalupe/?igsh=cDIyYzNtcDRnOXdw#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-end justify-end gap-2 text-black hover:text-gray-600 transition-colors duration-200"
                >
                  <img
                    src={instagramLogo}
                    alt="Instagram"
                    className="w-full h-auto object-contain pt-4"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={BannerImage}
              alt="Hakkımızda"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Sertifikalar Bölümü */}
        <div className="mt-16 py-12 border-t border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
            Sertifikalarımız
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-white rounded-lg shadow-md p-3 md:p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={Sertifika1}
                alt="Sertifika 1"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-3 md:p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={Sertifika2}
                alt="Sertifika 2"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-3 md:p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={Sertifika3}
                alt="Sertifika 3"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-3 md:p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={Sertifika4}
                alt="Sertifika 4"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wellcome;
