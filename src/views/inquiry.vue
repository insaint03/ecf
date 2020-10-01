<template>
  <screen-template>
    <template #subpanel>
      <v-tooltip right>
        <template #activator="{on}">
          <v-btn v-on="on" fab target="_blank" href="https://pf.kakao.com/_KYqDT/chat">
            <v-icon>mdi-chat</v-icon>
          </v-btn>
        </template>
        <div>지금 바로 카카오챗 상담하세요</div>
      </v-tooltip>
    </template>
    <template #mainpanel>
      <v-card flat>
        <v-toolbar dark dense>
          <v-toolbar-title>자주 묻는 질문 / FAQ</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                주문하고 나면 언제쯤 받아 볼 수 있나요?
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                취운화의 꽃은 주문 제작을 기반으로, 통상 준비와 제작에 <i>3-7일</i>이 소요됩니다.<br />
                재료인 꽃 수급 상황에 따라 일정이 유동적일 수 있으니, 꼭 충분한 시간을 두고 주문 부탁 드립니다.
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                서울 수도권만 배송 가능한가요?
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                일반적으로 그렇습니다. 운반이 어려운 꽃의 특성상 장거리 운송이나 택배는 지원하지 않습니다<br />
                강남/성남 지역을 중심으로 차량 1-2시간 내외 냉장 운송이 가능한 거리를 대상으로 하고 있습니다.<br />
                단, 취급 주문에 따라 대응 가능하니, 자세한 내용은 필히 문의 바랍니다.
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                최소 주문 금액이 있나요?
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                취운화의 꽃은 주문 제작 방식이기 때문에 배송비 제외, 합산 7만원 이상 주문을 받고 있습니다 <br />
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                수업은 언제 시작하나요?
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                내 맴입니다.
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                주문제작만 가능한가요?
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                네, 그렇습니다! 취운화는 현재 주문 제작만 받고 있습니다.
              </v-expansion-panel-content>
            </v-expansion-panel>

          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </template>
  </screen-template>
</template>
 
<script>
export default {
    path: 'inquiry',
    name: 'inquiry',
    routeTitle: '문의',
    data() {
      return {
      }
    }
}
</script>