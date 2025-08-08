# 🇮🇳 Indian Fashion E-Commerce Platform

A production-ready, secure, scalable, SEO-optimized e-commerce platform for Indian fashion — featuring world-class UI, smooth 3D animations, mobile-first design, and authentic product imagery.

---

## **Tech Stack**

- **Frontend**: React.js, Tailwind CSS, React Router, Redux, Framer Motion, React Three Fiber (Three.js)
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), JWT, Stripe (INR/UPI), Nodemailer, Twilio (SMS)
- **Image Handling**: Unsplash API (free/public-domain Indian fashion images), Puppeteer scraping module
- **DevOps**: Docker, Vercel (frontend), Render/Heroku (backend)
- **SEO**: Meta tags, XML sitemap, robots.txt, schema markup, AMP, Google Analytics

---

## **Setup Instructions**

### **1. Clone and Install**

```bash
git clone https://github.com/Pushparaj-Rajendran/indian-fashion-ecommerce.git
cd indian-fashion-ecommerce
```

#### **Frontend**
```bash
cd frontend
npm install
```

#### **Backend**
```bash
cd ../backend
npm install
```

#### **Database**
```bash
cd ../database
# MongoDB must be running locally or remote
npm run seed
```

#### **Scraping Module**
```bash
cd ../scraping-module
npm install
# Configure .env with Unsplash API key
node fetchUnsplash.js
```

---

### **2. Environment Variables**

Copy `.env.example` in each folder to `.env` and set your keys:

- **frontend/.env**: `REACT_APP_API_URL`, `REACT_APP_UNSPLASH_KEY`, etc.
- **backend/.env**: `MONGO_URI`, `JWT_SECRET`, `STRIPE_SECRET_KEY`, `EMAIL_USER`, `EMAIL_PASS`, `TWILIO_SID`, `TWILIO_TOKEN`, etc.

---

### **3. Run Locally**

#### **Docker (Recommended)**
```bash
docker-compose up --build
```

#### **Manual**
- Start MongoDB
- Start backend: `npm start`
- Start frontend: `npm start`

---

### **4. Deploy**

- **Frontend**: [Vercel](https://vercel.com/)
- **Backend**: [Render](https://render.com/) or [Heroku](https://heroku.com/)
- **MongoDB**: [MongoDB Atlas](https://www.mongodb.com/atlas)

---

### **5. Ethical Scraping Guidelines**

- Only use Unsplash or sites with public-domain/licensed images.
- Do NOT scrape copyrighted fashion sites without explicit permission.
- Always attribute images where required.

---

### **6. Scalability & Optimization**

- Frontend SSR-ready (easy to upgrade to Next.js).
- Backend API rate limiting, helmet.js, input validation, HTTPS enforced.
- Image CDN and lazy loading.
- AMP & schema for SEO.
- Full WCAG accessibility.

---

### **7. Sample Data**

- Seed script with 50+ products across Indian categories.
- Diverse Indian models, body types, and sizes.
- GST, INR, pin codes, region analytics.

---

## **Contact**

Developed by @Pushparaj-Rajendran  
For support/issues: [GitHub Issues](https://github.com/Pushparaj-Rajendran/indian-fashion-ecommerce/issues)
