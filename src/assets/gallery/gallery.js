import rect01 from './rect_01.jpg'
import rect02 from './rect_02.jpg'
import rect03 from './rect_03.jpg'
import rect04 from './rect_04.jpg'
import rect05 from './rect_05.jpg'
import rect06 from './rect_06.jpg'
import rect07 from './rect_07.jpg'
import sq01 from './sq_01.jpg'
import sq02 from './sq_02.jpg'
import vert01 from './vert_01.jpg'

const tags = {
  ht: {ko: '묶는 꽃', en: 'Hand-tied'},
  bx: {ko: '담는 꽃', en: 'Basket/Box'},
  vs: {ko: '꽂는 꽃', en: 'Vase/Cnterpieces'},
  sp: {ko: '공간 꽃', en: 'Space decoration'},
  wd: {ko: '결혼 꽃', en: 'Wedding'},
};

const tags_in_order = ['ht', 'bx', 'vs', 'sp', 'wd',];



export default {
  tags: tags_in_order
    .filter((k)=>tags[k]!=null)
    .map((k)=>{
      return Object.assign({ code: k }, tags[k]); 
    }),
  images: [
    {asset: rect01, tags: ['ht', 'wd'], desc: 'Lorem' }, 
    {asset: rect02, tags: ['bx', ], desc: 'Ipsum'},
    {asset: rect03, tags: ['vs', ], desc: 'Ipsum'},
    {asset: rect04, tags: ['sp', ], desc: 'Ipsum'},
    {asset: rect05, tags: ['wd', 'wd'], desc: 'Ipsum'},
    {asset: rect06, tags: ['ht', ], desc: 'Ipsum'},
    {asset: rect07, tags: ['ht', 'wd'], desc: 'Ipsum'},
    {asset: sq01, tags: ['bx', 'wd'], desc: 'Ipsum'},
    {asset: sq02, tags: ['vs', ], desc: 'Ipsum'},
    {asset: vert01, tags: ['sp', ], desc: 'Ipsum'},
    {asset: rect01, tags: ['wd', 'wd'], desc: 'Ipsum'},
    {asset: rect02, tags: ['ht', ], desc: 'Ipsum'},
    {asset: rect03, tags: ['bx', 'wd'], desc: 'Ipsum'},
    {asset: rect04, tags: ['vs', ], desc: 'Ipsum'},
    {asset: rect05, tags: ['sp', ], desc: 'Ipsum'},
    {asset: rect06, tags: ['ht', 'sp'], desc: 'Ipsum'},
    {asset: rect07, tags: ['bx', 'wd'], desc: 'Ipsum'},
    {asset: sq01, tags: ['vs', 'sp'], desc: 'Ipsum'},
    {asset: sq02, tags: ['sp', 'wd'], desc: 'Ipsum'},
    {asset: vert01, tags: ['wd'], desc: 'Ipsum'},
  ]
}