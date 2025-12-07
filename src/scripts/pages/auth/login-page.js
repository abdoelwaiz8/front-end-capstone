export default class LoginPage {
  async render() {
    return `
      <div class="flex h-screen w-screen absolute inset-0 z-50 bg-slate-50">
        
        <!-- Left Panel: Branding & Illustration -->
        <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 relative overflow-hidden">
            <!-- Decorative Elements -->
            <div class="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-32 -left-32 w-64 h-64 border-4 border-white/20 rounded-full"></div>
            <div class="absolute -top-40 -right-40 w-80 h-80 border-4 border-white/20 rounded-full"></div>
            
            <!-- Content -->
            <div class="relative z-10 flex flex-col justify-center items-center w-full px-16 text-center">
                <div class="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-8 shadow-2xl">
                    <i class="ph-bold ph-briefcase text-white text-5xl"></i>
                </div>
                
                <h2 class="text-5xl font-bold text-white mb-5 tracking-tight">
                    Digital Procurement
                </h2>
                <p class="text-white/90 text-lg max-w-md leading-relaxed font-medium">
                    Platform digitalisasi berita acara serah terima barang & jasa yang modern dan efisien.
                </p>
                
                <div class="mt-12 flex items-center gap-4">
                    <div class="w-12 h-1 bg-white/40 rounded-full"></div>
                    <div class="w-8 h-1 bg-white/60 rounded-full"></div>
                    <div class="w-4 h-1 bg-white/30 rounded-full"></div>
                </div>
            </div>
        </div>

        <!-- Right Panel: Login Form -->
        <div class="w-full lg:w-1/2 flex justify-center items-center bg-white p-8 relative">
            
            <!-- Mobile Logo -->
            <div class="lg:hidden absolute top-8 left-8">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg">
                        <i class="ph-bold ph-briefcase text-white text-xl"></i>
                    </div>
                    <span class="font-bold text-xl text-slate-900">ProcureApp</span>
                </div>
            </div>

            <!-- Login Form Container -->
            <div class="w-full max-w-md">
                
                <!-- Header -->
                <div class="mb-10">
                    <h1 class="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                        Selamat Datang Kembali
                    </h1>
                    <p class="text-slate-500 text-base font-medium">
                        Silakan login untuk mengelola dokumen berita acara Anda
                    </p>
                </div>

                <!-- Login Form -->
                <form id="login-form" class="space-y-5">
                    
                    <!-- Email Input -->
                    <div>
                        <label for="email" class="block text-sm font-bold text-slate-700 mb-2">
                            Email Perusahaan
                        </label>
                        <div class="relative">
                            <i class="ph-bold ph-envelope absolute left-4 top-4 text-slate-400 text-lg"></i>
                            <input 
                                type="email" 
                                id="email" 
                                class="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all text-sm font-medium shadow-sm" 
                                placeholder="admin@perusahaan.com" 
                                required
                            >
                        </div>
                    </div>

                    <!-- Password Input -->
                    <div>
                        <label for="password" class="block text-sm font-bold text-slate-700 mb-2">
                            Password
                        </label>
                        <div class="relative">
                            <i class="ph-bold ph-lock-simple absolute left-4 top-4 text-slate-400 text-lg"></i>
                            <input 
                                type="password" 
                                id="password" 
                                class="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all text-sm font-medium shadow-sm" 
                                placeholder="••••••••" 
                                required
                            >
                        </div>
                    </div>

                    <!-- Remember Me & Forgot Password -->
                    <div class="flex items-center justify-between pt-1">
                        <label class="flex items-center cursor-pointer group">
                            <input 
                                id="remember-me" 
                                type="checkbox" 
                                class="w-5 h-5 text-violet-600 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 transition-all cursor-pointer"
                            >
                            <span class="ml-3 text-sm text-slate-600 font-semibold group-hover:text-slate-900">
                                Ingat perangkat ini
                            </span>
                        </label>
                        <a href="#" class="text-sm text-violet-600 hover:text-violet-700 font-bold transition-colors">
                            Lupa password?
                        </a>
                    </div>

                    <!-- Submit Button -->
                    <button 
                        type="submit" 
                        class="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-xl hover:scale-[1.02] mt-6"
                    >
                        <span class="flex items-center justify-center gap-2">
                            <i class="ph-bold ph-sign-in text-xl"></i>
                            Masuk ke Portal
                        </span>
                    </button>
                </form>

                <!-- Divider -->
                <div class="relative my-8">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-slate-200"></div>
                    </div>
                    <div class="relative flex justify-center text-xs uppercase">
                        <span class="bg-white px-4 text-slate-500 font-bold tracking-wider">atau</span>
                    </div>
                </div>

                <!-- SSO Buttons (Optional) -->
                <div class="grid grid-cols-2 gap-3">
                    <button class="flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all">
                        <i class="ph-bold ph-google-logo text-lg"></i>
                        Google
                    </button>
                    <button class="flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all">
                        <i class="ph-bold ph-microsoft-outlook-logo text-lg"></i>
                        Microsoft
                    </button>
                </div>

                <!-- Help Text -->
                <p class="mt-8 text-center text-sm text-slate-500">
                    Butuh bantuan akses? 
                    <a href="#" class="text-violet-600 font-bold hover:text-violet-700 transition-colors">
                        Hubungi IT Support
                    </a>
                </p>

                <!-- Footer Note -->
                <div class="mt-8 p-4 bg-violet-50 rounded-2xl border border-violet-100">
                    <p class="text-xs text-center text-violet-700 font-semibold">
                        <i class="ph-bold ph-shield-check text-sm mr-1"></i>
                        Login Anda dilindungi dengan enkripsi end-to-end
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
      
      // Save to sessionStorage (not localStorage)
      sessionStorage.setItem('userToken', 'logged-in');

      // Redirect to Dashboard
      window.location.hash = '#/';
      window.location.reload();
    });
  }
}