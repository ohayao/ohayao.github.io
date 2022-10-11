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
        <br />
        <div style="clear: both"></div>
        <v-input v-for="s in size" :key="s" :class="s" :label="s" :widths="['30%', '70%']"></v-input>
        <div style="clear: both"></div>
        <v-input v-for="c in color" :key="c" :class="c" :label="c" :widths="['30%', '70%']"></v-input>
        <div style="clear: both"></div>
        <v-input v-for="c in color" :key="c" :class="c" borderd :label="c" :widths="['30%', '70%']"></v-input>
        <div style="clear: both">{{ inputValueNumber }}-{{ inputValueString }}</div>
        <v-input label="deafult" placeholder="默认宽度各占50%" readonly></v-input>
        <v-input label="reverse" placeholder="反转" disabled></v-input>
        <v-input label="borderd" placeholder="设置边框" v-model="inputValueString" borderd></v-input>
        <v-input label="borderd" placeholder="设置边框" v-model="inputValueString" reverse borderd></v-input>
        <v-input label="Auto Focus" class="igloohome" v-model="inputValueNumber" borderd focus></v-input>
        <v-input label="ClearAble" class="igloohome" v-model="inputValueNumber" borderd clearable></v-input>
        <v-input
            style="width: 100%"
            type="date"
            label="自定义Label,Input样式"
            label_align="right"
            label_color="#fff"
            label_bg_color="#f3c"
            input_color="#f3c"
            input_bg_color="#3fc"
            :widths="['60%', '40%']"
        ></v-input>
        <v-input style="width: 100%" :widths="['calc(100% - 50px)', '50px']" placeholder="自定义Label插槽" borderd reverse>
            <template #label><v-icon name="search"></v-icon></template>
        </v-input>
        <v-input style="width: 100%" :widths="['80px', 'calc(100% - 80px)']" class="info" placeholder="自定义Label插槽" borderd>
            <template #label><v-icon name="home"></v-icon> Https://</template>
        </v-input>
        <v-input style="width: 100%" :widths="['0', '100%']" class="info" placeholder="隐藏Label,将其宽度设置为0" borderd> </v-input>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, createApp } from 'vue';
import { useStore } from 'vuex';
import { key } from '../vuex/example';
import { types } from 'goapp';
export default defineComponent({
    components: {},
    setup(props, context) {
        const example = useStore(key);
        const showshow = () => {};
        const msgtoast = inject('Message.Toast') as types.MessageToast;
        let tps = '';
        const size = ref(['tiny', 'small', 'medium', 'large', 'huge']),
            color = ref(['igloohome', 'info', 'success', 'warn', 'error']);
        const inputValueString = ref<string>('Hello'),
            inputValueNumber = ref<number>(0);
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
            msgtoast,
            size,
            color,
            inputValueString,
            inputValueNumber
        };
    }
});
</script>

<style lang="less">
#abc {
    width: 600px;
    margin: 100px auto;
    button {
        float: left;
        width: 150px;
        margin: 15px;
        padding: 10px;
    }
    .v-input {
        width: 300px;
        float: left;
        margin-top: 10px;
        padding: 0 5px;
    }
}
</style>