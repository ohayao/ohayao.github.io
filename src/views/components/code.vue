<template>
    <pre :class="'language-' + language"><code :class="'language-'+language" v-html="html"></code></pre>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'v-code',
    props: {
        language: { type: String, default: 'autodec' },
        html: { type: String, default: '' }
    }
});
</script>
