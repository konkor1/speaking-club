# Speaking Club з Ольгою Воропай

Сучасний і швидкий статичний лендинг розмовного клубу англійської мови з Ольгою Воропай.

## Структура проєкту
- `index.html` — головна сторінка сайту
- `css/style.css` — стилі та дизайн-система
- `css/fonts.css` — self-hosted шрифти (Open Sans, Roboto)
- `js/script.js` — інтерактивні скрипти (мобільне меню, плавний скролл, FAQ акордеони)
- `vendor/` — зафіксовані локальні копії Tailwind CSS та Lucide (без CDN)
- `assets/fonts/` — woff2-файли шрифтів
- `assets/images/` — оптимізовані фото (AVIF/WebP/JPEG)

## Безпека
- Усі ресурси (JS/CSS/шрифти) розміщені локально, сторонні CDN не використовуються.
- У `<head>` задано `Content-Security-Policy` і `Referrer-Policy` (GitHub Pages не дозволяє власні HTTP-заголовки).

## Деплой на GitHub Pages
Сайт повністю статичний (без build-кроку). Workflow `.github/workflows/deploy.yml` публікує файли сайту без `npm`; публікуються лише потрібні директорії через staging у `_site`.
