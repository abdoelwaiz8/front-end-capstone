export default class DashboardPage {
  async render() {
    return `
      <!-- Stats Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          <!-- Card 1: Total Dokumen -->
          <div class="group bg-white p-7 rounded-3xl shadow-soft border border-slate-100 hover:shadow-soft-lg hover-lift cursor-pointer relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-100 to-transparent rounded-full -mr-16 -mt-16 opacity-50"></div>
              
              <div class="relative flex items-start justify-between">
                  <div>
                      <p class="text-slate-500 text-sm font-semibold mb-2">Total Dokumen</p>
                      <h3 class="text-4xl font-bold text-slate-900 mb-1">142</h3>
                      <div class="flex items-center gap-2 mt-2">
                          <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                              +12% bulan ini
                          </span>
                      </div>
                  </div>
                  <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
                      <i class="ph-bold ph-files text-white text-2xl"></i>
                  </div>
              </div>
          </div>
          
          <!-- Card 2: Perlu Approval -->
          <div class="group bg-white p-7 rounded-3xl shadow-soft border border-slate-100 hover:shadow-soft-lg hover-lift cursor-pointer relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-transparent rounded-full -mr-16 -mt-16 opacity-50"></div>
              
              <div class="relative flex items-start justify-between">
                  <div>
                      <p class="text-slate-500 text-sm font-semibold mb-2">Perlu Approval</p>
                      <h3 class="text-4xl font-bold text-slate-900 mb-1">5</h3>
                      <div class="flex items-center gap-2 mt-2">
                          <span class="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-lg animate-pulse">
                              Urgent
                          </span>
                      </div>
                  </div>
                  <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                      <i class="ph-bold ph-clock text-white text-2xl"></i>
                  </div>
              </div>
          </div>
          
          <!-- Card 3: Selesai -->
          <div class="group bg-white p-7 rounded-3xl shadow-soft border border-slate-100 hover:shadow-soft-lg hover-lift cursor-pointer relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-transparent rounded-full -mr-16 -mt-16 opacity-50"></div>
              
              <div class="relative flex items-start justify-between">
                  <div>
                      <p class="text-slate-500 text-sm font-semibold mb-2">Selesai Bulan Ini</p>
                      <h3 class="text-4xl font-bold text-slate-900 mb-1">38</h3>
                      <div class="flex items-center gap-2 mt-2">
                          <span class="text-xs font-bold text-slate-500">
                              <i class="ph-bold ph-trending-up text-emerald-600"></i> On track
                          </span>
                      </div>
                  </div>
                  <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                      <i class="ph-bold ph-check-circle text-white text-2xl"></i>
                  </div>
              </div>
          </div>
      </div>

      <!-- Main Data Table Card -->
      <div class="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
          
          <!-- Table Header -->
          <div class="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-violet-50 to-indigo-50">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                      <h3 class="font-bold text-slate-900 text-xl mb-1">Action Needed</h3>
                      <p class="text-slate-600 text-sm">Dokumen yang memerlukan tindak lanjut segera</p>
                  </div>
                  <a href="#/input/bapb" 
                     class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-violet-500/30 hover:shadow-xl hover-lift">
                      <i class="ph-bold ph-plus-circle text-lg"></i> 
                      <span>Input Cepat</span>
                  </a>
              </div>
          </div>
          
          <!-- Table Content -->
          <div class="overflow-x-auto">
              <table class="w-full text-left">
                  <thead class="bg-slate-50/50 border-b border-slate-100">
                      <tr>
                          <th class="px-8 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">No. PO</th>
                          <th class="px-8 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">Vendor / Mitra</th>
                          <th class="px-8 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">Kategori</th>
                          <th class="px-8 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider">Status</th>
                          <th class="px-8 py-4 text-xs font-bold text-slate-600 uppercase tracking-wider text-right">Aksi</th>
                      </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                      
                      <!-- Row 1 -->
                      <tr class="group hover:bg-violet-50/30 transition-all">
                          <td class="px-8 py-5">
                              <span class="font-bold text-slate-800 text-sm">PO-2025-001</span>
                          </td>
                          <td class="px-8 py-5">
                              <div class="flex items-center gap-3">
                                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                                      PT
                                  </div>
                                  <div>
                                      <p class="font-bold text-slate-800 text-sm">PT. Teknologi Maju</p>
                                      <p class="text-xs text-slate-500 font-medium">Hardware IT</p>
                                  </div>
                              </div>
                          </td>
                          <td class="px-8 py-5">
                              <span class="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-xl border border-blue-100 text-xs font-bold">
                                  <i class="ph-bold ph-package text-sm"></i> Barang
                              </span>
                          </td>
                          <td class="px-8 py-5">
                              <span class="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-2 rounded-xl border border-amber-200 text-xs font-bold">
                                  <span class="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span> 
                                  Draft
                              </span>
                          </td>
                          <td class="px-8 py-5 text-right">
                              <a href="#/input/bapb" 
                                 class="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-bold text-sm hover-lift">
                                  Proses BAPB 
                                  <i class="ph-bold ph-arrow-right"></i>
                              </a>
                          </td>
                      </tr>

                      <!-- Row 2 -->
                      <tr class="group hover:bg-violet-50/30 transition-all">
                          <td class="px-8 py-5">
                              <span class="font-bold text-slate-800 text-sm">PO-2025-045</span>
                          </td>
                          <td class="px-8 py-5">
                              <div class="flex items-center gap-3">
                                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                                      CV
                                  </div>
                                  <div>
                                      <p class="font-bold text-slate-800 text-sm">CV. Berkah Abadi</p>
                                      <p class="text-xs text-slate-500 font-medium">Jasa Maintenance</p>
                                  </div>
                              </div>
                          </td>
                          <td class="px-8 py-5">
                              <span class="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-2 rounded-xl border border-purple-100 text-xs font-bold">
                                  <i class="ph-bold ph-briefcase text-sm"></i> Jasa
                              </span>
                          </td>
                          <td class="px-8 py-5">
                              <span class="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold">
                                  Pending
                              </span>
                          </td>
                          <td class="px-8 py-5 text-right">
                              <a href="#/input/bapp" 
                                 class="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-bold text-sm hover-lift">
                                  Proses BAPP 
                                  <i class="ph-bold ph-arrow-right"></i>
                              </a>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          
          <!-- Table Footer -->
          <div class="p-5 border-t border-slate-100 bg-slate-50/50 text-center">
              <button class="text-sm text-slate-600 hover:text-violet-600 font-bold transition-colors">
                  Lihat Semua Dokumen →
              </button>
          </div>
      </div>
    `;
  }

  async afterRender() {
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.innerHTML = 'Dashboard Overview';
    }
  }
}