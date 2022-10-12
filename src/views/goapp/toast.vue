<template>
    <div id="abc">
        <button v-for="p in ['tl', 'tc', 'tr', 'ml', 'mc', 'mr', 'bl', 'bc', 'br']" :key="p" @click="click(p)"><v-icon name="home"></v-icon>Position [{{ p }}]</button>
        <br />
        <button v-for="p in ['info', 'warn', 'success', 'error', '']" :key="p" @click="clicks(p)"><v-icon name="home"></v-icon>Type [{{ p }}]</button>
        <button @click="msgtoast('hello world')">Default</button>
        <button
            @click="
                msgtoast({
                    content: 'callback',
                    close_callback: () => {
                        msgtoast('what are you doing?');
                    }
                })
            "
        >
            Callback
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { types } from 'goapp';
export default defineComponent({
    components: {},
    setup(props, context) {
        const msgtoast = inject('Message.Toast') as types.MessageToast;
        let tps = '';
        return {
            click: (p: string) => {
                let param: types.ConfigToast = {};
                param.direction = p;
                param.content = 'Hello world!!!';
                param.type = tps;
                if (Math.random() > 0.8)
                    param.close_callback = () => {
                        msgtoast('callback ...');
                    };
                msgtoast(param);
            },
            clicks: (t: string) => {
                tps = t;
            },
            msgtoast
        };
    }
});
</script>