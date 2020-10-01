import x01 from './slide_01.jpg'
import x02 from './slide_02.jpg'
import x03 from './slide_03.jpg'
import x04 from './slide_04.jpg'
import x05 from './slide_05.jpg'

export default [
  x01,
  x02,
  x03,
  x04,
  x05,
].map((asset)=>{
  return {title: 'emerald_cloud_flower', asset,}
});