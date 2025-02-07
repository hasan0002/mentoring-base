let usersData = [];

fetch("https://jsonplaceholder.typicode.com/users").then(function (response) {
    return response.json();
  }).then(function (data) {
    usersData = data;
    // outputIDusername(usersData);
    // getEmail(usersData);
    // outputID9(usersData);
    // outputUsersFrom(usersData);
    // output5Users(usersData);
    // outputReverseUsers(usersData)
    // countUsers(usersData);
    // outputSiteCom(usersData); 
    // usersMore12(usersData);
    // lowCaseUsers(usersData)
  });

// 1 способ
// 1 task
function outputIDusername(usersData){
    for (let i = 0; i < usersData.length; i++) {
        console.log(usersData[i].id,usersData[i].username);
    }
}
// 2 task
function getEmail(usersData){
    for (let i = 0; i < usersData.length; i++) {
        console.log(usersData[i].email);
    }
}
// 3 task
function outputID9(usersData){
    for (let i = 0; i < usersData.length; i++) {
        if(usersData[i].id === 9)
            console.log(usersData[i]);
    }
}
// 4 task
function outputUsersFrom(usersData){
    for (let i = 0; i < usersData.length; i++) {
        if(usersData[i].address.city === 'Lebsackbury')
            console.log(usersData[i]);
    }
}
// 5 task
function output5Users(usersData){
    for (let i = 0; i < usersData.length; i++) {
        if (usersData[i].id <= 5) 
            console.log(usersData[i]);
    }
}
// 6 task
function outputReverseUsers(usersData){
    for (let i = (usersData.length - 1); i >= 0; i--) {
        console.log(usersData[i]);
    }
}
// 7 task
function countUsers(usersData){
    let count = 0;
    for (let i = 0; i < usersData.length; i++) {
        count++;
    }
    console.log(count);
}
// 8 task
function outputSiteCom(usersData){
    for (let i = 0; i < usersData.length; i++) {
        if(usersData[i].website.match('.com'))
            console.log(usersData[i]);
    }
}
// 9 task
function usersMore12(usersData){
    for (let i = 0; i < usersData.length; i++) {
        if(usersData[i].username.length > 12)
            console.log(usersData[i]);
    }
}
// 10 task
function lowCaseUsers(usersData) {
    for (let i = 0; i < usersData.length; i++) {
        console.log(usersData[i].username.toLowerCase());
    }
    
}

// 2 способ
data = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]
const answer1 = data.map(el => ({id: el.id, username: el.username}));
const answer2 = data.map(el => ({email: el.email}));
const answer3 = data.find(el => el.id === 9);
const answer4 = data.filter(el => el.address.city === 'Lebsackbury');
const answer5 = data.slice(0, 5);
const answer6 = data.reverse()
const answer7 = data.length
const answer8 = data.filter (el => (el.website.match('.com')) )
const answer9 = data.filter (el => (el.username.length > 12))
const answer10 = data.map (el =>({ username: el.username.toLowerCase()}))
