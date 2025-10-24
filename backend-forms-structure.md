# Her Impact Backend - Forms Structure

## Overview
A focused backend API specifically designed to handle all form submissions from the Her Impact platform. No authentication required - all forms are public submissions.

## Forms Identified in Frontend

### 1. **Article Submission Form** (`/articles/write`)
- Article content (title, excerpt, content, category, tags)
- Author information (name, position, bio, image)
- Featured image
- Status (draft/published)

### 2. **Story Submission Form** (`/stories`)
- Story content (title, excerpt, content)
- Author information (name, email, bio, image)
- Tags
- Status (draft/published)

### 3. **Opportunity Submission Form** (`/opportunities`)
- Opportunity details (title, organization, description, category, type)
- Contact information (email, website)
- Additional details (deadline, location, duration, value, requirements)

### 4. **Community Suggestion Form** (`/community`)
- Community details (name, website, description, focus areas)
- Contact information (name, email, location)
- Logo URL

### 5. **Community Share Form** (`/community`)
- Community details (title, link, description, organizer)
- Contact information (email, location)
- Event date

### 6. **Contact Form** (`/contact`)
- Contact details (name, email, subject, message)
- Category (general, story, opportunity, partnership, technical, feedback)

## Backend Structure

```
backend/
├── package.json
├── server.js
├── .env
├── config/
│   ├── database.js
│   └── multer.js
├── models/
│   ├── Article.js
│   ├── Story.js
│   ├── Opportunity.js
│   ├── Community.js
│   └── Contact.js
├── routes/
│   ├── articles.js
│   ├── stories.js
│   ├── opportunities.js
│   ├── community.js
│   └── contact.js
├── controllers/
│   ├── articleController.js
│   ├── storyController.js
│   ├── opportunityController.js
│   ├── communityController.js
│   └── contactController.js
├── middleware/
│   ├── validation.js
│   └── errorHandler.js
├── uploads/
│   ├── articles/
│   ├── stories/
│   └── authors/
└── utils/
    └── helpers.js
```

## Database Models

### Article Model
```javascript
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  // Content
  title: { type: String, required: true, trim: true },
  excerpt: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String, trim: true }],
  featuredImage: { type: String },
  
  // Author Information
  author: {
    name: { type: String, required: true, trim: true },
    position: { type: String, trim: true },
    bio: { type: String, trim: true },
    image: { type: String }
  },
  
  // Metadata
  status: { type: String, enum: ['draft', 'published'], default: 'published' },
  featured: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  readTime: { type: String },
  
  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', articleSchema);
```

### Story Model
```javascript
const storySchema = new mongoose.Schema({
  // Content
  title: { type: String, required: true, trim: true },
  excerpt: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  tags: [{ type: String, trim: true }],
  
  // Author Information
  author: {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    bio: { type: String, required: true, trim: true },
    image: { type: String }
  },
  
  // Metadata
  status: { type: String, enum: ['draft', 'published'], default: 'published' },
  featured: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  readTime: { type: String },
  
  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Story', storySchema);
```

### Opportunity Model
```javascript
const opportunitySchema = new mongoose.Schema({
  // Basic Information
  title: { type: String, required: true, trim: true },
  organization: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  
  // Details
  deadline: { type: Date },
  location: { type: String, trim: true },
  duration: { type: String, trim: true },
  value: { type: String, trim: true },
  requirements: { type: String },
  
  // Contact
  contactEmail: { type: String, required: true, trim: true },
  website: { type: String, trim: true },
  
  // Metadata
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  featured: { type: Boolean, default: false },
  applications: { type: Number, default: 0 },
  
  // Timestamps
  submittedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Opportunity', opportunitySchema);
```

### Community Model
```javascript
const communitySchema = new mongoose.Schema({
  // Basic Information
  name: { type: String, required: true, trim: true },
  website: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  
  // Contact Information
  contactName: { type: String, trim: true },
  contactEmail: { type: String, required: true, trim: true },
  location: { type: String, trim: true },
  
  // Additional Details
  focusAreas: { type: String, trim: true },
  logoUrl: { type: String, trim: true },
  type: { type: String, enum: ['suggest', 'share'], required: true },
  
  // Metadata
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  featured: { type: Boolean, default: false },
  
  // Timestamps
  submittedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Community', communitySchema);
```

### Contact Model
```javascript
const contactSchema = new mongoose.Schema({
  // Contact Information
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  subject: { type: String, required: true, trim: true },
  message: { type: String, required: true },
  
  // Category
  category: { 
    type: String, 
    enum: ['general', 'story', 'opportunity', 'partnership', 'technical', 'feedback'], 
    default: 'general' 
  },
  
  // Status
  status: { type: String, enum: ['new', 'read', 'replied'], default: 'new' },
  
  // Timestamps
  submittedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
```

## API Endpoints

### Articles API
```javascript
// POST /api/articles - Create new article
// GET /api/articles - Get all articles (with pagination, filtering)
// GET /api/articles/:id - Get single article
// PUT /api/articles/:id - Update article
// DELETE /api/articles/:id - Delete article
```

### Stories API
```javascript
// POST /api/stories - Submit new story
// GET /api/stories - Get all stories (with pagination, filtering)
// GET /api/stories/:id - Get single story
// PUT /api/stories/:id - Update story
// DELETE /api/stories/:id - Delete story
```

### Opportunities API
```javascript
// POST /api/opportunities - Submit new opportunity
// GET /api/opportunities - Get all opportunities (with pagination, filtering)
// GET /api/opportunities/:id - Get single opportunity
// PUT /api/opportunities/:id - Update opportunity
// DELETE /api/opportunities/:id - Delete opportunity
```

### Community API
```javascript
// POST /api/community/suggest - Suggest a community
// POST /api/community/share - Share your community
// GET /api/community - Get all communities (with pagination, filtering)
// GET /api/community/:id - Get single community
// PUT /api/community/:id - Update community
// DELETE /api/community/:id - Delete community
```

### Contact API
```javascript
// POST /api/contact - Submit contact message
// GET /api/contact - Get all contact messages (admin)
// GET /api/contact/:id - Get single message
// PUT /api/contact/:id - Update message status
// DELETE /api/contact/:id - Delete message
```

## Sample Controllers

### Article Controller
```javascript
const Article = require('../models/Article');

// POST /api/articles
const createArticle = async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();
    res.status(201).json({
      success: true,
      message: 'Article created successfully',
      data: article
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating article',
      error: error.message
    });
  }
};

// GET /api/articles
const getArticles = async (req, res) => {
  try {
    const { page = 1, limit = 10, category, search, status = 'published' } = req.query;
    
    const filter = { status };
    if (category && category !== 'all') filter.category = category;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { 'author.name': { $regex: search, $options: 'i' } }
      ];
    }
    
    const articles = await Article.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    
    const total = await Article.countDocuments(filter);
    
    res.json({
      success: true,
      data: articles,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        itemsPerPage: parseInt(limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching articles',
      error: error.message
    });
  }
};
```

### Story Controller
```javascript
const Story = require('../models/Story');

// POST /api/stories
const createStory = async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.status(201).json({
      success: true,
      message: 'Story submitted successfully',
      data: story
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error submitting story',
      error: error.message
    });
  }
};
```

### Opportunity Controller
```javascript
const Opportunity = require('../models/Opportunity');

// POST /api/opportunities
const createOpportunity = async (req, res) => {
  try {
    const opportunity = new Opportunity(req.body);
    await opportunity.save();
    res.status(201).json({
      success: true,
      message: 'Opportunity submitted successfully',
      data: opportunity
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error submitting opportunity',
      error: error.message
    });
  }
};
```

### Community Controller
```javascript
const Community = require('../models/Community');

// POST /api/community/suggest
const suggestCommunity = async (req, res) => {
  try {
    const community = new Community({ ...req.body, type: 'suggest' });
    await community.save();
    res.status(201).json({
      success: true,
      message: 'Community suggestion submitted successfully',
      data: community
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error submitting community suggestion',
      error: error.message
    });
  }
};

// POST /api/community/share
const shareCommunity = async (req, res) => {
  try {
    const community = new Community({ ...req.body, type: 'share' });
    await community.save();
    res.status(201).json({
      success: true,
      message: 'Community shared successfully',
      data: community
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error sharing community',
      error: error.message
    });
  }
};
```

### Contact Controller
```javascript
const Contact = require('../models/Contact');

// POST /api/contact
const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: contact
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error sending message',
      error: error.message
    });
  }
};
```

## Validation Middleware

```javascript
const Joi = require('joi');

// Article validation
const validateArticle = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required().trim().min(5).max(200),
    excerpt: Joi.string().required().trim().min(10).max(500),
    content: Joi.string().required().min(50),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string().trim()),
    featuredImage: Joi.string().uri(),
    author: Joi.object({
      name: Joi.string().required().trim().min(2).max(100),
      position: Joi.string().trim().max(100),
      bio: Joi.string().trim().max(500),
      image: Joi.string().uri()
    }).required(),
    status: Joi.string().valid('draft', 'published').default('published')
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: error.details.map(detail => detail.message)
    });
  }
  next();
};

// Story validation
const validateStory = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required().trim().min(5).max(200),
    excerpt: Joi.string().required().trim().min(10).max(500),
    content: Joi.string().required().min(50),
    tags: Joi.array().items(Joi.string().trim()),
    author: Joi.object({
      name: Joi.string().required().trim().min(2).max(100),
      email: Joi.string().email().required(),
      bio: Joi.string().required().trim().min(10).max(500),
      image: Joi.string().uri()
    }).required(),
    status: Joi.string().valid('draft', 'published').default('published')
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: error.details.map(detail => detail.message)
    });
  }
  next();
};

// Opportunity validation
const validateOpportunity = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required().trim().min(5).max(200),
    organization: Joi.string().required().trim().min(2).max(100),
    description: Joi.string().required().min(20),
    category: Joi.string().required(),
    type: Joi.string().required(),
    deadline: Joi.date().greater('now'),
    location: Joi.string().trim().max(100),
    duration: Joi.string().trim().max(50),
    value: Joi.string().trim().max(100),
    requirements: Joi.string().max(1000),
    contactEmail: Joi.string().email().required(),
    website: Joi.string().uri()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: error.details.map(detail => detail.message)
    });
  }
  next();
};

// Community validation
const validateCommunity = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().trim().min(2).max(100),
    website: Joi.string().uri().required(),
    description: Joi.string().required().min(20).max(1000),
    contactName: Joi.string().trim().max(100),
    contactEmail: Joi.string().email().required(),
    location: Joi.string().trim().max(100),
    focusAreas: Joi.string().trim().max(200),
    logoUrl: Joi.string().uri(),
    type: Joi.string().valid('suggest', 'share').required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: error.details.map(detail => detail.message)
    });
  }
  next();
};

// Contact validation
const validateContact = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().trim().min(2).max(100),
    email: Joi.string().email().required(),
    subject: Joi.string().required().trim().min(5).max(200),
    message: Joi.string().required().min(10).max(2000),
    category: Joi.string().valid('general', 'story', 'opportunity', 'partnership', 'technical', 'feedback').default('general')
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: error.details.map(detail => detail.message)
    });
  }
  next();
};
```

## File Upload Configuration

```javascript
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = 'uploads/';
    if (file.fieldname === 'authorImage') {
      uploadPath += 'authors/';
    } else if (file.fieldname === 'articleImage') {
      uploadPath += 'articles/';
    } else if (file.fieldname === 'storyImage') {
      uploadPath += 'stories/';
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

module.exports = upload;
```

## Environment Variables

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/herimpact
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/gif
CORS_ORIGIN=http://localhost:3000
```

## Package.json Dependencies

```json
{
  "name": "her-impact-backend",
  "version": "1.0.0",
  "description": "Backend API for Her Impact platform",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "multer": "^1.4.5",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "joi": "^17.9.2",
    "helmet": "^7.0.0",
    "express-rate-limit": "^6.10.0",
    "express-validator": "^7.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.6.2"
  }
}
```

## Main Server File

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/herimpact', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/articles', require('./routes/articles'));
app.use('/api/stories', require('./routes/stories'));
app.use('/api/opportunities', require('./routes/opportunities'));
app.use('/api/community', require('./routes/community'));
app.use('/api/contact', require('./routes/contact'));

// Error handling middleware
app.use(require('./middleware/errorHandler'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

This backend structure is specifically designed to handle all the forms in your Her Impact platform. It provides:

1. **Complete form handling** for all 6 form types
2. **File upload support** for images
3. **Data validation** for all inputs
4. **No authentication required** - all forms are public
5. **RESTful API design** with proper error handling
6. **Database models** that match your frontend form structures
7. **Pagination and filtering** for data retrieval
8. **Rate limiting** for API protection

The backend is ready to be implemented and will handle all the form submissions from your frontend application!

