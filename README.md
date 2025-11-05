# 💬 WhatsApp Link + QR Code Generator

Created by: Gabriel Antonio Duarte Sales

## 🔗 Live Demo: https://gabrielantonioduartesales.github.io/gerador_linkszap_qrcode/

## 📋 Description

A simple and intuitive web tool that allows users to generate custom WhatsApp links with pre-defined messages and create QR Codes for those links — or for any other URL.

## 🚀 Features
## ✨ Main Functions

WhatsApp Link Generator: Creates direct links to WhatsApp conversations.

WhatsApp QR Code: Generates QR Codes for WhatsApp links.

Universal QR Code: Creates QR Codes for any URL.

QR Code Download: Allows users to download generated QR images.

## 🎯 Key Highlights

Responsive and intuitive interface.

Phone number validation.

Automatic message encoding.

Modern and clean design.

## 🛠️ Technologies Used

HTML5 — Page structure.

CSS3 — Styling and responsive layout.

Vanilla JavaScript — Core functionality.

QRCode.js — Library for QR code generation.

## 📁 Project Structure
gerador_linkszap_qrcode/
├── index.html       # Main page  
├── style.css        # Application styles  
├── main.js          # Core JavaScript logic  
└── README.md        # Documentation  

## 🔧 How to Use
## 1️⃣ Generate WhatsApp Link + QR Code

Fill in the fields:

DDI: Country code (e.g., 55 for Brazil)

DDD: Area code (e.g., 31 for Minas Gerais)

Phone number

Optional message

Click “Generate WhatsApp + QR”

Results:

WhatsApp link created

Corresponding QR Code generated

Options to open, copy, or download the QR Code

## 2️⃣ Generate a QR Code for Any Link

Paste any URL into the input field

Click “Generate QR”

Available options:

View QR Code

Download QR image

Open the corresponding link

## 🎨 Customization

You can easily change the color scheme through CSS variables:

:root {
  --accent: #25D366;  /* Main color (WhatsApp green) */
  --bg: #f6f7fb;      /* Background color */
  --card: #fff;        /* Card color */
  --muted: #666;       /* Secondary text */
}

## 📱 Responsiveness

The application is fully responsive and works perfectly on:
✅ Desktop
✅ Tablet
✅ Smartphone

## 🔄 JavaScript Functionality
Main Class

SimpleQR — A lightweight wrapper for the QRCode.js library.

const qr = new SimpleQR(element);
qr.makeCode('https://example.com');
qr.clear();

Utility Functions

onlyDigits() — Removes non-numeric characters.

buildWhatsAppLink() — Builds a WhatsApp message URL.

generateImageFromQr() — Prepares QR Code image for download.

## 🌐 Deployment

Hosted via GitHub Pages

Works on any static web server

## 📞 Support

Developed by: Gabriel Antonio Duarte Sales
📱 +55 31 98244-8518
💻 GitHub Profile

For questions or suggestions, please contact me through GitHub.

## 📄 License

This project is licensed under the MIT License — feel free to use, modify, and share.

© 2025 — Gabriel Antonio Duarte Sales
