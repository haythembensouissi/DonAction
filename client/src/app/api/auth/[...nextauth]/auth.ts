import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
export const authOptions={
    providers:[
        GoogleProvider({
            clientId:"495228119928-tf4qv295mjulnlgp12bhr6fgvjhjpoia.apps.googleusercontent.com" ,
            clientSecret:"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"
        }),
        FacebookProvider({
            clientId:"789846285936024",
            clientSecret:"44197d4bfa46271201d4ddd359594077"
        })
    ]
}satisfies NextAuthOptions
