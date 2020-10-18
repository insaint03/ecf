<template>
  <v-container>
    <!-- grid gallery -->
    <v-row>
      <v-col>
        <v-card elevation="0">
          <v-item-group class="imgframe" style="min-height: 60vh; max-height: 150vh; overflow-y: auto;">
            <v-row class="mx-auto mx-2">
              <template v-if="0<gallery.length">
                <template v-for="(img,ii) in gallery">
                  <v-col cols="12" sm="6" md="4" lg="3" xl="2" :key="`gallery-img.${ii}`">
                    <v-img :src="img.asset" :title="img.desc" @click="selected_image=img" />
                  </v-col>
                </template>
              </template>
              <template v-else>
                <v-col cols="12" align="center" justify="center" style="height: 100%;">
                  <h3 class="font-title my-auto" style="opacity: .6; height: 100%; padding-top: 25vh;">선택한 조건의 이미지가 없습니다</h3>
                </v-col>
              </template>
            </v-row>
          </v-item-group>
          <v-card-text>
            <v-divider />
            <!-- selected tabs -->
            <v-expansion-panels mandatory accordion flat multiple>
              <v-expansion-panel v-for="g in tags" :key="`exp-tag.${g.grp}`" flat>
                <v-expansion-panel-header>
                  <span color="primary" class="font-subtitle">
                    {{ g.grp }} 
                  </span>
                  <span v-if="g.selected" align="center" justify="center">
                    <template v-for="gt in g.selected">
                      <v-chip  :key="`group-tag-${g.grp}.${gt.en}`"
                        close close-icon="mdi-close-circle"
                        color="secondary" :title="gt.en"
                        style="margin-left: 12px; max-width: 20vw;"
                        @click:close="toggle_tag(g, gt)"
                        @click.stop="toggle_tag(g, gt)">
                        {{ gt.ko }}
                      </v-chip>
                    </template>
                  </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-chip-group>
                    <v-chip v-for="tg in g.tags" :key="`exp-tag.${g.grp}-${tg.ko}`" 
                    :color="`${g.selected && g.selected.includes(tg) ? 'secondary' : 'default' }`" :title="tg.en" @click="toggle_tag(g,tg)">
                      {{ tg.ko }}
                    </v-chip>
                  </v-chip-group>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider />

    <!-- about 취운화 -->
    <v-row>
      <v-col>
        <v-card elevation="0">
          <v-card-text>
            <v-row class="mx-auto mx-2">
              <v-col cols="12" md="6" lg="4">
                <img :src="logo" width="60%" style="max-width: 256px;" />
              </v-col>
              <v-col cols="12" v-if="is_iphone()">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                  <h2 class="font-title" color="primary" style="width: 100%; max-width: 96vw; text-align: center; line-height: 1.5em; font-size: 20px;">
                    꽃과 풀 열매로<br />크고 작은 공간을 구성합니다
                  </h2>
                  <p>&nbsp;</p>
                  <div style="width: 100%; max-width: 95vw; text-align: center;" class="font-subtitle">
                    <p>
                      푸른빛 구름이라는 뜻을 지닌 <br/>
                      <span style="color: primary; font-weight: 900;">'취운'</span>은 저의 오랜 이름입니다.<br/>
                      푸르게 빛나다 자연스럽게 흩어지는 구름처럼,<br/>
                      피어나고 사라지는 꽃들의<br/>
                      가장 아름다운 때를 전해드리고 싶습니다<br/>
                    </p>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="6" lg="8" v-else-if="is_ipad()">
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                  <h2 class="font-title" color="primary" style="width: 100%; max-width: 90vw; text-align: center; line-height: 1.5em;">
                    꽃과 풀 열매로 크고 작은 공간을 구성합니다
                  </h2>
                  <p>&nbsp;</p>
                  <div style="width: 100%; max-width: 95vw; text-align: center;" class="font-subtitle">
                    <p>
                      푸른빛 구름이라는 뜻을 지닌 <span style="color: primary; font-weight: 900;">'취운'</span>은 저의 오랜 이름입니다.<br/>
                      푸르게 빛나다 자연스럽게 흩어지는 구름처럼,<br/>
                      피어나고 사라지는 꽃들의 가장 아름다운 때를 전해드리고 싶습니다<br/>
                    </p>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="6" lg="8"  v-else>
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                  <h2 class="font-title" color="primary" style="width: 100%; max-width: 90vw; text-align: center; line-height: 1.5em;">
                    <span class="break-hint">꽃과 풀 열매로</span> 
                    <span class="break-hint"> 크고 작은 공간을 구성합니다</span>
                  </h2>
                  <p>&nbsp;</p>
                  <div style="width: 100%; max-width: 95vw; text-align: center;" class="font-subtitle">
                    <p>
                      <span class="break-hint">푸른빛 구름이라는 뜻을 지닌 </span>
                      <span class="break-hint"><span style="color: primary; font-weight: 900;">'취운'</span>은 저의 오랜 이름입니다.</span><br />
                      <span class="break-hint"> 푸르게 빛나다 자연스럽게 흩어지는 구름처럼,</span>
                      <span class="break-hint"> 피어나고 사라지는 꽃들의</span>
                      <span class="break-hint"> 가장 아름다운 때를 전해드리고 싶습니다</span>
                    </p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="$router.push('/inquiry')" text outlined large color="primary" class="font-title"><v-icon>mdi-chat</v-icon> 문의하러 가기</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-if="show_image_dialog" v-model="show_image_dialog" fullscreen>
      <v-card>
        <v-toolbar flat>
          <v-toolbar-title>
          </v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <v-chip color="secondary" v-for="tg in selected_image.tags" :key="`pop-image.${tg}`" class="mx-1 my-auto" style="opacity: .2">{{ tg }}</v-chip>
          </v-toolbar-items>
          <v-spacer />
          <v-toolbar-items>
            <v-btn icon @click="show_image_dialog = false"><v-icon>mdi-close</v-icon></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col class="ma-auto;">
              <v-img :src="selected_image.asset" contain style="max-width: 90vw; max-height: 85vh; margin: auto;" @click="show_image_dialog = false" />
            </v-col>
          </v-row>
        </v-container>
        <v-card-text>
          {{ selected_image.desc }}
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>
 
<script>
import gallerySettings from '@/assets/gallery/gallery'
import logo_raster from '@/assets/logo.512.png'
const galleryMax = 24;

export default {
  path: '/',
  name: 'index',
  watch: {
    selected_image() {
      if(this.selected_image!=null)
        window.dataLayer.push(Object.assign({}, this.selected_image, {event: 'ecf.image.pop'}));
      else
        window.dataLayer.push({event: 'ecf.image.dispose'});
    }
  },
  computed: {
    show_image_dialog: {
      get() { return this.selected_image && true; },
      set(v) { if(!v) this.selected_image = null },
    },
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
    is_iphone() {
      return /^(iPhone)/i.test(window.navigator.platform)
    },
    is_ipad() {
      return /^(iPad)/i.test(window.navigator.platform)
    }
  },
  data() {
    return {
      selected_image: null,
      hover_image: null,
      tags: Object.assign([],gallerySettings.tags),
      images: gallerySettings.images,
      logo: logo_raster,
    }
  }
}
</script>

<style>
div.v-carousel {
  width: 100%;
  height: initial !important;
  min-height: 50vh;
}
div.v-image.v-responsive {
  height: initial !important;
  max-height: 75vh;
}

.break-hint {
  white-space: nowrap;
  word-break: keep-all;
  word-wrap: normal;
}

.imgframe ::-webkit-scrollbar-thumb {
  background: #1D3E1F;
}

/* Handle on hover */
.imgframe ::-webkit-scrollbar-thumb:hover {
  background: #1D3E1F;
}

</style>