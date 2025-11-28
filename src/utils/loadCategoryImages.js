/**
 * Kategoriye göre görselleri dinamik olarak yükler
 * @param {string} categoryPath - Kategori path'i (örn: "yazlik-terlik")
 * @returns {Array} Görsel URL'leri array'i
 */
export const loadCategoryImages = (categoryPath) => {
  // Kategori path'ini klasör adına çevir
  const categoryFolderMap = {
    "yazlik-terlik": "yazlik",
    "kislik-terlik": "kislik",
    "el-emegi": "el-emegi",
    "ozel-koleksiyon": "ozel-koleksiyon",
    "plaj-ve-spor-urunleri": "plaj-ve-spor-urunleri",
    "otel-urunleri": "otel-urunleri",
    "after-party": "after-party",
    oyuncak: "oyuncak",
  };

  const folderName = categoryFolderMap[categoryPath];

  try {
    // Vite'nin import.meta.glob statik string gerektirir
    // Tüm görselleri yükleyip kategoriye göre filtreliyoruz
    const allImages = import.meta.glob(
      "/src/assets/images/**/*.{jpg,jpeg,png,webp}",
      { eager: true }
    );

    // Görselleri array'e çevir ve kategori klasörüne göre filtrele
    const imageArray = Object.entries(allImages)
      .filter(([path]) => path.includes(`/images/${folderName}/`))
      .map(([, module]) => module.default)
      .sort((a, b) => {
        // Dosya adlarına göre sırala (numeric sorting)
        const nameA = a.split("/").pop();
        const nameB = b.split("/").pop();
        return nameA.localeCompare(nameB, undefined, { numeric: true });
      });

    return imageArray;
  } catch (error) {
    console.warn(`Kategori görselleri yüklenemedi: ${categoryPath}`, error);
    return [];
  }
};

