import trendyolLogo from "../assets/svg/trendyol.svg";
import instagramLogo from "../assets/svg/instagram.svg";
import BannerImage from "../assets/images/banner/banner.jpeg";
const Wellcome = () => {
  return (
    <section
      id="hakkimizda"
      className="bg-gray-50 pt-[var(--header-spacer)] pb-12 lg:pb-0 flex items-center flex-grow"
    >
      <div className="container pt-12 lg:pt-0 mx-auto max-w-6xl px-6 lg:px-0 w-full">
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
      </div>
    </section>
  );
};

export default Wellcome;
