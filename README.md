# Rich Think Technologies Website

Static website (HTML, CSS, JS) in a white and dark green theme. No build step needed.

## Files
- `index.html` home page (hero, about, courses, programs, how to apply, Pakistan map, FAQs)
- `courses.html` all 7 courses (including Data Science) with details
- `contact.html` student admission form (name, father name, CNIC, city, email, address, WhatsApp), quick message form, certificate verification, map
- `terms.html` Terms & Conditions
- `images/` SVG illustrations and course banners (replace with real photos any time)
- `css/style.css`, `js/main.js`

## Contact details used
- WhatsApp / phone: 0329-0739313 (`923290739313` in `js/main.js` and the HTML links)

## Before going live
- Replace `info@richthink.com` and the office address (currently "Lahore")
- Review `terms.html` (fees, refund and privacy clauses) with your own policy, ideally with a lawyer
- Add real photos in `images/` if you have them

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
