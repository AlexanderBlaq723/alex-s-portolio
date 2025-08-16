const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Example data
const projects = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    image: "aws-certified-solutions-architect.png",
    link: "https://www.credly.com/badges/your-badge-link"
  },
  // ...add more projects
];

const blogPosts = [
  {
    title: "How I Passed the AWS Solutions Architect Exam",
    date: "July 2025",
    tags: ["Certification", "Cloud"],
    summary: "Sharing my journey, tips, and resources...",
    link: "#"
  },
  // ...add more posts
];

// API endpoints
app.get('/api/projects', (req, res) => res.json(projects));
app.get('/api/blog', (req, res) => res.json(blogPosts));
app.post('/api/contact', (req, res) => {
  // Save or email the contact form data here
  console.log(req.body);
  res.json({ success: true, message: "Message received!" });
});

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));