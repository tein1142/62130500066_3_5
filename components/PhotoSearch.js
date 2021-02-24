app.component('photo-search', {
  props: {
    button: Boolean,
    field: String
  },
  emits:['update:field'],
  template: `
  <div class="">
    <div class="flex justify-end">
      <button><span v-show="!button" @click="search"
          class="material-icons mt-4 text-4xl">search</span></button>
    </div>
    <div v-show="button" class="mt-4 flex justify-center">
      <input class="border-2 w-1/2" :value='field' @input=$emit('update:field',$event.target.value) 
      type="text" placeholder="Search something...">
      <button @click="clear"
        class="rounded-full hover:bg-red-400 bg-green-500 p-2 text-1xl ml-2 font-bold">Clear</button>
      <button @click="search"
        class="rounded-full bg-green-500 hover:bg-red-400 p-2 text-1xl ml-2 font-bold">Close</button>
    </div>
  </div>
  `,
  methods: {
    search() {
      this.$emit('start-search')
    },
    clear() {
      this.$emit('start-clear')
    },

  }
})