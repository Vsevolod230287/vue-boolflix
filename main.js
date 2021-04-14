Vue.config.devtools = true;

var app = new Vue({

  el: '#root',
  data: {
    urlBase: 'https://image.tmdb.org/t/p/',
    films: [],
    title: '',
    arrStars: ['fas fa-star', 'far fa-star'],
  },
  methods: {
    searchFilm: function() {
      this.films = [];
      if (this.title == '') {
        this.title = "''";
      }
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '0019fe3454f31b1558a9dfb6c203ad5b',
          query: this.title,
          language: 'it-IT'
        }
      }).then((response) => {
        this.films = [...this.films, ...response.data.results]
      })
      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: '0019fe3454f31b1558a9dfb6c203ad5b',
          query: this.title,
          language: 'it-IT'
        }
      }).then((response) => {
        this.films = [...this.films, ...response.data.results]
      })
      this.title = '';
    },
    getTitle: function(film) {
      if (film.title) {
        return film.title;
      } else if (film.name) {
        return film.name;
      }
    },
    getOriginalTitle(film) {
      if (film.title) {
        return film.original_title;
      } else if (film.name) {
        return film.original_name;
      }
    },
    getVote: function(film) {
      console.log('ok');
      return Math.ceil(film.vote_average / 2);
    }


  }
})
