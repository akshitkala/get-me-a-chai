// app/api/auth/[...nextauth]/route.ts or route.js (Next.js App Router)

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/app/Models/User";
import Payment from "@/app/Models/Payment";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  
  secret: process.env.NEXTAUTH_SECRET,
 
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    const isAllowedToSignIn = true
   if(account.provider === "github"){
    //connect to db
    const client = await mongoose.connect("mongodb://localhost:27017/get-chai")
    //check if user exists
    const currentuser=User.findOne({email:email})
    if(!currentuser){
      //create a new user
      const newuser = new User({
        email:email,
        username:email.split('@')[0],

      })
      await newuser.save()
      user.name=newuser.username
    }
    else{
      user.name=currentuser.username
    }
    return true
   }
  }
} 
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
