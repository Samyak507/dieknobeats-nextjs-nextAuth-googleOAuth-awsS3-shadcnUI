import NextAuth, { AuthOptions } from "next-auth";
import User from "../../../../models/user.model";
import connectToDatabase from "../../../../lib/mongodb";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 6 * 60 * 60, // ⏳ Session expires in 6 hours
  },

  jwt: {
    maxAge: 6 * 60 * 60, // ⏳ JWT expires in 6 hours
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          await connectToDatabase();

          const user = await User.findOne({ email: credentials?.email });
          if (!user) return null;

          const isValidPassword = await bcrypt.compare(
            credentials?.password ?? "",
            user.password as string
          );

          if (!isValidPassword) return null;

          return {
            id: user._id.toString(),
            name: user.username,
            email: user.email,
          };
        } catch {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = {
          email: token.email,
          name: token.name,
          image: token.picture,
        };
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/sign-in",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
