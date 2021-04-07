//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
 
}

function makePageForEpisodes(episodeList) {
const rootElem = document.getElementById("root");
episodeList.forEach(episode => {
EpisodeSetup(episode);
});
}

function EpisodeTitle(){
  const Title = getElementById()

}

function testFunc() {
  const div1 = document.createElement("div")
  div1.append('One')  
  div1.className='flex-container'
  document.body.append(div1)
}


const body = document.body
const all_episodes = getAllEpisodes()
const div =  document.createElement("div")
div.setAttribute("id", "mainContainer")
// horizontalDiv.className='flex-container' 

let count = 0
all_episodes.forEach(episode => {
  episode_name = episode.name
  episode_season = episode.season
  episode_number = episode.number
  episode_code = 'S' + episode_season + ' - ' + 'E' + episode_number
  episode_medium_image = episode.image.medium
  episode_summary_text = episode.summary

  const name_div = document.createElement("div")
  name_div.append(episode_name + ' ' + episode_code)

  const single_episode_div = document.createElement("div")

  const image_div = document.createElement("div")
  const episodeImage = document.createElement("img");
  episodeImage.src = episode_medium_image
  image_div.append(episodeImage)
 
  single_episode_div.append(name_div)
  single_episode_div.append(image_div)
  
  div.append(single_episode_div)

  
});
 body.append(div)

  document.getElementById("mainContainer").style.columnCount = 3;


window.onload = setup;
