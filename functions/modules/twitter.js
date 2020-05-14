require('dotenv').config();
const Twit = require('promised-twit');

const T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  });

class Tweet {
    constructor(){
        this.name = "Hello Tweet!"
    }

    sayHi(){
        return this.name
    }

    // getFollowers(){
    //     T.get('followers/list', { screen_name: 'lewismunyi' }, (err, data, response) => {
    //         if(!err){
    //         console.log(data.users)
    //         }
    //       });
    // }

    async follow(){
      try {
        let {data} = await T.postFriendshipsCreate({screen_name: 'lewismunyi'});
        console.log(data);
        return data;
      } catch (e) {
        console.log(e.message);
        return e.message;
      }
      // await T.postFriendshipsCreate({screen_name: 'naderdabit'})
      //   .then((data)=>{
      //     console.log(data);
      //     return data;
      //   })
      //   .catch((error)=>{
      //     console.log(error.message);
      //     return error.message;
      // });

      // await T.post('friendships/create', {screen_name: 'lewismunyi'}, (err, data, response) => {
      //   if(err) {
      //     console.log(err.message);
      //     text = err.message;
      //   }
      // });
      // console.log(err.message);
      // return text;
    }
}

module.exports = Tweet;
