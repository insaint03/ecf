<template>
  <v-container>
    <v-row>
      <template v-if="0<running.length">
        <v-col cols="12" md="6" lg="4" v-for="(cls,ci) in running" :key="`classes.${ci}`"
          v-show="is_active(cls)">
          <v-card elevation="1" @click="go(cls)" style="cursor: pointer">
            <v-toolbar dark color="primary">
              <v-toolbar-title class="font-subtitle">{{ cls.title }}</v-toolbar-title>
              <v-spacer />
              <v-toolbar-items v-if="cls.period && (cls.period.from || cls.period.till)">
                <v-icon>mdi-calendar</v-icon>
                <p style="margin:auto;">
                  <span>{{ cls.period.from || '' }}</span><br />
                  </span>~ {{ cls.period.till || '' }}</span>
                </p>
              </v-toolbar-items>
            </v-toolbar>
              <v-img v-if="cls.image" :src="cls.image" />
              <v-skeleton-loader v-else type="image, article" />
            <v-card-text>
              <p>{{ cls.desc  }}</p>
            </v-card-text>
            <v-card-actions>
              <v-chip-group v-if="cls.tags">
                <v-chip v-for="tag,ti in cls.tags" :key="`cls.tag.${ci}-${ti}`">{{ tag }}</v-chip>
              </v-chip-group>
              <v-spacer />
              <v-btn icon color="primary"><v-icon>{{ cls.text || 'mdi-arrow-right-bold' }}</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
      <template v-else>
        <v-spacer />
        <v-col >
          <v-subheader>신청 가능한 수업이 없습니다</v-subheader>
          <v-skeleton-loader type="image, article" />
        </v-col>
        <v-spacer />
      </template>
    </v-row>

    <!-- 양식 링크 -->
    <v-dialog v-if="active" v-model="active" fullscreen>
      <v-card>
        <v-toolbar flat dense>
          <v-spacer />
          <v-toolbar-items>
              <v-btn icon @click="active = null"><v-icon>mdi-close</v-icon></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col class="d-sm-none d-md-block" md="3">
              <h2>{{ active.title  }}</h2>
              <p>&nbsp;</p>
              <p>
                <v-img :src="active.image" />
              </p>
              <p>&nbsp;</p>
              <p>
                {{  active.desc }}
              </p>
            </v-col>
            <v-col cols="12" md="9">
              <iframe class="class_registration" :src="active.link" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>
 
<script>
import data from '@/data';

export default {
    path: 'class',
    name: 'class',
    routeTitle: '수업',
    async created() {
      let settings = await data.settings;
      this.clss = settings.classes;
      console.log(this.clss);
    },
    methods: {
      is_active(cls) {
        if(cls.period) {
          let pfrom = cls.period.from ? new Date(cls.period.from) : new Date();
          let ptill = cls.period.till ? new Date(cls.period.till) : new Date();
          let now = new Date();
          console.log(cls.title, pfrom.toLocaleDateString(), ptill.toLocaleDateString(), now.toLocaleDateString(), now <= ptill,  pfrom <= now);
          return now <= ptill && pfrom <= now;
        }
        return true;
      },
      go(cls) {
        if(this.is_active(cls) && cls.link) {
          this.active = cls;
        } else {
          window.alert('준비중입니다!');
        }
      }
    },
    computed: {
      running() {
        return this.clss.filter(this.is_active);
      }
    },
    data() {
        return {
            clss: [],
            active: null,
        }
    }
}
</script>

<style scoped>
iframe.class_registration {
  width: 100%;
  padding: 0px;
  margin: 0px;
  border: none;
  min-height: 80vh;  
}
</style>