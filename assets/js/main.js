let app = new Vue ({
    el: "#app",
    data:{
        movies:null,
        search:""
    },
    methods:{
        searchFunc:function(){
            let apiOne = `https://api.themoviedb.org/3/search/movie?api_key=7eb147338689b7a3f2976a51bd64cbb5&query=${this.search}`;

            let apiTwo =`https://api.themoviedb.org/3/search/tv?api_key=7eb147338689b7a3f2976a51bd64cbb5&query=${this.search}`

            const requestapiONe = axios.get(apiOne);
            const requestapiTwo = axios.get(apiTwo);
            
            axios.all([requestapiONe,requestapiTwo]).then(axios.spread(response => {
                //console.log(response.data.results);
               this.movies =response.data.results;
               //console.log(this.movies); 
               //console.log(this.search);
               this.movies.forEach(element => {
                  let voteAver = Math.ceil(element.vote_average / 2);
                  //console.log(voteAver);
                  element.vote_average = voteAver; 
               });
            }))
        },

        

        
    }
})