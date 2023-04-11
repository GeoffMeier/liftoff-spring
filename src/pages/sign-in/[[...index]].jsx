import { SignIn } from '@clerk/nextjs'

const SignUpPage = () => (
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
)

export default SignUpPage
