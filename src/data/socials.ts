export const socials = {
    github: process.env.NEXT_PUBLIC_GITHUB ?? "https://github.com/yourusername",

    linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "https://linkedin.com/in/your-profile",

    email: process.env.NEXT_PUBLIC_EMAIL ?? "your.email@example.com",

    resume: process.env.NEXT_PUBLIC_RESUME_URL ?? "https://example.com/resume.pdf",
} as const;