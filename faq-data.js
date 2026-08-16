// ─── FAQ Data ────────────────────────────────────────────────────────────────
// Edit this file to update your FAQ page.
// After saving, just refresh the browser — changes appear automatically.
//
// COLUMNS:
//   id       → unique number (keep these stable, don't reuse old ids)
//   category → must match one of: "Pricing", "Plans", "Billing", "Account"
//              (or add a new category name — it will appear as a tab automatically)
//   question → the question text
//   answer   → the answer text
//
// TIP: Copy rows from Excel, paste here, adjust the format.
// ─────────────────────────────────────────────────────────────────────────────

var FAQ_DATA = [
  { id:1,  category:"Pricing", question:"Is there a free trial available?",
    answer:"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running as quickly as possible." },

  { id:2,  category:"Plans",   question:"Can I change my plan later?",
    answer:"Of course! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow. You can upgrade or downgrade at any time from your account settings." },

  { id:3,  category:"Billing", question:"What is your cancellation policy?",
    answer:"We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid. No questions asked — we want you to be happy with your choice." },

  { id:4,  category:"Billing", question:"Can other info be added to an invoice?",
    answer:"At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually. We're working on a full invoice customisation feature — stay tuned!" },

  { id:5,  category:"Pricing", question:"What does \"lifetime access\" mean?",
    answer:"Once you have purchased the UI kit, you will have access to all of the future updates, free of charge. We'll let you know about releases via email and in-app notifications. There is no annual renewal fee." },

  { id:6,  category:"Pricing", question:"Is it a one-time payment?",
    answer:"Just a one-time payment! No recurring charges or surprises, we promise. We're just as sick of recurring charges as you are. Pay once, use forever." },

  { id:7,  category:"Account", question:"How do I reset my password?",
    answer:"You can reset your password from the login screen by clicking \"Forgot password\". We'll send a reset link to your registered email address. The link expires after 24 hours for security. If you don't receive the email, check your spam folder." },

  { id:8,  category:"Account", question:"Can I have multiple users on one account?",
    answer:"Yes! Our Team and Enterprise plans support multiple seats. Each user gets their own login credentials and personalised settings. Admins can manage permissions, add or remove members, and view usage across all seats from the dashboard." },

  { id:9,  category:"Plans",   question:"What is included in the Enterprise plan?",
    answer:"The Enterprise plan includes everything in Team, plus: SSO/SAML authentication, dedicated account manager, custom SLAs, audit logs, advanced role-based access control, and priority 24/7 support. Contact us for custom pricing." },

  { id:10, category:"Plans",   question:"Do you offer discounts for non-profits or education?",
    answer:"Absolutely. We offer a 50% discount for verified non-profit organisations and educational institutions. Simply contact our support team with proof of your status and we'll apply the discount to your account within one business day." },

  { id:11, category:"Account", question:"How do I delete my account?",
    answer:"You can request account deletion from Settings → Account → Delete Account. Your data will be permanently removed within 30 days in accordance with our data retention policy. This action is irreversible, so please export any data you need beforehand." },

  { id:12, category:"Billing", question:"Which payment methods do you accept?",
    answer:"We accept all major credit and debit cards (Visa, Mastercard, Amex, Discover), PayPal, and bank transfers for annual Enterprise contracts. All payments are processed securely via Stripe. We do not store card details on our servers." }
];
