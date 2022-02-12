<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(card,index) in cardList" :key="index">
        <v-skeleton-loader elevation="2" v-if="loading" type="card-heading,card,actions"></v-skeleton-loader>
        <v-card height="100%" v-else :loading="card.loading">
          <template slot="progress">
            <v-progress-linear color="primary" height="10" indeterminate></v-progress-linear>
          </template>
          <v-card-title>{{card.title}}</v-card-title>
          <v-img height="250" :src="card.img" gradient="to top right, rgba(100,115,201,.1), rgba(25,32,72,.1)"></v-img>
          <v-card-text>{{card.text}}</v-card-text>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined rounded color="primary" @click="go(card.url)" :disabled="!card.url||new Date().getTime()<new Date('2020/12/10 18:00:00').getTime()">{{card.btnText}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-skeleton-loader v-if="loading" type="image"></v-skeleton-loader>
    <v-sparkline v-else :value="sparkLineData.value" :gradient="sparkLineData.gradient" :smooth="sparkLineData.radius || false" :padding="sparkLineData.padding" :line-width="sparkLineData.width" :stroke-linecap="sparkLineData.lineCap" :gradient-direction="sparkLineData.gradientDirection" :fill="sparkLineData.fill" :type="sparkLineData.type" :auto-line-width="sparkLineData.autoLineWidth" auto-draw></v-sparkline>
  </div>
</template>

<script lang="ts">
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  private cardList = [
    {
      loading: false,
      img: require('@/assets/img/note.png'),
      title: '个人笔记网站',
      text: '记录日常的各种笔记',
      url: 'http://note.heifahaizei.com',
      btnText: '去看看'
    },
    {
      loading: false,
      img: require('@/assets/img/ai.png'),
      title: 'AI项目',
      text: '一个图片处理的ai项目',
      url: 'http://ai.heifahaizei.com',
      btnText: '去看看'
    },
    {
      loading: false,
      img: require('@/assets/img/component/longscroll.gif'),
      title: 'npm组件 vue-long-scroll',
      text: '基于vue长列表优化无限滚动(只3d渲染视窗内元素)。',
      url: 'https://github.com/YangJianFei/vue-long-scroll',
      btnText: '去看看'
    },
    {
      loading: false,
      img: require('@/assets/img/docker.png'),
      title: 'docker镜像 superset',
      text: '基于apache/superset制作的镜像，已汉化、开放公共权限、iframe嵌套等。开箱即用',
      url: 'https://hub.docker.com/repository/docker/heifahaizei/superset.apache',
      btnText: '围观'
    },
    {
      loading: false,
      img: require('@/assets/img/fireworks.gif'),
      title: '一起来看烟花',
      text: '原生三件套打造的烟花效果。',
      url: 'https://fireworks.heifahaizei.com',
      btnText: '我也要看烟花'
    },
    {
      loading: false,
      img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      title: '敬请期待',
      text: '......................',
      url: '',
      btnText: '看不了'
    },
  ];
  private sparkLineData = {
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false
  }
  private loading = true;

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  private go(url) {
    if (this.$tool.verifyUrl(url)) {
      window.open(url);
    } else {
      this.$router.push({
        path: url
      });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
