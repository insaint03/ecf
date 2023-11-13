<template>
  <v-container>
    <!-- grid gallery -->
    <v-row>
      <v-col>
        <gallery />
      </v-col>
    </v-row>

    <v-divider />

    <!-- about 취운화 -->
    <v-row>
      <v-col>
        <about />
      </v-col>
    </v-row>
  </v-container>
</template>
 
<script>
import gallery from '@/components/gallery'
import about from '@/components/about'

export default {
  path: '/',
  name: 'index',
  components: {
    gallery,
    about,
  },
  computed: {
    selected_tags() {
      return this.tags.map((grp)=>grp.selected)
        .filter((ts)=>ts&& 0<ts.length);
    },
    filtered_images() {
      let basis = Object.assign([],this.images);

      if(0<this.selected_tags.length) {
        basis = basis.filter((img)=>
            this.selected_tags.reduce((g,ts)=> g && ts.reduce((ig,t)=>ig || img.tags.includes(t.ko), false), true))
      }
      return basis.sort(()=>Math.random()-.5);
    },
    gallery() {
      return this.filtered_images
        .slice(0, galleryMax);
    },
  },
  methods: {
    enable_tag(tag) {
      return this.filtered_images
        .reduce((g,im)=>g || im.tags.includes(tag.ko), false);
    },
    toggle_tag(grp, tag) {
      // toggle
      if(grp.selected && grp.selected.includes(tag)) {
        grp.selected.splice(grp.selected.indexOf(tag), 1);
        window.dataLayer.push({event: 'ecf.tag.free', group: grp.grp, tag: tag.ko});
      } else {
        if(!grp.selected) grp.selected = [];
        grp.selected.push(tag);
        window.dataLayer.push({event: 'ecf.tag.set', group: grp.grp, tag: tag.ko});
      }
      // update binding
      this.tags = Object.assign([], this.tags);
    },
    
  },
  data() {
    return {
      hover_image: null,
      branding: {},
      logo: null,
    }
  }
}
</script>
<style>

.break-hint {
  white-space: nowrap;
  word-break: keep-all;
  word-wrap: normal;
}


</style>