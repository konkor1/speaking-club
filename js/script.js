document.addEventListener('DOMContentLoaded', () => {
  const telegramLink = 'https://t.me/Olga_Boxy';

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  if (mobileMenuCloseBtn && mobileMenu) {
    mobileMenuCloseBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (mobileMenu) mobileMenu.classList.add('hidden');
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        if (mobileMenu) mobileMenu.classList.add('hidden');
        const navHeight = 64;
        const rect = target.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
        const offsetPosition = Math.max(0, rect.top + scrollTop - navHeight);
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const chevron = button.querySelector('.faq-chevron');
      
      // Toggle current
      const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
      
      // Close all others
      document.querySelectorAll('.faq-content').forEach(item => {
        item.style.maxHeight = '0px';
        item.style.paddingTop = '0px';
        item.style.paddingBottom = '0px';
      });
      document.querySelectorAll('.faq-chevron').forEach(icon => {
        icon.style.transform = 'rotate(0deg)';
      });

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.paddingTop = '0.75rem';
        content.style.paddingBottom = '1rem';
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById('scroll-to-top');
  window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollTopBtn.classList.add('opacity-100');
      } else {
        scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
        scrollTopBtn.classList.remove('opacity-100');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Action buttons triggering Telegram or join
  document.querySelectorAll('.join-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const joinEl = document.getElementById('how-to-join') || document.getElementById('contacts');
      if (joinEl) {
        const navHeight = 64;
        const rect = joinEl.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
        window.scrollTo({
          top: Math.max(0, rect.top + scrollTop - navHeight - 10),
          behavior: 'smooth'
        });
      } else {
        window.open(telegramLink, '_blank');
      }
    });
  });

  // Reviews Carousel
  const reviews = [
    {
      name: "Яна",
      role: "Учасниця клубу",
      text: "«Зустрічі досить класні, все проходить швидко і ненапружено. Що сподобалося найбільше - жива атмосфера, підтримка в групі, прикольні інтерактиви та завдання, які реально включають в процес.»"
    },
    {
      name: "Микола",
      role: "Учасник клубу",
      text: "«Зустрічі дуже подобаються! Все проходить цікаво, живо і з користю. Очікування повністю виправдовуються. Найбільше подобається підхід викладачки — Ольга завжди в контакті з групою, підтримує, мотивує, дає корисні поради. Атмосфера дружня і невимушена, зустрічі пролітають дуже швидко. Відчуваю прогрес і бачу, як покращується мовлення та розуміння. Є впевненість і бажання рухатися далі.\nВелика подяка Ользі за професіоналізм і позитив!»"
    },
    {
      name: "Ілля",
      role: "Учасник клубу",
      text: "«Зустрічі проходили цікаво й динамічно, очікування повністю виправдалися. Особливо сподобалася інтерактивність занять. Атмосфера була дружня й мотивуюча, викладач завжди підтримував і пояснював матеріал доступно. Відчуваю значний прогрес у вивченні англійської – систематизував та освіжив свої знання.»"
    },
    {
      name: "Максим",
      role: "Учасник клубу",
      text: "«Загальні враження позитивні, Зустрічі проходять з користю, в дружній атмосфері, невимушено і легко. Під час занять багато розмовної практики, що є найголовнішим для мене, але і при цьому достатньо граматики. Враховуючи постійну практику спілкування, нові слова і фразеологізми, граматику, можу стверджувати, що заняття проходять не дарма.»"
    },
    {
      name: "Катя",
      role: "Учасниця клубу",
      text: "«Зустрічі дуже сподобались, приємна та дружня атмосфера, доступний і зрозумілий матеріал, який подається в різних виглядах для зручності сприйняття, все було максимально доступно та зрозуміло, я відчула прогрес у вивченні, який зсунувся з мертвої крапки! Дуже вам дякую за науку і чуйний підхід.»"
    },
    {
      name: "Анастасія",
      role: "Учасниця клубу",
      text: "«Заняття дуже подобаються! Наші зустрічі цікаві, динамічні й корисні.\nНайбільше сподобалася дружня атмосфера. Особливо сподобалися розмовні вправи - вони допомагають подолати мовний бар’єр. Я відчуваю прогрес. Стало легше формулювати думки англійською, зростає впевненість у спілкуванні. Щиро дякую за підтримку, терпіння та мотивацію! Бажаю натхнення й цікавих ідей для подальших занять. Завжди з нетерпінням чекаю наступної зустрічі!»"
    },
    {
      name: "Тетяна",
      role: "Учасниця клубу",
      text: "«Хочу виразити вам подяку за атмосферу невимушеності, де немає страху говорити англійською і робити помилки. І це допомагає долати мовний бар'єр. А також мені подобається, що на зустрічах всі дружно підтримують один одного. Я прям відчуваю прогрес, мені стає легше формувати думки та підбирати слова.»"
    },
    {
      name: "Андрій",
      role: "Учасник клубу",
      text: "«Було цікаво, з'явилася мотивація і відчуваю прогрес .\nДякую за ваш час та сподіваюся до зустрічі.»"
    },
    {
      name: "Віра",
      role: "Учасниця клубу",
      text: "«Було пізнавально і цікаво). Дуже сподобались зустрічі з носіями мови. А також заняття, де ми дискутували на актуальні соціальні теми, де була змога добре потренуватись в мовленні. Атмосфера на зустрічах дружня та легка. Загалом розмовну англійську стало набагато легше розуміти. Дякую за заняття!»"
    }
  ];

  let currentReviewIndex = 0;
  const reviewAuthorEl = document.getElementById('review-author');
  const reviewRoleEl = document.getElementById('review-role');
  const reviewTextEl = document.getElementById('review-text');
  const reviewCounterEl = document.getElementById('review-counter');
  const reviewDotsEl = document.getElementById('review-dots');
  const reviewPrevBtn = document.getElementById('review-prev');
  const reviewNextBtn = document.getElementById('review-next');

  function renderReviews() {
    if (!reviewAuthorEl) return;

    const current = reviews[currentReviewIndex];
    reviewAuthorEl.textContent = current.name;
    reviewRoleEl.textContent = current.role;
    reviewTextEl.textContent = current.text;
    reviewCounterEl.textContent = `${currentReviewIndex + 1} / ${reviews.length}`;

    if (reviewDotsEl) {
      reviewDotsEl.innerHTML = '';
      reviews.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `Відгук ${idx + 1}`);
        dot.className = 'transition-all duration-300 cursor-pointer rounded-full';
        if (idx === currentReviewIndex) {
          dot.style.width = '2rem';
          dot.style.height = '0.5rem';
          dot.style.backgroundColor = 'var(--color-primary)';
        } else {
          dot.style.width = '0.5rem';
          dot.style.height = '0.5rem';
          dot.style.backgroundColor = 'var(--color-border)';
        }
        dot.addEventListener('click', () => {
          currentReviewIndex = idx;
          renderReviews();
        });
        reviewDotsEl.appendChild(dot);
      });
    }
  }

  if (reviewPrevBtn && reviewNextBtn) {
    reviewPrevBtn.addEventListener('click', () => {
      currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
      renderReviews();
    });
    reviewNextBtn.addEventListener('click', () => {
      currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
      renderReviews();
    });
    renderReviews();
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
});

if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}
