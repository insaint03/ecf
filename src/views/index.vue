<template>
  <screen-template>
    <template #subpanel>
      <v-sheet style="min-width: 280px;">
        <v-subheader>취운화;</v-subheader>
        <div align="center" justify="center">
          <img  src="/logo.rect.png" />
        </div>
        <div>
          취운화 is
        </div>
      </v-sheet>
    </template>
    <template #mainpanel>
      
      <v-carousel cycle hide-delimiter-background interval="1e4" 
        show-arrows-on-hover dark>
        <v-carousel-item 
          v-for="(s,si) in slides" :key="`index.slide-${si}`"
          v-bind="s">
          <img  :src="s.asset" style="max-width: 100%; max-height: 100%;" />
        </v-carousel-item>
      </v-carousel>
    </template>

  </screen-template>
</template>
 
<script>
import slides from '@/assets/slides/slides'

export default {
  path: '/',
  name: 'index',
  data() {
    return {
      slides,
    }
  }
}
</script>

<style>
div.v-carousel {
  width: 100%;
  height: initial !important;
}
div.v-image.v-responsive {
  height: initial !important;
}
</style>