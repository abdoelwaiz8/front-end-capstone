import { parseActivePathname } from '../../routes/url-parser';

export default class InputPage {
  async render() {
    const url = parseActivePathname();
    const type = url.id; // 'bapb' atau 'bapp'
    const isBarang = type === 'bapb';
    
    const title = isBarang ? 'Input BAPB (Barang)' : 'Input BAPP (Jasa)';
    const itemLabel = isBarang ? 'Nama Barang' : 'Nama Jasa/Pekerjaan';
    const item1 = isBarang ? 'MacBook Pro M3 14"' : 'Pembuatan Website Profile';
    const item2 = isBarang ? 'Monitor Dell 27"' : 'Maintenance Server Bulanan';
    const unit = isBarang ? 'Unit' : 'Paket';

    return `
      <!-- Page Header -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
          <div>
              <h2 class="text-3xl font-bold text-slate-900 mb-2 tracking-tight">${title}</h2>
              <div class="flex items-center gap-3 mt-2">
                  <span class="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-xl border border-violet-100 text-sm font-bold">
                      <i class="ph-bold ph-barcode"></i>
                      PO-2025-001
                  </span>
                  <span class="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl border border-indigo-100 text-sm font-bold">
                      <i class="ph-bold ph-buildings"></i>
                      PT. Teknologi Maju
                  </span>
              </div>
          </div>
          <button onclick="history.back()" 
                  class="inline-flex items-center gap-2 text-slate-600 hover:text-violet-600 font-bold transition-colors px-5 py-3 rounded-2xl hover:bg-white shadow-sm hover:shadow-md">
              <i class="ph-bold ph-arrow-left text-lg"></i> 
              Kembali
          </button>
      </div>

      <!-- Main Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Left Sidebar: AI Scanner -->
          <div class="lg:col-span-1 space-y-6">
              
              <!-- AI Auto-Scan Card -->
              <div class="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-soft-lg overflow-hidden">
                  <div class="p-8 relative">
                      <!-- Decorative Elements -->
                      <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                      <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                      
                      <div class="relative">
                          <!-- Icon Header -->
                          <div class="flex items-center gap-3 mb-4">
                              <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                                  <i class="ph-bold ph-magic-wand text-white text-2xl"></i>
                              </div>
                              <h3 class="font-bold text-white text-lg">AI Auto-Scan</h3>
                          </div>
                          
                          <!-- Description -->
                          <p class="text-white/90 text-sm leading-relaxed mb-6 font-medium">
                              Upload foto dokumen pendukung (Surat Jalan/Berita Acara), AI akan mengisi data otomatis dengan akurasi tinggi.
                          </p>
                          
                          <!-- Features List -->
                          <div class="space-y-2 mb-6">
                              <div class="flex items-center gap-2 text-white/90 text-xs font-semibold">
                                  <i class="ph-bold ph-check-circle"></i>
                                  <span>Deteksi otomatis teks & angka</span>
                              </div>
                              <div class="flex items-center gap-2 text-white/90 text-xs font-semibold">
                                  <i class="ph-bold ph-check-circle"></i>
                                  <span>Akurasi hingga 99%</span>
                              </div>
                              <div class="flex items-center gap-2 text-white/90 text-xs font-semibold">
                                  <i class="ph-bold ph-check-circle"></i>
                                  <span>Proses dalam hitungan detik</span>
                              </div>
                          </div>
                          
                          <!-- Upload Button -->
                          <input type="file" id="suratJalanInput" class="hidden" accept="image/*">
                          <button id="btn-ai-scan" 
                                  class="w-full bg-white hover:bg-white/90 text-indigo-600 py-4 rounded-2xl font-bold transition-all flex justify-center items-center gap-2 shadow-xl hover:scale-[1.02]">
                              <i class="ph-bold ph-camera text-xl"></i> 
                              <span>Scan Dokumen</span>
                          </button>
                          
                          <!-- Status -->
                          <p id="ai-status" class="text-center text-xs text-white/80 mt-3 hidden font-semibold">
                              <i class="ph-bold ph-spinner animate-spin"></i> Sedang menganalisis gambar...
                          </p>
                      </div>
                  </div>
              </div>

              <!-- Tips Card -->
              <div class="bg-white rounded-3xl shadow-soft border border-slate-100 p-6">
                  <div class="flex items-center gap-3 mb-4">
                      <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                          <i class="ph-bold ph-lightbulb text-amber-600 text-xl"></i>
                      </div>
                      <h4 class="font-bold text-slate-900">Tips Scan</h4>
                  </div>
                  <ul class="space-y-2 text-sm text-slate-600">
                      <li class="flex items-start gap-2">
                          <i class="ph-bold ph-check text-emerald-600 mt-0.5"></i>
                          <span>Pastikan foto dalam kondisi terang</span>
                      </li>
                      <li class="flex items-start gap-2">
                          <i class="ph-bold ph-check text-emerald-600 mt-0.5"></i>
                          <span>Dokumen dalam posisi lurus</span>
                      </li>
                      <li class="flex items-start gap-2">
                          <i class="ph-bold ph-check text-emerald-600 mt-0.5"></i>
                          <span>Teks terlihat jelas dan fokus</span>
                      </li>
                  </ul>
              </div>
          </div>

          <!-- Right Content: Form -->
          <div class="lg:col-span-2 bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
              
              <!-- Form Header -->
              <div class="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-violet-50 to-indigo-50">
                  <h3 class="font-bold text-slate-900 text-xl mb-1">Detail Item ${isBarang ? 'Barang' : 'Jasa'}</h3>
                  <p class="text-sm text-slate-600 font-medium">Lengkapi informasi penerimaan ${isBarang ? 'barang' : 'jasa'} sesuai dokumen</p>
              </div>

              <!-- Form Content -->
              <form id="form-input" class="p-8 space-y-6">
                  
                  <!-- Item 1 -->
                  <div class="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-6 border-2 border-slate-200">
                      <div class="flex items-start justify-between mb-4">
                          <div>
                              <h4 class="font-bold text-slate-900 text-base mb-1">${item1}</h4>
                              <p class="text-sm text-slate-600 font-semibold">Pesanan: <span class="text-violet-600">10 ${unit}</span></p>
                          </div>
                          <span class="bg-violet-100 text-violet-700 px-3 py-1.5 rounded-xl text-xs font-bold border border-violet-200">
                              Item #1
                          </span>
                      </div>
                      
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                              <label class="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                  ${isBarang ? 'Qty Diterima' : 'Progress (%)'}
                              </label>
                              <input 
                                  type="number" 
                                  id="qty_1" 
                                  class="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-semibold focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all" 
                                  placeholder="0"
                                  min="0"
                                  max="10"
                              >
                          </div>
                          
                          <div>
                              <label class="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                  ${isBarang ? 'Kondisi' : 'Hasil'}
                              </label>
                              <select 
                                  id="cond_1" 
                                  class="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-semibold focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all bg-white"
                              >
                                  <option value="good">✓ Baik / Sesuai</option>
                                  <option value="bad">✗ Rusak / Revisi</option>
                              </select>
                          </div>
                          
                          <div class="md:col-span-2">
                              <label class="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                  Catatan Tambahan
                              </label>
                              <textarea 
                                  id="note_1" 
                                  rows="2"
                                  class="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all resize-none" 
                                  placeholder="Tambahkan catatan jika diperlukan..."
                              ></textarea>
                          </div>
                      </div>
                  </div>

                  <!-- Item 2 -->
                  <div class="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-6 border-2 border-slate-200">
                      <div class="flex items-start justify-between mb-4">
                          <div>
                              <h4 class="font-bold text-slate-900 text-base mb-1">${item2}</h4>
                              <p class="text-sm text-slate-600 font-semibold">Pesanan: <span class="text-violet-600">5 ${unit}</span></p>
                          </div>
                          <span class="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-xl text-xs font-bold border border-indigo-200">
                              Item #2
                          </span>
                      </div>
                      
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                              <label class="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                  ${isBarang ? 'Qty Diterima' : 'Progress (%)'}
                              </label>
                              <input 
                                  type="number" 
                                  id="qty_2" 
                                  class="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-semibold focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all" 
                                  placeholder="0"
                                  min="0"
                                  max="5"
                              >
                          </div>
                          
                          <div>
                              <label class="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                  ${isBarang ? 'Kondisi' : 'Hasil'}
                              </label>
                              <select 
                                  id="cond_2" 
                                  class="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-semibold focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all bg-white"
                              >
                                  <option value="good">✓ Baik / Sesuai</option>
                                  <option value="bad">✗ Rusak / Revisi</option>
                              </select>
                          </div>
                          
                          <div class="md:col-span-2">
                              <label class="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                  Catatan Tambahan
                              </label>
                              <textarea 
                                  id="note_2" 
                                  rows="2"
                                  class="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all resize-none" 
                                  placeholder="Tambahkan catatan jika diperlukan..."
                              ></textarea>
                          </div>
                      </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="flex flex-col sm:flex-row gap-3 pt-6 border-t-2 border-slate-100">
                      <button 
                          type="button" 
                          onclick="history.back()" 
                          class="flex-1 px-6 py-4 border-2 border-slate-200 rounded-2xl text-slate-700 font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                      >
                          <i class="ph-bold ph-x-circle"></i>
                          Batal
                      </button>
                      
                      <button 
                          type="submit" 
                          class="flex-1 px-6 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-2xl font-bold shadow-lg shadow-violet-500/30 hover:shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                      >
                          <i class="ph-bold ph-check-circle text-xl"></i>
                          Submit Data
                      </button>
                  </div>
              </form>
          </div>
      </div>
    `;
  }

  async afterRender() {
    const url = parseActivePathname();
    const type = url.id;
    const isBarang = type === 'bapb';
    
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.innerHTML = isBarang ? 'Input BAPB (Barang)' : 'Input BAPP (Jasa)';
    }

    // AI Scanner Logic
    const btnScan = document.getElementById('btn-ai-scan');
    const inputScan = document.getElementById('suratJalanInput');
    const status = document.getElementById('ai-status');

    btnScan.addEventListener('click', () => inputScan.click());
    
    inputScan.addEventListener('change', () => {
        if (inputScan.files && inputScan.files[0]) {
            btnScan.innerHTML = `<i class="ph-bold ph-spinner animate-spin"></i> Scanning...`;
            btnScan.disabled = true;
            btnScan.classList.add('opacity-75');
            status.classList.remove('hidden');

            setTimeout(() => {
                document.getElementById('qty_1').value = 10;
                document.getElementById('note_1').value = "✓ Verified by AI Scan (Confidence: 99.2%)";
                document.getElementById('qty_2').value = 5;
                document.getElementById('note_2').value = "✓ Verified by AI Scan (Confidence: 98.7%)";

                btnScan.innerHTML = `<i class="ph-bold ph-check-circle"></i> Scan Berhasil!`;
                btnScan.classList.remove('opacity-75');
                btnScan.classList.remove('bg-white', 'text-indigo-600');
                btnScan.classList.add('bg-emerald-500', 'text-white');
                
                status.innerHTML = '<i class="ph-bold ph-check-circle"></i> Data berhasil diekstrak!';
                status.classList.remove('text-white/80');
                status.classList.add('text-emerald-300', 'font-bold');
            }, 2000);
        }
    });

    // Form Submit
    document.getElementById('form-input').addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success notification
        this._showSuccessNotification();
        
        setTimeout(() => {
            window.location.hash = '#/bapb';
        }, 1500);
    });
  }

  _showSuccessNotification() {
    const notification = document.createElement('div');
    notification.className = 'fixed top-8 right-8 bg-white rounded-2xl shadow-2xl border border-emerald-200 p-6 z-50';
    notification.style.animation = 'slideInRight 0.3s ease-out';
    notification.innerHTML = `
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                <i class="ph-bold ph-check text-white text-2xl"></i>
            </div>
            <div>
                <h4 class="font-bold text-slate-900 mb-1">Data Berhasil Disimpan!</h4>
                <p class="text-sm text-slate-600">Mengarahkan ke halaman BAPB...</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(20px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}