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
  formKey: "069b8100-7421-4a76-ab0f-4ce236fcc754",       // order emails go here
  emailCc: "nategoldsmith3@gmail.com",

  // Top banner for special deals. Set enabled to false to hide it.
  deal: { enabled: false, text: "Order two buildings and save $100-$200." },

  // Paste a Stripe Payment Link for "Already have a quote? Pay it here".
  // (In Stripe, create a Payment Link and turn on "Let customers choose what to pay".)
  invoiceLink: "",

  // CUSTOMER REVIEWS (shown near the bottom of the page). Only add real reviews.
  // To add one, copy a line, change the text and who. stars is 1 to 5.
  reviews: [
    { stars: 5, who: "Custom order, Etsy customer", text: "This was absolutely incredible. This is not easy. He took the pictures I sent him and designed a nearly flawless set of LEGO directions as well as every piece I needed to build it. For any LEGO experts out there you know that quality directions are really important for any build. This was as good as what you would get with any set and the outcome was stunning. I would 10/10 do this again!" },
    { stars: 5, who: "Etsy customer", text: "Such a unique and creative product! The level of detail is impressive, and the final build exceeded my expectations. Everything was well organized, and the instructions made assembly enjoyable." },
    { stars: 5, who: "Etsy customer", text: "Great experience from start to finish. The custom design captured so many little details, and the finished LEGO model looks fantastic. You can really see the attention to detail behind the work." },
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


// ------------------------------------------------------------
//  CUSTOM PIECE-COUNT SLIDER
//  Price is worked out from the size rows above (straight line between them),
//  so editing a size price here also changes the slider prices.
//  min / max / step control the slider range.
// ------------------------------------------------------------
CONFIG.custom = { min: 1000, max: 15000, step: 500, start: 1000 };
CONFIG.customPrice = function(p){
  var S = CONFIG.sizes.filter(function(s){ return !s.custom }).sort(function(a,b){ return a.pieces - b.pieces });
  var r5 = function(n){ return Math.round(n/5)*5 };
  if (p <= S[0].pieces) { var s0 = S[0], s1 = S[1]; return Math.max(r5(s0.price - (s1.price - s0.price) * (s0.pieces - p) / (s1.pieces - s0.pieces)), 0); }
  for (var i = 1; i < S.length; i++) {
    if (p <= S[i].pieces) { var a = S[i-1], b = S[i]; return r5(a.price + (b.price - a.price) * (p - a.pieces) / (b.pieces - a.pieces)); }
  }
  var a2 = S[S.length-2], b2 = S[S.length-1];
  return r5(b2.price + (b2.price - a2.price) * (p - b2.pieces) / (b2.pieces - a2.pieces));
};
(function(){
  var KEY = "bbgm_custom";
  var load = function(){ try { return JSON.parse(localStorage.getItem(KEY) || "[]") } catch(e) { return [] } };
  var make = function(p){ return { pieces: p, name: "Custom model", note: "Custom size", price: CONFIG.customPrice(p), salePrice: null, paymentLink: "", custom: true } };
  load().forEach(function(p){ CONFIG.sizes.push(make(p)) });
  CONFIG.addCustom = function(p){
    for (var i = 0; i < CONFIG.sizes.length; i++) { if (CONFIG.sizes[i].custom && CONFIG.sizes[i].pieces === p) return i; }
    CONFIG.sizes.push(make(p));
    var l = load(); l.push(p);
    try { localStorage.setItem(KEY, JSON.stringify(l)) } catch(e) {}
    return CONFIG.sizes.length - 1;
  };
})();
