app.component('photo-item', {
  props: {
    pic: Object
  }
  ,
  tamplate: `<div class="ml-12 flex flex-col">
    <div>
      <ul>
        <li>
          <button @click="canvasShow(pic.image)" v-on:dblclick="doneToggle(index)">
           <a href="#likePic"><img v-bind:src="pic.image" class="mt-8 hover:shadow " width="250"></a> 
          </button>
          <p class="font-bold text-blue-800">{{pic.title}}
            <button v-on:click="doneToggle(pic.title)">
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
    </div>


    </li>
    </ul>
  </div> `,
  methods: {
    picSearch() {
      this.$emit('search-pic')
    },
    canvasShow(picture) {
      this.$emit('show-canvas', picture)
    },
    doneToggle(text) {
      this.$emit('toggle-done', text)
    }

  }
})