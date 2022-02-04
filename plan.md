Music Search APP

Use itunes api: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

functionality:
  MVP:
    Header with name of app
    Search by name
    Call to itunes API (https://itunes.apple.com/search?term=jack+johnson&limit=25)
    Display the 25 results, mapped down the page
    Each track will have a artist name(artistName),trackname(trackName), album name(collectionName), image (artWorkUrl100 from the API)



Components:
    Header
        -contains title of our app
    Input for artist name
        - Input field
        - Button
        - state: searchInput
    TrackList
        - maps through the api results, creating a Track element for each one
    Track
        - displays artist name, album name, song name, image.



backup API: foods - https://www.themealdb.com/api.php
