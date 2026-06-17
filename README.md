# thevoidshell Portfolio

A modern cybersecurity portfolio built with Next.js that automatically synchronizes projects, technical focus areas, and technology stack directly from GitHub.

The goal of this project is to create a portfolio that functions as a live representation of my technical ecosystem rather than a separate website requiring constant manual updates.

## Features

### Dynamic GitHub Integration

* Automatically retrieves repositories using the GitHub REST API
* Supports both public and private repositories through authenticated requests
* Caches repository data for efficient server-side rendering
* Automatically updates when new projects are added or existing projects evolve

---

### Project Management System

Projects are managed entirely through GitHub topics.

**Portfolio projects**

Repositories tagged with:

```
thevoidshell
```

automatically appear on the Projects page.

**Featured projects**

Repositories tagged with:

```
featured
```

are prioritized and displayed on the homepage.

This workflow allows new projects to be added without modifying website code.

```
Create Repository
        ↓
Add GitHub Topics
        ↓
Portfolio Updates Automatically
```

---

### Automated Technical Profile

The About page is generated using repository metadata.

#### Technical Focus Areas

Repository topics are analyzed using a weighted scoring system based on:

* Topic frequency across projects
* Repository recency

This ensures current areas of work appear before older interests.

#### Technology Stack

Programming languages are aggregated from GitHub language statistics across portfolio repositories.

---

## Technology Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Infrastructure

* Vercel deployment
* GitHub REST API
* Environment-based authentication using GitHub Personal Access Tokens

---

## Local Development

Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

Install dependencies:

```bash
npm install
```

Create a local environment file:

```
.env.local
```

Add the required environment variable:

```env
GITHUB_TOKEN=your_github_personal_access_token
```

Start the development server:

```bash
npm run dev
```

---

## Environment Variables

| Variable     | Purpose                                                                      |
| ------------ | ---------------------------------------------------------------------------- |
| GITHUB_TOKEN | Authenticates GitHub API requests and enables access to private repositories |

---

## Deployment

The website is deployed using Vercel.

Production environment variables are configured through the Vercel dashboard.
