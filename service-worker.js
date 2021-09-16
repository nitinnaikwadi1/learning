/*
Copyright 2015, 2019, 2020, 2021 Google LLC. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// Incrementing OFFLINE_VERSION will kick off the install event and force
// previously cached resources to be updated from the network.
// This variable is intentionally declared and unused.
// Add a comment for your linter if you want:
// eslint-disable-next-line no-unused-vars

importScripts('https://cdnjs.cloudflare.com/ajax/libs/cache.adderall/1.0.0/cache.adderall.js');

const RUNTIME = 'runtime';

var STATIC_FILES = [

  //assets
  '/assets/brand.png', '/assets/images/favicon.ico', '/assets/images/favicon-16x16.png', '/assets/images/favicon-32x32.png',
  '/assets/images/logo-72x72.png', '/assets/images/logo-96x96.png', '/assets/images/logo-144x144.png',
  '/assets/images/logo-192x192.png', '/assets/images/logo-512x512.png',

  // fonts
  '/fonts/inconsolata.ttf', '/fonts/rhodium.ttf',

  //javascript dependency
  '/js/howler.min.js', '/js/jquery.min.js', '/js/vue.js',

  //data
  '/data/1te100.json', '/data/1to100.json', '/data/1to50.json', '/data/abcd.json', '/data/ank.json',
  '/data/ank-random.json', '/data/dashboard.json', '/data/eng-numbers.json', '/data/mulakshar.json',
  '/data/mulakshar-anuswar.json', '/data/mulakshar-ardhchandr.json', '/data/mulakshar-don-matra.json',
  '/data/mulakshar-dusra-ukar.json', '/data/mulakshar-dusri-welanti.json', '/data/mulakshar-ek-matra.json',
  '/data/mulakshar-kana.json', '/data/mulakshar-kana-ardhchandr.json', '/data/mulakshar-kana-don-matra.json',
  '/data/mulakshar-kana-ek-matra.json', '/data/mulakshar-pahila-ukar.json', '/data/mulakshar-pahili-welanti.json',
  '/data/mulakshar-sarav.json', '/data/mulakshar-wisarg.json', '/data/numpad.json', '/data/screen-board.json',
  '/data/small-abcd.json', '/data/ucchar.json',

  //audio data
  '/audio/bell.mp3',

  //1te100
  '/audio/1te100/1.mp3', '/audio/1te100/2.mp3', '/audio/1te100/3.mp3', '/audio/1te100/4.mp3', '/audio/1te100/5.mp3', '/audio/1te100/6.mp3',
  '/audio/1te100/7.mp3', '/audio/1te100/8.mp3', '/audio/1te100/9.mp3', '/audio/1te100/10.mp3', '/audio/1te100/11.mp3', '/audio/1te100/12.mp3',
  '/audio/1te100/13.mp3', '/audio/1te100/14.mp3', '/audio/1te100/15.mp3', '/audio/1te100/16.mp3', '/audio/1te100/17.mp3', '/audio/1te100/18.mp3',
  '/audio/1te100/19.mp3', '/audio/1te100/20.mp3', '/audio/1te100/21.mp3', '/audio/1te100/22.mp3', '/audio/1te100/23.mp3', '/audio/1te100/24.mp3',
  '/audio/1te100/25.mp3', '/audio/1te100/26.mp3', '/audio/1te100/27.mp3', '/audio/1te100/28.mp3', '/audio/1te100/29.mp3', '/audio/1te100/30.mp3',
  '/audio/1te100/31.mp3', '/audio/1te100/32.mp3', '/audio/1te100/33.mp3', '/audio/1te100/34.mp3', '/audio/1te100/35.mp3', '/audio/1te100/36.mp3',
  '/audio/1te100/37.mp3', '/audio/1te100/38.mp3', '/audio/1te100/39.mp3', '/audio/1te100/40.mp3', '/audio/1te100/41.mp3', '/audio/1te100/42.mp3',
  '/audio/1te100/43.mp3', '/audio/1te100/44.mp3', '/audio/1te100/45.mp3', '/audio/1te100/46.mp3', '/audio/1te100/47.mp3', '/audio/1te100/48.mp3',
  '/audio/1te100/49.mp3', '/audio/1te100/50.mp3', '/audio/1te100/51.mp3', '/audio/1te100/52.mp3', '/audio/1te100/53.mp3', '/audio/1te100/54.mp3',
  '/audio/1te100/55.mp3', '/audio/1te100/56.mp3', '/audio/1te100/57.mp3', '/audio/1te100/58.mp3', '/audio/1te100/59.mp3', '/audio/1te100/60.mp3',
  '/audio/1te100/61.mp3', '/audio/1te100/62.mp3', '/audio/1te100/63.mp3', '/audio/1te100/64.mp3', '/audio/1te100/65.mp3', '/audio/1te100/66.mp3',
  '/audio/1te100/67.mp3', '/audio/1te100/68.mp3', '/audio/1te100/69.mp3', '/audio/1te100/70.mp3', '/audio/1te100/71.mp3', '/audio/1te100/72.mp3',
  '/audio/1te100/73.mp3', '/audio/1te100/74.mp3', '/audio/1te100/75.mp3', '/audio/1te100/76.mp3', '/audio/1te100/77.mp3', '/audio/1te100/78.mp3',
  '/audio/1te100/79.mp3', '/audio/1te100/80.mp3', '/audio/1te100/81.mp3', '/audio/1te100/82.mp3', '/audio/1te100/83.mp3', '/audio/1te100/84.mp3',
  '/audio/1te100/85.mp3', '/audio/1te100/86.mp3', '/audio/1te100/87.mp3', '/audio/1te100/88.mp3', '/audio/1te100/89.mp3', '/audio/1te100/90.mp3',
  '/audio/1te100/91.mp3', '/audio/1te100/92.mp3', '/audio/1te100/93.mp3', '/audio/1te100/94.mp3', '/audio/1te100/95.mp3', '/audio/1te100/96.mp3',
  '/audio/1te100/97.mp3', '/audio/1te100/98.mp3', '/audio/1te100/99.mp3', '/audio/1te100/100.mp3',

  //1to100
  '/audio/1to100/1.mp3', '/audio/1to100/2.mp3', '/audio/1to100/3.mp3', '/audio/1to100/4.mp3', '/audio/1to100/5.mp3', '/audio/1to100/6.mp3',
  '/audio/1to100/7.mp3', '/audio/1to100/8.mp3', '/audio/1to100/9.mp3', '/audio/1to100/10.mp3', '/audio/1to100/11.mp3', '/audio/1to100/12.mp3',
  '/audio/1to100/13.mp3', '/audio/1to100/14.mp3', '/audio/1to100/15.mp3', '/audio/1to100/16.mp3', '/audio/1to100/17.mp3', '/audio/1to100/18.mp3',
  '/audio/1to100/19.mp3', '/audio/1to100/20.mp3', '/audio/1to100/21.mp3', '/audio/1to100/22.mp3', '/audio/1to100/23.mp3', '/audio/1to100/24.mp3',
  '/audio/1to100/25.mp3', '/audio/1to100/26.mp3', '/audio/1to100/27.mp3', '/audio/1to100/28.mp3', '/audio/1to100/29.mp3', '/audio/1to100/30.mp3',
  '/audio/1to100/31.mp3', '/audio/1to100/32.mp3', '/audio/1to100/33.mp3', '/audio/1to100/34.mp3', '/audio/1to100/35.mp3', '/audio/1to100/36.mp3',
  '/audio/1to100/37.mp3', '/audio/1to100/38.mp3', '/audio/1to100/39.mp3', '/audio/1to100/40.mp3', '/audio/1to100/41.mp3', '/audio/1to100/42.mp3',
  '/audio/1to100/43.mp3', '/audio/1to100/44.mp3', '/audio/1to100/45.mp3', '/audio/1to100/46.mp3', '/audio/1to100/47.mp3', '/audio/1to100/48.mp3',
  '/audio/1to100/49.mp3', '/audio/1to100/50.mp3', '/audio/1to100/51.mp3', '/audio/1to100/52.mp3', '/audio/1to100/53.mp3', '/audio/1to100/54.mp3',
  '/audio/1to100/55.mp3', '/audio/1to100/56.mp3', '/audio/1to100/57.mp3', '/audio/1to100/58.mp3', '/audio/1to100/59.mp3', '/audio/1to100/60.mp3',
  '/audio/1to100/61.mp3', '/audio/1to100/62.mp3', '/audio/1to100/63.mp3', '/audio/1to100/64.mp3', '/audio/1to100/65.mp3', '/audio/1to100/66.mp3',
  '/audio/1to100/67.mp3', '/audio/1to100/68.mp3', '/audio/1to100/69.mp3', '/audio/1to100/70.mp3', '/audio/1to100/71.mp3', '/audio/1to100/72.mp3',
  '/audio/1to100/73.mp3', '/audio/1to100/74.mp3', '/audio/1to100/75.mp3', '/audio/1to100/76.mp3', '/audio/1to100/77.mp3', '/audio/1to100/78.mp3',
  '/audio/1to100/79.mp3', '/audio/1to100/80.mp3', '/audio/1to100/81.mp3', '/audio/1to100/82.mp3', '/audio/1to100/83.mp3', '/audio/1to100/84.mp3',
  '/audio/1to100/85.mp3', '/audio/1to100/86.mp3', '/audio/1to100/87.mp3', '/audio/1to100/88.mp3', '/audio/1to100/89.mp3', '/audio/1to100/90.mp3',
  '/audio/1to100/91.mp3', '/audio/1to100/92.mp3', '/audio/1to100/93.mp3', '/audio/1to100/94.mp3', '/audio/1to100/95.mp3', '/audio/1to100/96.mp3',
  '/audio/1to100/97.mp3', '/audio/1to100/98.mp3', '/audio/1to100/99.mp3', '/audio/1to100/100.mp3',

  // A-Z a-Z
  '/audio/abcd/a.mp3', '/audio/abcd/b.mp3', '/audio/abcd/c.mp3', '/audio/abcd/d.mp3', '/audio/abcd/e.mp3', '/audio/abcd/f.mp3', '/audio/abcd/g.mp3',
  '/audio/abcd/h.mp3', '/audio/abcd/i.mp3', '/audio/abcd/j.mp3', '/audio/abcd/k.mp3', '/audio/abcd/l.mp3', '/audio/abcd/m.mp3', '/audio/abcd/n.mp3',
  '/audio/abcd/o.mp3', '/audio/abcd/p.mp3', '/audio/abcd/q.mp3', '/audio/abcd/r.mp3', '/audio/abcd/s.mp3', '/audio/abcd/t.mp3', '/audio/abcd/u.mp3',
  '/audio/abcd/v.mp3', '/audio/abcd/w.mp3', '/audio/abcd/x.mp3', '/audio/abcd/y.mp3', '/audio/abcd/z.mp3', '/audio/abcd/small-a.mp3',
  '/audio/abcd/small-b.mp3', '/audio/abcd/small-c.mp3', '/audio/abcd/small-d.mp3', '/audio/abcd/small-e.mp3', '/audio/abcd/small-f.mp3',
  '/audio/abcd/small-g.mp3', '/audio/abcd/small-h.mp3', '/audio/abcd/small-i.mp3', '/audio/abcd/small-j.mp3', '/audio/abcd/small-k.mp3',
  '/audio/abcd/small-l.mp3', '/audio/abcd/small-m.mp3', '/audio/abcd/small-n.mp3', '/audio/abcd/small-o.mp3', '/audio/abcd/small-p.mp3',
  '/audio/abcd/small-q.mp3', '/audio/abcd/small-r.mp3', '/audio/abcd/small-s.mp3', '/audio/abcd/small-t.mp3', '/audio/abcd/small-u.mp3',
  '/audio/abcd/small-v.mp3', '/audio/abcd/small-w.mp3', '/audio/abcd/small-x.mp3', '/audio/abcd/small-y.mp3', '/audio/abcd/small-z.mp3',

  // anuswar mulakshare
  '/audio/anuswar/anuswar-1-um.mp3', '/audio/anuswar/anuswar-2-km.mp3', '/audio/anuswar/anuswar-3-khm.mp3', '/audio/anuswar/anuswar-4-gam.mp3',
  '/audio/anuswar/anuswar-5-gham.mp3', '/audio/anuswar/anuswar-6-cham.mp3', '/audio/anuswar/anuswar-7-chhum.mp3', '/audio/anuswar/anuswar-8-jm.mp3',
  '/audio/anuswar/anuswar-9-zhm.mp3', '/audio/anuswar/anuswar-10-trm.mp3', '/audio/anuswar/anuswar-11-tam.mp3', '/audio/anuswar/anuswar-12-thum.mp3',
  '/audio/anuswar/anuswar-13-dum.mp3', '/audio/anuswar/anuswar-14-dhum.mp3', '/audio/anuswar/anuswar-15-num.mp3', '/audio/anuswar/anuswar-16-tum.mp3',
  '/audio/anuswar/anuswar-17-thum.mp3', '/audio/anuswar/anuswar-18-dumm.mp3', '/audio/anuswar/anuswar-19-dhum.mp3', '/audio/anuswar/anuswar-20-numm.mp3',
  '/audio/anuswar/anuswar-21-pum.mp3', '/audio/anuswar/anuswar-22-phum.mp3', '/audio/anuswar/anuswar-23-bum.mp3', '/audio/anuswar/anuswar-24-bhum.mp3',
  '/audio/anuswar/anuswar-25-mum.mp3', '/audio/anuswar/anuswar-26-yum.mp3', '/audio/anuswar/anuswar-27-ram.mp3', '/audio/anuswar/anuswar-28-lum.mp3',
  '/audio/anuswar/anuswar-29-vam.mp3', '/audio/anuswar/anuswar-30-shum.mp3', '/audio/anuswar/anuswar-31-sham.mp3', '/audio/anuswar/anuswar-32-sum.mp3',
  '/audio/anuswar/anuswar-33-hum.mp3', '/audio/anuswar/anuswar-34-lum.mp3', '/audio/anuswar/anuswar-35-kshm.mp3', '/audio/anuswar/anuswar-36-dnym.mp3',

  // ardhchandr mulakshare
  '/audio/mulakshar/ardhchandr-1-aya.mp3', '/audio/mulakshar/ardhchandr-2-kya.mp3', '/audio/mulakshar/ardhchandr-3-khya.mp3', '/audio/mulakshar/ardhchandr-4-gya.mp3',
  '/audio/mulakshar/ardhchandr-5-ghya.mp3', '/audio/mulakshar/ardhchandr-6-chya.mp3', '/audio/mulakshar/ardhchandr-7-chhya.mp3', '/audio/mulakshar/ardhchandr-8-jya.mp3',
  '/audio/mulakshar/ardhchandr-9-jhya.mp3', '/audio/mulakshar/ardhchandr-10-tya.mp3', '/audio/mulakshar/ardhchandr-11-thya.mp3', '/audio/mulakshar/ardhchandr-12-dya.mp3',
  '/audio/mulakshar/ardhchandr-13-dhya.mp3', '/audio/mulakshar/ardhchandr-14-nya.mp3', '/audio/mulakshar/ardhchandr-15-tya.mp3', '/audio/mulakshar/ardhchandr-16-thya.mp3',
  '/audio/mulakshar/ardhchandr-17-dyaa.mp3', '/audio/mulakshar/ardhchandr-18-dhyaa.mp3', '/audio/mulakshar/ardhchandr-19-nyaa.mp3', '/audio/mulakshar/ardhchandr-20-pya.mp3',
  '/audio/mulakshar/ardhchandr-21-phya.mp3', '/audio/mulakshar/ardhchandr-22-bya.mp3', '/audio/mulakshar/ardhchandr-23-bhya.mp3', '/audio/mulakshar/ardhchandr-24-mya.mp3',
  '/audio/mulakshar/ardhchandr-25-ya.mp3', '/audio/mulakshar/ardhchandr-26-rya.mp3', '/audio/mulakshar/ardhchandr-27-lya.mp3', '/audio/mulakshar/ardhchandr-28-vya.mp3',
  '/audio/mulakshar/ardhchandr-29-shya.mp3', '/audio/mulakshar/ardhchandr-30-shyaa.mp3', '/audio/mulakshar/ardhchandr-31-sya.mp3', '/audio/mulakshar/ardhchandr-32-hya.mp3',
  '/audio/mulakshar/ardhchandr-33-lyaa.mp3', '/audio/mulakshar/ardhchandr-34-kshya.mp3', '/audio/mulakshar/ardhchandr-35-dnya.mp3',

  // donmatra mulakshare
  '/audio/mulakshar/donmatra-1-kai.mp3', '/audio/mulakshar/donmatra-2-khai.mp3', '/audio/mulakshar/donmatra-3-gai.mp3', '/audio/mulakshar/donmatra-4-ghai.mp3',
  '/audio/mulakshar/donmatra-5-chai.mp3', '/audio/mulakshar/donmatra-6-chhai.mp3', '/audio/mulakshar/donmatra-7-jai.mp3', '/audio/mulakshar/donmatra-8-jhai.mp3',
  '/audio/mulakshar/donmatra-9-trai.mp3', '/audio/mulakshar/donmatra-10-taii.mp3', '/audio/mulakshar/donmatra-11-thaii.mp3', '/audio/mulakshar/donmatra-12-daii.mp3',
  '/audio/mulakshar/donmatra-13-dhaii.mp3', '/audio/mulakshar/donmatra-14-naii.mp3', '/audio/mulakshar/donmatra-15-taii.mp3', '/audio/mulakshar/donmatra-16-thaii.mp3',
  '/audio/mulakshar/donmatra-17-daaii.mp3', '/audio/mulakshar/donmatra-18-dhaaii.mp3', '/audio/mulakshar/donmatra-19-naii.mp3', '/audio/mulakshar/donmatra-20-paii.mp3',
  '/audio/mulakshar/donmatra-21-phaii.mp3', '/audio/mulakshar/donmatra-22-baii.mp3', '/audio/mulakshar/donmatra-23-bhaii.mp3', '/audio/mulakshar/donmatra-24-maii.mp3',
  '/audio/mulakshar/donmatra-25-yaii.mp3', '/audio/mulakshar/donmatra-26-raii.mp3', '/audio/mulakshar/donmatra-27-laii.mp3', '/audio/mulakshar/donmatra-28-vaii.mp3',
  '/audio/mulakshar/donmatra-29-shai.mp3', '/audio/mulakshar/donmatra-30-shaii.mp3', '/audio/mulakshar/donmatra-31-saii.mp3', '/audio/mulakshar/donmatra-32-haii.mp3',
  '/audio/mulakshar/donmatra-33-alai.mp3', '/audio/mulakshar/donmatra-34-kshai.mp3', '/audio/mulakshar/donmatra-35-dnyai.mp3',

  // dusraukar mulakshare
  '/audio/mulakshar/dusraukar-1-ku.mp3', '/audio/mulakshar/dusraukar-2-khu.mp3', '/audio/mulakshar/dusraukar-3-gu.mp3', '/audio/mulakshar/dusraukar-4-ghu.mp3',
  '/audio/mulakshar/dusraukar-5-chu.mp3', '/audio/mulakshar/dusraukar-6-choo.mp3', '/audio/mulakshar/dusraukar-7-ju.mp3', '/audio/mulakshar/dusraukar-8-jhu.mp3',
  '/audio/mulakshar/dusraukar-9-tru.mp3', '/audio/mulakshar/dusraukar-10-tu.mp3', '/audio/mulakshar/dusraukar-11-thu.mp3', '/audio/mulakshar/dusraukar-12-du.mp3',
  '/audio/mulakshar/dusraukar-13-dhu.mp3', '/audio/mulakshar/dusraukar-14-nu.mp3', '/audio/mulakshar/dusraukar-15-tu.mp3', '/audio/mulakshar/dusraukar-16-thu.mp3',
  '/audio/mulakshar/dusraukar-17-doo.mp3', '/audio/mulakshar/dusraukar-18-dhoo.mp3', '/audio/mulakshar/dusraukar-19-noo.mp3', '/audio/mulakshar/dusraukar-20-pu.mp3',
  '/audio/mulakshar/dusraukar-21-phu.mp3', '/audio/mulakshar/dusraukar-22-bu.mp3', '/audio/mulakshar/dusraukar-23-bhu.mp3', '/audio/mulakshar/dusraukar-24-mu.mp3',
  '/audio/mulakshar/dusraukar-25-yu.mp3', '/audio/mulakshar/dusraukar-26-ru.mp3', '/audio/mulakshar/dusraukar-27-lu.mp3', '/audio/mulakshar/dusraukar-28-vu.mp3',
  '/audio/mulakshar/dusraukar-29-shu.mp3', '/audio/mulakshar/dusraukar-30-shuu.mp3', '/audio/mulakshar/dusraukar-31-su.mp3', '/audio/mulakshar/dusraukar-32-hu.mp3',
  '/audio/mulakshar/dusraukar-33-loo.mp3', '/audio/mulakshar/dusraukar-34-kshu.mp3', '/audio/mulakshar/dusraukar-35-dnyu.mp3',

  // dusriwelanti mulakshare
  '/audio/mulakshar/dusriwelanti-1-ki.mp3', '/audio/mulakshar/dusriwelanti-2-khi.mp3', '/audio/mulakshar/dusriwelanti-3-gi.mp3', '/audio/mulakshar/dusriwelanti-4-ghi.mp3',
  '/audio/mulakshar/dusriwelanti-5-chi.mp3', '/audio/mulakshar/dusriwelanti-6-chee.mp3', '/audio/mulakshar/dusriwelanti-7-ji.mp3', '/audio/mulakshar/dusriwelanti-8-jhi.mp3',
  '/audio/mulakshar/dusriwelanti-9-tri.mp3', '/audio/mulakshar/dusriwelanti-10-ti.mp3', '/audio/mulakshar/dusriwelanti-11-thi.mp3', '/audio/mulakshar/dusriwelanti-12-di.mp3',
  '/audio/mulakshar/dusriwelanti-13-dhi.mp3', '/audio/mulakshar/dusriwelanti-14-ni.mp3', '/audio/mulakshar/dusriwelanti-15-ti.mp3', '/audio/mulakshar/dusriwelanti-16-thee.mp3',
  '/audio/mulakshar/dusriwelanti-17-dee.mp3', '/audio/mulakshar/dusriwelanti-18-dhi.mp3', '/audio/mulakshar/dusriwelanti-19-ni.mp3', '/audio/mulakshar/dusriwelanti-20-pi.mp3',
  '/audio/mulakshar/dusriwelanti-21-phi.mp3', '/audio/mulakshar/dusriwelanti-22-bi.mp3', '/audio/mulakshar/dusriwelanti-23-bhi.mp3', '/audio/mulakshar/dusriwelanti-24-mi.mp3',
  '/audio/mulakshar/dusriwelanti-25-yi.mp3', '/audio/mulakshar/dusriwelanti-26-ri.mp3', '/audio/mulakshar/dusriwelanti-27-li.mp3', '/audio/mulakshar/dusriwelanti-28-vi.mp3',
  '/audio/mulakshar/dusriwelanti-29-shi.mp3', '/audio/mulakshar/dusriwelanti-30-shii.mp3', '/audio/mulakshar/dusriwelanti-31-si.mp3', '/audio/mulakshar/dusriwelanti-32-hi.mp3',
  '/audio/mulakshar/dusriwelanti-33-lii.mp3', '/audio/mulakshar/dusriwelanti-34-kshi.mp3', '/audio/mulakshar/dusriwelanti-35-dnyii.mp3',

  // ekmatra mulakshare
  '/audio/mulakshar/ekmatra-1-ke.mp3', '/audio/mulakshar/ekmatra-2-khe.mp3', '/audio/mulakshar/ekmatra-3-ge.mp3', '/audio/mulakshar/ekmatra-4-ghe.mp3',
  '/audio/mulakshar/ekmatra-5-che.mp3', '/audio/mulakshar/ekmatra-6-chey.mp3', '/audio/mulakshar/ekmatra-7-je.mp3', '/audio/mulakshar/ekmatra-8-jhe.mp3',
  '/audio/mulakshar/ekmatra-9-tre.mp3', '/audio/mulakshar/ekmatra-10-te.mp3', '/audio/mulakshar/ekmatra-11-the.mp3', '/audio/mulakshar/ekmatra-12-de.mp3',
  '/audio/mulakshar/ekmatra-13-dhe.mp3', '/audio/mulakshar/ekmatra-14-ne.mp3', '/audio/mulakshar/ekmatra-15-tey.mp3', '/audio/mulakshar/ekmatra-16-dey.mp3',
  '/audio/mulakshar/ekmatra-17-they.mp3', '/audio/mulakshar/ekmatra-18-dhey.mp3', '/audio/mulakshar/ekmatra-19-ney.mp3', '/audio/mulakshar/ekmatra-20-pe.mp3',
  '/audio/mulakshar/ekmatra-21-phe.mp3', '/audio/mulakshar/ekmatra-22-be.mp3', '/audio/mulakshar/ekmatra-23-bhe.mp3', '/audio/mulakshar/ekmatra-24-mey.mp3',
  '/audio/mulakshar/ekmatra-25-ye.mp3', '/audio/mulakshar/ekmatra-26-rey.mp3', '/audio/mulakshar/ekmatra-27-ley.mp3', '/audio/mulakshar/ekmatra-28-wey.mp3',
  '/audio/mulakshar/ekmatra-29-shey.mp3', '/audio/mulakshar/ekmatra-30-sheye.mp3', '/audio/mulakshar/ekmatra-31-sey.mp3', '/audio/mulakshar/ekmatra-32-hay.mp3',
  '/audio/mulakshar/ekmatra-33-aley.mp3', '/audio/mulakshar/ekmatra-34-kshey.mp3', '/audio/mulakshar/ekmatra-35-dney.mp3',

  // kana mulakshare
  '/audio/mulakshar/kana-1-kaa.mp3', '/audio/mulakshar/kana-2-khaa.mp3', '/audio/mulakshar/kana-3-gaa.mp3', '/audio/mulakshar/kana-4-ghaa.mp3',
  '/audio/mulakshar/kana-5-chaa.mp3', '/audio/mulakshar/kana-6-chaa.mp3', '/audio/mulakshar/kana-7-jaa.mp3', '/audio/mulakshar/kana-8-jhaa.mp3',
  '/audio/mulakshar/kana-9-traa.mp3', '/audio/mulakshar/kana-10-taa.mp3', '/audio/mulakshar/kana-11-thaa.mp3', '/audio/mulakshar/kana-12-daa.mp3',
  '/audio/mulakshar/kana-13-dhaa.mp3', '/audio/mulakshar/kana-14-naa.mp3', '/audio/mulakshar/kana-15-taa.mp3', '/audio/mulakshar/kana-16-thaa.mp3',
  '/audio/mulakshar/kana-17-daaa.mp3', '/audio/mulakshar/kana-18-dhaaa.mp3', '/audio/mulakshar/kana-19-naa.mp3', '/audio/mulakshar/kana-20-paa.mp3',
  '/audio/mulakshar/kana-21-phaa.mp3', '/audio/mulakshar/kana-22-baa.mp3', '/audio/mulakshar/kana-23-bhaa.mp3', '/audio/mulakshar/kana-24-maa.mp3',
  '/audio/mulakshar/kana-25-yaa.mp3', '/audio/mulakshar/kana-26-raa.mp3', '/audio/mulakshar/kana-27-laa.mp3', '/audio/mulakshar/kana-28-vaa.mp3',
  '/audio/mulakshar/kana-29-shaa.mp3', '/audio/mulakshar/kana-30-shaaa.mp3', '/audio/mulakshar/kana-31-saa.mp3', '/audio/mulakshar/kana-32-haa.mp3',
  '/audio/mulakshar/kana-33-laaa.mp3', '/audio/mulakshar/kana-34-kshaa.mp3', '/audio/mulakshar/kana-35-dnyaa.mp3',

  // kanaardhchandr mulakshare
  '/audio/mulakshar/kanaardhchandr-1-au.mp3', '/audio/mulakshar/kanaardhchandr-2-kau.mp3', '/audio/mulakshar/kanaardhchandr-3-khau.mp3', '/audio/mulakshar/kanaardhchandr-4-gau.mp3',
  '/audio/mulakshar/kanaardhchandr-5-ghau.mp3', '/audio/mulakshar/kanaardhchandr-6-chau.mp3', '/audio/mulakshar/kanaardhchandr-7-chhau.mp3', '/audio/mulakshar/kanaardhchandr-8-jau.mp3',
  '/audio/mulakshar/kanaardhchandr-9-zau.mp3', '/audio/mulakshar/kanaardhchandr-10-tau.mp3', '/audio/mulakshar/kanaardhchandr-11-thau.mp3', '/audio/mulakshar/kanaardhchandr-12-dau.mp3',
  '/audio/mulakshar/kanaardhchandr-13-dhau.mp3', '/audio/mulakshar/kanaardhchandr-14-nau.mp3', '/audio/mulakshar/kanaardhchandr-15-tau.mp3', '/audio/mulakshar/kanaardhchandr-16-thau.mp3',
  '/audio/mulakshar/kanaardhchandr-17-dau.mp3', '/audio/mulakshar/kanaardhchandr-18-dhaau.mp3', '/audio/mulakshar/kanaardhchandr-19-naau.mp3', '/audio/mulakshar/kanaardhchandr-20-paau.mp3',
  '/audio/mulakshar/kanaardhchandr-21-phaau.mp3', '/audio/mulakshar/kanaardhchandr-22-bau.mp3', '/audio/mulakshar/kanaardhchandr-23-bhau.mp3', '/audio/mulakshar/kanaardhchandr-24-mau.mp3',
  '/audio/mulakshar/kanaardhchandr-25-yau.mp3', '/audio/mulakshar/kanaardhchandr-26-rau.mp3', '/audio/mulakshar/kanaardhchandr-27-lau.mp3', '/audio/mulakshar/kanaardhchandr-28-vau.mp3',
  '/audio/mulakshar/kanaardhchandr-29-shau.mp3', '/audio/mulakshar/kanaardhchandr-30-shauu.mp3', '/audio/mulakshar/kanaardhchandr-31-sau.mp3', '/audio/mulakshar/kanaardhchandr-32-hau.mp3',
  '/audio/mulakshar/kanaardhchandr-33-lauu.mp3', '/audio/mulakshar/kanaardhchandr-34-kshau.mp3', '/audio/mulakshar/kanaardhchandr-35-dnyau.mp3',


  // kanadonmatra mulakshare
  '/audio/mulakshar/kanadonmatra-1-kau.mp3', '/audio/mulakshar/kanadonmatra-2-khau.mp3', '/audio/mulakshar/kanadonmatra-3-gau.mp3', '/audio/mulakshar/kanadonmatra-4-ghau.mp3',
  '/audio/mulakshar/kanadonmatra-5-chau.mp3', '/audio/mulakshar/kanadonmatra-6-chhau.mp3', '/audio/mulakshar/kanadonmatra-7-jau.mp3', '/audio/mulakshar/kanadonmatra-8-jhau.mp3',
  '/audio/mulakshar/kanadonmatra-9-trau.mp3', '/audio/mulakshar/kanadonmatra-10-tau.mp3', '/audio/mulakshar/kanadonmatra-11-thau.mp3', '/audio/mulakshar/kanadonmatra-12-dau.mp3',
  '/audio/mulakshar/kanadonmatra-13-dhau.mp3', '/audio/mulakshar/kanadonmatra-14-nau.mp3', '/audio/mulakshar/kanadonmatra-15-tau.mp3', '/audio/mulakshar/kanadonmatra-16-thau.mp3',
  '/audio/mulakshar/kanadonmatra-17-daau.mp3', '/audio/mulakshar/kanadonmatra-18-dhaau.mp3', '/audio/mulakshar/kanadonmatra-19-nauu.mp3', '/audio/mulakshar/kanadonmatra-20-pau.mp3',
  '/audio/mulakshar/kanadonmatra-21-phau.mp3', '/audio/mulakshar/kanadonmatra-22-bau.mp3', '/audio/mulakshar/kanadonmatra-23-bhau.mp3', '/audio/mulakshar/kanadonmatra-24-mau.mp3',
  '/audio/mulakshar/kanadonmatra-25-yau.mp3', '/audio/mulakshar/kanadonmatra-26-rau.mp3', '/audio/mulakshar/kanadonmatra-27-lau.mp3', '/audio/mulakshar/kanadonmatra-28-vau.mp3',
  '/audio/mulakshar/kanadonmatra-29-shau.mp3', '/audio/mulakshar/kanadonmatra-30-shauu.mp3', '/audio/mulakshar/kanadonmatra-31-sau.mp3', '/audio/mulakshar/kanadonmatra-32-hau.mp3',
  '/audio/mulakshar/kanadonmatra-33-alauu.mp3', '/audio/mulakshar/kanadonmatra-34-kshau.mp3', '/audio/mulakshar/kanadonmatra-35-dnyau.mp3',

  // kanaekmatra mulakshare
  '/audio/mulakshar/kanaekmatra-0-oo.mp3', '/audio/mulakshar/kanaekmatra-1-ko.mp3', '/audio/mulakshar/kanaekmatra-2-kho.mp3', '/audio/mulakshar/kanaekmatra-3-go.mp3',
  '/audio/mulakshar/kanaekmatra-4-gho.mp3', '/audio/mulakshar/kanaekmatra-5-cho.mp3', '/audio/mulakshar/kanaekmatra-6-chho.mp3', '/audio/mulakshar/kanaekmatra-7-jo.mp3',
  '/audio/mulakshar/kanaekmatra-8-jho.mp3', '/audio/mulakshar/kanaekmatra-9-tro.mp3', '/audio/mulakshar/kanaekmatra-10-to.mp3', '/audio/mulakshar/kanaekmatra-11-tho.mp3',
  '/audio/mulakshar/kanaekmatra-12-do.mp3', '/audio/mulakshar/kanaekmatra-13-dho.mp3', '/audio/mulakshar/kanaekmatra-14-no.mp3', '/audio/mulakshar/kanaekmatra-15-to.mp3',
  '/audio/mulakshar/kanaekmatra-16-tho.mp3', '/audio/mulakshar/kanaekmatra-17-doo.mp3', '/audio/mulakshar/kanaekmatra-18-dhoo.mp3', '/audio/mulakshar/kanaekmatra-19-noo.mp3',
  '/audio/mulakshar/kanaekmatra-20-po.mp3', '/audio/mulakshar/kanaekmatra-21-pho.mp3', '/audio/mulakshar/kanaekmatra-22-bo.mp3', '/audio/mulakshar/kanaekmatra-23-bho.mp3',
  '/audio/mulakshar/kanaekmatra-24-mo.mp3', '/audio/mulakshar/kanaekmatra-25-yo.mp3', '/audio/mulakshar/kanaekmatra-26-ro.mp3', '/audio/mulakshar/kanaekmatra-27-lo.mp3',
  '/audio/mulakshar/kanaekmatra-28-wo.mp3', '/audio/mulakshar/kanaekmatra-29-sho.mp3', '/audio/mulakshar/kanaekmatra-30-shoo.mp3', '/audio/mulakshar/kanaekmatra-31-so.mp3',
  '/audio/mulakshar/kanaekmatra-32-ho.mp3', '/audio/mulakshar/kanaekmatra-33-alo.mp3', '/audio/mulakshar/kanaekmatra-34-ksho.mp3', '/audio/mulakshar/kanaekmatra-35-dnyo.mp3',

  // mulakshare
  '/audio/mulakshar/mulakshar-1-a.mp3', '/audio/mulakshar/mulakshar-2-aa.mp3', '/audio/mulakshar/mulakshar-3-e.mp3', '/audio/mulakshar/mulakshar-4-ie.mp3', '/audio/mulakshar/mulakshar-5-u.mp3',
  '/audio/mulakshar/mulakshar-6-uu.mp3', '/audio/mulakshar/mulakshar-7-aye.mp3', '/audio/mulakshar/mulakshar-8-aie.mp3', '/audio/mulakshar/mulakshar-9-oo.mp3', '/audio/mulakshar/mulakshar-10-au.mp3',
  '/audio/mulakshar/mulakshar-11-um.mp3', '/audio/mulakshar/mulakshar-12-aha.mp3', '/audio/mulakshar/mulakshar-13-ka.mp3', '/audio/mulakshar/mulakshar-14-kh.mp3', '/audio/mulakshar/mulakshar-15-ga.mp3',
  '/audio/mulakshar/mulakshar-16-gh.mp3', '/audio/mulakshar/mulakshar-17-anga.mp3', '/audio/mulakshar/mulakshar-18-ch.mp3', '/audio/mulakshar/mulakshar-19-cha.mp3', '/audio/mulakshar/mulakshar-20-ja.mp3',
  '/audio/mulakshar/mulakshar-21-jha.mp3', '/audio/mulakshar/mulakshar-22-tra.mp3', '/audio/mulakshar/mulakshar-23-ta.mp3', '/audio/mulakshar/mulakshar-24-tha.mp3', '/audio/mulakshar/mulakshar-25-da.mp3',
  '/audio/mulakshar/mulakshar-26-dha.mp3', '/audio/mulakshar/mulakshar-27-na.mp3', '/audio/mulakshar/mulakshar-28-ta.mp3', '/audio/mulakshar/mulakshar-29-tha.mp3',
  '/audio/mulakshar/mulakshar-30-da.mp3', '/audio/mulakshar/mulakshar-31-dha.mp3', '/audio/mulakshar/mulakshar-32-naa.mp3', '/audio/mulakshar/mulakshar-33-pa.mp3',
  '/audio/mulakshar/mulakshar-34-pha.mp3', '/audio/mulakshar/mulakshar-35-ba.mp3', '/audio/mulakshar/mulakshar-36-bha.mp3', '/audio/mulakshar/mulakshar-37-ma.mp3',
  '/audio/mulakshar/mulakshar-38-ya.mp3', '/audio/mulakshar/mulakshar-39-ra.mp3', '/audio/mulakshar/mulakshar-40-la.mp3', '/audio/mulakshar/mulakshar-41-va.mp3',
  '/audio/mulakshar/mulakshar-42-sh.mp3', '/audio/mulakshar/mulakshar-43-sha.mp3', '/audio/mulakshar/mulakshar-44-sa.mp3', '/audio/mulakshar/mulakshar-45-ha.mp3',
  '/audio/mulakshar/mulakshar-46-alaa.mp3', '/audio/mulakshar/mulakshar-47-ksha.mp3', '/audio/mulakshar/mulakshar-48-dnya.mp3',

  // pahilaukar mulakshare
  '/audio/mulakshar/pahilaukar-1-ku.mp3', '/audio/mulakshar/pahilaukar-2-khu.mp3', '/audio/mulakshar/pahilaukar-3-gu.mp3', '/audio/mulakshar/pahilaukar-4-ghu.mp3',
  '/audio/mulakshar/pahilaukar-5-chu.mp3', '/audio/mulakshar/pahilaukar-6-chuu.mp3', '/audio/mulakshar/pahilaukar-7-ju.mp3', '/audio/mulakshar/pahilaukar-8-jhu.mp3',
  '/audio/mulakshar/pahilaukar-9-tru.mp3', '/audio/mulakshar/pahilaukar-10-tu.mp3', '/audio/mulakshar/pahilaukar-11-thu.mp3', '/audio/mulakshar/pahilaukar-12-du.mp3',
  '/audio/mulakshar/pahilaukar-13-dhu.mp3', '/audio/mulakshar/pahilaukar-14-nu.mp3', '/audio/mulakshar/pahilaukar-15-tu.mp3', '/audio/mulakshar/pahilaukar-16-thu.mp3',
  '/audio/mulakshar/pahilaukar-17-doo.mp3', '/audio/mulakshar/pahilaukar-18-dhoo.mp3', '/audio/mulakshar/pahilaukar-19-noo.mp3', '/audio/mulakshar/pahilaukar-20-pu.mp3',
  '/audio/mulakshar/pahilaukar-21-phu.mp3', '/audio/mulakshar/pahilaukar-22-bu.mp3', '/audio/mulakshar/pahilaukar-23-bhu.mp3', '/audio/mulakshar/pahilaukar-24-mu.mp3',
  '/audio/mulakshar/pahilaukar-25-yu.mp3', '/audio/mulakshar/pahilaukar-26-ru.mp3', '/audio/mulakshar/pahilaukar-27-lu.mp3', '/audio/mulakshar/pahilaukar-28-vu.mp3',
  '/audio/mulakshar/pahilaukar-29-shu.mp3', '/audio/mulakshar/pahilaukar-30-shuu.mp3', '/audio/mulakshar/pahilaukar-31-su.mp3', '/audio/mulakshar/pahilaukar-32-hu.mp3',
  '/audio/mulakshar/pahilaukar-33-loo.mp3', '/audio/mulakshar/pahilaukar-34-kshu.mp3', '/audio/mulakshar/pahilaukar-35-dnyu.mp3',

  // pahiliwelanti mulakshare
  '/audio/mulakshar/pahiliwelanti-1-ki.mp3', '/audio/mulakshar/pahiliwelanti-2-khi.mp3', '/audio/mulakshar/pahiliwelanti-3-gi.mp3', '/audio/mulakshar/pahiliwelanti-4-ghi.mp3',
  '/audio/mulakshar/pahiliwelanti-5-chi.mp3', '/audio/mulakshar/pahiliwelanti-6-chii.mp3', '/audio/mulakshar/pahiliwelanti-7-ji.mp3',
  '/audio/mulakshar/pahiliwelanti-8-jhi.mp3', '/audio/mulakshar/pahiliwelanti-9-tri.mp3', '/audio/mulakshar/pahiliwelanti-10-ti.mp3',
  '/audio/mulakshar/pahiliwelanti-11-thi.mp3', '/audio/mulakshar/pahiliwelanti-12-di.mp3', '/audio/mulakshar/pahiliwelanti-13-dhi.mp3',
  '/audio/mulakshar/pahiliwelanti-14-ni.mp3', '/audio/mulakshar/pahiliwelanti-15-tee.mp3', '/audio/mulakshar/pahiliwelanti-16-thee.mp3',
  '/audio/mulakshar/pahiliwelanti-17-dee.mp3', '/audio/mulakshar/pahiliwelanti-18-dhee.mp3', '/audio/mulakshar/pahiliwelanti-19-nee.mp3',
  '/audio/mulakshar/pahiliwelanti-20-pi.mp3', '/audio/mulakshar/pahiliwelanti-21-phi.mp3', '/audio/mulakshar/pahiliwelanti-22-bi.mp3',
  '/audio/mulakshar/pahiliwelanti-23-bhi.mp3', '/audio/mulakshar/pahiliwelanti-24-mi.mp3', '/audio/mulakshar/pahiliwelanti-25-yi.mp3',
  '/audio/mulakshar/pahiliwelanti-26-ri.mp3', '/audio/mulakshar/pahiliwelanti-27-li.mp3', '/audio/mulakshar/pahiliwelanti-28-vi.mp3',
  '/audio/mulakshar/pahiliwelanti-29-shi.mp3', '/audio/mulakshar/pahiliwelanti-30-shee.mp3', '/audio/mulakshar/pahiliwelanti-31-si.mp3',
  '/audio/mulakshar/pahiliwelanti-32-hi.mp3', '/audio/mulakshar/pahiliwelanti-33-lii.mp3', '/audio/mulakshar/pahiliwelanti-34-khsii.mp3',
  '/audio/mulakshar/pahiliwelanti-35-dnyii.mp3',

  // wisarg mulakshare
  '/audio/mulakshar/wisarg-1-aha.mp3', '/audio/mulakshar/wisarg-2-kaha.mp3', '/audio/mulakshar/wisarg-3-khaha.mp3', '/audio/mulakshar/wisarg-4-gaha.mp3',
  '/audio/mulakshar/wisarg-5-ghaha.mp3', '/audio/mulakshar/wisarg-6-chaha.mp3', '/audio/mulakshar/wisarg-7-chhaha.mp3', '/audio/mulakshar/wisarg-8-jaha.mp3',
  '/audio/mulakshar/wisarg-9-jhaha.mp3', '/audio/mulakshar/wisarg-10-taha.mp3', '/audio/mulakshar/wisarg-11-thaha.mp3', '/audio/mulakshar/wisarg-12-daha.mp3',
  '/audio/mulakshar/wisarg-13-dhaha.mp3', '/audio/mulakshar/wisarg-14-naha.mp3', '/audio/mulakshar/wisarg-15-taha.mp3', '/audio/mulakshar/wisarg-16-thaha.mp3',
  '/audio/mulakshar/wisarg-17-daha.mp3', '/audio/mulakshar/wisarg-18-dhaha.mp3', '/audio/mulakshar/wisarg-19-naaha.mp3', '/audio/mulakshar/wisarg-20-paha.mp3',
  '/audio/mulakshar/wisarg-21-phaha.mp3', '/audio/mulakshar/wisarg-22-baha.mp3', '/audio/mulakshar/wisarg-23-bhaha.mp3', '/audio/mulakshar/wisarg-24-maha.mp3',
  '/audio/mulakshar/wisarg-25-yaha.mp3', '/audio/mulakshar/wisarg-26-raha.mp3', '/audio/mulakshar/wisarg-27-laha.mp3', '/audio/mulakshar/wisarg-28-vaha.mp3',
  '/audio/mulakshar/wisarg-29-shaha.mp3', '/audio/mulakshar/wisarg-30-shahaa.mp3', '/audio/mulakshar/wisarg-31-sahaa.mp3', '/audio/mulakshar/wisarg-32-haa.mp3',
  '/audio/mulakshar/wisarg-33-lahaa.mp3', '/audio/mulakshar/wisarg-34-kshaha.mp3', '/audio/mulakshar/wisarg-35-dnyaha.mp3',

];

var MUTABLE_FILES = [
  'manifest.json', 'dashboard.html', 'styles/styles.min.css', '/data/vakya.json', '/data/words.json', '/data/shabd.json',
  '1te100.html', '1to100.html', 'abcd.html', 'abcdsmall.html', 'ank.html', 'ank-random.html', 'anuswar.html',
  'ardhchandr.html', 'donmatra.html', 'dusraukar.html', 'dusriwelanti.html', 'ekmatra.html', 'kana.html', 'kanaardhchandr.html',
  'kanadonmatra.html', 'kanaekmatra.html', 'mulakshar.html', 'mulaksharsarav.html', 'numbers.html', 'numpad.html', 'pahilaukar.html',
  'pahiliwelanti.html', 'screen.html', 'shabdsarav.html', 'vakyasarav.html', 'wisarg.html', 'words.html',
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      caches.open('marathi-cache').then(cache =>
        adderall.addAll(cache, STATIC_FILES, MUTABLE_FILES)
      )
    })()
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      // See https://developers.google.com/web/updates/2017/02/navigation-preload
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }

  // If our if() condition is false, then this fetch handler won't intercept the
  // request. If there are any other fetch handlers registered, they will get a
  // chance to call event.respondWith(). If no fetch handlers call
  // event.respondWith(), the request will be handled by the browser as if there
  // were no service worker involvement.
});