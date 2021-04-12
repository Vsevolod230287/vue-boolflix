 // parametri query e api_key e language=it-IT
 //  Creare un layout base con una searchbar (una input e un button) in cui possiamo
 // scrivere completamente o parzialmente il nome di un film.  Cliccando il
 // bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
 // Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
 // film trovato:
 // 1. Titolo
 // 2. Titolo Originale
 // 3. Lingua
 // 4. Voto

 Vue.config.devtools = true;

 var app = new Vue({

   el: '#root',
   data: {
     films: [],
     title: '',
   },
   methods: {
     searchFilm: function() {
       if(this.title == ''){
         this.title = "''";
       }
       axios.get('https://api.themoviedb.org/3/search/movie', {
         params: {
           api_key: '0019fe3454f31b1558a9dfb6c203ad5b',
           query: this.title,
           language: 'it-IT'
         }
       }).then((response) => {
         this.films = response.data.results
         this.title = '';
       })

     }

   }
 })
