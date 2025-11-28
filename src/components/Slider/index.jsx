import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: 'Modern Tasarım',
      subtitle: 'Zamansız Şıklık',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Konfor ve Stil',
      subtitle: 'Her Adımda Mükemmellik',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'Premium Kalite',
      subtitle: 'Sizin İçin Özel',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1200&h=600&fit=crop',
    },
  ];

  return (
    <section className="relative w-full h-screen mt-16">
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #000000 !important;
        }
        .swiper-pagination-bullet {
          background: #000000 !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #000000 !important;
          opacity: 1;
        }
      `}</style>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                {/* <div className="text-center text-white px-4">
                  <h2 className="text-5xl md:text-7xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200">
                    {slide.subtitle}
                  </p>
                  <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200">
                    Hemen Keşfet
                  </button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;

