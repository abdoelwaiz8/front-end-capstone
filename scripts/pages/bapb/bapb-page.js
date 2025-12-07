export default class BapbPage {
  async render() {
    return `
      <!-- Page Header -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-6">
          <div>
              <h2 class="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Daftar Berita Acara (BAPB)</h2>
              <p class="text-slate-500 font-medium">Kelola dokumen serah terima barang</p>
              
              <!-- Stats Mini Cards -->
              <div class="flex gap-4 mt-4">
                  <div class="flex items-center gap-2 bg-violet-50 px-4 py-2 rounded-xl border border-violet-100">
                      <i class="ph-bold ph-files text-violet-600"></i>
                      <span class="text-sm font-bold text-violet-700">28 Total</span>
                  </div>
                  <div class="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                      <i class="ph-bold ph-check-circle text-emerald-600"></i>
                      <span class="text-sm font-bold text-emerald-700">23 Selesai</span>
                  </div>
                  <div class="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-xl border border-amber-100">
                      <i class="ph-bold ph-clock text-amber-600"></i>
                      <span class="text-sm font-bold text-amber-700">5 Proses</span>
                  </div>
              </div>
          </div>
          
          <button class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-violet-500/30 hover:shadow-xl hover:scale-[1.02] transition-all whitespace-nowrap">
              <i class="ph-bold ph-plus-circle text-xl"></i>
              Buat BAPB Baru
          </button>
      </div>

      <!-- Filter & Search Section -->
      <div class="bg-white rounded-3xl shadow-soft border border-slate-100 p-6 mb-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              <!-- Search -->
              <div class="md:col-span-2 relative">
                  <i class="ph-bold ph-magnifying-glass absolute left-4 top-4 text-slate-400 text-lg"></i>
                  <input 
                      type="text" 
                      placeholder="Cari No. PO, Vendor, atau Nomor Dokumen..." 
                      class="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-2xl text-sm font-medium focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all"
                  >
              </div>
              
              <!-- Status Filter -->
              <select class="px-4 py-3.5 border-2 border-slate-200 rounded-2xl text-sm font-medium focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all bg-white">
                  <option>Semua Status</option>
                  <option>Draft</option>
                  <option>Dalam Proses</option>
                  <option>Disetujui</option>
                  <option>Ditolak</option>
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
      <div class="grid grid-cols-1 gap-5">
          
          <!-- Document Card 1 - Disetujui -->
          <div class="group bg-white rounded-3xl shadow-soft border border-slate-100 hover:shadow-soft-lg transition-all overflow-hidden">
              <div class="p-6">
                  <div class="flex flex-col md:flex-row md:items-center gap-6">
                      
                      <!-- Icon & Document Info -->
                      <div class="flex items-start gap-4 flex-1">
                          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                              <i class="ph-bold ph-file-text text-white text-2xl"></i>
                          </div>
                          
                          <div class="flex-1 min-w-0">
                              <div class="flex items-center gap-3 mb-2">
                                  <h3 class="text-lg font-bold text-slate-900 truncate">BAPB-XI/2025/001</h3>
                                  <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-bold flex-shrink-0">
                                      <i class="ph-bold ph-check-circle text-sm"></i>
                                      Disetujui
                                  </span>
                              </div>
                              
                              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                                  <div class="flex items-center gap-2">
                                      <i class="ph-bold ph-buildings text-violet-600"></i>
                                      <span class="font-semibold text-slate-700">PT. Sinar Jaya</span>
                                  </div>
                                  <div class="flex items-center gap-2">
                                      <i class="ph-bold ph-calendar text-violet-600"></i>
                                      <span class="text-slate-600 font-medium">24 Nov 2025</span>
                                  </div>
                                  <div class="flex items-center gap-2">
                                      <i class="ph-bold ph-user text-violet-600"></i>
                                      <span class="text-slate-600 font-medium">Waiz Abdullah</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <!-- Actions -->
                      <div class="flex items-center gap-2 flex-shrink-0">
                          <button class="w-11 h-11 rounded-xl border-2 border-slate-200 hover:border-violet-500 hover:bg-violet-50 text-slate-600 hover:text-violet-600 transition-all flex items-center justify-center">
                              <i class="ph-bold ph-eye text-lg"></i>
                          </button>
                          <button class="w-11 h-11 rounded-xl border-2 border-slate-200 hover:border-violet-500 hover:bg-violet-50 text-slate-600 hover:text-violet-600 transition-all flex items-center justify-center">
                              <i class="ph-bold ph-download-simple text-lg"></i>
                          </button>
                          <button class="w-11 h-11 rounded-xl border-2 border-slate-200 hover:border-violet-500 hover:bg-violet-50 text-slate-600 hover:text-violet-600 transition-all flex items-center justify-center">
                              <i class="ph-bold ph-dots-three-vertical text-lg"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Document Card 2 - Dalam Proses -->
          <div class="group bg-white rounded-3xl shadow-soft border border-slate-100 hover:shadow-soft-lg transition-all overflow-hidden">
              <div class="p-6">
                  <div class="flex flex-col md:flex-row md:items-center gap-6">
                      
                      <div class="flex items-start gap-4 flex-1">
                          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                              <i class="ph-bold ph-file-text text-white text-2xl"></i>
                          </div>
                          
                          <div class="flex-1 min-w-0">
                              <div class="flex items-center gap-3 mb-2">
                                  <h3 class="text-lg font-bold text-slate-900 truncate">BAPB-XI/2025/002</h3>
                                  <span class="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3 py-1.5 rounded-xl border border-amber-200 text-xs font-bold flex-shrink-0">
                                      <span class="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                                      Dalam Proses
                                  </span>
                              </div>
                              
                              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                                  <div class="flex items-center gap-2">
                                      <i class="ph-bold ph-buildings text-violet-600"></i>
                                      <span class="font-semibold text-slate-700">CV. Teknologi Digital</span>
                                  </div>
                                  <div class="flex items-center gap-2">
                                      <i class="ph-bold ph-calendar text-violet-600"></i>
                                      <span class="text-slate-600 font-medium">25 Nov 2025</span>
                                  </div>
                                  <div class="flex items-center gap-2">
                                      <i class="ph-bold ph-user text-violet-600"></i>
                                      <span class="text-slate-600 font-medium">Ahmad Fadli</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div class="flex items-center gap-2 flex-shrink-0">
                          <button class="w-11 h-11 rounded-xl border-2 border-slate-200 hover:border-violet-500 hover:bg-violet-50 text-slate-600 hover:text-violet-600 transition-all flex items-center justify-center">
                              <i class="ph-bold ph-eye text-lg"></i>
                          </button>
                          <a href="#/input/bapb" class="w-11 h-11 rounded-xl border-2 border-violet-500 bg-violet-50 text-violet-600 hover:bg-violet-600 hover:text-white transition-all flex items-center justify-center">
                              <i class="ph-bold ph-pencil-simple text-lg"></i>
                          </a>
                          <button class="w-11 h-11 rounded-xl border-2 border-slate-200 hover:border-violet-500 hover:bg-violet-50 text-slate-600 hover:text-violet-600 transition-all flex items-center justify-center">
                              <i class="ph-bold ph-dots-three-vertical text-lg"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Document Card 3 - Draft -->
          <div class="group bg-white rounded-3xl shadow-soft border border-slate-100 hover:shadow-soft-lg transition-all overflow-hidden">
              <div class="p-6">
                  <div class="flex flex-col md:flex-row md:items-center gap-6">
                      
                      <div class="flex items-start gap-4 flex-1">
                          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-500/30 group-hover:scale-110 transition-transform">
                              <i class="ph-bold ph-file-dashed text-white text-2xl"></i>
                          </div>
                          
                          <div class="flex-1 min-w-0">
                              <div class="flex items-center gap-3 mb-2">
                                  <h3 class="text-lg font-bold text-slate-900 truncate">BAPB-XI/2025/003</h3>
                                  <span class="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold flex-shrink-0">
                                      <i class="ph-bold ph-file-dashed text-sm"></i>
                                      Draft
                                  </span>
                              </div>
                              
                              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                                  <div class="flex items-center gap-2">
                                      <i class="ph-bold ph-buildings text-violet-600"></i>
                                      <span class="font-semibold text-slate-700">PT. Maju Bersama</span>
                                  </div>
                                  <div class="flex items-center gap-2">
                                      <i class="ph-bold ph-calendar text-violet-600"></i>
                                      <span class="text-slate-600 font-medium">26 Nov 2025</span>
                                  </div>
                                  <div class="flex items-center gap-2">
                                      <i class="ph-bold ph-user text-violet-600"></i>
                                      <span class="text-slate-600 font-medium">Siti Nurhaliza</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div class="flex items-center gap-2 flex-shrink-0">
                          <a href="#/input/bapb" class="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-5 py-3 rounded-xl font-bold shadow-lg shadow-violet-500/30 hover:shadow-xl transition-all">
                              <i class="ph-bold ph-pencil-simple"></i>
                              Lanjutkan
                          </a>
                          <button class="w-11 h-11 rounded-xl border-2 border-slate-200 hover:border-red-500 hover:bg-red-50 text-slate-600 hover:text-red-600 transition-all flex items-center justify-center">
                              <i class="ph-bold ph-trash text-lg"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Pagination -->
      <div class="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-slate-600 font-medium">
              Menampilkan <span class="font-bold text-slate-900">1-3</span> dari <span class="font-bold text-slate-900">28</span> dokumen
          </p>
          
          <div class="flex items-center gap-2">
              <button class="w-10 h-10 rounded-xl border-2 border-slate-200 hover:border-violet-500 hover:bg-violet-50 text-slate-600 hover:text-violet-600 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  <i class="ph-bold ph-caret-left"></i>
              </button>
              
              <button class="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold shadow-lg shadow-violet-500/30">
                  1
              </button>
              <button class="w-10 h-10 rounded-xl border-2 border-slate-200 hover:border-violet-500 hover:bg-violet-50 text-slate-600 hover:text-violet-600 transition-all font-bold">
                  2
              </button>
              <button class="w-10 h-10 rounded-xl border-2 border-slate-200 hover:border-violet-500 hover:bg-violet-50 text-slate-600 hover:text-violet-600 transition-all font-bold">
                  3
              </button>
              <span class="text-slate-400 px-2">...</span>
              <button class="w-10 h-10 rounded-xl border-2 border-slate-200 hover:border-violet-500 hover:bg-violet-50 text-slate-600 hover:text-violet-600 transition-all font-bold">
                  10
              </button>
              
              <button class="w-10 h-10 rounded-xl border-2 border-slate-200 hover:border-violet-500 hover:bg-violet-50 text-slate-600 hover:text-violet-600 transition-all flex items-center justify-center">
                  <i class="ph-bold ph-caret-right"></i>
              </button>
          </div>
      </div>
    `;
  }

  async afterRender() {
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.innerHTML = 'Daftar Berita Acara (BAPB)';
    }
  }
}