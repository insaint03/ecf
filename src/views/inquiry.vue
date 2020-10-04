<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" xl="4">
        <v-card elevation="0">
          <v-toolbar dark flat color="primary">
            <v-toolbar-title class="font-subtitle" style="font-weight: 300;">취운화 연락처 / Contacts</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-icon>mdi-phone</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-list>
              <v-subheader>채널 취운화 구독하세요</v-subheader>
              <v-list-item v-for="ch in socials" :key="`subs-channel.${ch.channel}`" 
                target="_blank" :href="ch.href" color="primary" :title="ch.channel">
                <v-list-item-avatar><v-icon color="secondary">{{ ch.icon }}</v-icon></v-list-item-avatar>
                <v-list-item-title>{{ ch.channel }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-divider />
            <v-subheader>지금 바로 주문/문의 주세요</v-subheader>
            <v-list>
              <v-list-item title="카카오톡 채널 문의"
                target="_blank" href="https://pf.kakao.com/_KYqDT/chat">
                <v-list-item-avatar><v-icon color="primary">mdi-chat</v-icon></v-list-item-avatar>
                <v-list-item-title>카카오톡 채널 문의</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" lg="6" xl="4">
        <v-card elevation="0">
          <v-toolbar dark flat color="primary">
            <v-toolbar-title class="font-subtitle" style="font-weight: 300;">주문 안내</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-icon>mdi-go-kart</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-expansion-panels popout flat mandatory>
              <v-expansion-panel>
                <v-expansion-panel-header>주문하신 꽃에 맞게 포장되어 배달됩니다</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="6"><v-img :src="guide_images.first.left" /></v-col>
                    <v-col cols="6"><v-img :src="guide_images.first.right" /></v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>부케는 종이포장 없이 박스에 담아 드립니다</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col>
                      <v-img :src="guide_images.second" />
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>&lt;꽃 관리&gt; &lt;꽃 이름&gt; 카드가 동봉됩니다</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col><v-img :src="guide_images.third" /></v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" lg="6" xl="4">
        <v-card elevation="0">
          <v-toolbar dark flat color="primary">
            <v-toolbar-title class="font-subtitle" style="font-weight: 300;">자주 묻는 질문</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
              <v-icon>mdi-help</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-expansion-panels popout flat mandatory>
              <v-expansion-panel>
                <v-expansion-panel-header>꽃 주문은 어떻게 하나요?</v-expansion-panel-header>
                <v-expansion-panel-content align="left">
                  <ul>
                    <li>꽃이 필요하신 날짜로부터 3-7일 전에 카카오톡으로 <a target="blank" href="https://pf.kakao.com/_KYqDT/chat">연락 주세요</a>. 받는 분이 좋아하시는 색감, 취향 그리고 원하시는 가격대 등을 미리 말씀 주시면 더욱 편하게 주문하실 수 있습니다</li>
                    <li>웨딩 꽃은 최소 수 주, 시간 여유를 두고 연락 주시는 편이 좋습니다. 원하시는 색감, 드레스와 결혼식장과 같은 주변 정보를 알려 주시면 더욱 잘 어울리는 조합을 찾기 수월합니다.</li>
                    <li>공간 세팅, 광고 촬영 등 프로젝트성 의뢰는 이메일 <a target="blank" href="mailto:emerald.cloud.flower@gmail.com">emerald.cloud.flower@gmail.com</a> 보내 주시면 빠른 회신 드리겠습니다.</li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>꽃은 어떻게 받아 볼 수 있나요?</v-expansion-panel-header>
                <v-expansion-panel-content align="left">
                  작업실 (경기도 성남시 분당구) 픽업이 기본이나, 픽업이 어려우신 분들은 배송이 가능합니다. 성남지역 15,000원 / 그 밖의 서울, 경기 수도권 지역은 20,000원 내외의 배송비가 발생합니다. 상품 특성상 택배 배송은 불가능하며, 퀵배송만 가능합니다.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>최소 주문 금액이 있나요?</v-expansion-panel-header>
                <v-expansion-panel-content align="left">
                  취운화의 꽃은 모두 주문 제작 방식이기 때문에 <b>7만원 이상</b>부터 주문이 가능합니다
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>주문 제작만 가능한가요?</v-expansion-panel-header>
                <v-expansion-panel-content align="left">
                  네, 현재로서는 주문 제작만으로 운영하고 있습니다.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>수업은 안 하시나요?</v-expansion-panel-header>
                <v-expansion-panel-content align="left">
                  당장은 아니지만, 취운화 만의 색깔이 담긴 커리큘럼이 정리되면 수업을 열 계획입니다.
                </v-expansion-panel-content>
              </v-expansion-panel>

            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
 
<script>
import logo_raster from '@/assets/logo.png'
import channels from '@/channels'
import questionares from '@/faq'

import guide01Left from '@/assets/guide.01.01.jpg'
import guide01Right from '@/assets/guide.01.02.jpg'
import guide02 from '@/assets/guide.02.01.jpg'
import guide03 from '@/assets/guide.03.01.jpg'

export default {
    path: 'inquiry',
    name: 'inquiry',
    routeTitle: '문의',
    data() {
      return {
        socials: channels,
        logo_image: logo_raster,
        faq: questionares,
        guide_images: {
          first: {
            left: guide01Left, 
            right: guide01Right,
          },
          second: guide02,
          third: guide03,


        }
      }
    }
}
</script>