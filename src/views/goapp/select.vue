<template>
    <div style="height: 100px">
        <v-select class="info small" placeholder="请选择一个" :options="list" v-model:checked="one" :listHeight="40"></v-select>
        <p>----单选 设置了列表高度---{{ one }}</p>
        <v-select class="error" placeholder="请选择多个" :options="list" v-model:checked="more" multi_able></v-select>
        <p>----多选---{{ more }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {},
    setup() {
        const list = [
            { text: '足球', value: 1 },
            { text: '蓝球', value: 2 },
            { text: '排球', value: 3 },
            { text: '气球', value: 4 },
            { text: '地球', value: 5 },
            { text: '眼球', value: 6 }
        ];
        const one = ref(),
            more = ref<[]>();

        return {
            list,
            one,
            more
        };
    }
});
</script>