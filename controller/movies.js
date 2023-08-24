const express = require('express');
const Movies = require('../model/movies');
// const bodyParser = require('body-parser');


const router = express.Router();
const app = express();
// app.use(bodyParser.json());

router.get('/', (req, res) => {
  var response = [
    {
      "title": "TV Drama",
      "moviesData": [
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "f7895478-104d-4fc1-84e2-fbb1794055ff"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "b256de2c-d34e-4624-8091-1a20cefd187f"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "82f56a00-9c98-4d4c-95cf-e86de067ce06"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "319933fd-93d9-4208-89d8-3a1b0b3bd6ae"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "cd9da699-526f-42ec-baf8-b0b2fe452601"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "0d8f5b05-8576-441f-958a-29bf7a514d34"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "59f1b2ab-8b81-4cc2-af07-eadee0270ca8"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "47e03069-478d-4784-8629-de887f1e3e2f"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "53a21b7e-07c1-45b0-84e3-a1a277825771"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "1a80644d-71df-4f26-97d5-d835d31eddb7"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "e7e76102-092f-4375-a4d6-89906d324d22"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "ce5172b0-8884-4a92-8dd0-58e88881533d"
        }
      ],
      "id": "37e5f678-6e33-4df5-9d62-360d08c04c69"
    },
    {
      "title": "Trending Now",
      "moviesData": [
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "def25b20-ad2b-44cd-87e0-cd49f3e43b2a"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "fe29b4cf-8609-4914-9a77-02672552d0f7"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "979addae-e048-43f1-b7e3-8d1d96357bce"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "50577264-b69a-4ced-b27d-585268252107"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "4daeb430-6a96-49a3-bb7c-2266809669cf"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "cc0c5788-5a8f-4215-8112-a9607edc5eb6"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "de845bfa-cf30-41d5-9837-f676c3ffaae1"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "2adb0e35-24df-4acb-89ca-2afb4916ba2d"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "9f8de064-025a-4a66-b2c7-faa73e642d7c"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "5024bfbf-a6c0-4454-b480-b59e808a7674"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "686e69ee-83a2-4f0e-b0c3-4c32f4e14444"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "f7d6fe0d-fd5d-4773-8c04-e69c8baa10c3"
        }
      ],
      "id": "f2d4fde8-d4a9-41a6-8d92-1f28ff68fc60"
    },
    {
      "title": "Made in India",
      "moviesData": [
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "633d57b9-ebc5-4896-b86e-bb7a094774b5"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "4a95f7f1-9092-429f-bcb0-4ead93248826"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "f35c2dbf-0014-45fa-a3cb-0093a07e5bab"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "99882527-3854-4d49-8319-65840f1671e1"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "33f5878b-6616-497c-924c-f82d7b4fc575"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "f0f44a47-b029-44b5-afa5-f95886fb0705"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "cc76acc6-719a-471c-a936-4572ebb261e5"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "8bd4e2b4-1364-4137-a3e4-3b96d7d7b7ef"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "fa916e44-82af-4123-9fa2-9fc76a13c83d"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "832c5fc5-dbef-4f4f-9cde-3c6c67a5cd00"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "9ed05a51-ef46-4f8d-aff2-6ba73a9293eb"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "2d0ba72a-b22d-406f-9156-7d80755a176b"
        }
      ],
      "id": "b90ce6a1-fe8f-43a2-9a4d-5cbc8e008048"
    },
    {
      "title": "Because you have watched Dracula",
      "moviesData": [
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "f2877cc8-177a-47a4-993e-92c89f770822"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "a306540b-fe48-4a49-9215-8a9e8f1894ea"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "bd4fc5aa-5c99-4dfa-aa3f-d1f5cb9b4bde"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "3b22e192-adcd-456f-bcdd-496bb9be2ec8"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "afe8953d-e9b0-4d45-8d4f-59f1fce066b2"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "b08f2b9c-c563-4bb7-b0cf-e17a5c0c0cdd"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "da910898-9e30-42d6-a2a2-f0fa5f3b2d3a"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "dbb89674-0dbf-4fc7-a82a-acbdb54581eb"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "dfc63d20-cbad-4027-a940-316efbefa98e"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "73f8577f-4fd4-40e7-83ab-97d5885581d1"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "a5117f21-8987-4d01-8c1e-37a0756237c3"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "bcbed100-1da5-4ef5-a8e5-08097e442f3a"
        }
      ],
      "id": "c715c33a-be66-46f5-abff-c37a7ebe2cdb"
    }
  ];
  res.send(response);
})

router.post('/add-movie', (req, res) => {
  // console.log(req.body);
  const data = req.body;
  isArr = Object.prototype.toString.call(data) == '[object Array]';
  console.log(isArr);
  if(isArr){
    for(let i = 0; i < data.length; i++ ){
      const movie = new Movies(data[i]);
      movie.save().then(() => {
        if(i==data.length-1){
          res.status(201).send(movie);
        }
        console.log("Saved Successfully");
      }).catch((err) => {
        if(i==data.length-1){
          res.send(err);
        }
        console.log(err)
      });
    }
    // res.status(201).send(movie);
  }
  else{
    const movie = new Movies(req.body);
    movie.save().then(() => {
      res.status(201).send(movie);
      console.log("Saved Successfully");
    }).catch((err) => {
      res.send(err);
      console.log(err)
    });
  }
})

router.get('/category/:id',(req,res)=>{
  var response = [
    {
      "title": "TV Drama",
      "moviesData": [
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "37dbcd46-00e4-4ce5-b42c-7a0346830f47"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "9c9ca7cd-7d82-41c8-84c3-1e0a399c561e"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "c15550a1-c65a-4688-a69c-ef18b75eb035"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "f1ab2266-38c2-48b0-8a37-7acf4fcb9e2d"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "ac7d94dd-8700-4c85-aad3-f2251a6bc43a"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "f8ca4c24-7029-45bf-a10f-a61c2c1f12df"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "80963cfa-4bf8-4fe5-b057-d83ac2f07638"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "0335d514-6256-4fc2-834d-c85794874c56"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "b03760d5-7bf3-4c62-8b3b-ca7158e2beef"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "56bf151f-2086-4dd1-b4eb-ffb0b174934c"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "4879f2c7-d2e9-45e0-8593-fa21d60219ba"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "83abde71-fe65-4e23-a013-f4f79226fb6d"
        }
      ],
      "id": "21df9343-4093-4383-9433-c1687187d86e"
    },
    {
      "title": "Trending Now",
      "moviesData": [
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "4bfd239d-db65-47f0-a38a-2788b24334fd"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "07c048bb-0428-4b16-bf7c-2ad30fc974d1"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "19cbd4ca-2b08-4739-ad86-601aca85f8b5"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "2e1fd8a0-45d9-47a8-a2c2-24032dbd5fbb"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "d4bdade1-0d89-4ccc-873b-494603436173"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "6937cd83-022a-4881-99d9-cf3f5532808e"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "cce51fda-8393-479a-9b28-4ab336082005"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "b2c158d8-d8d7-4244-83f6-8dfa62698d28"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "9ceb0c36-dece-4537-9b18-1e3a3238da4f"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "72009d5a-b00e-4c3d-88ce-9bcaa8a0bd4a"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "a5bcd218-c4a8-4e04-8165-f9131f9afd62"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "5aabc27b-c3bb-4988-9042-f31db49388bc"
        }
      ],
      "id": "3c0f3e8c-b3e5-4d8d-bcb5-ee120006bbcc"
    },
    {
      "title": "Made in India",
      "moviesData": [
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "76e028c7-c6ff-4289-ba75-5440cf9d7fab"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "01816805-2bca-48ee-b383-1da7b7ed54b3"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "01787aa1-e9d5-4402-8a84-6d4e2af81ee0"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "ed1ab427-b3c7-47dc-8a10-cd8aed0f85f5"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "b3d46c2f-3b92-4270-8730-b51e669596aa"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "d8d00449-9fd6-4deb-a4a6-5c0be4a8470b"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "347df934-f609-4ffe-8239-129e91f45cbc"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "491b06f7-0b34-4ee8-9be5-3c8eb8ba2abc"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "bdceacdb-3c8f-496a-b4da-ce2de990a86b"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "0eaebc63-4c56-4da5-9b87-67bac54e1016"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "9fea897b-6b67-435b-8068-7751eac86e37"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "6aa93a8d-0db9-49d7-b2c1-709f7cc84ac0"
        }
      ],
      "id": "0fdb1dce-073a-49fc-8422-8807c7c38fbb"
    },
    {
      "title": "Because you have watched Dracula",
      "moviesData": [
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "e823d907-2e13-427e-9e92-4e262bf99ab4"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "cafdf599-201a-43c8-8951-b638c486bcd3"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "8cedcbee-dab5-4c63-a134-8a1fc400e781"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "f447a489-466f-43bb-9fda-142f2748f095"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "dbf1e3a9-f438-4ae8-b6ce-17097d899fbb"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "118a74d6-bfe8-44f4-a533-622a755eaa37"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "7c19f962-2e37-4284-b219-423e8019eef8"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "c4dd81b1-f8bd-4369-9ddb-64db216024ed"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "9b7234cd-7c0d-4797-b78b-bc125c7ce31c"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "3b832a83-c0a2-48f1-8591-ef7796b70c18"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "55734821-2880-4df3-b61d-c95fca832d08"
        },
        {
          "img": "image url",
          "duration": "2h 20m",
          "certification": "U/A 13+",
          "genres": [
            "Romantic",
            "crime",
            "horror"
          ],
          "quality": "HD",
          "id": "e12f44ba-0f77-45c2-ae2a-dc9db6633e1b"
        }
      ],
      "id": "5ba4e802-0854-4203-9aef-cc69af5e754a"
    }
  ];
  res.send(response);
})

router.get('/random',async (req,res)=>{
  let typeQuery = Number(req.query.type);
  const genreQuery = req.query.genres;
  let movie;

  try{
    if(typeQuery && typeQuery!=0){
      if(genreQuery){
          movie = await Movies.aggregate([
            { $match: { showType: typeQuery, genres: genreQuery } },
            { $sample: { size: 1 } }
          ]);
          console.log(movie);
          res.send(movie);
      }
      else{
          movie = await Movies.aggregate([
              {$match:{showType:typeQuery}},
              {$sample:{size:1}}
          ]);
          res.send(movie);
      }
    }
    else{
      movie = await Movies.aggregate([{$sample:{size:1}}]);
      res.send(movie);
    }
  }
  catch(err){
    console.log(error);
    res.send(err);
  }
})

router.get('/:id', async (req,res)=>{
  let movieId = req.params.id;
  try{
      const movie =  await Movies.find({_id:movieId});
      console.log(movie);
      if(movie.length>0)
      {
          let response = {
              "statusCode":200,
              "msg":"Data found",
              "data":movie
          }
          res.send(response);
      }
      else
      {
          let response = {
              "statusCode":404,
              "msg":"Data not found"
          }
          res.send(response);
      }
  }catch(e){
      res.send(e);
  }
})
module.exports = router; 