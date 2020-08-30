// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
//
// const port = process.env.PORT;
// const inferKitApiKey = process.env.INFERKIT_API_KEY;
// const inferKitApiUrl = 'https://api.inferkit.com/v1/models/standard/generate';
//
// const app = express();
// app.use(cors());
// app.use(express.json());
//
// app.post('/generate', async (req, res) => {
//   try {
//     const response = await axios.post(inferKitApiUrl, req.body, {
//       headers: {
//         Authorization: `Bearer ${inferKitApiKey}`
//       },
//     });
//     res.send(response.data.data.text);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });
//
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// });
