import { parseActivePathname } from '../../routes/url-parser';

export default class InputPage {
  async render() {
    const url = parseActivePathname();
    const type = url.id;
    const isBarang = type === 'bapb';
    
    const title = isBarang ? 'INPUT BAPB (BARANG)' : 'INPUT BAPP (JASA)';
    const itemLabel = isBarang ? 'Nama Barang' : 'Nama Jasa/Pekerjaan';
    const item1 = isBarang ? 'MacBook Pro M3 14"' : 'Pembuatan Website Profile';
    const item2 = isBarang ? 'Monitor Dell 27"' : 'Maintenance Server Bulanan';
    const unit = isBarang ? 'Unit' : 'Paket';

    return `
      <!-- Page Header -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-6">
          <div>
              <h2 class="heading-architectural text-4xl text-slate-900 mb-3">${title}</h2>
              <div class="flex items-center gap-3 mt-4">
                  <span class="inline-flex items-center gap-2 bg-white border-2 border-slate-900 px-4 py-2 text-xs font-black tracking-tight">
                      <i class="ph-bold ph-barcode"></i>
                      PO-2025-001
                  </span>
                  <span class="inline-flex items-center gap-2 bg-lime-400 border-2 border-slate-900 px-4 py-2 text-xs font-black tracking-tight">
                      <i class="ph-bold ph-buildings"></i>
                      PT. TEKNOLOGI MAJU
                  </span>
              </div>
          </div>
          <button onclick="history.back()" 
                  class="inline-flex items-center gap-2 text-slate-900 hover:text-lime-400 font-black transition-colors px-6 py-4 border-2 border-slate-900 hover:bg-slate-900 hover:text-lime-400 uppercase tracking-tight text-xs">
              <i class="ph-bold ph-arrow-left text-lg"></i> 
              KEMBALI
          </button>
      </div>

      <!-- Main Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Left Sidebar: AI Scanner -->
          <div class="lg:col-span-1 space-y-6">
              
              <!-- AI Auto-Scan Card -->
              <div class="bg-slate-900 border-2 border-slate-900 overflow-hidden relative">
                  <!-- Architectural Grid -->
                  <div class="absolute inset-0" style="background-image: 
                      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
                      background-size: 20px 20px;">
                  </div>
                  
                  <div class="p-8 relative">
                      <!-- Icon Header -->
                      <div class="flex items-center gap-3 mb-6 border-b-2 border-lime-400 pb-4">
                          <div class="w-12 h-12 bg-lime-400 border-2 border-white flex items-center justify-center">
                              <i class="ph-bold ph-magic-wand text-slate-900 text-2xl"></i>
                          </div>
                          <h3 class="heading-architectural text-white text-lg">AI AUTO-SCAN</h3>
                      </div>
                      
                      <!-- Description -->
                      <p class="text-white text-xs leading-relaxed mb-6 font-bold uppercase tracking-wider">
                          UPLOAD FOTO DOKUMEN PENDUKUNG, AI AKAN MENGISI DATA OTOMATIS DENGAN AKURASI TINGGI.
                      </p>
                      
                      <!-- Features List -->
                      <div class="space-y-3 mb-8 border-l-2 border-lime-400 pl-4">
                          <div class="flex items-start gap-2 text-white text-xs font-bold tracking-tight">
                              <i class="ph-bold ph-check-circle text-lime-400 mt-0.5"></i>
                              <span>DETEKSI OTOMATIS TEKS & ANGKA</span>
                          </div>
                          <div class="flex items-start gap-2 text-white text-xs font-bold tracking-tight">
                              <i class="ph-bold ph-check-circle text-lime-400 mt-0.5"></i>
                              <span>AKURASI HINGGA 99%</span>
                          </div>
                          <div class="flex items-start gap-2 text-white text-xs font-bold tracking-tight">
                              <i class="ph-bold ph-check-circle text-lime-400 mt-0.5"></i>
                              <span>PROSES DALAM HITUNGAN DETIK</span>
                          </div>
                      </div>
                      
                      <!-- Upload Button -->
                      <input type="file" id="suratJalanInput" class="hidden" accept="image/*">
                      <button id="btn-ai-scan" 
                              class="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 py-5 font-black transition-all flex justify-center items-center gap-2 border-2 border-white uppercase tracking-tight text-sm">
                          <i class="ph-bold ph-camera text-xl"></i> 
                          <span>SCAN DOKUMEN</span>
                      </button>
                      
                      <!-- Status -->
                      <p id="ai-status" class="text-center text-xs text-lime-400 mt-4 hidden font-black tracking-widest uppercase">
                          <i class="ph-bold ph-spinner animate-spin"></i> SEDANG MENGANALISIS...
                      </p>
                  </div>
              </div>

              <!-- Tips Card -->
              <div class="bg-white border-2 border-slate-900 p-6">
                  <div class="flex items-center gap-3 mb-4 pb-3 border-b-2 border-slate-900">
                      <div class="w-10 h-10 bg-amber-400 border-2 border-slate-900 flex items-center justify-center">
                          <i class="ph-bold ph-lightbulb text-slate-900 text-xl"></i>
                      </div>
                      <h4 class="font-black text-slate-900 uppercase tracking-tight">TIPS SCAN</h4>
                  </div>
                  <ul class="space-y-3 text-xs text-slate-600">
                      <li class="flex items-start gap-2">
                          <i class="ph-bold ph-check text-lime-400 mt-0.5 text-base"></i>
                          <span class="font-bold uppercase tracking-tight">PASTIKAN FOTO DALAM KONDISI TERANG</span>
                      </li>
                      <li class="flex items-start gap-2">
                          <i class="ph-bold ph-check text-lime-400 mt-0.5 text-base"></i>
                          <span class="font-bold uppercase tracking-tight">DOKUMEN DALAM POSISI LURUS</span>
                      </li>
                      <li class="flex items-start gap-2">
                          <i class="ph-bold ph-check text-lime-400 mt-0.5 text-base"></i>
                          <span class="font-bold uppercase tracking-tight">TEKS TERLIHAT JELAS DAN FOKUS</span>
                      </li>
                  </ul>
              </div>
          </div>

          <!-- Right Content: Form -->
          <div class="lg:col-span-2 bg-white border-2 border-slate-900 overflow-hidden">
              
              <!-- Form Header -->
              <div class="px-8 py-6 border-b-2 border-slate-900 bg-slate-50">
                  <h3 class="heading-architectural text-slate-900 text-2xl mb-2">DETAIL ITEM ${isBarang ? 'BARANG' : 'JASA'}</h3>
                  <p class="text-xs text-slate-600 font-bold uppercase tracking-widest">LENGKAPI INFORMASI PENERIMAAN ${isBarang ? 'BARANG' : 'JASA'} SESUAI DOKUMEN</p>
              </div>

              <!-- Form Content -->
              <form id="form-input" class="p-8 space-y-8">
                  
                  <!-- Item 1 -->
                  <div class="bg-slate-50 border-2 border-slate-900 p-6">
                      <div class="flex items-start justify-between mb-6">
                          <div>
                              <h4 class="font-black text-slate-900 text-base mb-2 uppercase tracking-tight">${item1}</h4>
                              <p class="text-xs text-slate-600 font-bold tracking-tight">PESANAN: <span class="text-slate-900">10 ${unit}</span></p>
                          </div>
                          <span class="bg-lime-400 text-slate-900 border-2 border-slate-900 px-3 py-2 text-xs font-black tracking-tight">
                              ITEM #1
                          </span>
                      </div>
                      
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                              <label class="block text-[10px] font-black text-slate-900 mb-3 uppercase tracking-widest">
                                  ${isBarang ? 'QTY DITERIMA' : 'PROGRESS (%)'}
                              </label>
                              <input 
                                  type="number" 
                                  id="qty_1" 
                                  class="w-full px-4 py-4 border-2 border-slate-900 text-sm font-bold focus:border-lime-400 focus:ring-0 outline-none transition-all" 
                                  placeholder="0"
                                  min="0"
                                  max="10"
                              >
                          </div>
                          
                          <div>
                              <label class="block text-[10px] font-black text-slate-900 mb-3 uppercase tracking-widest">
                                  ${isBarang ? 'KONDISI' : 'HASIL'}
                              </label>
                              <select 
                                  id="cond_1" 
                                  class="w-full px-4 py-4 border-2 border-slate-900 text-sm font-bold focus:border-lime-400 focus:ring-0 outline-none transition-all bg-white"
                              >
                                  <option value="good">✓ BAIK / SESUAI</option>
                                  <option value="bad">✗ RUSAK / REVISI</option>
                              </select>
                          </div>
                          
                          <div class="md:col-span-2">
                              <label class="block text-[10px] font-black text-slate-900 mb-3 uppercase tracking-widest">
                                  CATATAN TAMBAHAN
                              </label>
                              <textarea 
                                  id="note_1" 
                                  rows="2"
                                  class="w-full px-4 py-4 border-2 border-slate-900 text-sm font-bold focus:border-lime-400 focus:ring-0 outline-none transition-all resize-none" 
                                  placeholder="TAMBAHKAN CATATAN JIKA DIPERLUKAN..."
                              ></textarea>
                          </div>
                      </div>
                  </div>

                  <!-- Item 2 -->
                  <div class="bg-slate-50 border-2 border-slate-900 p-6">
                      <div class="flex items-start justify-between mb-6">
                          <div>
                              <h4 class="font-black text-slate-900 text-base mb-2 uppercase tracking-tight">${item2}</h4>
                              <p class="text-xs text-slate-600 font-bold tracking-tight">PESANAN: <span class="text-slate-900">5 ${unit}</span></p>
                          </div>
                          <span class="bg-white text-slate-900 border-2 border-slate-900 px-3 py-2 text-xs font-black tracking-tight">
                              ITEM #2
                          </span>
                      </div>
                      
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                              <label class="block text-[10px] font-black text-slate-900 mb-3 uppercase tracking-widest">
                                  ${isBarang ? 'QTY DITERIMA' : 'PROGRESS (%)'}
                              </label>
                              <input 
                                  type="number" 
                                  id="qty_2" 
                                  class="w-full px-4 py-4 border-2 border-slate-900 text-sm font-bold focus:border-lime-400 focus:ring-0 outline-none transition-all" 
                                  placeholder="0"
                                  min="0"
                                  max="5"
                              >
                          </div>
                          
                          <div>
                              <label class="block text-[10px] font-black text-slate-900 mb-3 uppercase tracking-widest">
                                  ${isBarang ? 'KONDISI' : 'HASIL'}
                              </label>
                              <select 
                                  id="cond_2" 
                                  class="w-full px-4 py-4 border-2 border-slate-900 text-sm font-bold focus:border-lime-400 focus:ring-0 outline-none transition-all bg-white"
                              >
                                  <option value="good">✓ BAIK / SESUAI</option>
                                  <option value="bad">✗ RUSAK / REVISI</option>
                              </select>
                          </div>
                          
                          <div class="md:col-span-2">
                              <label class="block text-[10px] font-black text-slate-900 mb-3 uppercase tracking-widest">
                                  CATATAN TAMBAHAN
                              </label>
                              <textarea 
                                  id="note_2" 
                                  rows="2"
                                  class="w-full px-4 py-4 border-2 border-slate-900 text-sm font-bold focus:border-lime-400 focus:ring-0 outline-none transition-all resize-none" 
                                  placeholder="TAMBAHKAN CATATAN JIKA DIPERLUKAN..."
                              ></textarea>
                          </div>
                      </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="flex flex-col sm:flex-row gap-4 pt-8 border-t-2 border-slate-900">
                      <button 
                          type="button" 
                          onclick="history.back()" 
                          class="flex-1 px-6 py-5 border-2 border-slate-900 text-slate-900 font-black hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2 uppercase tracking-tight text-sm"
                      >
                          <i class="ph-bold ph-x-circle"></i>
                          BATAL
                      </button>
                      
                      <button 
                          type="submit" 
                          class="flex-1 px-6 py-5 bg-lime-400 hover:bg-lime-500 border-2 border-slate-900 text-slate-900 font-black transition-all flex items-center justify-center gap-2 hover-sharp uppercase tracking-tight text-sm"
                      >
                          <i class="ph-bold ph-check-circle text-xl"></i>
                          SUBMIT DATA
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
        titleElement.innerHTML = isBarang ? 'INPUT BAPB (BARANG)' : 'INPUT BAPP (JASA)';
    }

    // AI Scanner Logic
    const btnScan = document.getElementById('btn-ai-scan');
    const inputScan = document.getElementById('suratJalanInput');
    const status = document.getElementById('ai-status');

    btnScan.addEventListener('click', () => inputScan.click());
    
    inputScan.addEventListener('change', () => {
        if (inputScan.files && inputScan.files[0]) {
            btnScan.innerHTML = `<i class="ph-bold ph-spinner animate-spin"></i> SCANNING...`;
            btnScan.disabled = true;
            btnScan.classList.add('opacity-75');
            status.classList.remove('hidden');

            setTimeout(() => {
                document.getElementById('qty_1').value = 10;
                document.getElementById('note_1').value = "✓ VERIFIED BY AI SCAN (CONFIDENCE: 99.2%)";
                document.getElementById('qty_2').value = 5;
                document.getElementById('note_2').value = "✓ VERIFIED BY AI SCAN (CONFIDENCE: 98.7%)";

                btnScan.innerHTML = `<i class="ph-bold ph-check-circle"></i> SCAN BERHASIL!`;
                btnScan.classList.remove('opacity-75');
                btnScan.classList.remove('bg-lime-400');
                btnScan.classList.add('bg-emerald-500', 'border-white');
                
                status.innerHTML = '<i class="ph-bold ph-check-circle"></i> DATA BERHASIL DIEKSTRAK!';
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
    notification.className = 'fixed top-8 right-8 bg-lime-400 border-2 border-slate-900 p-6 z-50';
    notification.style.animation = 'slideInRight 0.3s ease-out';
    notification.innerHTML = `
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-slate-900 flex items-center justify-center">
                <i class="ph-bold ph-check text-lime-400 text-2xl"></i>
            </div>
            <div>
                <h4 class="font-black text-slate-900 mb-1 tracking-tight uppercase">DATA BERHASIL DISIMPAN!</h4>
                <p class="text-xs text-slate-900 font-bold tracking-tight">MENGARAHKAN KE HALAMAN BAPB...</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}
