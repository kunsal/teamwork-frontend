const url = 'https://kunsal-teamwork.herokuapp.com/api/v1/';

export const getFeed = async () => {
  try {
    const endpoint = url + 'feed'
    const rawFeed = await fetch(endpoint);
    const feed = await rawFeed.json();
    return feed;
  } catch (e) {
    console.log(e.message);
  }
}

export const login = async (email, password) => {
  try {
    const endpoint = url + 'auth/signin';
    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    }
    const rawResponse = await fetch(endpoint, data);
    const response = await rawResponse.json();
    if ('error' in response) throw new Error(response.error)
    return response;
  } catch (e) {
    throw new Error(e)
  }
}