import '../styles/styles.css';
import App from './pages/app';

document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    content: document.querySelector('#main-content'),
  });
  
  await app.renderPage();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });

  // --- LOGIKA HAMBURGER MENU ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  
  // Fungsi Toggle (Buka/Tutup)
  function toggleSidebar() {
      if (!sidebar || !overlay) return;

      // Toggle class translate untuk slide in/out
      sidebar.classList.toggle('-translate-x-full');
      
      // Toggle overlay dengan efek fade
      if (overlay.classList.contains('hidden')) {
          overlay.classList.remove('hidden');
          // Delay sedikit agar transisi opacity berjalan halus
          setTimeout(() => overlay.classList.remove('opacity-0'), 10); 
      } else {
          overlay.classList.add('opacity-0');
          // Tunggu transisi selesai baru hide
          setTimeout(() => overlay.classList.add('hidden'), 300); 
      }
  }

  // Event Listener Tombol Hamburger
  if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', (e) => {
          e.stopPropagation(); // Mencegah event bubbling
          toggleSidebar();
      });
  }

  // Event Listener Overlay (Klik di luar menu untuk menutup)
  if (overlay) {
      overlay.addEventListener('click', () => {
          toggleSidebar();
      });
  }

  // UX: Tutup sidebar otomatis saat menu diklik (Khusus Mobile)
  document.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
          // Cek apakah sedang di mode mobile
          if (window.innerWidth < 768) { 
              // Jika sidebar terbuka (tidak ada class -translate-x-full), maka tutup
              if (sidebar && !sidebar.classList.contains('-translate-x-full')) {
                  toggleSidebar();
              }
          }
      });
  });
});