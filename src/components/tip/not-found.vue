<template>
  <div class="tx-center grey--text">
    <template v-if="type=='page'">页面不知所踪</template>
  </div>
</template>
<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {
  @Prop({ default: 'page', type: String }) type!: string;
}
</script>