app.component('photo-item', {
  props: {
    pic: Object
  },

  template:
    /*html*/
    `
  <div class="ml-12 flex flex-col">
  <ul>
    <li>
      <button @click="showCanvas(pic.image)" v-on:dblclick="toggleDone(index)">
        <a href="#likePic"><img v-bind:src="pic.image" class="mt-8 hover:shadow " width="250"></a>
      </button>
      <p class="font-bold text-blue-800">{{pic.title}}
        <button v-on:click="toggleDone(pic.title)">
          <span v-show="!pic.done" class="material-icons text-gray-300 text-2xl">
            favorite
          </span>
          <span v-show="pic.done" class="material-icons text-red-500 text-2xl">
            favorite
          </span>
        </button>
      </p>
      <p>{{pic.description}}</p>
      <p>{{pic.description2}}</p>
    </li>
  </ul>
</div>
  `,
  methods: {
    // picSearch() {
    //   this.$emit('search-pic')
    // },
    showCanvas(picture) {
      this.$emit('show-canvas', picture)
    },
    toggleDone(text) {
      this.$emit('toggle-done', text)
    }

  }
})