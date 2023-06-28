import Image from 'next/image'
import { Inter } from 'next/font/google'
import { UserButton } from '@clerk/nextjs'
import { useQuery } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] })

const useTeams = () => {
    return useQuery({
        queryKey: ['mlb', 'teams'],
        queryFn: async () => {
            const data = await fetch('/api/teams')
            return await data.json()
        },
    })
}

export default function Home() {
    const { data, isLoading, error } = useTeams()
    console.log(data)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {isLoading && <>loading...</>}
            {error && <>error...</>}
            {data &&
                data.team_all_season.queryResults.row.map((team) => (
                    <div key={team.name_display_full}>
                        <table>
                            <tr>
                                <th>{team.name_display_full}</th>
                            </tr>
                            <tr>{team.venue_short}</tr>
                        </table>
                    </div>
                ))}
            {/* {data && data.team_all_season.queryResults.row.map((team) => (
               
               <thead key= {team.venue_short
               }>
                   {team.venue_short}
               </thead> */}
        </main>
    )

    // return (
    //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //         {isLoading && <>loading...</>}
    //         {error && <>error...</>}
    //         {data && data.team_all_season.queryResults.row.map((team) => (
    //             <div key= {team.name_display_full
    //             }>
    //                 {team.name_display_full}
    //             </div>
    //         ))}
    //     </main>
    // )
}
