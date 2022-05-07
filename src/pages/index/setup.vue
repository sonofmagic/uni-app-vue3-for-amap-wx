<template>
    <view>
        <view class="section">
            <input @input="bindInput" placeholder="搜索" focus="true" />
        </view>
        <view :key="tip.id" v-for="tip in tips" @click="bindSearch(tip)" class="text_box">
            {{ tip.name }}
        </view>
    </view>
</template>

<script setup>

import { ref } from 'vue'
import amapFile from '../../lib/amap-wx.130.js'
const tips = ref([])
const myAmapFun = new amapFile.AMapWX({ key: import.meta.env.VITE_AMAP_KEY });
const bindSearch = (item) => {

    const url = '../poi/poi?keywords=' + item.name;
    console.log(url)
    uni.redirectTo({
        url: url
    })
}
const bindInput = (e) => {
    const keywords = e.detail.value;
    myAmapFun.getInputtips({
        keywords: keywords,
        location: '',
        success: (data) => {
            if (data && data.tips) {
                tips.value = data.tips
                // that.setData({
                //   tips: data.tips
                // });
            }
        }
    })
}

</script>

<style lang="scss">
.section {
    height: 30px;
    width: 100%;
}

.section input {
    width: 90%;
    margin: 5px auto;
    border: 1px solid #c3c3c3;
    height: 30px;
    border-radius: 3px;
    padding: 0 5px;
}

.text_box {
    margin: 10px 25px;
    border-bottom: 1px solid #c3c3c3;
    padding-bottom: 10px
}
</style>
