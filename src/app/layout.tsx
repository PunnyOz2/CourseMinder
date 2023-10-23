import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "@themes/theme";
import './globals.css'
import { SessionProvider } from "next-auth/react";
import NextAuthProvider from "@providers/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export const metadata = {
  title: "CourseMinder",
  description: "A course management app for students",
};

export default async function RootLayout({ children }: { children: any }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <NextAuthProvider session={session}>
        <MantineProvider defaultColorScheme="dark" theme={theme}>{children}</MantineProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}