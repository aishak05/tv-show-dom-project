allEpisodes = null

// You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
 
}

// function makePageForEpisodes(episodeList) {
// const rootElem = document.getElementById("root");
// episodeList.forEach(episode => {
// EpisodeSetup(episode);
// });
// }

// function EpisodeTitle(){
//   const Title = getElementById()

// }

const body = document.body
const searchDiv = document.createElement("div")
const all_episodes = getAllEpisodes()
const div =  document.createElement("div")
const searchBar = document.createElement("form")
const searchInput = document.createElement("input")
body.append(searchDiv)
searchDiv.append(searchBar)
searchBar.append(searchInput)



div.className='flex-container' 

let count = 0
all_episodes.forEach(episode => {
  episode_name = episode.name
  episode_season = ('0' + episode.season).substr(-2)
  episode_number = ('0' + episode.number).substr(-2)
  episode_code = 'S' + episode_season + 'E' + episode_number
  episode_medium_image = episode.image.medium
  episode_summary_text = episode.summary.replace("<p>", "")
  episode_summary_text = episode_summary_text.replace("</p>", "")

  //Enclosing Div for each episode block
  const single_episode_div = document.createElement("div")
  if (count % 2 == 0) {
    single_episode_div.style.backgroundColor = 'lightblue'
  }
  single_episode_div.style.flex = '0 20%';
  single_episode_div.style.paddingTop = '50px'
  single_episode_div.style.paddingBottom = '50px'
  single_episode_div.style.paddingLeft = '50px'
  single_episode_div.style.paddingRight = '50px'
  single_episode_div.style.borderStyle = 'solid'

  //Div for the Episode Name
  const name_div = document.createElement("div")
  name_div.style.height = '60px'
  name_div.style.fontWeight = 'bold'
  name_div.style.fontSize = '20px'
  name_div.style.paddingBottom = '10px'
  name_div.append(episode_name + ' ' + episode_code)

  //Div for the Episode Image
  const image_div = document.createElement("div")
  const episodeImage = document.createElement("img");
  episodeImage.src = episode_medium_image
  image_div.append(episodeImage)

  //Div for the Episode Summary
  const episode_summary_div = document.createElement('div')
  episode_summary_div.style.textAlign = 'justify'
  episode_summary_div.append(episode_summary_text)
  
 
  single_episode_div.append(name_div)
  single_episode_div.append(image_div)
  single_episode_div.append(episode_summary_div)

  div.append(single_episode_div)

  body.append(div) 
  
  count = count + 1
});

disclaimer_div = document.createElement("div")
disclaimer_div.style.textAlign = 'right'
var alink = document.createElement('a'); 
var link = document.createTextNode("The data on this page has been retrieved via TVMaze.com");
alink.appendChild(link); 
alink.title = "The data on this page has been retrieved via TVMaze.com"; 
alink.href = "http://tvmaze.com"; 
disclaimer_div.appendChild(alink)

body.append(disclaimer_div)

// const searchList = all_episodes.filter(episode => episode.name);





searchBar.addEventListener("keyup", e => { 
  const searchString = e.target.value; 
});

window.onload = setup;
