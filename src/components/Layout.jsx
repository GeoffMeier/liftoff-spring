import { UserButton } from '@clerk/nextjs'

export default function Layout(props) {
    console.log('hello')
    return (
        <>
            <nav className="flex p-2 flex-row bg-slate-600 w-full">
                <UserButton />
            </nav>
            <main>
                {props.children}
                {props.children}
            </main>
        </>
    )
}
