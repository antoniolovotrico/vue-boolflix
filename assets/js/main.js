let app = new Vue ({
    el: "#app",
    data:{
      movies:null,
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
      seeInput:true
    },
    methods:{
        showFunc:function(){
          this.seeInput = false;
          console.log(this.seeInput);
            
        },
        clearFunc:function(){
            this.seeInput = true;
        },

        searchFunc:function(){
          let clear = this.search.split("");
          if (clear.length > 0) {
            let apiOne = `https://api.themoviedb.org/3/search/movie?api_key=7eb147338689b7a3f2976a51bd64cbb5&query=${this.search}`;

            let apiTwo =`https://api.themoviedb.org/3/search/tv?api_key=7eb147338689b7a3f2976a51bd64cbb5&query=${this.search}`;

            const requestapiONe = axios.get(apiOne);
            const requestapiTwo = axios.get(apiTwo);
            
            axios.all([requestapiONe,requestapiTwo]).then(axios.spread((...response) => {
                //console.log(response.data.results);
                const responseapiOne = response[0].data.results;
                const responseapiTwo = response[1].data.results;
                //console.log(responseapiOne);
                //console.log(responseapiTwo);
                this.movies = responseapiOne.concat(responseapiTwo);
                
                console.log(this.movies); 
                //console.log(this.search);
                this.movies.forEach(element => {
                    let voteAver = Math.ceil(element.vote_average / 2);
                    //console.log(voteAver);
                    element.vote_average = voteAver;
                    //console.log(element.original_language);
                    if (element.original_language == "en") {
                        element.original_language = "gb";
                      } else if (element.original_language == "fa") {
                        element.original_language = "ir";
                      } else if (element.original_language == "zh") {
                        element.original_language = "cn";
                      } else if (element.original_language == "ja"){
                        element.original_language = "jp";
                      } else if (element.original_language == "ko") {
                        element.original_language = "kr";
                      } else if (element.original_language == "da"){
                        element.original_language = "dk";
                      } else if (element.original_language == "vi"){
                        element.original_language = "vn";
                      } else if (element.original_language == "et"){
                        element.original_language = "ee";
                      } else if (element.original_language == "hu"){
                        element.original_language = "ua";
                      } else if (element.original_language == "nn"){
                        element.original_language = "no";
                      } else if (element.original_language == "cs"){
                        element.original_language = "cz";
                      } else if (element.original_language == "he"){
                        element.original_language = "il";
                      } else if (element.original_language == "hi"){
                        element.original_language = "in";
                      } else if (element.original_language == "uk"){
                        element.original_language = "ua";
                    };       
               });
            })) 
          }     
        },
    },
})