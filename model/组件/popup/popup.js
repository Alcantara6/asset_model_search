Component({
    properties: {
        options: {
            type: Object
        },
        msg: {
            type: String
        }
    },
    externalClasses: ['wx-radio-input'],
    data: {
    },
    options: {
        multipleSlots: true
    },
    methods:{
        onClose() {
            this.triggerEvent('close');
        },
        change() {
            this.setData({msg: ''});
        },
        confirm(e) {
            let chosen = e.detail.value.radioOpt;
            this.triggerEvent('confirmSuc', chosen);
        }
    }
})
