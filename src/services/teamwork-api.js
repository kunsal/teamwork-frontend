const url = 'https://kunsal-teamwork.herokuapp.com/api/v1/';

export const getFeed = async () => {
  try {
    const endpoint = 'feed'
    const rawFeed = await fetch(url + endpoint);
    const feed = await rawFeed.json();
    return feed;
  } catch (e) {
    console.log(e.message);
  }
  
}