import authOption from "../../../../lib/authOption";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const handler = authOption

export {handler as GET, handler as POST}