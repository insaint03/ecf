<template>
  <screen-template>
    <template #subpanel>
      <v-list flat outlined active-class="active" class="d-none d-md-block">
        <v-list-item @click.stop="tag_selected=false">
          <v-list-item-title>모든 꽃</v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item selectable v-for="tg in tags" :key="`tag-list.${tg.code}`" :title="tg.text"
          @click.stop="tag_selected = tg">
          <v-list-item-title>
            <template v-if="tag_selected!=tg">{{tg.ko}}</template>
            <template v-else>{{tg.en}}</template>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
    <template #mainpanel>
      <v-menu offset-y>
        <template #activator="{on}">
          <v-btn class="d-inline d-md-none" fab dark color="primary" v-on="on" 
            v-show="!show_dialog"
            style="position: fixed; right: 32px; bottom: 32px; z-index: 980;">
            <v-icon>mdi-filter</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item dense @click.stop="tag_selected=null">
            <v-list-item-title>모든 꽃</v-list-item-title>
            <v-list-item-subtitle>Show All</v-list-item-subtitle>
          </v-list-item>
          <v-divider />
          <v-list-item dense v-for="tg in tags" :key="`tag-list.menu.${tg.code}`" @click="tag_selected=tg" >
            <v-list-item-title>{{ tg.ko }}</v-list-item-title>
            <v-list-item-subtitle>{{ tg.en }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-item-group>
        <v-row>
          <v-col v-for="(img, ii) in images" 
            :key="`gallery-img.${ii}`" 
            cols="2" md="3" sm="6"
            v-show="!tag_selected || img.tags.includes(tag_selected.code)"
            style="width: 100%; overflow: hidden;">
            <v-item>
              <v-img :src="img.asset" :title="img.desc" 
                @click.stop="img_selected=img" />
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>

      <v-dialog v-model="show_dialog" class="stretch">
        <v-card v-if="show_dialog" style="z-index: 999;">
          <div align="center" justify="center">
            <img :src="img_selected.asset"
              style="max-height: 75vh;" 
              />
          </div>
          <v-card-text>{{ img_selected.desc }}</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="img_selected=null" text>OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </screen-template>
</template>
 
<script>
import gallerySettings from '@/assets/gallery/gallery'

export default {
  path: 'flower',
  name: 'flower',
  routeTitle: '꽃',
  watch: {
    show_dialog() {
      window.console.log(this.img_selected);
    }
  },
  computed: {
    show_dialog: {
      get() { return this.img_selected != null },
      set(v) { if(!v) return this.img_selected = null },
    }
  },
  data() {
    return Object.assign({
      tag_selected: null,
      img_selected: null,
      tags: [],
      images: [],
    }, gallerySettings);
  }
}
</script>


<style>

div.v-dialog {
  width: initial;
}

</style>