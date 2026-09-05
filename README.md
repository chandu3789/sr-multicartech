# SR Multi Car Tech — Modern Automotive Service Platform

> **“Complete Car Care. One Trusted Place.”**

A production-ready, full-featured automotive service booking and repair web platform built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Prisma ORM**. Inspired by top-tier automotive marketplace UX with 100% original branding, modern aesthetics, transparent pricing, live 7-stage service tracking, 24/7 SOS roadside assistance, and a complete administration portal.

---

## 🚗 Key Features & Capabilities

### 1. Step-by-Step Car Selector (`/select-car`)
- **Multi-Brand Catalog**: 16+ automotive manufacturers (Maruti Suzuki, Hyundai, Tata, Honda, Toyota, Mahindra, Kia, Volkswagen, Skoda, MG, BMW, Mercedes-Benz, Audi, etc.) with 60+ models and fuel variants (Petrol, Diesel, CNG, Electric, Hybrid).
- **Personal Garage**: Add multiple vehicles, toggle active car, view custom engine oil grades and recommended maintenance intervals.

### 2. 6-Step Multi-Step Service Booking (`/book-service`)
- **Step 1 — Car Selection**: Auto-populated from active vehicle or inline picker.
- **Step 2 — Package Selection**: Transparent pricing, multi-point check checklists, duration estimates, and warranties.
- **Step 3 — Service Mode**:
  - *Complimentary Valet Pickup & Drop* (Free)
  - *Doorstep Mobile Van Service*
  - *Workshop Drive-In*
- **Step 4 — Location & Address**: GPS location detection, house/street/area/pincode validation.
- **Step 5 — Appointment Schedule**: Date calendar and dynamic hourly time slots.
- **Step 6 — Order Summary & Payment**:
  - Live coupon codes (`SRFIRST10`, `SRCAR20`, `MONSOON500`, `FREESCAN`)
  - 18% GST automatic calculation
  - Multi-payment support: UPI (GPay/PhonePe), Credit/Debit Card, Net Banking, Pay After Service, Pay at Workshop.

### 3. Real-Time Service Tracking (`/track-service`)
- Live 7-stage telemetry:
  1. *Booking Confirmed*
  2. *Vehicle Received*
  3. *Inspection Started*
  4. *Service In Progress*
  5. *Quality Check*
  6. *Ready for Delivery*
  7. *Completed*
- Assigned master technician profile, contact details, workshop branch info, and live inspection checklist pass/fail status.

### 4. 24/7 SOS Emergency Assistance (`/sos`)
- 1-Click emergency rescue dispatch: Flat Tyre, Battery Jumpstart, Fuel Delivery, Flatbed Towing, Mechanical Breakdown, Accident Assistance.
- GPS radius detection and live technician dispatch simulation with ETA countdown.

### 5. Cashless Insurance Claim Processing (`/insurance`)
- Direct surveyor coordination, paperless filing, and cashless tie-up support with 12+ insurers (ICICI Lombard, HDFC ERGO, Bajaj Allianz, Tata AIG, New India, Digit, etc.).

### 6. Full-Featured Admin Dashboard (`/admin`)
- **KPI Metrics**: Real-time revenue, total bookings, active service bays, completed jobs.
- **Live Booking Management**: Filter by status, search by customer/phone, update service stage across all 7 steps (instantly reflects on customer tracking page!), assign technicians, add live notes.
- **Service & Rate Catalog**: View and manage all 35+ service packages.
- **Car Database**: Browse brands, models, and fuel variants.
- **Promotional Coupons**: Manage discount codes, validity, and limits.
- **Customer Directory**: Customer profiles, spending history, and vehicles.

### 7. Floating Quick Tools & Chat Support
- Floating WhatsApp & direct telephone helpline.
- Interactive Support Chat widget with automated quick options:
  - *“Book a Service”*
  - *“Track My Car”*
  - *“Get a Price”*
  - *“Roadside Assistance”*
  - *“Talk to Support”*
- Global Command Search (`Ctrl+K` or search icon) across services, car models, FAQs, and maintenance blogs.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (v16+ App Router, Turbopack)
- **Frontend & Logic**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 with custom automotive tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database & ORM**: [Prisma](https://www.prisma.io/) with PostgreSQL schema
- **State Management**: React Context (`CarContext`, `BookingContext`, `CityContext`) with local storage hydration for instant demo mode

---

## 📂 Project Architecture

```text
├── prisma/
│   └── schema.prisma         # 23 database models ready for PostgreSQL
├── public/                   # Static assets & icons
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with Header, Footer & Floating widgets
│   │   ├── page.tsx          # 14-section homepage following exact master structure
│   │   ├── services/         # Service catalog & dynamic [service] detail pages
│   │   ├── select-car/       # 5-step vehicle selector & garage
│   │   ├── book-service/     # 6-step booking checkout flow
│   │   ├── booking-confirmed/# Success screen with booking ID & invoice print
│   │   ├── track-service/    # 7-stage live status tracking
│   │   ├── sos/              # 24/7 Roadside assistance dispatch
│   │   ├── offers/           # Promotional coupons & copy functionality
│   │   ├── my-bookings/      # Customer order history
│   │   ├── my-vehicles/      # Saved garage vehicles
│   │   ├── profile/          # Customer account profile
│   │   ├── insurance/        # Cashless claim processing
│   │   ├── about/            # Story, mission & workshop standards
│   │   ├── contact/          # Workshop hubs & inquiry form
│   │   ├── blog/             # Maintenance guides & [slug] reader
│   │   ├── faq/              # Categorical accordion FAQs
│   │   ├── admin/            # Complete administration portal
│   │   └── api/              # API routes for bookings, services, vehicles, coupons, sos
│   ├── components/
│   │   ├── brand/            # Original SVG Logo
│   │   ├── chat/             # Interactive SupportChatWidget
│   │   ├── home/             # All 12 homepage section components
│   │   ├── layout/           # Sticky Header, Footer, FloatingActions
│   │   └── search/           # Ctrl+K global search modal
│   └── lib/
│       ├── context/          # CarContext, BookingContext, CityContext
│       └── data/             # Rich automotive datasets (cars, services, reviews, FAQs)
├── .env.example              # Sample environment variables
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ or 20+
- npm (or yarn / pnpm)

### 2. Installation
Clone or navigate to the project directory:
```bash
npm install
```

### 3. Environment Setup
Copy the example environment file:
```bash
cp .env.example .env.local
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💾 Database Configuration (Prisma & PostgreSQL)

The project includes a complete Prisma schema (`prisma/schema.prisma`) defining models for:
`User`, `Customer`, `Vehicle`, `CarBrand`, `CarModel`, `CarVariant`, `ServiceCategory`, `Service`, `ServicePackage`, `Booking`, `BookingStatus`, `Workshop`, `Technician`, `Address`, `Payment`, `Coupon`, `Review`, `Notification`, `SupportTicket`, `BlogPost`, `FAQ`, `Offer`, and `Setting`.

To connect to a live PostgreSQL database (e.g. Supabase, Neon, AWS RDS, or local PostgreSQL):
1. Set `DATABASE_URL` in `.env.local`:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/srmulticartech?schema=public"
   ```
2. Generate the Prisma client & push schema:
   ```bash
   npx prisma db push
   ```

*Note: In local demo mode, all features (booking creation, status updates in admin, live tracking, coupon validation) function out of the box using built-in client/server state hydration.*

---

## 🧪 Testing the Live Demo Experience

1. **Homepage**: Visit `/` to experience the sticky header, city selector (Guwahati, Delhi, Bangalore), hero section, quick 60-second booking widget, service categories, workshop locator, and customer reviews.
2. **Car Selector**: Go to `/select-car` to choose your manufacturer, model, and fuel type.
3. **Service Booking**: Navigate to `/book-service`. Complete the 6-step flow, test coupon `SRFIRST10`, and confirm booking.
4. **Live Tracking**: Open `/track-service` and enter `SRMCT-10821` (or your newly generated booking ID).
5. **Admin Operations**: Open `/admin`. Filter bookings, click **Update Stage**, advance a booking to *“Service In Progress”* or *“Quality Check”*, and watch the customer tracking timeline update in real time!
6. **SOS Dispatch**: Visit `/sos`, choose *Flat Tyre* or *Towing*, click **Get Help Now**, and view the emergency dispatch animation and ETA calculation.
7. **Search & Support**: Press `Ctrl+K` or click the search icon in the header to search across services, car models, FAQs, and blogs.

---

## 📄 License
Copyright © 2026 SR Multi Car Tech. All rights reserved.
“Complete Car Care. One Trusted Place.”
