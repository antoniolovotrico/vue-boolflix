let app = new Vue ({
    el: "#app",
    data:{
        movies:null,
        search:""
    },
    methods:{
        searchFunc:function(){
            
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7eb147338689b7a3f2976a51bd64cbb5&query=${this.search}`)
            .then(response => {
                //console.log(response);
               this.movies =response.data.results;
               console.log(this.movies); 
               console.log(this.search);
            })
        },

        

        
    }
})