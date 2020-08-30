import axios from 'axios';

const inferKitApiKey = process.env.INFERKIT_API_KEY;
const inferKitApiUrl = 'https://api.inferkit.com/v1/models/standard/generate';

export default (req, res) => {
  axios.post(inferKitApiUrl, req.body, {
    headers: {
      Authorization: `Bearer ${inferKitApiKey}`
    },
  }).then((response) => {
    res.send(response.data.data.text);
  }).catch((e) => {
    res.status(400).send(e);
  });
}
