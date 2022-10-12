<template>
    <v-input v-for="s in ['tiny', 'small', 'medium', 'large', 'huge']" :key="s" :class="s" :label="s" :widths="['30%', '70%']"></v-input>
    <div style="clear: both"></div>
    <v-input v-for="c in ['igloohome', 'info', 'success', 'warn', 'error']" :key="c" :class="c" :label="c" :widths="['30%', '70%']"></v-input>
    <div style="clear: both"></div>
    <v-input v-for="c in ['igloohome', 'info', 'success', 'warn', 'error']" :key="c" :class="c" borderd :label="c" :widths="['30%', '70%']"></v-input>
    <v-input label="deafult" placeholder="默认宽度各占50%" readonly></v-input>
    <v-input label="reverse" placeholder="反转" disabled></v-input>
    <v-input label="borderd" placeholder="设置边框" borderd></v-input>
    <v-input label="borderd" placeholder="设置边框" reverse borderd></v-input>
    <v-input label="Auto Focus" class="igloohome" borderd focus></v-input>
    <v-input label="ClearAble" class="igloohome" borderd clearable></v-input>
    <v-input type="date" label="自定义Label,Input样式" label_align="right" label_color="#fff" label_bg_color="#f3c" input_color="#f3c" input_bg_color="#3fc" :widths="['60%', '40%']"></v-input>
    <v-input :widths="['calc(100% - 50px)', '50px']" placeholder="自定义Label插槽" borderd reverse>
        <template #label><v-icon name="search"></v-icon></template>
    </v-input>
    <v-input :widths="['80px', 'calc(100% - 80px)']" class="info" placeholder="自定义Label插槽" borderd>
        <template #label><v-icon name="home"></v-icon> Https://</template>
    </v-input>
    <v-input :widths="['0', '100%']" class="info" placeholder="隐藏Label,将其宽度设置为0" borderd> </v-input>
</template>