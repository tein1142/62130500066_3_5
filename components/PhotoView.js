app.component('photo-view',{
    props:{
        pictureCanvas:String,

    },
    template:
    `
    <div id="canvas" v-show="pictureCanvas" class="bg-black">
          <div class="flex justify-end">
            <button @click="canvasExit" class="mr-4 mt-2">
              <span class="material-icons text-white rounded rounded-full bg-red-500">
                close
              </span>
            </button>
          </div>
          <div class="flex justify-center">
            <img class="mb-10" v-bind:src="pictureCanvas" width="400">
          </div>
        </div>
    `,
    methods:{
        canvasExit(){
            this.$emit('canvas-exit')
        }
    }



}) 