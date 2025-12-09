export default class LoginPage {
  async render() {
    return `
      <div class="flex h-screen w-screen absolute inset-0 z-50 noise-texture">
        
        <!-- Left Panel: Architectural Branding -->
        <div class="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden">
            <!-- Architectural Grid Pattern -->
            <div class="absolute inset-0" style="background-image: 
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
                background-size: 40px 40px;">
            </div>
            
            <!-- Decorative Lines - Architectural -->
            <div class="absolute inset-0">
                <div class="absolute top-1/4 left-0 w-full h-px bg-lime-400"></div>
                <div class="absolute top-2/4 left-0 w-full h-px bg-white opacity-10"></div>
                <div class="absolute top-3/4 left-0 w-full h-px bg-white opacity-10"></div>
                <div class="absolute left-1/4 top-0 h-full w-px bg-white opacity-10"></div>
                <div class="absolute left-3/4 top-0 h-full w-px bg-white opacity-10"></div>
            </div>
            
            <!-- Content -->
            <div class="relative z-10 flex flex-col justify-center items-center w-full px-16">
                <div class="w-24 h-24 bg-lime-400 flex items-center justify-center mb-8 border-4 border-white">
                    <i class="ph-bold ph-briefcase text-slate-900 text-5xl"></i>
                </div>
                
                <h2 class="heading-architectural text-6xl text-white mb-6">
                    DIGITAL<br/>PROCUREMENT
                </h2>
                <p class="text-white text-sm max-w-md leading-relaxed font-bold uppercase tracking-widest text-center border-t-2 border-b-2 border-lime-400 py-4">
                    Platform digitalisasi berita acara<br/>serah terima barang & jasa
                </p>
                
                <div class="mt-12 flex items-center gap-3">
                    <div class="w-16 h-1 bg-lime-400"></div>
                    <div class="w-8 h-1 bg-white opacity-50"></div>
                    <div class="w-4 h-1 bg-white opacity-30"></div>
                </div>
            </div>
        </div>

        <!-- Right Panel: Login Form -->
        <div class="w-full lg:w-1/2 flex justify-center items-center bg-white p-8 relative">
            
            <!-- Mobile Logo -->
            <div class="lg:hidden absolute top-8 left-8">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-lime-400 flex items-center justify-center border-2 border-slate-900">
                        <i class="ph-bold ph-briefcase text-slate-900 text-xl"></i>
                    </div>
                    <span class="heading-architectural text-xl text-slate-900">PROCUREAPP</span>
                </div>
            </div>

            <!-- Login Form Container -->
            <div class="w-full max-w-md">
                
                <!-- Header -->
                <div class="mb-10">
                    <h1 class="heading-architectural text-4xl text-slate-900 mb-4">
                        SELAMAT<br/>DATANG KEMBALI
                    </h1>
                    <p class="text-slate-600 text-xs font-bold uppercase tracking-widest border-l-4 border-lime-400 pl-4">
                        LOGIN UNTUK MENGELOLA<br/>DOKUMEN BERITA ACARA
                    </p>
                </div>

                <!-- Role Info Box -->
                <div class="bg-slate-900 border-2 border-slate-900 p-5 mb-6">
                    <p class="text-[10px] text-lime-400 font-black tracking-widest uppercase mb-3">
                        <i class="ph-bold ph-info text-sm mr-1"></i>
                        DEMO LOGIN - GUNAKAN EMAIL BERIKUT:
                    </p>
                    <div class="space-y-2 text-xs text-white font-bold">
                        <p>• <span class="text-lime-400">vendor@mitra.com</span> → ROLE: VENDOR</p>
                        <p>• <span class="text-lime-400">direksi@perusahaan.com</span> → ROLE: APPROVER</p>
                        <p>• <span class="text-lime-400">admin@perusahaan.com</span> → ROLE: VERIFIKATOR</p>
                    </div>
                </div>

                <!-- Login Form -->
                <form id="login-form" class="space-y-6">
                    
                    <!-- Email Input -->
                    <div>
                        <label for="email" class="block text-[10px] font-black text-slate-900 mb-3 uppercase tracking-widest">
                            EMAIL PERUSAHAAN
                        </label>
                        <div class="relative">
                            <i class="ph-bold ph-envelope absolute left-4 top-4 text-slate-400 text-lg"></i>
                            <input 
                                type="email" 
                                id="email" 
                                class="w-full pl-12 pr-4 py-4 border-2 border-slate-900 focus:border-lime-400 focus:ring-0 outline-none transition-all text-sm font-bold tracking-tight uppercase placeholder:text-slate-400" 
                                placeholder="ADMIN@PERUSAHAAN.COM" 
                                required
                            >
                        </div>
                    </div>

                    <!-- Password Input -->
                    <div>
                        <label for="password" class="block text-[10px] font-black text-slate-900 mb-3 uppercase tracking-widest">
                            PASSWORD
                        </label>
                        <div class="relative">
                            <i class="ph-bold ph-lock-simple absolute left-4 top-4 text-slate-400 text-lg"></i>
                            <input 
                                type="password" 
                                id="password" 
                                class="w-full pl-12 pr-4 py-4 border-2 border-slate-900 focus:border-lime-400 focus:ring-0 outline-none transition-all text-sm font-bold tracking-tight" 
                                placeholder="••••••••" 
                                required
                            >
                        </div>
                    </div>

                    <!-- Remember Me & Forgot Password -->
                    <div class="flex items-center justify-between pt-2">
                        <label class="flex items-center cursor-pointer group">
                            <input 
                                id="remember-me" 
                                type="checkbox" 
                                class="w-5 h-5 text-lime-400 border-2 border-slate-900 focus:ring-0 transition-all cursor-pointer"
                            >
                            <span class="ml-3 text-xs text-slate-600 font-bold uppercase tracking-wider group-hover:text-slate-900">
                                INGAT PERANGKAT
                            </span>
                        </label>
                        <a href="#" class="text-xs text-slate-900 hover:text-lime-400 font-black uppercase tracking-wider transition-colors">
                            LUPA PASSWORD?
                        </a>
                    </div>

                    <!-- Submit Button -->
                    <button 
                        type="submit" 
                        class="w-full bg-lime-400 hover:bg-lime-500 text-slate-900 font-black py-5 transition-all duration-150 border-2 border-slate-900 hover-sharp mt-8 uppercase tracking-tight text-sm"
                    >
                        <span class="flex items-center justify-center gap-2">
                            <i class="ph-bold ph-sign-in text-xl"></i>
                            MASUK KE PORTAL
                        </span>
                    </button>
                </form>

                <!-- Divider -->
                <div class="relative my-8">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t-2 border-slate-900"></div>
                    </div>
                    <div class="relative flex justify-center text-[10px] uppercase">
                        <span class="bg-white px-4 text-slate-500 font-black tracking-widest">ATAU</span>
                    </div>
                </div>

                <!-- SSO Buttons -->
                <div class="grid grid-cols-2 gap-4">
                    <button class="flex items-center justify-center gap-2 px-4 py-4 border-2 border-slate-900 text-xs font-black text-slate-900 hover:bg-slate-900 hover:text-white transition-all uppercase tracking-tight">
                        <i class="ph-bold ph-google-logo text-lg"></i>
                        GOOGLE
                    </button>
                    <button class="flex items-center justify-center gap-2 px-4 py-4 border-2 border-slate-900 text-xs font-black text-slate-900 hover:bg-slate-900 hover:text-white transition-all uppercase tracking-tight">
                        <i class="ph-bold ph-microsoft-outlook-logo text-lg"></i>
                        MICROSOFT
                    </button>
                </div>

                <!-- Help Text -->
                <p class="mt-8 text-center text-xs text-slate-500 font-bold uppercase tracking-wider">
                    BUTUH BANTUAN AKSES? 
                    <a href="#" class="text-slate-900 hover:text-lime-400 font-black transition-colors">
                        HUBUNGI IT SUPPORT
                    </a>
                </p>

                <!-- Footer Note -->
                <div class="mt-8 p-4 bg-slate-900 border-2 border-slate-900">
                    <p class="text-[10px] text-center text-lime-400 font-black tracking-widest uppercase">
                        <i class="ph-bold ph-shield-check text-sm mr-1"></i>
                        LOGIN DILINDUNGI ENKRIPSI END-TO-END
                    </p>
                </div>
            </div>
        </div>
      </div>
    `;
  }

  async afterRender() {
    // Hide Sidebar & Header on Login Page
    const sidebar = document.querySelector('aside');
    const header = document.querySelector('header');
    if(sidebar) sidebar.classList.add('hidden');
    if(header) header.classList.add('hidden');

    // Handle Login Form Submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value.toLowerCase();
      
      // RBAC Logic - Determine Role & Username based on Email
      let userRole = 'VERIFIKATOR'; // Default role
      let userName = 'Staff Admin Gudang';
      let userJobTitle = 'Admin Gudang';
      let userInitials = 'SA';
      
      if (email.includes('vendor')) {
        userRole = 'VENDOR';
        userName = 'PT. Mitra Sejahtera';
        userJobTitle = 'Vendor Partner';
        userInitials = 'MS';
      } else if (email.includes('direksi') || email.includes('bos')) {
        userRole = 'APPROVER';
        userName = 'Bpk. Direktur Utama';
        userJobTitle = 'Direktur Utama';
        userInitials = 'DU';
      }
      
      // Save to sessionStorage
      sessionStorage.setItem('userToken', 'logged-in');
      sessionStorage.setItem('userRole', userRole);
      sessionStorage.setItem('userName', userName);
      sessionStorage.setItem('userJobTitle', userJobTitle);
      sessionStorage.setItem('userInitials', userInitials);

      // Show Success Notification
      this._showLoginSuccessNotification(userName, userRole);

      // Redirect to Dashboard
      setTimeout(() => {
        window.location.hash = '#/';
        window.location.reload();
      }, 1500);
    });
  }

  _showLoginSuccessNotification(name, role) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-8 right-8 bg-lime-400 border-2 border-slate-900 p-6 z-[9999]';
    notification.innerHTML = `
        <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-slate-900 flex items-center justify-center">
                <i class="ph-bold ph-check text-lime-400 text-2xl"></i>
            </div>
            <div>
                <h4 class="font-black text-slate-900 mb-1 tracking-tight uppercase">LOGIN BERHASIL!</h4>
                <p class="text-xs text-slate-900 font-bold tracking-tight">SELAMAT DATANG ${name}</p>
                <p class="text-[10px] text-slate-700 font-bold tracking-tight mt-1">ROLE: ${role}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}
