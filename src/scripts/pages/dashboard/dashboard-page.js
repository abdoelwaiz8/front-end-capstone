export default class DashboardPage {
  async render() {
    return `
      <!-- Stats Cards Grid - Sharp Brutalist Style -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          <!-- Card 1: Total Dokumen -->
          <div class="group bg-white border-2 border-slate-900 hover-sharp cursor-pointer relative overflow-hidden transition-all">
              <div class="absolute top-0 left-0 w-1 h-full bg-lime-400"></div>
              
              <div class="relative p-7 flex items-start justify-between">
                  <div>
                      <p class="text-slate-500 text-[10px] font-black mb-3 uppercase tracking-widest">TOTAL DOKUMEN</p>
                      <h3 class="heading-architectural text-5xl text-slate-900 mb-2">142</h3>
                      <div class="flex items-center gap-2 mt-3">
                          <div class="bg-lime-400 text-slate-900 px-3 py-1 text-xs font-black tracking-tight">
                              +12% BULAN INI
                          </div>
                      </div>
                  </div>
                  <div class="w-14 h-14 bg-slate-900 flex items-center justify-center">
                      <i class="ph-bold ph-files text-lime-400 text-2xl"></i>
                  </div>
              </div>
          </div>
          
          <!-- Card 2: Perlu Approval -->
          <div class="group bg-white border-2 border-slate-900 hover-sharp cursor-pointer relative overflow-hidden transition-all">
              <div class="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              
              <div class="relative p-7 flex items-start justify-between">
                  <div>
                      <p class="text-slate-500 text-[10px] font-black mb-3 uppercase tracking-widest">PERLU APPROVAL</p>
                      <h3 class="heading-architectural text-5xl text-slate-900 mb-2">5</h3>
                      <div class="flex items-center gap-2 mt-3">
                          <div class="bg-red-500 text-white px-3 py-1 text-xs font-black tracking-tight animate-pulse">
                              URGENT
                          </div>
                      </div>
                  </div>
                  <div class="w-14 h-14 bg-slate-900 flex items-center justify-center">
                      <i class="ph-bold ph-clock text-red-500 text-2xl"></i>
                  </div>
              </div>
          </div>
          
          <!-- Card 3: Selesai -->
          <div class="group bg-white border-2 border-slate-900 hover-sharp cursor-pointer relative overflow-hidden transition-all">
              <div class="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              
              <div class="relative p-7 flex items-start justify-between">
                  <div>
                      <p class="text-slate-500 text-[10px] font-black mb-3 uppercase tracking-widest">SELESAI BULAN INI</p>
                      <h3 class="heading-architectural text-5xl text-slate-900 mb-2">38</h3>
                      <div class="flex items-center gap-2 mt-3">
                          <span class="text-xs font-black text-slate-500 tracking-tight">
                              <i class="ph-bold ph-trending-up text-emerald-500"></i> ON TRACK
                          </span>
                      </div>
                  </div>
                  <div class="w-14 h-14 bg-slate-900 flex items-center justify-center">
                      <i class="ph-bold ph-check-circle text-emerald-500 text-2xl"></i>
                  </div>
              </div>
          </div>
      </div>

      <!-- Main Data Table Card - Sharp Editorial Style -->
      <div class="bg-white border-2 border-slate-900 overflow-hidden">
          
          <!-- Table Header -->
          <div class="px-8 py-6 border-b-2 border-slate-900 bg-slate-50">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                      <h3 class="heading-architectural text-slate-900 text-2xl mb-2">ACTION NEEDED</h3>
                      <p class="text-slate-600 text-xs font-bold uppercase tracking-widest">DOKUMEN MEMERLUKAN TINDAK LANJUT SEGERA</p>
                  </div>
                  <a href="#/input/bapb" 
                     class="inline-flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-500 text-slate-900 px-6 py-4 text-sm font-black tracking-tight uppercase transition-all hover-sharp border-2 border-slate-900">
                      <i class="ph-bold ph-plus-circle text-lg"></i> 
                      <span>INPUT CEPAT</span>
                  </a>
              </div>
          </div>
          
          <!-- Table Content -->
          <div class="overflow-x-auto">
              <table class="w-full text-left">
                  <thead class="bg-slate-100 border-b-2 border-slate-900">
                      <tr>
                          <th class="px-8 py-4 text-[10px] font-black text-slate-900 uppercase tracking-widest">NO. PO</th>
                          <th class="px-8 py-4 text-[10px] font-black text-slate-900 uppercase tracking-widest">VENDOR / MITRA</th>
                          <th class="px-8 py-4 text-[10px] font-black text-slate-900 uppercase tracking-widest">KATEGORI</th>
                          <th class="px-8 py-4 text-[10px] font-black text-slate-900 uppercase tracking-widest">STATUS</th>
                          <th class="px-8 py-4 text-[10px] font-black text-slate-900 uppercase tracking-widest text-right">AKSI</th>
                      </tr>
                  </thead>
                  <tbody class="divide-y-2 divide-slate-200">
                      
                      <!-- Row 1 -->
                      <tr class="group hover:bg-lime-50 transition-all">
                          <td class="px-8 py-5">
                              <span class="font-black text-slate-900 text-sm tracking-tight">PO-2025-001</span>
                          </td>
                          <td class="px-8 py-5">
                              <div class="flex items-center gap-3">
                                  <div class="w-10 h-10 bg-slate-900 flex items-center justify-center text-lime-400 font-black text-xs">
                                      PT
                                  </div>
                                  <div>
                                      <p class="font-black text-slate-900 text-sm tracking-tight">PT. TEKNOLOGI MAJU</p>
                                      <p class="text-xs text-slate-500 font-bold uppercase tracking-wider">Hardware IT</p>
                                  </div>
                              </div>
                          </td>
                          <td class="px-8 py-5">
                              <span class="inline-flex items-center gap-2 bg-blue-100 text-blue-900 border border-blue-900 px-3 py-2 text-xs font-black tracking-tight">
                                  <i class="ph-bold ph-package text-sm"></i> BARANG
                              </span>
                          </td>
                          <td class="px-8 py-5">
                              <span class="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-900 px-3 py-2 text-xs font-black tracking-tight">
                                  <span class="w-1.5 h-1.5 bg-amber-900 animate-pulse"></span> 
                                  DRAFT
                              </span>
                          </td>
                          <td class="px-8 py-5 text-right">
                              <a href="#/input/bapb" 
                                 class="inline-flex items-center gap-2 text-slate-900 hover:text-lime-400 font-black text-sm tracking-tight transition-colors">
                                  PROSES BAPB 
                                  <i class="ph-bold ph-arrow-right"></i>
                              </a>
                          </td>
                      </tr>

                      <!-- Row 2 -->
                      <tr class="group hover:bg-lime-50 transition-all">
                          <td class="px-8 py-5">
                              <span class="font-black text-slate-900 text-sm tracking-tight">PO-2025-045</span>
                          </td>
                          <td class="px-8 py-5">
                              <div class="flex items-center gap-3">
                                  <div class="w-10 h-10 bg-slate-900 flex items-center justify-center text-purple-400 font-black text-xs">
                                      CV
                                  </div>
                                  <div>
                                      <p class="font-black text-slate-900 text-sm tracking-tight">CV. BERKAH ABADI</p>
                                      <p class="text-xs text-slate-500 font-bold uppercase tracking-wider">Jasa Maintenance</p>
                                  </div>
                              </div>
                          </td>
                          <td class="px-8 py-5">
                              <span class="inline-flex items-center gap-2 bg-purple-100 text-purple-900 border border-purple-900 px-3 py-2 text-xs font-black tracking-tight">
                                  <i class="ph-bold ph-briefcase text-sm"></i> JASA
                              </span>
                          </td>
                          <td class="px-8 py-5">
                              <span class="inline-flex items-center gap-2 bg-slate-200 text-slate-900 border border-slate-900 px-3 py-2 text-xs font-black tracking-tight">
                                  PENDING
                              </span>
                          </td>
                          <td class="px-8 py-5 text-right">
                              <a href="#/input/bapp" 
                                 class="inline-flex items-center gap-2 text-slate-900 hover:text-lime-400 font-black text-sm tracking-tight transition-colors">
                                  PROSES BAPP 
                                  <i class="ph-bold ph-arrow-right"></i>
                              </a>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          
          <!-- Table Footer -->
          <div class="p-5 border-t-2 border-slate-900 bg-slate-50 text-center">
              <button class="text-sm text-slate-900 hover:text-lime-400 font-black tracking-tight transition-colors uppercase">
                  LIHAT SEMUA DOKUMEN →
              </button>
          </div>
      </div>
    `;
  }

  async afterRender() {
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.innerHTML = 'DASHBOARD OVERVIEW';
    }
  }
}
