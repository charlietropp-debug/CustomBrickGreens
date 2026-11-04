# CustomBrick Greens: Website

A sales page with a cart and checkout. Free to host, no build step.

## Files
| File | What it does |
|---|---|
| `index.html` | The sales page and cart |
| `checkout.html` | Checkout: customer details, emails you the order, then goes to Stripe |
| `config.js` | **Prices, deal, Stripe link, emails. Edit this one.** |
| `style.css` | Look and feel |
| `images/` | Photos. Replace a file with the same name to swap it. |

## 1. Put it online (GitHub Pages, free)
1. Create a free GitHub account, then **New repository** (e.g. `golf-models`, set to **Public**).
2. Click **uploading an existing file**, drag in everything from this folder (including `images`), then **Commit changes**.
3. **Settings > Pages**: Source = **Deploy from a branch**, Branch = **main** / **(root)**, **Save**.
4. In about a minute it's live at `https://YOUR-USERNAME.github.io/golf-models/`.

## 2. Turn on order emails (one time)
Orders are emailed to you (and Nate) through FormSubmit.co, which is free.
1. On your live site, add a model to the cart and place a test order.
2. FormSubmit emails an **activation link** to `charlietropp@gmail.com`. Click it once.
3. From then on every order lands in your inbox with the customer's name, email, ship-to address and the full cart.

If an order ever fails to send, the customer sees a button to email you the order instead.

## 3. Add Stripe (about 5 minutes)
1. Make a free Stripe account at stripe.com. You'll verify your identity and add a bank account. If you're under 18, a parent or guardian may need to open it.
2. In Stripe: **Payment Links > New**. Add one product (e.g. "Custom LEGO model") and turn on **"Let customers choose what to pay"**. Create the link.
3. Open `config.js` on GitHub (pencil icon) and paste the link into `stripeLink: ""`. Commit.

That's it. At checkout the customer sees their exact total, fills in shipping, you get the email, and they're sent to Stripe to pay. The page tells them the amount to enter.

Prefer fixed-price links? Create one link per size at the exact price and paste each into that size's `paymentLink`. Those override `stripeLink` for single-model orders.

Customers can also choose **"Email me an invoice"** at checkout. You then get an email marked **INVOICE**, and you send them a Stripe invoice (Stripe dashboard > Invoices > Create, enter their email and the total). Until a Stripe link is added, checkout works this way for everyone.

## Change prices or run a deal
Open `config.js` on GitHub, click the pencil, edit, **Commit changes** (live in about a minute).
- **Price:** change `price`. For a sale, set `salePrice` (the old price shows crossed out).
- **Cart deal:** `bundle.amountOff` is the dollars off when the cart has 2+ models. Set `enabled: false` to turn it off.
- **Top banner:** `deal.enabled` and `deal.text`.

## The instruction PDF
The site tells customers they'll be emailed the instructions as a PDF. That email is sent by you (the site can't attach files automatically), so reply to their order email with the PDF.

## Notes
- If you change a price in `config.js`, update the matching Stripe link if you use fixed-price links.
- The Pebble Beach and Shinnecock photos are examples. Consider photos you have rights to use before a wide launch.
- Keep the LEGO trademark line in the footer.
