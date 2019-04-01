<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>¿Estas seguro de quere borrar este libro?</h3>
          <p>Título: {{ this.element.title }}</p>
          <p>Descripción: {{ this.element.description }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col">

          <b-button v-on:click="deleteBook" variant="danger">Eliminar</b-button>
          <b-button type="submit" class="btn-large-space" :to="{ name: 'ListBook' }">Cancelar</b-button>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import swal from 'sweetalert'
    export default {
        data (){
          return {
            bookId: this.$route.params.bookId,
            element: {
              title: '',
              description: ''
            }
          }
        },
      methods: {
          getBook () {
        const path = `http://localhost:8000/api/v1.0/books/${this.bookId}/`

        axios.get(path).then((response) => {

          this.element.title = response.data.title
          this.element.description = response.data.description


        })
        .catch((error) => {
          console.log(error)
        })

      },
        deleteBook(){
          const path = `http://localhost:8000/api/v1.0/books/${this.bookId}/`

          axios.delete(path).then((response) => {
            swal("Libro eliminado!", "", "success")
            location.href = '/books'
          })
            .catch((error) => {
              swal("No es Posible eliminar el libro", "", "error")
            })
        }

    },
    created(){
        this.getBook()
       }

    }
</script>

<style scoped>

</style>
