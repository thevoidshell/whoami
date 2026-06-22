export const profile = {
    name: process.env.NEXT_PUBLIC_NAME ?? "Your Name",

    title: process.env.NEXT_PUBLIC_TITLE ?? "Systems • Security • AI",

} as const;