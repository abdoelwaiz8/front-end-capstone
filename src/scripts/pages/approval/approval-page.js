export default class ApprovalPage {
  async render() {
    return `
      <!-- Page Header -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
          <div>
              <h2 class="heading-architectural text-4xl text-slate-900 mb-3">APPROVAL DOKUMEN</h2>
              <p class="text-slate-600 text-xs font-bold uppercase tracking-widest border-l-4 border-lime-400 pl-4">TANDA TANGANI DOKUMEN SECARA DIGITAL</p>
          </div>
          <a href="#/" class="inline-flex items-center gap-2 text-slate-900 hover:text-lime-400 font-black transition-colors px-6 py-4 border-2 border-slate-900 hover:bg-slate-900 hover:text-lime-400 uppercase tracking-tight text-xs">
              <i class="ph-bold ph-arrow-left text-lg"></i> 
              KEMBALI
          </a>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Document Preview (Left - 2 columns) -->
          <div class="lg:col-span-2 bg-slate-100 border-2 border-slate-900 flex items-center justify-center p-10 relative overflow-hidden">
              
              <!-- Architectural Grid Background -->
              <div class="absolute inset-0" style="background-image: 
                  linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
                  background-size: 30px 30px;">
              </div>
              
              <!-- Document Paper -->
              <div class="relative bg-white w-full max-w-md border-4 border-slate-900 p-10 min-h-[600px] flex flex-col">
                  
                  <!-- Document Header -->
                  <div class="text-center border-b-4 border-slate-900 pb-6 mb-6">
                      <div class="w-16 h-16 bg-lime-400 border-2 border-slate-900 mx-auto mb-4 flex items-center justify-center">
                          <i class="ph-bold ph-seal-check text-slate-900 text-3xl"></i>
                      </div>
                      <h1 class="heading-architectural text-3xl text-slate-900 mb-2">BERITA ACARA</h1>
                      <p class="text-[10px] text-slate-600 font-black uppercase tracking-widest">SERAH TERIMA BARANG</p>
                  </div>
                  
                  <!-- Document Content -->
                  <div class="flex-1 text-sm text-slate-700 leading-relaxed space-y-4 font-medium">
                      <p class="text-justify">
                          Pada hari ini, <span class="font-black">SENIN, 7 DESEMBER 2025</span>, telah dilakukan serah terima pekerjaan/barang dengan hasil <span class="font-black text-lime-600">BAIK DAN SESUAI</span> dengan spesifikasi yang telah ditentukan.
                      </p>
                      <p class="text-justify">
                          Dokumen ini sah dan ditandatangani secara digital dengan menggunakan teknologi enkripsi blockchain.
                      </p>
                      
                      <!-- Info Box -->
                      <div class="bg-slate-900 border-2 border-slate-900 p-4 mt-6">
                          <p class="text-[10px] text-lime-400 font-black tracking-widest uppercase">
                              <i class="ph-bold ph-info text-sm mr-1"></i>
                              TANDA TANGAN DIGITAL MEMILIKI KEKUATAN HUKUM YANG SAMA DENGAN TANDA TANGAN BASAH SESUAI UU ITE
                          </p>
                      </div>
                  </div>
                  
                  <!-- Signature Area -->
                  <div class="mt-8 grid grid-cols-2 gap-6 pt-8 border-t-4 border-dashed border-slate-300">
                      <div class="text-center">
                          <div class="h-20 flex items-end justify-center mb-2">
                              <div class="text-lime-600 font-black text-sm">
                                  <i class="ph-bold ph-check-circle text-3xl"></i>
                              </div>
                          </div>
                          <div class="border-t-2 border-slate-900 pt-2">
                              <p class="font-black text-slate-900 text-xs uppercase tracking-tight">PIHAK PERTAMA</p>
                              <p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">SUDAH DITANDATANGANI</p>
                          </div>
                      </div>
                      
                      <div class="text-center">
                          <div class="h-20 flex items-end justify-center mb-2 relative">
                              <img id="signature-preview" class="absolute bottom-0 left-0 w-full h-full object-contain hidden" alt="Signature">
                              <span id="signature-placeholder" class="text-slate-400 text-[10px] font-black uppercase tracking-widest">MENUNGGU TTD...</span>
                          </div>
                          <div class="border-t-2 border-slate-900 pt-2">
                              <p class="font-black text-slate-900 text-xs uppercase tracking-tight">PIHAK KEDUA</p>
                              <p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider" id="signature-status">BELUM DITANDATANGANI</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Signature Panel (Right - 1 column) -->
          <div class="lg:col-span-1 bg-white border-2 border-slate-900 flex flex-col overflow-hidden">
              
              <!-- Panel Header -->
              <div class="px-6 py-5 border-b-2 border-slate-900 bg-slate-50">
                  <h3 class="heading-architectural text-slate-900 text-lg mb-2">PANEL TTD</h3>
                  <p class="text-[10px] text-slate-600 font-bold uppercase tracking-widest">GAMBAR TANDA TANGAN DI AREA CANVAS</p>
              </div>
              
              <!-- Canvas Area -->
              <div class="p-6 flex-1 flex flex-col">
                  <div class="flex-1 bg-slate-50 border-4 border-dashed border-slate-300 relative overflow-hidden group hover:border-lime-400 transition-all" 
                       id="signature-pad-container" 
                       style="min-height: 280px;">
                      <canvas id="signature-pad" class="block w-full h-full cursor-crosshair touch-none"></canvas>
                      <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                          <p class="text-slate-400 text-xs font-black uppercase tracking-widest">MULAI MENGGAMBAR...</p>
                      </div>
                  </div>
                  
                  <!-- Clear Button -->
                  <button id="clear-sig" 
                          class="mt-4 flex items-center justify-center gap-2 text-red-600 hover:text-white hover:bg-red-600 text-xs font-black border-2 border-red-600 px-4 py-3 transition-all uppercase tracking-tight">
                      <i class="ph-bold ph-trash text-lg"></i>
                      HAPUS & ULANGI
                  </button>
              </div>

              <!-- Action Buttons -->
              <div class="p-6 border-t-2 border-slate-900 space-y-3">
                  <button id="approve-btn" 
                          class="w-full py-5 bg-lime-400 hover:bg-lime-500 text-slate-900 font-black border-2 border-slate-900 transition-all flex items-center justify-center gap-2 hover-sharp uppercase tracking-tight text-sm">
                      <i class="ph-bold ph-seal-check text-xl"></i>
                      APPROVE & SIGN
                  </button>
                  
                  <a href="#/" 
                     id="back-dashboard-btn" 
                     class="hidden w-full py-5 border-2 border-slate-900 text-slate-900 font-black text-center hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2 uppercase tracking-tight text-sm">
                      <i class="ph-bold ph-house text-lg"></i>
                      KEMBALI KE DASHBOARD
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
        titleElement.innerHTML = 'APPROVAL DOKUMEN';
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
        ctx.strokeStyle = "#0f172a";
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
        document.getElementById('signature-status').textContent = 'BELUM DITANDATANGANI';
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
        status.textContent = 'SUDAH DITANDATANGANI';
        status.classList.add('text-lime-600', 'font-black');
        
        // Update buttons
        const approveBtn = document.getElementById('approve-btn');
        const backBtn = document.getElementById('back-dashboard-btn');
        
        approveBtn.innerHTML = '<i class="ph-bold ph-check-circle text-xl"></i> SIGNED SUCCESSFULLY';
        approveBtn.classList.remove('bg-lime-400', 'hover:bg-lime-500');
        approveBtn.classList.add('bg-slate-300', 'cursor-not-allowed', 'opacity-50');
        approveBtn.disabled = true;
        
        backBtn.classList.remove('hidden');
        
        // Success notification
        this._showSuccessNotification();
    });
  }

  _showSuccessNotification() {
    const notification = document.createElement('div');
    notification.className = 'fixed top-8 right-8 bg-lime-400 border-2 border-slate-900 p-6 z-50';
    notification.innerHTML = `
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-slate-900 flex items-center justify-center">
                <i class="ph-bold ph-check text-lime-400 text-2xl"></i>
            </div>
            <div>
                <h4 class="font-black text-slate-900 mb-1 tracking-tight uppercase">BERHASIL DITANDATANGANI!</h4>
                <p class="text-xs text-slate-900 font-bold tracking-tight">DOKUMEN TELAH DISIMPAN DENGAN AMAN</p>
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
