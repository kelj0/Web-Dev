const app = new Vue({
  el: '#app',
  data: {
    username: '',
    usr:'',
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
      this.usr = this.username;
      this.repurl += this.username +'/repos';
      this.search=true;
      this.commits = {};
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
      this.info = '';
      axios
      .get(this.repurl)
      .then(response =>(
        this.info = response.data
      ));
      this.mode = 'repos';
    },
    getFollowers(){
      this.info = '';
      axios
        .get(this.url+'/followers')
        .then(response =>(
          this.info = response.data
      ));
      this.mode = 'followers';
    },
    getFollowing(){
      this.info = '';
      axios
        .get(this.url+'/following')
        .then(response =>(
          this.info = response.data
      ));
      this.mode = 'following';
    },
    getCommits(){
      this.info = [];
      this.sorted = false;
      axios
        .get(this.repurl)
        .then(response=>{
          for(let element of response.data){
            axios
              .get((element.commits_url).slice(0,-6))
              .then(resp=>{
                for(let com of resp.data){
                  console.log(element)
                  let date = new Date(com.commit.committer.date);
                  let rurl = com.html_url;      
                  if(Math.abs(date.getDate()-(new Date).getDate())<3 && date.getMonth()==(new Date).getMonth())
                    this.info.push({date:date.toLocaleString(),url: rurl, msg:com.commit.message,rname:element.name,rurl:element.html_url});
                }
              })
          };
        })
      this.mode = 'commits';
    }
  },
  mounted: function(){
      this.info.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
      })
    } 
})
