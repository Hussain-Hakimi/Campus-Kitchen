# Campus Kitchen

A simple, mobile-first food ordering website for a small homemade food business. Customers can browse the menu, build a cart, enter delivery details, and send the complete order to the business through WhatsApp.

## Features

- Responsive homepage and menu
- Food images, descriptions, categories, and prices in PKR
- Client-side shopping cart
- Quantity controls and total calculation
- Simple customer checkout form
- One-click WhatsApp order generation
- Easy menu editing in `data/menu.ts`
- No backend, database, authentication, or payment system
- Ready for Vercel

## Tech Stack

- Next.js 14
- TypeScript
- React
- Tailwind CSS

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Change the WhatsApp number

Open `app/page.tsx` and change:

```ts
const BUSINESS_WHATSAPP_NUMBER = "93765222368";
```

Use the international number without `+` or spaces.

## Change the menu

Open `data/menu.ts`. Each item contains:

- `name`
- `description`
- `price`
- `image`
- `category`

Replace the example items with the real Campus Kitchen menu and prices.

## Change food images

Update each item's `image` value in `data/menu.ts` with a public image URL. For local images, place them in `public/images` and use a path such as `/images/chicken-biryani.jpg`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings.
4. Deploy.

No environment variables are required for the current version.

## Customer flow

`Menu → Add to Order → Cart → Customer Details → Order on WhatsApp → Send`

The website deliberately keeps the business workflow simple: WhatsApp is used to receive orders, so there is no server or database to maintain.
