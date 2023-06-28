export default async function (request, response) {
    const data = await fetch(
        "http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2017'"
    )
    response.status(200).json(await data.json())
}
