# Email Setup Guide - realname studio

## 📧 Current Email Configuration

### **Active Email Addresses:**
- `hello@realnamestudio.com` (Primary mailbox)
- `hello@realname.studio` (Forwards to primary)

### **Email Provider:**
Namecheap Private Email

**Cost:** $1.58/month ($18.88/year)

---

## ✅ What's Configured:

### **Primary Mailbox:**
- **Address:** hello@realnamestudio.com
- **Provider:** Namecheap Private Email
- **Type:** Full mailbox (send & receive)

### **Forwarding:**
- **Address:** hello@realname.studio
- **Forwards to:** hello@realnamestudio.com
- **Type:** Free email forwarding (via Namecheap)

---

## 🌐 Webmail Access

**URL:** https://privateemail.com

**Login:**
- Username: `hello@realnamestudio.com`
- Password: (your password)

---

## 📱 Mobile/Desktop App Setup

You can add this email to Gmail, Outlook, Apple Mail, or any email client.

### **IMAP Settings (Receiving):**
```
Server: mail.privateemail.com
Port: 993
Security: SSL/TLS
Username: hello@realnamestudio.com
Password: (your password)
```

### **SMTP Settings (Sending):**
```
Server: mail.privateemail.com
Port: 465
Security: SSL/TLS
Username: hello@realnamestudio.com
Password: (your password)
```

### **Alternative SMTP Port:**
If port 465 doesn't work, try:
```
Port: 587
Security: STARTTLS
```

---

## 📲 Quick Setup Instructions:

### **Gmail App (iOS/Android):**
1. Open Gmail app
2. Settings → Add account → Other
3. Enter: hello@realnamestudio.com
4. Choose "Personal (IMAP)"
5. Enter password
6. Manual setup → enter IMAP/SMTP settings above
7. Done!

### **Apple Mail (Mac/iPhone):**
1. Settings → Mail → Accounts → Add Account
2. Choose "Other"
3. Add Mail Account
4. Enter: hello@realnamestudio.com
5. It will auto-detect settings (or use manual settings above)

### **Outlook:**
1. File → Add Account
2. Enter: hello@realnamestudio.com
3. Advanced options → Manual setup
4. Choose IMAP
5. Enter settings above

---

## 🧪 Testing Your Email

### **Send Test Emails:**
Send from your personal email to:
1. hello@realnamestudio.com
2. hello@realname.studio

Both should arrive in the `hello@realnamestudio.com` inbox within 1-2 minutes.

### **Test Sending:**
1. Log into webmail or email app
2. Compose email to your personal address
3. Send it
4. Check it arrives and shows FROM: hello@realnamestudio.com

---

## 🔄 How Email Flow Works:

### **When someone emails hello@realnamestudio.com:**
```
Sender → Namecheap Private Email → Your Inbox
```

### **When someone emails hello@realname.studio:**
```
Sender → Namecheap Forwarding → hello@realnamestudio.com → Your Inbox
```

### **When you reply:**
```
Your Email Client → Namecheap SMTP → Recipient
FROM: hello@realnamestudio.com
```

**Note:** Replies will always come FROM `hello@realnamestudio.com`, even if original email was sent to `hello@realname.studio`.

---

## ⚙️ DNS Records (Configured)

These were automatically set up by Namecheap:

### **For realnamestudio.com:**

**MX Records:**
```
Host: @
Value: mx1.privateemail.com
Priority: 10

Host: @
Value: mx2.privateemail.com
Priority: 10
```

**SPF Record:**
```
Type: TXT
Host: @
Value: v=spf1 include:privateemail.com ~all
```

### **For realname.studio:**

**Email Forwarding:**
```
hello@realname.studio → hello@realnamestudio.com
(No MX records needed - uses Namecheap forwarding)
```

---

## 🔐 Security Best Practices

1. **Use a Strong Password**
   - At least 16 characters
   - Mix of letters, numbers, symbols
   - Don't reuse passwords

2. **Enable Two-Factor Authentication** (if available)
   - Check Namecheap account settings
   - Add 2FA for extra security

3. **Be Careful with Email Clients**
   - Only use trusted apps
   - Don't share IMAP/SMTP credentials

4. **Monitor for Spam**
   - If you start getting spam, check email headers
   - Report spam to Namecheap if needed

---

## 🆘 Troubleshooting

### **Email not arriving?**
1. Check spam folder
2. Wait 10-15 minutes (DNS propagation)
3. Verify sender didn't get bounce message
4. Check Namecheap email settings

### **Can't send email?**
1. Verify SMTP settings
2. Check username/password
3. Try alternative port (587 instead of 465)
4. Check if your ISP blocks outgoing port 25/465

### **Forwarding not working?**
1. Log into Namecheap
2. Domain List → Manage realname.studio
3. Email Forwarding tab
4. Verify: hello → hello@realnamestudio.com

### **"Authentication Failed" error?**
1. Double-check username is full email: hello@realnamestudio.com
2. Verify password (reset if needed)
3. Make sure SSL/TLS is enabled

---

## 💰 Billing Info

**Namecheap Private Email:**
- Cost: $1.58/month per mailbox
- Billed: Annually ($18.88/year)
- Mailboxes: 1 (hello@realnamestudio.com)
- Renewal: Auto-renews yearly

**Namecheap Email Forwarding:**
- Cost: FREE
- Forwards: hello@realname.studio → hello@realnamestudio.com

**Total: ~$19/year for both domains' email**

---

## 📈 Upgrade Options

### **If you need more mailboxes:**
Add additional mailboxes at $1.58/month each:
- info@realnamestudio.com
- support@realnamestudio.com
- [yourname]@realnamestudio.com

### **If you want to send FROM both domains:**
Two options:
1. Buy second mailbox for hello@realname.studio ($1.58/mo more)
2. Configure "Send As" in email client (advanced)

### **If you want better email:**
Consider upgrading to:
- **Google Workspace** ($6/mo) - Best interface
- **Fastmail** ($5/mo) - Great privacy & UX
- Keep Namecheap for now - it works!

---

## 📝 Quick Reference

**Webmail:** https://privateemail.com
**Username:** hello@realnamestudio.com
**IMAP Server:** mail.privateemail.com:993
**SMTP Server:** mail.privateemail.com:465
**Support:** https://www.namecheap.com/support/knowledgebase/subcategory/89/private-email/

---

## ✅ Setup Checklist

- [x] Purchased Namecheap Private Email for realnamestudio.com
- [x] Set up hello@realnamestudio.com mailbox
- [x] Configured email forwarding for hello@realname.studio
- [x] DNS records auto-configured by Namecheap
- [ ] Test sending email from hello@realnamestudio.com
- [ ] Test receiving at hello@realnamestudio.com
- [ ] Test forwarding from hello@realname.studio
- [ ] Set up email on mobile device (optional)
- [ ] Add to desktop email client (optional)

---

*Last Updated: 2025-10-17*

*Questions? Check Namecheap support or refer to this guide.*
