let app = new Vue ({
    el: "#app",
    data:{
        movies:null,
        search:"",
        
    },
    methods:{
        searchFunc:function(){
            let apiOne = `https://api.themoviedb.org/3/search/movie?api_key=7eb147338689b7a3f2976a51bd64cbb5&query=${this.search}`;

            let apiTwo =`https://api.themoviedb.org/3/search/tv?api_key=7eb147338689b7a3f2976a51bd64cbb5&query=${this.search}`;

            const requestapiONe = axios.get(apiOne);
            const requestapiTwo = axios.get(apiTwo);
            
            axios.all([requestapiONe,requestapiTwo]).then(axios.spread(response => {
                console.log(response.data.results);
                this.movies = response.data.results;
                //console.log(this.movies); 
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
                      }

                    
               });
            }))
        },

        

        
    }
})