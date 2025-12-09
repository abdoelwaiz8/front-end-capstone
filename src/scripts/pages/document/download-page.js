export default class DownloadPage {
  async render() {
    return `
      <!-- Page Header -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
          <div>
              <h2 class="heading-architectural text-4xl text-slate-900 mb-3">PUSAT UNDUHAN</h2>
              <p class="text-slate-600 text-xs font-bold uppercase tracking-widest border-l-4 border-lime-400 pl-4">UNDUH ARSIP BAPB DAN BERITA ACARA</p>
              
              <!-- Stats Mini -->
              <div class="flex gap-4 mt-6">
                  <div class="flex items-center gap-2 bg-white border-2 border-slate-900 px-4 py-2">
                      <i class="ph-bold ph-files text-slate-900"></i>
                      <span class="text-xs font-black text-slate-900 tracking-tight">142 TOTAL</span>
                  </div>
                  <div class="flex items-center gap-2 bg-lime-400 border-2 border-slate-900 px-4 py-2">
                      <i class="ph-bold ph-download-simple text-slate-900"></i>
                      <span class="text-xs font-black text-slate-900 tracking-tight">1.2K DIUNDUH</span>
                  </div>
              </div>
          </div>
          
          <a href="#/" 
             class="inline-flex items-center gap-2 text-slate-900 hover:text-lime-400 font-black transition-colors px-6 py-4 border-2 border-slate-900 hover:bg-slate-900 hover:text-lime-400 uppercase tracking-tight text-xs">
              <i class="ph-bold ph-arrow-left text-lg"></i> 
              KEMBALI
          </a>
      </div>

      <!-- Filter Section -->
      <div class="bg-white border-2 border-slate-900 p-6 mb-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              <!-- Search -->
              <div class="md:col-span-2 relative">
                  <i class="ph-bold ph-magnifying-glass absolute left-4 top-4 text-slate-400 text-lg"></i>
                  <input 
                      type="text" 
                      placeholder="CARI NAMA DOKUMEN, VENDOR..." 
                      class="w-full pl-12 pr-4 py-4 border-2 border-slate-900 text-xs font-bold focus:border-lime-400 focus:ring-0 outline-none transition-all uppercase tracking-tight placeholder:text-slate-400"
                  >
              </div>
              
              <!-- Category Filter -->
              <select class="px-4 py-4 border-2 border-slate-900 text-xs font-bold focus:border-lime-400 focus:ring-0 outline-none transition-all bg-white uppercase tracking-tight">
                  <option>SEMUA KATEGORI</option>
                  <option>BAPB (BARANG)</option>
                  <option>BAPP (JASA)</option>
              </select>
              
              <!-- Date Filter -->
              <input 
                  type="month" 
                  class="px-4 py-4 border-2 border-slate-900 text-xs font-bold focus:border-lime-400 focus:ring-0 outline-none transition-all uppercase tracking-tight"
                  value="2025-11"
              >
          </div>
      </div>

      <!-- Documents Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          <!-- Document 1 -->
          <div class="group bg-white border-2 border-slate-900 hover-sharp transition-all overflow-hidden">
              <div class="p-6">
                  <div class="flex items-start gap-4">
                      <!-- File Icon -->
                      <div class="w-14 h-14 bg-red-500 border-2 border-slate-900 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400 transition-colors">
                          <i class="ph-bold ph-file-pdf text-white group-hover:text-slate-900 text-2xl"></i>
                      </div>
                      
                      <!-- File Info -->
                      <div class="flex-1 min-w-0">
                          <h4 class="font-black text-slate-900 text-base mb-2 tracking-tight uppercase">BAPB-XI/2025/001.PDF</h4>
                          <div class="flex flex-wrap items-center gap-3 text-[10px] text-slate-500 font-bold mb-3 uppercase tracking-widest">
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-buildings"></i>
                                  PT. SINAR JAYA
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-calendar"></i>
                                  24 NOV 2025
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-file"></i>
                                  1.2 MB
                              </span>
                          </div>
                          
                          <!-- Tags -->
                          <div class="flex flex-wrap gap-2">
                              <span class="inline-flex items-center gap-2 bg-lime-400 text-slate-900 border border-slate-900 px-3 py-1 text-xs font-black tracking-tight">
                                  <i class="ph-bold ph-check-circle"></i>
                                  APPROVED
                              </span>
                              <span class="inline-flex items-center bg-white text-slate-900 border border-slate-900 px-3 py-1 text-xs font-black tracking-tight">
                                  BAPB
                              </span>
                          </div>
                      </div>
                      
                      <!-- Download Button -->
                      <button class="w-12 h-12 bg-lime-400 border-2 border-slate-900 hover:bg-slate-900 hover:text-lime-400 text-slate-900 transition-all flex items-center justify-center flex-shrink-0">
                          <i class="ph-bold ph-download-simple text-xl"></i>
                      </button>
                  </div>
              </div>
          </div>

          <!-- Document 2 -->
          <div class="group bg-white border-2 border-slate-900 hover-sharp transition-all overflow-hidden">
              <div class="p-6">
                  <div class="flex items-start gap-4">
                      <div class="w-14 h-14 bg-blue-500 border-2 border-slate-900 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400 transition-colors">
                          <i class="ph-bold ph-file-doc text-white group-hover:text-slate-900 text-2xl"></i>
                      </div>
                      
                      <div class="flex-1 min-w-0">
                          <h4 class="font-black text-slate-900 text-base mb-2 tracking-tight uppercase">SPK-LOGISTIK-004.DOCX</h4>
                          <div class="flex flex-wrap items-center gap-3 text-[10px] text-slate-500 font-bold mb-3 uppercase tracking-widest">
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-buildings"></i>
                                  INTERNAL MEMO
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-calendar"></i>
                                  20 NOV 2025
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-file"></i>
                                  456 KB
                              </span>
                          </div>
                          
                          <div class="flex flex-wrap gap-2">
                              <span class="inline-flex items-center gap-2 bg-lime-400 text-slate-900 border border-slate-900 px-3 py-1 text-xs font-black tracking-tight">
                                  <i class="ph-bold ph-check-circle"></i>
                                  SIGNED
                              </span>
                              <span class="inline-flex items-center bg-white text-slate-900 border border-slate-900 px-3 py-1 text-xs font-black tracking-tight">
                                  SPK
                              </span>
                          </div>
                      </div>
                      
                      <button class="w-12 h-12 bg-lime-400 border-2 border-slate-900 hover:bg-slate-900 hover:text-lime-400 text-slate-900 transition-all flex items-center justify-center flex-shrink-0">
                          <i class="ph-bold ph-download-simple text-xl"></i>
                      </button>
                  </div>
              </div>
          </div>

          <!-- Document 3 -->
          <div class="group bg-white border-2 border-slate-900 hover-sharp transition-all overflow-hidden">
              <div class="p-6">
                  <div class="flex items-start gap-4">
                      <div class="w-14 h-14 bg-red-500 border-2 border-slate-900 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400 transition-colors">
                          <i class="ph-bold ph-file-pdf text-white group-hover:text-slate-900 text-2xl"></i>
                      </div>
                      
                      <div class="flex-1 min-w-0">
                          <h4 class="font-black text-slate-900 text-base mb-2 tracking-tight uppercase">BAPP-XI/2025/012.PDF</h4>
                          <div class="flex flex-wrap items-center gap-3 text-[10px] text-slate-500 font-bold mb-3 uppercase tracking-widest">
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-buildings"></i>
                                  CV. TEKNOLOGI DIGITAL
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-calendar"></i>
                                  18 NOV 2025
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-file"></i>
                                  2.1 MB
                              </span>
                          </div>
                          
                          <div class="flex flex-wrap gap-2">
                              <span class="inline-flex items-center gap-2 bg-lime-400 text-slate-900 border border-slate-900 px-3 py-1 text-xs font-black tracking-tight">
                                  <i class="ph-bold ph-check-circle"></i>
                                  COMPLETED
                              </span>
                              <span class="inline-flex items-center bg-white text-slate-900 border border-slate-900 px-3 py-1 text-xs font-black tracking-tight">
                                  BAPP
                              </span>
                          </div>
                      </div>
                      
                      <button class="w-12 h-12 bg-lime-400 border-2 border-slate-900 hover:bg-slate-900 hover:text-lime-400 text-slate-900 transition-all flex items-center justify-center flex-shrink-0">
                          <i class="ph-bold ph-download-simple text-xl"></i>
                      </button>
                  </div>
              </div>
          </div>

          <!-- Document 4 -->
          <div class="group bg-white border-2 border-slate-900 hover-sharp transition-all overflow-hidden">
              <div class="p-6">
                  <div class="flex items-start gap-4">
                      <div class="w-14 h-14 bg-emerald-500 border-2 border-slate-900 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400 transition-colors">
                          <i class="ph-bold ph-file-xls text-white group-hover:text-slate-900 text-2xl"></i>
                      </div>
                      
                      <div class="flex-1 min-w-0">
                          <h4 class="font-black text-slate-900 text-base mb-2 tracking-tight uppercase">REPORT-Q4-2025.XLSX</h4>
                          <div class="flex flex-wrap items-center gap-3 text-[10px] text-slate-500 font-bold mb-3 uppercase tracking-widest">
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-buildings"></i>
                                  QUARTERLY REPORT
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-calendar"></i>
                                  15 NOV 2025
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-file"></i>
                                  3.4 MB
                              </span>
                          </div>
                          
                          <div class="flex flex-wrap gap-2">
                              <span class="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-900 px-3 py-1 text-xs font-black tracking-tight">
                                  <i class="ph-bold ph-chart-bar"></i>
                                  REPORT
                              </span>
                              <span class="inline-flex items-center bg-white text-slate-900 border border-slate-900 px-3 py-1 text-xs font-black tracking-tight">
                                  EXCEL
                              </span>
                          </div>
                      </div>
                      
                      <button class="w-12 h-12 bg-lime-400 border-2 border-slate-900 hover:bg-slate-900 hover:text-lime-400 text-slate-900 transition-all flex items-center justify-center flex-shrink-0">
                          <i class="ph-bold ph-download-simple text-xl"></i>
                      </button>
                  </div>
              </div>
          </div>
      </div>

      <!-- Bulk Actions Card -->
      <div class="bg-slate-900 border-2 border-slate-900 p-8 relative overflow-hidden">
          <!-- Architectural Grid -->
          <div class="absolute inset-0" style="background-image: 
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
              background-size: 30px 30px;">
          </div>
          
          <div class="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                  <h3 class="heading-architectural text-3xl text-white mb-3">UNDUH SEMUA<br/>DOKUMEN</h3>
                  <p class="text-white text-xs font-bold uppercase tracking-widest border-l-4 border-lime-400 pl-4">DOWNLOAD ARSIP LENGKAP DALAM FORMAT ZIP</p>
              </div>
              
              <button class="inline-flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-500 text-slate-900 px-8 py-5 font-black transition-all border-2 border-white uppercase tracking-tight text-sm whitespace-nowrap">
                  <i class="ph-bold ph-download-simple text-xl"></i>
                  DOWNLOAD ZIP (12.4 MB)
              </button>
          </div>
      </div>
    `;
  }

  async afterRender() {
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.innerHTML = 'DOWNLOAD DOKUMEN';
    }
  }
}
