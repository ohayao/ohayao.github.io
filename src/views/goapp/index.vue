<template>
    <div style="margin: 10px">
        <div class="model" v-for="(component, index) in components" :key="index">
            <div class="component">
                <component :is="component.com" />
            </div>
            <div class="code">
                <button class="btnSource" @click="view_source(index)">查看源码</button>
                <v-code v-show="!component.is_hide" language="html" :html="htmlString(component.code)"></v-code>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import input from './input.vue';
import inputHTML from './input.vue?raw';
import toast from './toast.vue';
import toastHTML from './toast.vue?raw';

import code from '../components/code.vue';

import 'prismjs';
const Prism = (window as any).Prism;
const { highlight } = Prism;
const { html } = Prism.languages;
export default defineComponent({
    components: {
        'v-code': code
    },
    setup() {
        const components = reactive([
            { com: input, code: inputHTML, is_hide: true },
            { com: toast, code: toastHTML, is_hide: true }
        ]);
        return {
            components,
            inputHTML,
            highlight,
            html,
            htmlString: (sourceCode: string): string => {
                const res = highlight(sourceCode, html, 'html');
                return res;
            },
            view_source: (index: number) => {
                components[index].is_hide = !components[index].is_hide;
            }
        };
    }
});
</script>

<style lang="less">
div.model {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    border: solid 1px #ccc;

    div.component {
        width: 100%;
        overflow: hidden;
        .v-input {
            width: 310px;
            margin: 5px;
            float: left;
        }
        button {
            width: 135px;
            height: 40px;
            margin: 10px;
        }
    }
    div.code {
        width: 100%;
        clear: both;
        border-top: dotted 1px #ccc;
        margin-top: 20px;
        margin-bottom: 20px;
        position: relative;
        > button.btnSource {
            border: dotted 1px #ccc;
            outline: none;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%) translateY(-20px);
            height: 40px;
            width: 120px;
            background-color: #fff;
            color: #000;
            box-shadow: 0 0 10px #fff;
            cursor: pointer;
            &:hover {
                border-color: #f3c;
            }
        }
        > pre {
            margin-top: 30px;
        }
    }
}
</style>