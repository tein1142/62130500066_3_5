const app = Vue.createApp({
    data() {
        return {
            firstName: 'Pantavit',
            lastName: 'Hengnalen',
            role: 'Font-End developer',
            follow: 'Follow',
            imgProfile: 'images/profile.jpg',
            pics: [{
                    image: 'images/Cookie-Run-3.jpg',
                    title: 'คุกกี้รสนม',
                    description: 'ท็อปปิ้งแนะนำ : วอลนัตแข็ง / อัลมอนด์(เพิ่มพลังป้องกัน / ลดความเสียหาย)',
                    description2: 'ท็อปปิ้งทางเลือก : ถั่วลิสงเพื่อสุขภาพ (เพิ่มพลังชีวิต)'  ,
                    done: false,
                    show: false
                },
                {
                    image: 'images/Cookie-Run-1.jpg',
                    title: 'คุกกี้รสเอสเปรสโซ',
                    description: 'ท็อปปิ้งแนะนำ : ราสเบอร์รี่ร้อนแรง (เพิ่มพลังโจมตี)',
                    description2:'ท็อปปิ้งทางเลือก : ช็อกโกแลตชิพรสเข้ม (ลดคูลดาวน์)',
                    done: false,
                    show: false
                },
                {
                    image: 'images/Cookie-Run-2.jpg',
                    title: 'คุกกี้รสชะเอม',
                    description: 'ท็อปปิ้งแนะนำ : ช็อกโกแลตชิพรสเข้ม (ลดคูลดาวน์) ',
                    description2:'ท็อปปิ้งทางเลือก : ราสเบอร์รี่ร้อนแรง (เพิ่มพลังโจมตี)',
                    done: false,
                    show: false
                },
                {
                    image: 'images/Cookie-Run-4.jpg',
                    title: 'คุกกี้รสสมุนไพร ',
                    description: 'ท็อปปิ้งแนะนำ : ช็อกโกแลตชิพรสเข้ม (ลดคูลดาวน์) ',
                    description2:'ท็อปปิ้งทางเลือก : ราสเบอร์รี่ร้อนแรง (เพิ่มพลังโจมตี)',
                    done: false,
                    show: false
                },
                {
                    image: 'images/Cookie-Run-5.jpg',
                    title: 'คุกกี้สาวเจ้าป่า',
                    description: 'ท็อปปิ้งแนะนำ : ช็อกโกแลตชิพรสเข้ม (ลดคูลดาวน์)',
                    description2:'ท็อปปิ้งทางเลือก : ราสเบอร์รี่ร้อนแรง / เยลลี่แอปเปิ้ลฉํ่า (เพิ่มพลังโจมตี / อัตราคริติคอล) ',
                    done: false,
                    show: false
                },
            ],

            searchButton: false,
            searchField: '',
            canvasPic: ''
        }

    },

    methods: {
        toggleClear(){
            this.searchField = ''
        },
        toggleSearch() {
            this.searchButton = !this.searchButton
            
        },

        toggleDone(text) {
            const index = this.pics.findIndex(pic => pic.title == text)
            this.pics[index].done = !this.pics[index].done
        },

        showCanvas(picture) {
            this.canvasPic = picture;
        },

        closeCanvas() {
            this.canvasPic = '';
        }



    },
    computed: {
        countLike() {
            return this.pics.filter(p => p.done).length
        },

        searchPic() {
            return this.pics.filter(data => {
                return data.title.toLowerCase().includes(this.searchField.toLowerCase())
            })
        },
        noPic() {
            return this.pics.filter(data => {
                return data.title.toLowerCase().includes(this.searchField.toLowerCase())
            }).length
        }

    }

})
