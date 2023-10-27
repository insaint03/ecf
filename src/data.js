import { parse } from 'yaml'


const cache = {
    brand: ()=> _version.brand || {},
    channels: ()=> _version.channels || [],
    static: ()=>_version.static || {},
    gallery_tags: ()=>_version.gallery_tags || [],
    gallery: ()=>_version.gallery || {},
}
const fetch = function(pathname) {
    return new Promise((rs,rj)=>{
        if(!cache[pathname]) {
            let req = new XMLHttpRequest();
            req.open('GET', pathname);
            req.addEventListener('load', ()=>{
                let content = parse(req.responseText);
                cache[pathname] = content;
                rs(content);
            });
            req.addEventListener('error', (ev)=>{
                rj(ev);
            });
            req.send();
        } else {
            rs(cache[pathname]);
        }
    });
}
export default {
    settings: fetch('./.version.yaml'),
    gallery: fetch('./.gallery.yaml'),
}