# thevoidshell Portfolio

A modern cybersecurity portfolio built with Next.js that automatically synchronizes projects, technical focus areas, and technology stacks directly from GitHub.

Rather than maintaining a static portfolio that requires manual updates, this project treats GitHub as the source of truth. New projects, technologies, and areas of interest are reflected automatically through repository metadata.

## Features

### Dynamic GitHub Integration

- Retrieves repositories using the GitHub REST API
- Supports both public and private repositories through authenticated requests
- Implements server-side caching for efficient data retrieval
- Automatically reflects repository updates without modifying portfolio code

### Automated Project Management

Projects are managed entirely through GitHub topics.

#### Portfolio Projects

Repositories tagged with:

```
thevoidshell
```

automatically appear in the Projects section.

#### Featured Projects

Repositories tagged with:

```
featured
```

are prioritized and displayed on the homepage.

Workflow:

```
Create Repository
        ↓
Add GitHub Topics
        ↓
Portfolio Updates Automatically
```

### Automated Technical Profile

The About section is generated using repository metadata.

#### Technical Focus Areas

Repository topics are analyzed using a weighted scoring system based on:

- Topic frequency across projects
- Repository recency

This allows current areas of work to naturally take priority over older interests.

#### Technology Stack

Programming languages are aggregated using GitHub language statistics across portfolio repositories.

## Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Infrastructure

- Vercel
- GitHub REST API
- Environment-based configuration
- GitHub Personal Access Token authentication

## Local Development

Clone the repository:

```bash
git clone https://github.com/thevoidshell/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Configure the required environment variables:

```env
GITHUB_TOKEN=your_github_personal_access_token

NEXT_PUBLIC_NAME=Your Name
NEXT_PUBLIC_TITLE=Your Title

NEXT_PUBLIC_GITHUB=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN=https://linkedin.com/in/your-profile
NEXT_PUBLIC_EMAIL=your.email@example.com
NEXT_PUBLIC_RESUME_URL=https://example.com/resume.pdf
```

Start the development server:

```bash
npm run dev
```

## Environment Variables

| Variable | Purpose |
|---|---|
| `GITHUB_TOKEN` | Authenticates GitHub API requests and enables access to private repositories |
| `NEXT_PUBLIC_NAME` | Public display name shown throughout the portfolio |
| `NEXT_PUBLIC_TITLE` | Professional tagline displayed on the homepage |
| `NEXT_PUBLIC_GITHUB` | GitHub profile URL |
| `NEXT_PUBLIC_LINKEDIN` | LinkedIn profile URL |
| `NEXT_PUBLIC_EMAIL` | Public contact email address |
| `NEXT_PUBLIC_RESUME_URL` | Public resume download URL |


## Deployment

The application is deployed using Vercel.

Production environment variables should be configured through the Vercel dashboard. The same `.env.example` structure can be used as a reference when configuring production secrets.


## Design Philosophy

This portfolio is built around a simple principle:

> Your GitHub should be your technical timeline.

Repositories represent projects, repository topics represent areas of expertise, and code activity reflects growth over time.

The portfolio simply visualizes that ecosystem.