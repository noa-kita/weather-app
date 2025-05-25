require('dotenv').config();

/* 
API URL:
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} 
*/
const city = 'Tokyo'; // 都市名を指定
const lat = 35.6895; // 緯度を指定
const lon = 139.6917; // 経度を指定
const apiKey = process.env.API_KEY;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ja`;
const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},{state code},{country code}&limit={limit}&appid=${apiKey}`;


fetch(weatherUrl)
  .then(response => response.json())  // レスポンスをJSONに変換
  .then(data => {
    console.log(data); // 取得データをコンソールで確認
    const weather = data.weather[0].description;
    const temp = data.main.temp;
    console.log(`現在の${city}の天気は「${weather}」、気温は${temp}度です`);
    alert(`現在の${city}の天気は「${weather}」、気温は${temp}度です`);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
