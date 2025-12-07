export default class DownloadPage {
  async render() {
    return `
      <!-- Page Header -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
          <div>
              <h2 class="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Pusat Unduhan Dokumen</h2>
              <p class="text-slate-500 font-medium">Unduh arsip BAPB dan Berita Acara yang telah selesai</p>
              
              <!-- Stats Mini -->
              <div class="flex gap-4 mt-4">
                  <div class="flex items-center gap-2 bg-violet-50 px-4 py-2 rounded-xl border border-violet-100">
                      <i class="ph-bold ph-files text-violet-600"></i>
                      <span class="text-sm font-bold text-violet-700">142 Total</span>
                  </div>
                  <div class="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                      <i class="ph-bold ph-download-simple text-emerald-600"></i>
                      <span class="text-sm font-bold text-emerald-700">1.2K Diunduh</span>
                  </div>
              </div>
          </div>
          
          <a href="#/" 
             class="inline-flex items-center gap-2 text-slate-600 hover:text-violet-600 font-bold transition-colors px-5 py-3 rounded-2xl hover:bg-white shadow-sm hover:shadow-md">
              <i class="ph-bold ph-arrow-left text-lg"></i> 
              Kembali
          </a>
      </div>

      <!-- Filter Section -->
      <div class="bg-white rounded-3xl shadow-soft border border-slate-100 p-6 mb-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              <!-- Search -->
              <div class="md:col-span-2 relative">
                  <i class="ph-bold ph-magnifying-glass absolute left-4 top-4 text-slate-400 text-lg"></i>
                  <input 
                      type="text" 
                      placeholder="Cari nama dokumen, vendor..." 
                      class="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-2xl text-sm font-medium focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all"
                  >
              </div>
              
              <!-- Category Filter -->
              <select class="px-4 py-3.5 border-2 border-slate-200 rounded-2xl text-sm font-medium focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all bg-white">
                  <option>Semua Kategori</option>
                  <option>BAPB (Barang)</option>
                  <option>BAPP (Jasa)</option>
              </select>
              
              <!-- Date Filter -->
              <input 
                  type="month" 
                  class="px-4 py-3.5 border-2 border-slate-200 rounded-2xl text-sm font-medium focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all"
                  value="2025-11"
              >
          </div>
      </div>

      <!-- Documents Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          <!-- Document 1 -->
          <div class="group bg-white rounded-3xl shadow-soft border border-slate-100 hover:shadow-soft-lg transition-all overflow-hidden">
              <div class="p-6">
                  <div class="flex items-start gap-4">
                      <!-- File Icon -->
                      <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
                          <i class="ph-bold ph-file-pdf text-white text-2xl"></i>
                      </div>
                      
                      <!-- File Info -->
                      <div class="flex-1 min-w-0">
                          <h4 class="font-bold text-slate-900 text-base mb-1 truncate">BAPB-XI/2025/001.pdf</h4>
                          <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-semibold mb-3">
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-buildings"></i>
                                  PT. Sinar Jaya
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-calendar"></i>
                                  24 Nov 2025
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-file"></i>
                                  1.2 MB
                              </span>
                          </div>
                          
                          <!-- Tags -->
                          <div class="flex flex-wrap gap-2">
                              <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg border border-emerald-200 text-xs font-bold">
                                  <i class="ph-bold ph-check-circle"></i>
                                  Approved
                              </span>
                              <span class="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-lg border border-blue-200 text-xs font-bold">
                                  BAPB
                              </span>
                          </div>
                      </div>
                      
                      <!-- Download Button -->
                      <button class="w-11 h-11 rounded-xl bg-violet-50 border-2 border-violet-200 hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 text-violet-600 hover:text-white transition-all flex items-center justify-center flex-shrink-0 hover:scale-110">
                          <i class="ph-bold ph-download-simple text-xl"></i>
                      </button>
                  </div>
              </div>
          </div>

          <!-- Document 2 -->
          <div class="group bg-white rounded-3xl shadow-soft border border-slate-100 hover:shadow-soft-lg transition-all overflow-hidden">
              <div class="p-6">
                  <div class="flex items-start gap-4">
                      <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                          <i class="ph-bold ph-file-doc text-white text-2xl"></i>
                      </div>
                      
                      <div class="flex-1 min-w-0">
                          <h4 class="font-bold text-slate-900 text-base mb-1 truncate">SPK-Logistik-004.docx</h4>
                          <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-semibold mb-3">
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-buildings"></i>
                                  Internal Memo
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-calendar"></i>
                                  20 Nov 2025
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-file"></i>
                                  456 KB
                              </span>
                          </div>
                          
                          <div class="flex flex-wrap gap-2">
                              <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg border border-emerald-200 text-xs font-bold">
                                  <i class="ph-bold ph-check-circle"></i>
                                  Signed
                              </span>
                              <span class="inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-lg border border-purple-200 text-xs font-bold">
                                  SPK
                              </span>
                          </div>
                      </div>
                      
                      <button class="w-11 h-11 rounded-xl bg-violet-50 border-2 border-violet-200 hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 text-violet-600 hover:text-white transition-all flex items-center justify-center flex-shrink-0 hover:scale-110">
                          <i class="ph-bold ph-download-simple text-xl"></i>
                      </button>
                  </div>
              </div>
          </div>

          <!-- Document 3 -->
          <div class="group bg-white rounded-3xl shadow-soft border border-slate-100 hover:shadow-soft-lg transition-all overflow-hidden">
              <div class="p-6">
                  <div class="flex items-start gap-4">
                      <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
                          <i class="ph-bold ph-file-pdf text-white text-2xl"></i>
                      </div>
                      
                      <div class="flex-1 min-w-0">
                          <h4 class="font-bold text-slate-900 text-base mb-1 truncate">BAPP-XI/2025/012.pdf</h4>
                          <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-semibold mb-3">
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-buildings"></i>
                                  CV. Teknologi Digital
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-calendar"></i>
                                  18 Nov 2025
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-file"></i>
                                  2.1 MB
                              </span>
                          </div>
                          
                          <div class="flex flex-wrap gap-2">
                              <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg border border-emerald-200 text-xs font-bold">
                                  <i class="ph-bold ph-check-circle"></i>
                                  Completed
                              </span>
                              <span class="inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-lg border border-purple-200 text-xs font-bold">
                                  BAPP
                              </span>
                          </div>
                      </div>
                      
                      <button class="w-11 h-11 rounded-xl bg-violet-50 border-2 border-violet-200 hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 text-violet-600 hover:text-white transition-all flex items-center justify-center flex-shrink-0 hover:scale-110">
                          <i class="ph-bold ph-download-simple text-xl"></i>
                      </button>
                  </div>
              </div>
          </div>

          <!-- Document 4 -->
          <div class="group bg-white rounded-3xl shadow-soft border border-slate-100 hover:shadow-soft-lg transition-all overflow-hidden">
              <div class="p-6">
                  <div class="flex items-start gap-4">
                      <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                          <i class="ph-bold ph-file-xls text-white text-2xl"></i>
                      </div>
                      
                      <div class="flex-1 min-w-0">
                          <h4 class="font-bold text-slate-900 text-base mb-1 truncate">Report-Q4-2025.xlsx</h4>
                          <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-semibold mb-3">
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-buildings"></i>
                                  Quarterly Report
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-calendar"></i>
                                  15 Nov 2025
                              </span>
                              <span class="flex items-center gap-1">
                                  <i class="ph-bold ph-file"></i>
                                  3.4 MB
                              </span>
                          </div>
                          
                          <div class="flex flex-wrap gap-2">
                              <span class="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-lg border border-blue-200 text-xs font-bold">
                                  <i class="ph-bold ph-chart-bar"></i>
                                  Report
                              </span>
                              <span class="inline-flex items-center bg-amber-50 text-amber-700 px-3 py-1 rounded-lg border border-amber-200 text-xs font-bold">
                                  Excel
                              </span>
                          </div>
                      </div>
                      
                      <button class="w-11 h-11 rounded-xl bg-violet-50 border-2 border-violet-200 hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 text-violet-600 hover:text-white transition-all flex items-center justify-center flex-shrink-0 hover:scale-110">
                          <i class="ph-bold ph-download-simple text-xl"></i>
                      </button>
                  </div>
              </div>
          </div>
      </div>

      <!-- Bulk Actions Card -->
      <div class="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-3xl shadow-soft-lg p-8 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          
          <div class="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                  <h3 class="text-2xl font-bold text-white mb-2 tracking-tight">Unduh Semua Dokumen</h3>
                  <p class="text-white/90 font-medium">Download arsip lengkap dalam format ZIP</p>
              </div>
              
              <button class="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-violet-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-[1.02] transition-all whitespace-nowrap">
                  <i class="ph-bold ph-download-simple text-xl"></i>
                  Download ZIP (12.4 MB)
              </button>
          </div>
      </div>
    `;
  }

  async afterRender() {
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.innerHTML = 'Download Dokumen';
    }
  }
}
