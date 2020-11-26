<template>
  <div class="container">
    <div>
      <Logo />
      <h2 class="title">今天你喝水了吗？</h2>
      <div>
        <a-input-number id="inputNumber" v-model="value" :min="0" @change="onChange" disabled />
        <span style="color: red">{{ value | status }}</span>
      </div>
      <div style="margin-top: 10px">
        <!-- <a-button @click="onSubtract" shape="circle" :disabled="value <= 0">-1</a-button> -->
        <a-button type="primary" @click="onPlus" style="margin-left: 5px" :disabled="value >= 12 || addDisabled">喝了+1</a-button>
      </div>
      <a-divider>记录</a-divider>
      <ol style="padding: 0;">
        <li v-for="(time, index) in todayData" :key="index" style="display: flex; justify-content: space-around; margin: 10px;">
          <span>{{ index + 1 }}.</span>
          <span>{{ time }}</span>
          <a @click="onRemove(time)"><a-icon type="minus-circle" /></a>
        </li>
      </ol>
      <!-- <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '~/store';
import { setTimeout } from 'timers';

let timer = null;

export default Vue.extend({
  data() {
    return {
      value: 0,
      todayData: [],
      addDisabled: false,
    };
  },
  filters: {
    status(val: number) {
      if (val <= 0) {
        return '今天又是一个新的开始哦！';
      }
      if (val < 4) {
        return '加油⛽️，健康饮水已经离你不远了！';
      }
      if (val < 8) {
        return '目标接近，再加把劲！💪！';
      }
      if (val <= 10) {
        return '目标已达成！🎉🎉🎉🎉🎉🎉';
      }
      return '不能再多了！看来你真的很渴！😱'
    }
  },
  mounted() {
    const todayData = store.getTodayData();
    this.todayData = todayData;
    this.value = todayData.length;
  },
  destroyed() {
    timer = null;
  },
  methods: {
    onChange(value: number) {
      console.log('changed', value);
    },
    onPlus() {
      store.add();
      this.addDisabled = true;
      timer = setTimeout(() => {
        this.addDisabled = false;
      }, 1000 * 10)
      const todayData = store.getTodayData();
      this.todayData = todayData;
      this.value = todayData.length;
    },
    onRemove(time: string) {
      store.remove(time);
      const todayData = store.getTodayData();
      this.todayData = todayData;
      this.value = todayData.length;
    },
    onSubtract() {
      if (this.value <= 0) {
        return;
      }
      this.value -= 1;
    },
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
