// ============================================================
//  EDIT THIS FILE TO CHANGE PRICES, DEALS, AND PAYMENT LINKS.
//  On GitHub: open this file, click the pencil icon, edit, Commit.
//  The site updates in about a minute.
// ============================================================

// ------------------------------------------------------------
//  ADD STRIPE IN 3 STEPS (about 5 minutes)
//  1. Make a free Stripe account at stripe.com.
//  2. In Stripe: Payment Links > New > add any product (e.g. "Custom LEGO model"),
//     and turn ON "Let customers choose what to pay". Create the link.
//  3. Paste that one link into stripeLink below. Done.
//  The checkout page shows customers their exact total, then sends them to Stripe.
//  (Want fixed-price links per size instead? Paste them into each size's paymentLink.)
// ------------------------------------------------------------

const CONFIG = {
  stripeLink: "",   // <-- paste your Stripe Payment Link here (looks like https://buy.stripe.com/...)

  brand: "CustomBrick Greens",
  email: "charlietropp@gmail.com",
  // Order form key from web3forms.com (free). Paste the access key they email you.
  formKey: "",       // order emails go here
  emailCc: "nategoldsmith3@gmail.com",

  // Top banner for special deals. Set enabled to false to hide it.
  deal: { enabled: false, text: "Order two buildings and save $100-$200." },

  // Paste a Stripe Payment Link for "Already have a quote? Pay it here".
  // (In Stripe, create a Payment Link and turn on "Let customers choose what to pay".)
  invoiceLink: "",

  // CUSTOMER REVIEWS (shown near the bottom of the page). Only add real reviews.
  // To add one, copy a line, change the text and who. stars is 1 to 5.
  reviews: [
    { stars: 5, who: "Etsy customer", text: "This was absolutely incredible. This is not easy. He took the pictures I sent him and designed a nearly flawless set of LEGO directions as well as every piece I needed to build it. For any LEGO experts out there you know that quality directions are really important for any build. This was as good as what you would get with any set and the outcome was stunning. I would 10/10 do this again!" }
  ],

  // MULTI-BUILDING DEAL: applies automatically when the cart has minItems or more models.
  // amountOff is in dollars (you said $100-$200, so pick any number in that range).
  // paymentLink = a Stripe Payment Link with "Let customers choose what to pay" turned on.
  // (Customers pay the exact total shown in their cart.) Leave "" to send the order by email instead.
  bundle: { enabled: true, minItems: 2, amountOff: 150, label: "Multi-building deal", paymentLink: "" },

  // One row per size. For a special deal, set salePrice (shows the old price crossed out).
  // paymentLink = the Stripe Payment Link for that exact price. Leave "" until you have it:
  // the button will then open an email to you instead.
  sizes: [
    { pieces: 3000,  name: "Smaller model",  note: "Signature hole or compact clubhouse", price: 700,  salePrice: null, paymentLink: "" },
    { pieces: 6000,  name: "Full-size model", note: "Our most popular build",              price: 1000, salePrice: null, paymentLink: "", popular: true },
    { pieces: 9000,  name: "Large model",     note: "Extra detail and scale",              price: 1345, salePrice: null, paymentLink: "" },
    { pieces: 12000, name: "Extra-large",     note: "Big, detailed, display-ready",        price: 1690, salePrice: null, paymentLink: "" },
    { pieces: 15000, name: "Showpiece",       note: "Our biggest builds",                  price: 2035, salePrice: null, paymentLink: "" }
  ]
};
