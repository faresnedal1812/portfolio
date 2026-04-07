const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

// Validation middleware
const validateContact = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 100 }),
  body("email").trim().isEmail().withMessage("Valid email is required"),
  body("subject")
    .trim()
    .notEmpty()
    .withMessage("Subject is required")
    .isLength({ max: 200 }),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ max: 5000 }),
];

// @route   POST /api/contact
// @desc    Submit contact form
router.post("/", validateContact, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    // Save to database
    const contact = await Contact.create({ name, email, subject, message });

    // Send email notification (if email credentials are configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // TLS
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          replyTo: email,
          to: "nedalfares53@gmail.com",
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <h3>New Portfolio Contact Message</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError.message);
        // Don't fail the request if email fails
      }
    }

    res.status(201).json({
      success: true,
      message: "Message sent successfully! I will get back to you soon.",
      data: contact,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
});

module.exports = router;
