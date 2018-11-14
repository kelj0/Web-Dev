const app = new Vue({
  el: '#app',
  data: {
    username: '',
    bio: '',
    url: '',
    repurl: '',
    mode: '',
    search: false,
    info: null,
  },
  methods: {
    getInfo(){
      this.url = 'https://api.github.com/users/';
      this.repurl = 'https://api.github.com/users/';
      this.url += this.username;
      this.repurl += this.username +'/repos';
      this.search=true;
      axios
        .get(this.url)
        .then(response => (
          this.username = response.data.login,
          this.bio = response.data.bio,
          document.getElementById('avatar').src = response.data.avatar_url,
          document.getElementById('avatar').width= 240,
          document.getElementById('avatar').height= 240
         )); 
      this.getRepos();
    },
    getRepos(){
      axios
      .get(this.repurl)
      .then(response =>(
        this.info = response.data
      ));
      this.mode = 'repos';
    },
    getFollowers(){
      axios
        .get(this.url+'/followers')
        .then(response =>(
          this.info = response.data
      ));
      
      this.mode = 'followers';
    },
    getFollowing(){
      axios
        .get(this.url+'/following')
        .then(response =>(
          this.info = response.data
      ));
      this.mode = 'following';
    },
    getCommits(){
      //TODO
      this.mode = 'commits';
    }
  }, 
})