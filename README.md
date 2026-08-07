# gameDay (2018)

> ### 🏈 Rebuilt as [**gameday-sound-edition**](https://github.com/brienmizell/gameday-sound-edition)
>
> This repository is archived and kept as the original. Everything below is
> the 2018 README, unchanged.
>
> The rebuild carries this repo's full commit history forward, preserves this
> code verbatim under `legacy/` — and revives it, stubbing the three dead
> services so the original page runs again against real 2018 Week 10 results.
> `compare.html` there puts 2018 and 2026 side by side.
>
> **Why it needed rebuilding:** all three of its data services are gone.
> Dark Sky was shut down by Apple in 2023, the FantasyData key expired, and
> the Heroku CORS proxy died with Heroku's free tier in 2022. The rebuild
> runs on the public ESPN scoreboard and Open-Meteo — both keyless — so it
> needs no proxy, no backend, and holds no secrets.

---

Fist Javascript application made during my DigitalCrafts bootcamp. When visiting the site users will be presented the college football schedule for the upcoming weekend and the weather information for the location. Using the FantasyData API we gather all of the info needed to display to the page for each game. Then taking the stadium name, city and state a call is made to the Google geocode Api the longitue and latitude is found. Then the longitude and latitude is sent to the Dark Sky API to find the weather for the upcoming game. 
