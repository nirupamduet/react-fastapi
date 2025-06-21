import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';


// Define your NextAuth configuration with full TypeScript support
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        
        //validate
        if (!credentials?.username || !credentials?.password) 
          return null;

        const username = credentials?.username;
        const password = credentials?.password;

        const user = await prisma.customers.findUnique({
          where: {
            OR: [
              { sap_id: credentials.username },
              { domain_id: credentials.username }
            ]
          },
          include: {
            customer_passwords: {
              orderBy: { id: 'desc' },
              take: 1
            }
          }
        });

        if (!user || user.customer_passwords.length === 0) return null;

        //get last password hash from the database
        const lastPasswordHash = user.customer_passwords[0].hash;
        const isValid = await bcrypt.compare(credentials.password, lastPasswordHash);

        // If the password is not valid, return null
        if (!isValid) return null;

        // succeed
        return {
          id: user.id,
          sap_id: user.sap_id,
          email: "18707271@example.com",
        };      
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      // Add user info to token on sign in
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach token info to session
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
