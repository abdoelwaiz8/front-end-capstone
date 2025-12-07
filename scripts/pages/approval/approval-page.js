export default class ApprovalPage {
  async render() {
    return `
      <!-- Page Header -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
          <div>
              <h2 class="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Approval Dokumen</h2>
              <p class="text-slate-500 font-medium">Tanda tangani dokumen secara digital dengan aman</p>
          </div>
          <a href="#/" class="inline-flex items-center gap-2 text-slate-600 hover:text-violet-600 font-bold transition-colors px-5 py-3 rounded-2xl hover:bg-white shadow-sm hover:shadow-md">
              <i class="ph-bold ph-arrow-left text-lg"></i> 
              Kembali
          </a>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Document Preview (Left - 2 columns) -->
          <div class="lg:col-span-2 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center p-10 shadow-soft relative overflow-hidden">
              
              <!-- Decorative Background -->
              <div class="absolute top-0 right-0 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-50"></div>
              <div class="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
              
              <!-- Document Paper -->
              <div class="relative bg-white w-full max-w-md shadow-2xl rounded-2xl p-10 min-h-[600px] flex flex-col">
                  
                  <!-- Document Header -->
                  <div class="text-center border-b-2 border-slate-200 pb-6 mb-6">
                      <div class="w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                          <i class="ph-bold ph-seal-check text-white text-3xl"></i>
                      </div>
                      <h1 class="text-2xl font-bold text-slate-900 mb-2 tracking-tight">BERITA ACARA</h1>
                      <p class="text-xs text-slate-500 font-semibold uppercase tracking-wider">Serah Terima Barang</p>
                  </div>
                  
                  <!-- Document Content -->
                  <div class="flex-1 text-sm text-slate-700 leading-relaxed space-y-4">
                      <p class="text-justify">
                          Pada hari ini, <span class="font-bold">Senin, 7 Desember 2025</span>, telah dilakukan serah terima pekerjaan/barang dengan hasil <span class="font-bold text-emerald-600">baik dan sesuai</span> dengan spesifikasi yang telah ditentukan.
                      </p>
                      <p class="text-justify">
                          Dokumen ini sah dan ditandatangani secara digital dengan menggunakan teknologi enkripsi blockchain.
                      </p>
                      
                      <!-- Info Box -->
                      <div class="bg-violet-50 border-l-4 border-violet-600 p-4 rounded-r-xl mt-6">
                          <p class="text-xs text-violet-900 font-semibold">
                              <i class="ph-bold ph-info text-sm mr-1"></i>
                              Tanda tangan digital memiliki kekuatan hukum yang sama dengan tanda tangan basah sesuai UU ITE.
                          </p>
                      </div>
                  </div>
                  
                  <!-- Signature Area -->
                  <div class="mt-8 grid grid-cols-2 gap-6 pt-8 border-t-2 border-dashed border-slate-200">
                      <div class="text-center">
                          <div class="h-20 flex items-end justify-center mb-2">
                              <div class="text-emerald-600 font-bold text-sm">
                                  <i class="ph-bold ph-check-circle text-2xl"></i>
                              </div>
                          </div>
                          <div class="border-t-2 border-slate-900 pt-2">
                              <p class="font-bold text-slate-900 text-sm">Pihak Pertama</p>
                              <p class="text-xs text-slate-500">Sudah Ditandatangani</p>
                          </div>
                      </div>
                      
                      <div class="text-center">
                          <div class="h-20 flex items-end justify-center mb-2 relative">
                              <img id="signature-preview" class="absolute bottom-0 left-0 w-full h-full object-contain hidden" alt="Signature">
                              <span id="signature-placeholder" class="text-slate-300 text-xs font-semibold">Menunggu tanda tangan...</span>
                          </div>
                          <div class="border-t-2 border-slate-900 pt-2">
                              <p class="font-bold text-slate-900 text-sm">Pihak Kedua</p>
                              <p class="text-xs text-slate-500" id="signature-status">Belum Ditandatangani</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Signature Panel (Right - 1 column) -->
          <div class="lg:col-span-1 bg-white rounded-3xl shadow-soft border border-slate-100 flex flex-col overflow-hidden">
              
              <!-- Panel Header -->
              <div class="px-6 py-5 border-b border-slate-100 bg-gradient-to-r from-violet-50 to-indigo-50">
                  <h3 class="font-bold text-slate-900 text-lg mb-1">Panel Tanda Tangan</h3>
                  <p class="text-xs text-slate-600 font-medium">Gambar tanda tangan Anda di area canvas</p>
              </div>
              
              <!-- Canvas Area -->
              <div class="p-6 flex-1 flex flex-col">
                  <div class="flex-1 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl relative overflow-hidden group hover:border-violet-300 transition-all" 
                       id="signature-pad-container" 
                       style="min-height: 280px;">
                      <canvas id="signature-pad" class="block w-full h-full cursor-crosshair touch-none"></canvas>
                      <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                          <p class="text-slate-400 text-sm font-semibold">Mulai menggambar...</p>
                      </div>
                  </div>
                  
                  <!-- Clear Button -->
                  <button id="clear-sig" 
                          class="mt-4 flex items-center justify-center gap-2 text-red-600 hover:text-red-700 text-sm font-bold hover:bg-red-50 px-4 py-2 rounded-xl transition-all">
                      <i class="ph-bold ph-trash text-lg"></i>
                      Hapus & Ulangi
                  </button>
              </div>

              <!-- Action Buttons -->
              <div class="p-6 border-t border-slate-100 space-y-3">
                  <button id="approve-btn" 
                          class="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-2xl font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02]">
                      <i class="ph-bold ph-seal-check text-xl"></i>
                      Approve & Sign
                  </button>
                  
                  <a href="#/" 
                     id="back-dashboard-btn" 
                     class="hidden w-full py-4 border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                      <i class="ph-bold ph-house text-lg"></i>
                      Kembali ke Dashboard
                  </a>
              </div>
          </div>
      </div>
    `;
  }

  async afterRender() {
    setTimeout(() => {
        this._initSignaturePad();
        this._updatePageTitle();
    }, 300);
  }

  _updatePageTitle() {
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.innerHTML = 'Approval Dokumen';
    }
  }

  _initSignaturePad() {
    const canvas = document.getElementById('signature-pad');
    const container = document.getElementById('signature-pad-container');
    
    if(!canvas || !container) return;
    
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    // Setup Canvas Size
    const resizeCanvas = () => {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "#1e293b";
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Drawing Logic
    const getPos = (e) => {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;
        return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const startDrawing = (e) => {
        isDrawing = true;
        const pos = getPos(e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        if(e.type === 'touchstart') e.preventDefault();
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const pos = getPos(e);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        if(e.type === 'touchmove') e.preventDefault();
    };

    const stopDrawing = () => {
        isDrawing = false;
        ctx.beginPath();
    };

    // Event Listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    canvas.addEventListener('touchstart', startDrawing, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);

    // Clear Button
    document.getElementById('clear-sig').addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('signature-preview').classList.add('hidden');
        document.getElementById('signature-placeholder').classList.remove('hidden');
        document.getElementById('signature-status').textContent = 'Belum Ditandatangani';
        document.getElementById('back-dashboard-btn').classList.add('hidden');
        document.getElementById('approve-btn').classList.remove('hidden');
    });

    // Approve Button
    document.getElementById('approve-btn').addEventListener('click', () => {
        const signatureImage = canvas.toDataURL("image/png");
        const preview = document.getElementById('signature-preview');
        const placeholder = document.getElementById('signature-placeholder');
        const status = document.getElementById('signature-status');
        
        // Show signature
        preview.src = signatureImage;
        preview.classList.remove('hidden');
        placeholder.classList.add('hidden');
        status.textContent = 'Sudah Ditandatangani';
        status.classList.add('text-emerald-600', 'font-bold');
        
        // Update buttons
        const approveBtn = document.getElementById('approve-btn');
        const backBtn = document.getElementById('back-dashboard-btn');
        
        approveBtn.innerHTML = '<i class="ph-bold ph-check-circle text-xl"></i> Signed Successfully';
        approveBtn.classList.remove('from-emerald-600', 'to-teal-600');
        approveBtn.classList.add('from-slate-400', 'to-slate-500', 'cursor-not-allowed');
        approveBtn.disabled = true;
        
        backBtn.classList.remove('hidden');
        
        // Success notification
        this._showSuccessNotification();
    });
  }

  _showSuccessNotification() {
    const notification = document.createElement('div');
    notification.className = 'fixed top-8 right-8 bg-white rounded-2xl shadow-2xl border border-emerald-200 p-6 z-50 animate-fade-in';
    notification.innerHTML = `
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <i class="ph-bold ph-check text-white text-2xl"></i>
            </div>
            <div>
                <h4 class="font-bold text-slate-900 mb-1">Berhasil Ditandatangani!</h4>
                <p class="text-sm text-slate-600">Dokumen telah disimpan dengan aman</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}