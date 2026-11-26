# Rich Think Technologies Website

Static website (HTML, CSS, JS). No build step needed.

## Files
- `index.html` home page (hero, about, paths, programs, courses, steps, FAQs)
- `courses.html` all courses
- `contact.html` contact and apply form (opens WhatsApp)
- `css/style.css`, `js/main.js`

## Before going live: replace placeholders
- Phone `0300-0000000` and WhatsApp `923000000000` (search all files)
- Email `info@richthink.com`, office address, office hours
- Fees, refund policy, FAQ answers, course list
- Student stories section (add real photos and quotes with permission)
- Add only claims that are true (government endorsement, partners, student numbers)

## Publish with GitHub Pages
1. Create a repository on GitHub and upload these files
2. Settings > Pages > Deploy from branch > `main` / root
3. Your site appears at `https://USERNAME.github.io/REPO/`

```bash
git init && git add . && git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```
