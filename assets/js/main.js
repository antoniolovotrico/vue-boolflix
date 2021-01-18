let app = new Vue ({

  el: "#app",
  data:{
    shows:[],
    genres:[],
    search:"",  
    codeFlag:["ae",
    "af",
    "ag",
    "ai",
    "al",
    "am",
    "an",
    "ao",
    "aq",
    "ar",
    "as",
    "at",
    "au",
    "aw",
    "ax",
    "az",
    "ba",
    "bb",
    "bd",
    "be",
    "bf",
    "bg",
    "bh",
    "bi",
    "bj",
    "bl",
    "bm",
    "bn",
    "bo",
    "br",
    "bs",
    "bt",
    "bw",
    "by",
    "bz",
    "ca",
    "cc",
    "cd",
    "cf",
    "cg",
    "ch",
    "ci",
    "ck",
    "cl",
    "cm",
    "cn",
    "co",
    "cr",
    "ct",
    "cu",
    "cv",
    "cw",
    "cx",
    "cy",
    "cz",
    "de",
    "dj",
    "dk",
    "dm",
    "do",
    "dz",
    "ec",
    "ee",
    "eg",
    "eh",
    "er",
    "es",
    "et",
    "eu",
    "fi",
    "fj",
    "fk",
    "fm",
    "fo",
    "fr",
    "ga",
    "gb",
    "gd",
    "ge",
    "gg",
    "gh",
    "gi",
    "gl",
    "gm",
    "gn",
    "gq",
    "gr",
    "gs",
    "gt",
    "gu",
    "gw",
    "gy",
    "hk",
    "hn",
    "hr",
    "ht",
    "hu",
    "ic",
    "id",
    "ie",
    "il",
    "im",
    "in",
    "iq",
    "ir",
    "is",
    "it",
    "je",
    "jm",
    "jo",
    "jp",
    "ke",
    "kg",
    "kh",
    "ki",
    "km",
    "kn",
    "kp",
    "kr",
    "kw",
    "ky",
    "kz",
    "la",
    "lb",
    "lc",
    "li",
    "lk",
    "lr",
    "ls",
    "lt",
    "lu",
    "lv",
    "ly",
    "ma",
    "mc",
    "md",
    "me",
    "mf",
    "mg",
    "mh",
    "mk",
    "ml",
    "mm",
    "mn",
    "mo",
    "mp",
    "mq",
    "mr",
    "ms",
    "mt",
    "mu",
    "mv",
    "mw",
    "mx",
    "my",
    "mz",
    "na",
    "nc",
    "ne",
    "nf",
    "ng",
    "ni",
    "nl",
    "no",
    "np",
    "nr",
    "nu",
    "nz",
    "om",
    "pa",
    "pe",
    "pf",
    "pg",
    "ph",
    "pk",
    "pl",
    "pn",
    "pr",
    "ps",
    "pt",
    "pw",
    "py",
    "qa",
    "re",
    "ro",
    "rs",
    "ru",
    "rw",
    "sa",
    "sb",
    "sc",
    "sd",
    "se",
    "sg",
    "sh",
    "si",
    "sk",
    "sl",
    "sm",
    "sn",
    "so",
    "sr",
    "ss",
    "st",
    "sv",
    "sx",
    "sy",
    "sz",
    "tc",
    "td",
    "tf",
    "tg",
    "th",
    "tj",
    "tk",
    "tl",
    "tm",
    "tn",
    "to",
    "tr",
    "tt",
    "tv",
    "tw",
    "tz",
    "ua",
    "ug",
    "us",
    "uy",
    "uz",
    "va",
    "vc",
    "ve",
    "vg",
    "vi",
    "vn",
    "vu",
    "wf",
    "ws",
    "ye",
    "yt",
    "za",
    "zm",
    "zw"],
    seeInput:true,
    research:true,
    },
  methods:{ 
    //Function to show input field search
    showFunc:function(){
      this.seeInput = false;
    },
    //Function to hide input field search
    clearFunc:function(){
        this.seeInput = true;
    },
    //Function to search movie and tvShows based on input field search
    searchFunc:function(){

      //condition split the search imput word and active all the method only if key word is > 1
      let clear = this.search.split("");
      if (clear.length > 0) {

        //Hide cinema background
        this.research = false;
        //declare variables for Api Urls 
        let searchMovieApi = `https://api.themoviedb.org/3/search/movie?api_key=7eb147338689b7a3f2976a51bd64cbb5&query=${this.search}`;

        let searchTvApi =`https://api.themoviedb.org/3/search/tv?api_key=7eb147338689b7a3f2976a51bd64cbb5&query=${this.search}`;

        let genreMovieApi = `https://api.themoviedb.org/3/genre/movie/list?api_key=7eb147338689b7a3f2976a51bd64cbb5`;

        let genreTvApi =`https://api.themoviedb.org/3/genre/tv/list?api_key=7eb147338689b7a3f2976a51bd64cbb5`;

        //declare constant for every get request to do on the api
        const requestSearchMovieApi = axios.get(searchMovieApi);
        const requestSearchTvApi = axios.get(searchTvApi);
        const requestGenreMovieApi = axios.get(genreMovieApi);
        const requestGenreTvApi = axios.get(genreTvApi);
        
        //do all get request in one time with axios.all
        axios.all([requestSearchMovieApi,requestSearchTvApi,requestGenreMovieApi,requestGenreTvApi]).then(response => {

          //declare constant of all the response of api server with needed data
          const responseSearchMovieApi = response[0].data.results;
          const responseSearchTvApi = response[1].data.results;
          const responseGenreMovieApi = response[2].data.genres;
          const responseGenreTvApi = response[3].data.genres;
          
          //use this.$set method to add dynamically new properties to shows and genres data property
          this.$set(this.shows,"movie",responseSearchMovieApi);
          this.$set(this.shows,"tv",responseSearchTvApi);
          this.$set(this.genres,"movieList",responseGenreMovieApi);
          this.$set(this.genres,"tvList",responseGenreTvApi);
          
          //Created An Array list with only IDS of all genres
          let movieListId = [];
          this.genres.movieList.forEach((elemento ,index) => {
            movieListId.push(elemento.id);
          })  
                
          //Created An Array list with only Name of all genres(set to work without manual condition but still not implemented)
          let movieListName = [];
          this.genres.movieList.forEach((elemento ,index) => {
            movieListName.push(elemento.name);
          })  
            
          //Cycle forEach inside array of array genre_ids inside movie
          this.shows.movie.forEach((element,i) => {

            //Set inside the correct Cycle the new properties of movie element(not implemented)
            this.$set(this.shows.movie[i],"movieListId",movieListId); 
            this.$set(this.shows.movie[i],"movieListName",movieListName);  
            
            //Cycle forEach inside array of genre_ids to check every single element
            this.shows.movie[i].genre_ids.forEach((arr,w) =>{
              
              //Manual condition to switch Ids in Name
              if (arr == "28"){
                this.shows.movie[i].genre_ids.splice(w,1,"Action");
              }
              if (arr == "12"){
                this.shows.movie[i].genre_ids.splice(w,1,"Adventure");
              }
              if (arr == "16"){
                this.shows.movie[i].genre_ids.splice(w,1,"Animation");
              }
              if (arr == "35"){
                this.shows.movie[i].genre_ids.splice(w,1,"Comedy");
              }
              if (arr == "80"){
                this.shows.movie[i].genre_ids.splice(w,1,"Crime");
              }
              if (arr == "99"){
                this.shows.movie[i].genre_ids.splice(w,1,"Documentary");
              }
              if (arr == "18"){
                this.shows.movie[i].genre_ids.splice(w,1,"Drama");
              }
              if (arr == "10751"){
                this.shows.movie[i].genre_ids.splice(w,1,"Family");
              }
              if (arr == "14"){
                this.shows.movie[i].genre_ids.splice(w,1,"Fantasy");
              }
              if (arr == "36"){
                this.shows.movie[i].genre_ids.splice(w,1,"History");
              }
              if (arr == "10402"){
                this.shows.movie[i].genre_ids.splice(w,1,"Music");
              }
              if (arr == "9648"){
                this.shows.movie[i].genre_ids.splice(w,1,"Mystery");
              }
              if (arr == "10749"){
                this.shows.movie[i].genre_ids.splice(w,1,"Romance");
              }
              if (arr == "878"){
                this.shows.movie[i].genre_ids.splice(w,1,"Science Fiction");
              }
              if (arr == "10770"){
                this.shows.movie[i].genre_ids.splice(w,1,"TV Movie");
              }
              if (arr == "53"){
                this.shows.movie[i].genre_ids.splice(w,1,"Thriller");
              }
              if (arr == "10752"){
                this.shows.movie[i].genre_ids.splice(w,1,"War");
              }
              if (arr == "37"){
                this.shows.movie[i].genre_ids.splice(w,1,"Western");
              }     
            })
    
            //Change vote_average from 0-10 to 0-5 
            let voteAver = Math.ceil(element.vote_average / 2);
            element.vote_average = voteAver;
            
            //Manual condition to switch code not inside codeFlag Array
            if (element.original_language == "en") {
              element.original_language = "gb";
            } else if (element.original_language == "fa") {
              element.original_language = "ir";
            } else if (element.original_language == "zh") {
              element.original_language = "cn";
            } else if (element.original_language == "ja") {
              element.original_language = "jp";
            } else if (element.original_language == "ko") {
              element.original_language = "kr";
            } else if (element.original_language == "da") {
              element.original_language = "dk";
            } else if (element.original_language == "vi") {
              element.original_language = "vn";
            } else if (element.original_language == "et") {
              element.original_language = "ee";
            } else if (element.original_language == "hu") {
              element.original_language = "ua";
            } else if (element.original_language == "nn") {
              element.original_language = "no";
            } else if (element.original_language == "cs") {
              element.original_language = "cz";
            } else if (element.original_language == "he") {
              element.original_language = "il";
            } else if (element.original_language == "hi") {
              element.original_language = "in";
            } else if (element.original_language == "uk") {
              element.original_language = "ua";
            };

            //single api request to have back cast in movie
            axios.get(`https://api.themoviedb.org/3/movie/${element.id}/credits?api_key=7eb147338689b7a3f2976a51bd64cbb5`)
            .then(response => {

              let movieCastApi = response.data.cast.slice(0,5);
              let movieCast=[];
              //forEach Api cast actors of movies
              movieCastApi.forEach(actors => {
                movieCast.push(actors.name);
              })

              //use this.$set method to add dynamically movieCast property to shows.movie
              this.$set(this.shows.movie[i],"movieCast",movieCast);   
            })       
          })
          
          //Cycle forEach inside array of array genre_ids inside TvShows
          this.shows.tv.forEach((element,i) => {

            //Cycle forEach inside array of genre_ids to check every single element
            this.shows.tv[i].genre_ids.forEach((arr,w) =>{
              
              //Manual condition to switch Ids in Name
              if (arr == "10759"){
                this.shows.tv[i].genre_ids.splice(w,1,"Action & Adventure");
              }
              if (arr == "16"){
                this.shows.tv[i].genre_ids.splice(w,1,"Animation");
              }
              if (arr == "35"){
                this.shows.tv[i].genre_ids.splice(w,1,"Comedy");
              }
              if (arr == "80"){
                this.shows.tv[i].genre_ids.splice(w,1,"Crime");
              }
              if (arr == "99"){
                this.shows.tv[i].genre_ids.splice(w,1,"Documentary");
              }
              if (arr == "18"){
                this.shows.tv[i].genre_ids.splice(w,1,"Drama");
              }
              if (arr == "10751"){
                this.shows.tv[i].genre_ids.splice(w,1,"Family");
              }
              if (arr == "10762"){
                this.shows.tv[i].genre_ids.splice(w,1,"Kids");
              }
              if (arr == "9648"){
                this.shows.tv[i].genre_ids.splice(w,1,"Mystery");
              }
              if (arr == "10763"){
                this.shows.tv[i].genre_ids.splice(w,1,"News");
              }
              if (arr == "10764"){
                this.shows.tv[i].genre_ids.splice(w,1,"Reality");
              }
              if (arr == "10765"){
                this.shows.tv[i].genre_ids.splice(w,1,"Sci-Fi & Fantasy");
              }
              if (arr == "10766"){
                this.shows.tv[i].genre_ids.splice(w,1,"Soap");
              }
              if (arr == "10767"){
                this.shows.tv[i].genre_ids.splice(w,1,"Talk");
              }
              if (arr == "10768"){
                this.shows.tv[i].genre_ids.splice(w,1,"War & Politics");
              }
              if (arr == "37"){
                this.shows.tv[i].genre_ids.splice(w,1,"Western");
              }     
            })

            //Change vote_average from 0-10 to 0-5 
            let voteAver = Math.ceil(element.vote_average / 2); 
            element.vote_average = voteAver;

            //Manual condition to switch code not inside codeFlag Array
            if (element.original_language == "en") {
              element.original_language = "gb";
            } else if (element.original_language == "fa") {
              element.original_language = "ir";
            } else if (element.original_language == "zh") {
              element.original_language = "cn";
            } else if (element.original_language == "ja") {
              element.original_language = "jp";
            } else if (element.original_language == "ko") {
              element.original_language = "kr";
            } else if (element.original_language == "da") {
              element.original_language = "dk";
            } else if (element.original_language == "vi") {
              element.original_language = "vn";
            } else if (element.original_language == "et") {
              element.original_language = "ee";
            } else if (element.original_language == "hu") {
              element.original_language = "ua";
            } else if (element.original_language == "nn") {
              element.original_language = "no";
            } else if (element.original_language == "cs") {
              element.original_language = "cz";
            } else if (element.original_language == "he") {
              element.original_language = "il";
            } else if (element.original_language == "hi") {
              element.original_language = "in";
            } else if (element.original_language == "uk") {
              element.original_language = "ua";
            };

            //single api request to have back cast in tv
            axios.get(`https://api.themoviedb.org/3/tv/${element.id}/credits?api_key=7eb147338689b7a3f2976a51bd64cbb5`)
            .then(response => {

              let tvCastApi = response.data.cast.slice(0,5);
              let tvCast=[];
              //forEach Api cast actors of tv
              tvCastApi.forEach(actors =>{
                tvCast.push(actors.name)
              })

              //use this.$set method to add dynamically tvCast property to shows.tv
              this.$set(this.shows.tv[i],"tvCast",tvCast);     
            })
          })
        });
        console.log(this.shows);    
      }         
    }              
  }                
})