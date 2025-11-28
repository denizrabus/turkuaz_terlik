import { useParams } from "react-router-dom";
import { useMemo } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ImageLightbox from "../components/Lightbox";
import { loadCategoryImages } from "../utils/loadCategoryImages";

const CategoryPage = () => {
  const { category } = useParams();

  // Kategoriye göre görselleri dinamik olarak yükle
  const categoryImages = useMemo(() => {
    return loadCategoryImages(category);
  }, [category]);

  // Thumbnail ve full image'ları hazırla (title ve description olmadan)
  const thumbnails = useMemo(() => {
    return categoryImages.map((img, idx) => ({
      src: img,
      alt: `${category} görsel ${idx + 1}`,
    }));
  }, [categoryImages, category]);

  const fullImages = useMemo(() => {
    return categoryImages.map((img, idx) => ({
      src: img,
      alt: `${category} görsel ${idx + 1}`,
    }));
  }, [categoryImages, category]);

  const categoryInfo = {
    "yazlik-terlik": {
      title: "YAZLIK TERLİK",
      description:
        "Islak ve Kuru zeminde kullanım kolaylı ile Marka logolararınızın yada Özel ve Eğlenceli tasarımlarınız konfor ile buluşması.",
    },
    "kislik-terlik": {
      title: "KIŞLIK TERLİK",
      description:
        "Kış günlerinde de markanızın konfordan ve şıklıktan ödün vermenizi istemiyoruz.",
    },
    "el-emegi": {
      title: "EL EMEĞİ",
      description:
        "El Emeği tasarımları ile kadınların emeğine ve zerafetine markanızda dahil olsun…",
    },
    "ozel-koleksiyon": {
      title: "ÖZEL KOLEKSİYON",
      description:
        "Sınırları zorlayan şıklık ve kalite ile eşsiz tasarımların buluşmasına sizlerde ortak olun",
    },
    "plaj-ve-spor-urunleri": {
      title: "PLAJ VE SPOR ÜRÜNLERİ",
      description:
        "Farklı alanlarda da markanızın gücünü ve varlığını göstermenizin destekçisiyiz.",
    },
    "otel-urunleri": {
      title: "Otel Ürünleri",
      description:
        "Kurumsal logo tasarımlarınız ile misafirlerinize özel hissettirecek, uzun süreli kullanıma uygun ıslak ve kuru zemin uyumlu terliklerimiz ile Marka ve otelinizin yanındayız…",
    },
    "after-party": {
      title: "AFTER PARTY",
      description:
        "Yeni trend after party terliklerimiz, Özellikle Düğün,Kına ve Party organizasyonlarınızda topuklu ayakkabıdan yorulan ayaklar için özel tasarım, misafirlerinize sunacağınız harika bir hediye olacak.",
    },
    oyuncak: {
      title: "OYUNCAK",
      description:
        "Çocuklara mutluluk dağıtmanızda bizde yanınızdayız…",
    },
  };

  const info = categoryInfo[category] || categoryInfo["yazlik-terlik"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };


  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto max-w-6xl px-6 lg:px-0 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-black mb-6">
            {info.title}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">{info.description}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ImageLightbox 
            images={fullImages} 
            thumbnails={thumbnails} 
            categoryTitle={info.title}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryPage;
