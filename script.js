/* =============================================
   RONAK PAREEK — PORTFOLIO SCRIPT
   ============================================= */

// ===== PROJECT DATA =====
const projects = [
  {
    id: 1,
    title: "Enterprise Secure AWS Infrastructure",
    icon: "☁️",
    thumb: "project-thumb-aws",
    category: "aws",
    tags: ["AWS", "VPC", "EC2", "IAM"],
    shortDesc: "Multi-tier VPC with ALB, NAT Gateway, and private/public subnet architecture.",
    overview: "Designed and deployed a production-grade, highly available AWS infrastructure using a multi-tier VPC setup. The architecture follows AWS Well-Architected Framework principles with separation of concerns between public and private tiers.",
    highlights: [
      "Configured multi-AZ VPC with public and private subnets across 2 Availability Zones",
      "Deployed Application Load Balancer (ALB) for distributing traffic across EC2 instances",
      "Implemented NAT Gateway to allow private subnet instances to access the internet securely",
      "Configured IAM roles and policies following the principle of least privilege",
      "Set up Security Groups and Network ACLs as layered firewall controls",
      "Enabled VPC Flow Logs for network monitoring and troubleshooting"
    ],
    tech: ["AWS VPC", "EC2", "ALB", "NAT Gateway", "IAM", "Security Groups", "CloudWatch", "Route 53"],
    github: "https://github.com/ronakpareekcloud",
    status: "Completed"
  },
  {
    id: 2,
    title: "Static Website Hosting on AWS",
    icon: "🌐",
    thumb: "project-thumb-web",
    category: "aws",
    tags: ["AWS", "EC2", "Apache", "GitHub"],
    shortDesc: "Deployed a responsive website using EC2, Apache web server, and GitHub for CI.",
    overview: "Hosted a fully responsive static website on an AWS EC2 instance using Apache HTTP Server. The project demonstrates complete server provisioning, web server configuration, and basic CI pipeline using GitHub.",
    highlights: [
      "Launched and configured EC2 instance (Amazon Linux 2) in a custom VPC",
      "Installed and configured Apache HTTP Server with virtual hosting",
      "Deployed website code directly from GitHub repository using Git hooks",
      "Configured Security Groups to allow HTTP/HTTPS traffic only",
      "Set up Elastic IP for static public access",
      "Implemented basic SSL using Let's Encrypt for HTTPS"
    ],
    tech: ["EC2", "Apache", "Linux", "GitHub", "Elastic IP", "Security Groups"],
    github: "https://github.com/ronakpareekcloud",
    status: "Completed"
  },
  {
    id: 3,
    title: "Linux Server Administration",
    icon: "🐧",
    thumb: "project-thumb-linux",
    category: "linux",
    tags: ["Linux", "Bash", "Shell", "Admin"],
    shortDesc: "End-to-end Linux server management: users, permissions, storage, and services.",
    overview: "Comprehensive Linux server administration project covering all critical aspects of managing a production Linux environment. Hands-on experience with real-world sysadmin tasks on Ubuntu and CentOS servers.",
    highlights: [
      "Managed user accounts, groups, and sudo privileges across multiple environments",
      "Configured file system permissions using chmod, chown, and ACLs",
      "Set up and managed system services using systemd",
      "Implemented LVM for flexible disk storage management and expansion",
      "Configured cron jobs for automated maintenance and backup tasks",
      "Monitored system performance using top, htop, vmstat, and iostat"
    ],
    tech: ["Linux", "Bash", "systemd", "LVM", "cron", "SSH", "UFW", "rsync"],
    github: "https://github.com/ronakpareekcloud",
    status: "Completed"
  },
  {
    id: 4,
    title: "CI/CD Pipeline with GitHub Actions",
    icon: "⚙️",
    thumb: "project-thumb-devops",
    category: "devops",
    tags: ["DevOps", "GitHub Actions", "Docker", "CI/CD"],
    shortDesc: "Automated build and deploy pipeline using GitHub Actions and Docker containers.",
    overview: "Built an automated CI/CD pipeline that triggers on code push, runs tests, builds a Docker image, and deploys to a target server. Reduces manual deployment effort and enforces code quality gates.",
    highlights: [
      "Configured GitHub Actions workflow with multi-stage pipeline (build → test → deploy)",
      "Containerized the application using Docker with optimized multi-stage Dockerfile",
      "Pushed Docker images to Docker Hub registry on successful builds",
      "Set up SSH-based remote deployment to EC2 instance",
      "Added environment-specific secrets management using GitHub Secrets",
      "Implemented rollback mechanism on failed deployments"
    ],
    tech: ["GitHub Actions", "Docker", "Docker Hub", "EC2", "SSH", "YAML", "Bash"],
    github: "https://github.com/ronakpareekcloud",
    status: "In Progress"
  }
];

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTyping();
  initNavbar();
  initScrollReveal();
  initSkillBars();
  renderProjects('all');
  initProjectFilter();
  initModal();
  initContactForm();
  initBackToTop();
  initThemeToggle();
  initNavHighlight();
});

// ===== PARTICLES =====
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const count = 40;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: ${Math.random() * 0.4 + 0.1};
    `;
    container.appendChild(p);
  }
}

// ===== TYPING EFFECT =====
function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const lines = [
    'Cloud Engineer',
    'AWS Specialist',
    'Linux Admin',
    'DevOps Enthusiast'
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let pauseTimer = null;

  function type() {
    const current = lines[lineIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex--);
    } else {
      el.textContent = current.substring(0, charIndex++);
    }

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex > current.length) {
      isDeleting = true;
      speed = 1800; // pause at end
    } else if (isDeleting && charIndex < 0) {
      isDeleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
      charIndex = 0;
      speed = 400;
    }

    clearTimeout(pauseTimer);
    pauseTimer = setTimeout(type, speed);
  }

  type();
}

// ===== NAVBAR =====
function initNavbar() {
  const nav = document.querySelector('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  // Scroll shrink
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Mobile hamburger
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const bars = hamburger.querySelectorAll('span');
      const isOpen = navLinks.classList.contains('open');
      bars[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
      bars[1].style.opacity  = isOpen ? '0' : '1';
      bars[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity = '1';
        });
      });
    });
  }
}

// ===== ACTIVE NAV HIGHLIGHT =====
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

// ===== SKILL BARS =====
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.dataset.width;
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(b => observer.observe(b));
}

// ===== RENDER PROJECTS =====
function renderProjects(filter) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  grid.innerHTML = '';

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.dataset.id = p.id;
    card.style.animationDelay = `${i * 0.1}s`;

    card.innerHTML = `
      <div class="project-thumb ${p.thumb}">
        <span>${p.icon}</span>
        <div class="project-overlay"><span>View Details →</span></div>
      </div>
      <div class="project-info">
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDesc}</p>
      </div>
      <div class="project-card-footer">
        <span>${p.status}</span>
        <span class="arrow">→</span>
      </div>
    `;

    card.addEventListener('click', () => openModal(p.id));
    grid.appendChild(card);
  });

  // Re-observe new cards
  initScrollReveal();
}

// ===== PROJECT FILTER =====
function initProjectFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

// ===== MODAL =====
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;

  const overlay = document.getElementById('modal-overlay');
  const modal   = document.getElementById('modal');

  modal.innerHTML = `
    <div class="modal-header">
      <div>
        <div class="modal-icon">${p.icon}</div>
        <h2 class="modal-title">${p.title}</h2>
        <div class="project-tags" style="margin-top:8px">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
      </div>
      <button class="modal-close" onclick="closeModal()" aria-label="Close modal">✕</button>
    </div>
    <div class="modal-body">
      <h4>Overview</h4>
      <p>${p.overview}</p>

      <h4>Key Highlights</h4>
      <ul>
        ${p.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>

      <h4>Technologies Used</h4>
      <div class="modal-tech">
        ${p.tech.map(t => `<span>${t}</span>`).join('')}
      </div>

      <div class="modal-links">
        <a href="${p.github}" target="_blank" rel="noopener" class="btn-primary" style="font-size:0.88rem;padding:11px 24px">
          ⬡ View on GitHub
        </a>
        <span class="btn-secondary" style="font-size:0.88rem;padding:10px 24px;cursor:default">
          Status: ${p.status}
        </span>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const btn  = form.querySelector('.form-submit');
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate sending
    btn.textContent = 'Sending…';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = '✓ Message Sent!';
      form.reset();
      showToast('Message sent! Ronak will get back to you soon.');

      setTimeout(() => {
        btn.textContent = 'Send Message ✈';
        btn.disabled = false;
      }, 3000);
    }, 1500);
  });

  // Floating label effect
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
    });
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.style.borderColor = type === 'error' ? '#f87171' : 'var(--accent-3)';
  toast.style.color       = type === 'error' ? '#f87171' : 'var(--accent-3)';
  toast.classList.add('show');

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== THEME TOGGLE =====
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light');
    btn.textContent = '☀️';
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    btn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
