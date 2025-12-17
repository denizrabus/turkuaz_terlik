import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../src/assets/images');
const QUALITY = 85; // WebP kalite (80-90 arası önerilir)
const BACKUP_SUFFIX = '_original';

// Desteklenen formatlar
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = await fs.stat(inputPath);
    const originalSize = stats.size;

    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const newStats = await fs.stat(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    return {
      success: true,
      originalSize,
      newSize,
      savings: parseFloat(savings),
      path: inputPath,
    };
  } catch (error) {
    console.error(`Hata (${inputPath}):`, error.message);
    return { success: false, path: inputPath, error: error.message };
  }
}

async function processDirectory(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      // Alt klasörleri de işle
      const subResults = await processDirectory(fullPath);
      results.push(...subResults);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      
      // Sadece desteklenen formatları işle ve zaten WebP olanları atla
      if (SUPPORTED_FORMATS.includes(ext)) {
        const nameWithoutExt = path.basename(entry.name, ext);
        const webpPath = path.join(dirPath, `${nameWithoutExt}.webp`);

        // Eğer WebP versiyonu zaten varsa, atla
        try {
          await fs.access(webpPath);
          console.log(`⏭️  Zaten var: ${entry.name} → ${nameWithoutExt}.webp`);
          continue;
        } catch {
          // WebP yok, devam et
        }

        // Orijinal dosyayı yedekle
        const backupPath = path.join(dirPath, `${entry.name}${BACKUP_SUFFIX}`);
        try {
          await fs.access(backupPath);
          // Yedek zaten varsa, atla
        } catch {
          await fs.copyFile(fullPath, backupPath);
          console.log(`💾 Yedeklendi: ${entry.name}`);
        }

        // WebP'ye çevir
        console.log(`🔄 İşleniyor: ${entry.name} → ${nameWithoutExt}.webp`);
        const result = await optimizeImage(fullPath, webpPath);
        
        if (result.success) {
          const sizeMB = (result.originalSize / 1024 / 1024).toFixed(2);
          const newSizeMB = (result.newSize / 1024 / 1024).toFixed(2);
          console.log(`✅ Tamamlandı: ${sizeMB}MB → ${newSizeMB}MB (${result.savings}% tasarruf)`);
        }
        
        results.push(result);
      }
    }
  }

  return results;
}

async function main() {
  console.log('🚀 Görsel optimizasyonu başlatılıyor...\n');
  console.log(`📁 Klasör: ${IMAGES_DIR}`);
  console.log(`🎨 Kalite: ${QUALITY}\n`);

  try {
    // Klasörün varlığını kontrol et
    await fs.access(IMAGES_DIR);
    
    const results = await processDirectory(IMAGES_DIR);
    
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);
    
    if (successful.length > 0) {
      const totalOriginal = successful.reduce((sum, r) => sum + r.originalSize, 0);
      const totalNew = successful.reduce((sum, r) => sum + r.newSize, 0);
      const totalSavings = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);
      const totalOriginalMB = (totalOriginal / 1024 / 1024).toFixed(2);
      const totalNewMB = (totalNew / 1024 / 1024).toFixed(2);

      console.log('\n📊 ÖZET:');
      console.log(`✅ Başarılı: ${successful.length} dosya`);
      console.log(`❌ Başarısız: ${failed.length} dosya`);
      console.log(`📦 Toplam boyut: ${totalOriginalMB}MB → ${totalNewMB}MB`);
      console.log(`💰 Tasarruf: ${totalSavings}% (${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)}MB)`);
    }

    if (failed.length > 0) {
      console.log('\n⚠️  Başarısız dosyalar:');
      failed.forEach(f => console.log(`   - ${f.path}: ${f.error}`));
    }

    console.log('\n✨ İşlem tamamlandı!');
    console.log('💡 Not: Orijinal dosyalar "_original" ekiyle yedeklendi.');
    console.log('💡 WebP dosyaları oluşturuldu. Orijinal dosyaları silebilirsiniz (önce test edin!).');
  } catch (error) {
    console.error('❌ Hata:', error.message);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
}

main();

