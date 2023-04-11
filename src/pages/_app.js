import '@/styles/globals.css'
import {ClerkProvider,SignedIn,SignedOut,RedirectToSignIn}from '@clerk/nextjs'

export default function App({ Component, pageProps }) {

  return ( <ClerkProvider {...pageProps}>
    <SignedIn>
      <Component {...pageProps} />
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
</ClerkProvider>)
}
