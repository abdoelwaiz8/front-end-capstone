import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';

class App {
  #content = null;

  constructor({ content }) {
    this.#content = content;
    this._initUserMenu();
    this._initLogoutListener();
  }

  _initLogoutListener() {
    document.addEventListener('click', (event) => {
      const target = event.target.closest('a[href="#/login"]');
      if (target) {
        event.preventDefault();
        
        // Clear ALL session data
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('userRole');
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('userJobTitle');
        sessionStorage.removeItem('userInitials');
        
        window.location.hash = '#/login';
        window.location.reload(); 
      }
    });
  }

  _initUserMenu() {
    const menuBtn = document.querySelector('#user-menu-btn');
    const menuPopup = document.querySelector('#user-menu-popup');

    if (menuBtn && menuPopup) {
      menuBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        menuPopup.classList.toggle('hidden');
      });

      document.addEventListener('click', (event) => {
        if (!menuPopup.classList.contains('hidden') && !menuPopup.contains(event.target) && !menuBtn.contains(event.target)) {
          menuPopup.classList.add('hidden');
        }
      });
    }
  }

  async renderPage() {
    const url = getActiveRoute();
    
    // Check Authentication
    const isAuthenticated = sessionStorage.getItem('userToken');

    // --- AUTH GUARD ---
    // 1. If not logged in AND not on login page -> Redirect to Login
    if (!isAuthenticated && url !== '/login') {
        window.location.hash = '#/login';
        return;
    }

    // 2. If logged in BUT trying to access login -> Redirect to Dashboard
    if (isAuthenticated && url === '/login') {
        window.location.hash = '#/';
        return;
    }

    const page = routes[url];
    if (!page) {
        this.#content.innerHTML = '<h2 class="text-center mt-10">Halaman tidak ditemukan (404)</h2>';
        return;
    }

    // Shell Display Logic
    const sidebar = document.querySelector('aside');
    const header = document.querySelector('header');

    if (sidebar && header) {
        if (url === '/login') {
            sidebar.classList.add('hidden');
            header.classList.add('hidden');
            document.body.classList.remove('bg-gray-50');
        } else {
            sidebar.classList.remove('hidden');
            header.classList.remove('hidden');
            document.body.classList.add('bg-gray-50');
        }
    }

    this.#content.innerHTML = await page.render();
    await page.afterRender();
    
    this._updateActiveNav(url);
    
    // UPDATE UI BASED ON USER ROLE
    if (isAuthenticated && url !== '/login') {
      this._updateUIByRole();
    }
  }

  _updateActiveNav(url) {
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('nav-active');
        
        if (link.getAttribute('href') === `#${url}`) {
            link.classList.add('nav-active');
        }
    });
  }

  /**
   * NEW METHOD: Update UI Based on User Role (RBAC)
   */
  _updateUIByRole() {
    const userRole = sessionStorage.getItem('userRole');
    const userName = sessionStorage.getItem('userName');
    const userJobTitle = sessionStorage.getItem('userJobTitle');
    const userInitials = sessionStorage.getItem('userInitials');

    // Default: Show all menus
    const navInput = document.getElementById('nav-input-group');
    const navApproval = document.getElementById('nav-approval');
    
    // Update Profile Card
    const profileName = document.getElementById('profile-name');
    const profileJob = document.getElementById('profile-job');
    const profileInitials = document.getElementById('profile-initials');
    
    if (profileName) profileName.textContent = userName || 'User';
    if (profileJob) profileJob.textContent = userJobTitle || 'Staff';
    if (profileInitials) profileInitials.textContent = userInitials || 'U';

    // Apply RBAC Rules
    if (userRole === 'VENDOR') {
      // VENDOR: Hide "Aktivitas / Tanda Tangan"
      if (navApproval) navApproval.classList.add('hidden');
      if (navInput) navInput.classList.remove('hidden');
      
    } else if (userRole === 'APPROVER') {
      // APPROVER: Hide "Input Dokumen"
      if (navInput) navInput.classList.add('hidden');
      if (navApproval) navApproval.classList.remove('hidden');
      
    } else if (userRole === 'VERIFIKATOR') {
      // VERIFIKATOR: Hide both "Input Dokumen" and "Tanda Tangan"
      if (navInput) navInput.classList.add('hidden');
      if (navApproval) navApproval.classList.add('hidden');
    }

    // Show role badge in header (optional)
    this._showRoleBadge(userRole);
  }

  /**
   * Optional: Show Role Badge in Header
   */
  _showRoleBadge(role) {
    const header = document.querySelector('header');
    if (!header) return;

    // Remove existing badge
    const existingBadge = document.getElementById('role-badge');
    if (existingBadge) existingBadge.remove();

    // Create new badge
    const badge = document.createElement('div');
    badge.id = 'role-badge';
    badge.className = 'hidden lg:flex items-center gap-2 bg-slate-900 text-lime-400 px-4 py-2 border-2 border-slate-900 text-xs font-black tracking-tight uppercase';
    
    let icon = 'ph-user';
    if (role === 'VENDOR') icon = 'ph-storefront';
    if (role === 'APPROVER') icon = 'ph-seal-check';
    if (role === 'VERIFIKATOR') icon = 'ph-shield-check';
    
    badge.innerHTML = `
      <i class="ph-bold ${icon}"></i>
      <span>ROLE: ${role}</span>
    `;

    // Insert badge before notification button
    const notificationBtn = header.querySelector('button[class*="ph-bell"]');
    if (notificationBtn) {
      notificationBtn.parentElement.insertBefore(badge, notificationBtn);
    }
  }
}

export default App;
