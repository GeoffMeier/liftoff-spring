import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    UserButton,
} from '@clerk/nextjs'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()
export default function App({ Component, pageProps }) {
    return (
        <ClerkProvider {...pageProps}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <SignedIn>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SignedIn>
                <SignedOut>
                    <RedirectToSignIn />
                </SignedOut>
            </QueryClientProvider>
        </ClerkProvider>
    )
}

// import {
//     ClerkProvider,
//     SignedIn,
//     SignedOut,
//     SignInButton,
//     UserButton
//   } from "@clerk/nextjs";

//   function Header() {
//     return (
//       <header
//         style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
//       >
//         <h1>My App</h1>
//         <SignedIn>
//           {/* Mount the UserButton component */}
//           <UserButton />
//         </SignedIn>
//         <SignedOut>
//           {/* Signed out users get sign in button */}
//           <SignInButton />
//         </SignedOut>
//       </header>
//     );
//   }

//   function MyApp({ pageProps }) {
//     return (
//       <ClerkProvider {...pageProps}>
//         <Header />
//       </ClerkProvider>
//     );
//   }

//   export default MyApp;
