Vue.config.devtools = true;

var app = new Vue({

  el: '#root',
  data: {
    menu: 'su',
    x: false,
    uriMovie: 'https://api.themoviedb.org/3/search/movie',
    uriTv: 'https://api.themoviedb.org/3/search/tv',
    urlBase: 'https://image.tmdb.org/t/p/',
    api_key: '0019fe3454f31b1558a9dfb6c203ad5b',
    language: 'it-IT',
    films: [],
    inputTitle: '',
    arrStars: ['fas fa-star', 'far fa-star'],
  },
  methods: {
    searchFilm: function() {
      this.films = [];
      if (this.inputTitle == '') {
        this.inputTitle = "''";
      }

      axios.get(`${this.uriMovie}?api_key=${this.api_key}&query=${this.inputTitle}&language=${this.language}`)
        .then((response) => {
          this.films = [...this.films, ...response.data.results]
          this.x = false;
          if (this.films.length == 0) {
            this.x = true;
          }
        })
      axios.get(`${this.uriTv}?api_key=${this.api_key}&query=${this.inputTitle}&language=${this.language}`)
        .then((response) => {
          this.films = [...this.films, ...response.data.results]
          this.x = false;
          if (this.films.length == 0) {
            this.x = true;
          }

        })

      this.inputTitle = '';
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
      return Math.ceil(film.vote_average / 2);
    },
    getDropMenu: function() {
      if(this.menu === 'su'){
        document.querySelector('ul').classList.add("show");
        this.menu = 'giu';
      }else {
        document.querySelector('ul').classList.remove("show");
        this.menu = 'su';
      }

    }


  }
})
