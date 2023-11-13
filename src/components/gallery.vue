<template>
    <!-- card section -->
    <v-card elevation="0">
        <!-- 필터 영역 -->
        <v-card-text>
            <v-expansion-panels mandatory accordion flat multiple>
                <v-row>
                    <v-col v-for="g in groups" :key="`exp-tag.${g.group}`">
                        <v-expansion-panel flat>
                            <v-expansion-panel-header>
                                <span color="primary" class="font-subtitle">
                                {{ g.group }} 
                                </span>
                                <span v-if="g.selected" align="center" justify="center">
                                <template v-for="gt in g.selected">
                                    <v-chip  :key="`group-tag-${g.group}.${gt}`"
                                    close close-icon="mdi-close-circle"
                                    color="secondary" :title="gt"
                                    style="margin-left: 12px; max-width: 20vw;"
                                    @click:close="toggle_tag(g, gt)"
                                    @click.stop="toggle_tag(g, gt)">
                                    {{ gt }}
                                    </v-chip>
                                </template>
                                </span>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-chip-group>
                                <v-chip v-for="tg in g.items" :key="`exp-tag.${g.group}-${tg.id}`" 
                                :color="`${g.selected && g.selected.includes(tg.id) ? 'secondary' : 'default' }`" :title="tg.id" @click="toggle_tag(g,tg)">
                                    {{ tg.id }}
                                </v-chip>
                                </v-chip-group>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-col>
                </v-row>
            </v-expansion-panels>
        </v-card-text>
        <v-divider />
        <!-- 이미지 갤러리 영역 -->
        <v-item-group class="imgframe" ref="gallery_frame">
            <div class="mx-auto mx-2" :style="`display: flex; flex-direction: row; min-width: 100vh; width: ${filtered_images.length*320}px;`">
                <img class="img-item" v-for="(img,ii) in filtered_images" :key="`galery-img.${ii}`"
                    :src="img.asset" :title="img.desc" @click="selected=img" />
            </div>
        </v-item-group>
        

        <!-- dialog section -->
        <v-dialog v-if="selected" v-model="selected" fullscreen>
            <v-card>
                <v-toolbar flat>
                <v-toolbar-title>
                </v-toolbar-title>
                <v-spacer />
                <v-toolbar-items>
                    <v-chip color="secondary" v-for="tg in selected.tags" :key="`pop-image.${tg}`" class="mx-1 my-auto" style="opacity: .2">{{ tg }}</v-chip>
                </v-toolbar-items>
                <v-spacer />
                <v-toolbar-items>
                    <v-btn icon @click="selected = null"><v-icon>mdi-close</v-icon></v-btn>
                </v-toolbar-items>
                </v-toolbar>
                <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col class="ma-auto;">
                    <v-img :src="selected.asset" contain style="max-width: 90vw; max-height: 85vh; margin: auto;" @click="selected = null" />
                    </v-col>
                </v-row>
                </v-container>
                <v-card-text>
                {{ selected.desc }}
                </v-card-text>
            </v-card>
        
        </v-dialog>
    </v-card>
</template>

<script>
import data from '@/data'

const _tags = (im)=>(im.tags || '').split(',')
    .map((t)=>t.trim()).filter((t)=>t);
const _asset = (asset,base)=>`${base || '/gallery'}${asset}`;

export default {
    name: 'gallery',
    async created() {
        let gallery = await data.gallery;
        this.length = Math.max(this.length, gallery.count || 12);
        this.images = Object.entries(gallery.images)
            .map(([asset, it])=>Object.assign(it, 
                {asset:_asset(asset, gallery.folder),tags: _tags(it)}));
        this.groups = gallery.groups.map((g)=>({
            group: g.group,
            items: g.items,
            selected: [],
        }));
    },
    async mounted() {
        let gallery = this.$refs.gallery_frame.$el;

        setInterval(()=>{
            gallery.scrollLeft += 1;
            if(gallery.offsetWidth + gallery.scrollLeft + 10>=gallery.scrollWidth) {
                gallery.scrollLeft = 0;
            }
        }, 20);
    },
    methods: {
        toggle_tag(grp, tag) {
            if(grp.selected.includes(tag.id)) {
                grp.selected.splice(grp.selected.indexOf(tag.id), 1);
                window.dataLayer.push({event: 'ecf.tag.free', group: grp.group, tag: tag.id});
            } else {
                grp.selected.push(tag.id);
                window.dataLayer.push({event: 'ecf.tag.set', group: grp.group, tag: tag.id});
            }
        },
    },
    computed: {
        selected_tags() {
            return this.groups.reduce((agg, grp)=>{
                return agg.concat(grp.selected || []);
            }, []);
        },
        filtered_images() {
            // copy images 
            let basis = [].concat(...this.images);
            let filter_tags = this.selected_tags;
            if(0<filter_tags.length) {
                basis = basis.filter((img)=>
                    filter_tags.reduce((g,t)=>g&&img.tags.includes(t), true));
            }
            basis = basis.slice(0, this.length);
            basis.sort(()=>Math.random()-.5);
            return basis;

        },
    },
    data() {
        return {
            selected: null,
            groups: [],
            images: [],
            length: 12,
            language: 'ko',
        };
    }
}

</script>

<style scoped>
.imgframe {
    max-height: 50vh;
    overflow-x: auto;
}

.imgframe .img-item {
    width: 318px;
    height: 40vh;
    margin: 1px;
    object-fit: contain;
}

div.v-image.v-responsive {
  height: initial !important;
  max-width: 450px;
  max-height: 50vh;
}

.imgframe ::-webkit-scrollbar-thumb {
  background: #1D3E1F;
}

/* Handle on hover */
.imgframe ::-webkit-scrollbar-thumb:hover {
  background: #1D3E1F;
}

</style>