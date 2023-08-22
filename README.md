# Project 3: Traffic Accidents in Toronto
by Mohamed Aamer, Lena Hammoud, Prachi Patel, Shelly Sakkerwal

## Abstract
This research project will conduct a data analysis on traffic accident cases in Toronto resulting in a person Killed or Seriously Injured (KSI) from 2017 to 2022. The dataset is taken from Toronto Police Services' Public Safety Data Portal at (https://data.torontopolice.on.ca/datasets/TorontoPS::ksi/explore). 

By analyzing the data and presenting compelling visuals, the project seeks to determine if there are any trends in KSI cases in Toronto either through location or over time, including by analyzing the impact of the COVID-19 pandemic and subsequent lockdowns on KSI cases.

## Tasks
- Data cleaning
- Creating a SQL database schema
- Creating a MongoDB of the data
- Creating a heat map of KSI cases in Toronto using Leaflet
- Creating a dashboard of visuals reflecting KSI cases with user input to filter data by year
- Navigating around Cross-Origin Resource Sharing (CORS) restrictions by connecting to a local dev server and accessing the project in that server

## Results

### Figure 1: Heat Map of KSI Incidents 2017-2022 in Toronto
<img width="1437" alt="Screenshot 2023-08-21 at 5 58 11 PM" src="https://github.com/MAamer28/Project_3/assets/130619866/50686f2a-79b3-47e8-afea-324d18122dce">

A heat map of KSI incidents in the Toronto metropolitan area shows a higher concentration of KSI incidents in the downtown core relative to the three surrounding districts. This data is understood in the context of a higher population density in downtown Toronto combined with the necessity of suburban residents to commute to downtown for work during the week, which increases the density of traffic in the downtown core and therefore the probability of traffic accidents in that core relative to the outlying suburbs.

### Figure 2: Zoomed-in Heat Map Showing Areas of Concentrated KSI in Downtown Toronto
<img width="1440" alt="Screenshot 2023-08-21 at 6 01 06 PM" src="https://github.com/MAamer28/Project_3/assets/130619866/a306865f-0a60-496b-91ac-2c7a5cffa454">

Zooming in on the heat map reveals particular hotspots in the city where KSI incidents occur more frequently. KSI incidents concentrate around the intersections of main thoroughfares (Queen/University, Bloor/University) or at points where the Gardiner Expressway merges into downtown Toronto streets. 

The density of KSI incidents around major intersections suggests underlying issues in the relationships between drivers, pedestrians, cyclists, and transit. Some intersections forbid left hand turns during busy hours but drivers will attempt such turns regardless, endangering themselves and pedestrians. A number of KSI hotspots also occur on streets that concurrently run streetcars like Queen and College where drivers sometimes drive past stopped streetcars despite laws against it, endangering passengers. 

As for the Gardiner, areas of high KSI activity occur at the junction where the Gardiner merges with Spadina Ave by the waterfront. This area is difficult to navigate due to multi-step crosswalks. Pedestrians sometimes attempt to rush through the separate crosswalks in one attempt or jaywalk which risks collision with drivers coming into and out of the Gardiner at higher speeds at acute angles with reduced visibility around the bends.

Finally, the concentration of KSI activity in the suburbs most frequently centers around major arteries like the Gardiner, Eglinton Ave, and Yonge St which reflects higher usage and presence of traffic resulting in likelier accidents relative to residential streets and minor arteries. 

### Figure 3: KSI Incidents in Toronto and East York 2017-2022
<img width="628" alt="Screenshot 2023-08-22 at 2 32 31 PM" src="https://github.com/MAamer28/Project_3/assets/130619866/6e6a3e45-a23f-4566-8846-5e89d42ef01d">

### Figure 4: KSI Incidents in Etobicoke York 2017-2022
<img width="630" alt="Screenshot 2023-08-22 at 2 32 48 PM" src="https://github.com/MAamer28/Project_3/assets/130619866/063030a2-d71a-49ce-8a35-526211a6085c">

### Figure 5: KSI Incidents in North York 2017-2022
<img width="630" alt="Screenshot 2023-08-22 at 2 33 00 PM" src="https://github.com/MAamer28/Project_3/assets/130619866/5b15606d-231c-440a-a726-6ee290b83813">

### Figure 6: KSI Incidents in Scarborough 2017-2022
<img width="625" alt="Screenshot 2023-08-22 at 2 33 09 PM" src="https://github.com/MAamer28/Project_3/assets/130619866/8b5a9e9e-e14a-42a2-94e5-7bf7cadce747">


## References
This data was taken from the Toronto Police's Public Safety Data Portal (https://data.torontopolice.on.ca/pages/open-data) and is used for educational purposes only.

## Links to Slideshow 
https://docs.google.com/presentation/d/1AqaCphSvGthhrmyOqvQSl_MPvD5gc7BWnHqsLB9C9Zo/edit?usp=sharing
