import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Jamiel Lynch",
        "title": "San Francisco’s complaint against Twitter says flashing ‘X’ sign put up without a permit - CNN",
        "description": "In a complaint, the city of San Francisco says they have visited the headquarters of the company formerly known as Twitter twice since Friday regarding the new flashing “X” sign on top of the building.",
        "url": "https://www.cnn.com/2023/07/30/tech/san-francisco-investigates-twitter-x-sign/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230731105031-san-francisco-investigates-twitter-x-sign.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-07-31T03:22:00Z",
        "content": "In a complaint, the city of San Francisco says they have visited the headquarters of the company formerly known as Twitter twice since Friday regarding the new flashing X sign on top of the building.… [+1583 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hollywood Reporter"
        },
        "author": "Katie Kilkenny",
        "title": "SAG-AFTRA Justifies Interim Agreements as “Vital Part of Our Strategic Approach” Amid Debate - Hollywood Reporter",
        "description": "So far, SAG-AFTRA has granted these pacts to projects including A24's 'Death of a Unicorn' and 'Mother Mary' as well as Hammerstone Studios' 'Flight Risk.'",
        "url": "https://www.hollywoodreporter.com/business/business-news/actors-strike-sag-aftra-justifies-independent-waivers-1235547713/",
        "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/2023_07-SAG_strike-02.jpg?w=1024",
        "publishedAt": "2023-07-31T02:37:30Z",
        "content": "In the wake of prominent members airing concerns about SAG-AFTRA’s interim agreements, union leaders are justifying the granting of these pacts, which allow films and TV shows to proceed amid the ong… [+4310 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Mallika Soni",
        "title": "Late summer wave? Covid hospitalisations spike in US, health agency warns - Hindustan Times",
        "description": "Covid In US: Over 7,100 patients with Covid were hospitalised in the week of July 15, up from 6,444 the prior week, data showed. | World News",
        "url": "https://www.hindustantimes.com/world-news/coronavirus-us-latest-late-summer-wave-covid-hospitalizations-spike-in-us-health-agency-warns-101690765255107.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/07/31/1600x900/AFP_9FR9EP_1629108749834_1629108788231_1664007861307_1690765344353.jpg",
        "publishedAt": "2023-07-31T01:12:44Z",
        "content": "The Centers for Disease Control and Prevention (CDC) warned that the number of Covid-19 hospitalisations have been rising in the US. As per data, hospitalisations have spiked up 10%- the sharpest inc… [+2325 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Eonline.com"
        },
        "author": "Corinne Heller",
        "title": "Harry Styles Spotted With \"Olivia\" Tattoo After Olivia Wilde Breakup - E! NEWS",
        "description": "Harry Styles was photographed with never-before-seen ink while on a boat ride with friends, including James Corden, eight months after it was confirmed he and Olivia Wilde had split.",
        "url": "https://www.eonline.com/news/1381720/harry-styles-spotted-with-olivia-tattoo-months-after-olivia-wilde-breakup",
        "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2023515/rs_1200x1200-230615134651-1200-olivia-wilde-harry-styles.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
        "publishedAt": "2023-07-31T00:08:00Z",
        "content": "Harry Styles has debuted some curious new ink.\r\nWhile on a boat trip with friends in Bolsena, Italy July 28, the singer was photographed for the first time sporting a thigh tattoo that appears to rea… [+807 chars]"
    }
]
  constructor(){
    super();
    this.state = {
      articles: this.articles
    }
  }
  render() {
    return (
      <div>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key= {element.url}>
                    <NewsItem  title = {element.title} description = {element.description} imageUrl= {element.urlToImage}/>
                </div>
            })}

        </div>
      </div>
    )
  }
}

export default News
