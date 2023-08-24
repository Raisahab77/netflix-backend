const { v4: uuidv4 } = require('uuid');
let data = [
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

// function addKeyValue(obj, key, data){
// obj[key] = data;
// }

// let myuuid = uuidv4();
// let newinfo = data.map(function(data) {
// return addKeyValue(data, 'id', myuuid);
// });

for(let i=0; i<data.length;i++){
    let myuuid = uuidv4();
    data[i]['id'] = myuuid;
    for(let j=0; j<data[i].moviesData.length;j++){
        let myuuid = uuidv4();
        data[i].moviesData[j]['id'] = myuuid;
    }
    // console.log(data);
}

// console.log(JSON.parse(data));
console.log(JSON.stringify(data));