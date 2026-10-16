/* Baltic cargo routes, an illustration on the front page.
   The coastline is real (Natural Earth 1:50m, public domain), and so are the
   ports and the routes: ro-ro and ferry freight lines, container feeders and
   the main bulk and tanker trades, simplified onto shared sea lanes. The
   vessels moving along them are simulated. Purely visual: no labels or text. */
(function () {
  'use strict';

  var MAP = {"cols": 120, "rows": 143, "bbox": [9.5, 30.5, 53.5, 66.0], "k": 0.5000000000000001, "mask": "AABP////////////////AAA/////////////////AAA/////////hAP/////AAR/////////gAH/////AAT/////////gAB/////AAD////////+AAA/////AAH////////+AAA/////AAH////////4AAA/////AAHf///////wAAA/////AAA////////4AAA/////AAf////////4AAEf////AA/////////wAAM/////Ad/////////gAAA/////AD/////////gAAH/////AB/////////gAAP/////AH/////////wAAf/////AP/////////wAAf/////Af/////////4AA//////A//////////wAB//////B//////////gAB//////D//////////AAD//////H//////////AAH//////H9////////+AAP//////Pz////////+AAf//////f7////////8AA///////fz////////4AB///////Pv////////wAD///////uf///////+AAP///////wf///////+AAP////////////////wAAf////////////////gAAf///////////////+gAg////////////////8AAH////////////////8AAH////////////////4AAP////////////////4AAP////////////////QAAf////////////////AAA/////////////////AAA/////////////////AAA////////////////6AAAf///////////////4AAAf///////////////8AAAP///////////////8AAAP///////////////8AAAf///////////////4AAAf///////////////4AAAP///////////////4AAAP///////////////4AAAH///////////////wAAAH///////////////wAAAH///////////////wAAAH///////////////wAAAH///////////////wAAAH///////////////wAAAH///////////////wAAAP///////////////wAAAP///////////////wAAAP///////////////wAAAP///////////////wAAAP///////////////wAAAP///////////////8AAAP//////f/////////gAAT/////4f/////////gAAC///9wAf/////////wBAAn//+AAP/////////8DgAv//gAAH/////////8HACN/+AAADP////////+BAAN/wAAAAH////////+AAAA+AAAAAH/////////AAAAgAAAADz/////////AAABAAAAAH//////////AAAAAAAAC//////////+AAAAAAAAD//////////8AAAAAAPAD//+///////4AAAAAH/4D//+f//////kAAAAA//////+f//////8AAAAB//////+f//////4AAAAH//////+H//////wAAAAP//////8D//////gAAAAP//////gH//////AAAAeP//////AD/////8AAAAOP//////AD/////4AAAAMP//////AD/////gAAAAIP//////AD////4AAAAAKv//////AD/////AAAAAfH//////AD////+AAAAB/H//////AB////+AAAAB+Dv/////AB////+AAAAB8AP/////AB////+AAAAAgAP/////AB////+AAAAAgAf/////AA////+AAAABAAf/////AAf///+AAAAAAAf/////AAf///8ADgAAAAf/////AAf///8AHAAAAAf/////BAP///8AOAAA4Af/////GAP///+AeAAD4Af/////PAP///+AeAAH8Af/////fAH///+AfAAH+Af/////fIH///8AeAAP/Af//////AH///8gcAAP/Af/////+AD///8gIAAP/g//////+AD///8AIAAP/x//////+AD///8AAAAf////////+AB///9AAAAf////////+AA///7AAAA/////////+AA///6AAAA/////////+AAf//yAAAA//////////wAP//2AAAA//////////wA///2AAAA//////////wAf//0AAAA//////////gBf//gAAAA/////////+AA//sgAAAA/////////8AG//AAAAAA/////////8AP/8AAAAAA/////////8huf4AAAAAA/////////4BOP4AAAAAA/////////4H/P4AAAAAA/////////wH/P4AAAAAAf////////nn8P8AAAAAAf////////vj8P4AAAAAAf////////vj+GAAAAAAAf////////vj+AAAAAAABf////////ni4AAgAAAAAf////////DgYAAwAAAAAf////////gAaAAQAAAAEf////////oUcAAAAAAA+f////////hmYAAAAAAA//////////wHgAAAAD8A//////////4DgAAAAf6B//////////4AAGAAA/8B//////////wEAHAAD/8D//////////+EB3AAH/+H///////////4D/AAP//////////////4H4AA///////////////wP8AD///////////////w//Af///////////////9//5///////////////////////////////////////h///////////////////5///////////////f///////////////////////////////////////"};
  var NET = {"ports": {"GDN": ["Gdańsk / Gdynia", 18.66, 54.42, "PL"], "GVX": ["Gävle", 17.19, 60.68, "SE"], "HEL": ["Helsinki", 25.19, 60.2, "FI"], "KAR": ["Karlskrona", 15.59, 56.16, "SE"], "KEM": ["Kemi", 24.52, 65.73, "FI"], "KIE": ["Kiel Canal", 10.15, 54.36, "GW"], "KLJ": ["Klaipėda", 21.12, 55.71, "LT"], "KOT": ["HaminaKotka", 26.95, 60.46, "FI"], "KPS": ["Kapellskär", 19.06, 59.72, "SE"], "KSH": ["Karlshamn", 14.86, 56.17, "SE"], "LLA": ["Luleå", 22.17, 65.58, "SE"], "LPX": ["Liepāja", 21.0, 56.52, "LV"], "MHQ": ["Mariehamn", 19.93, 60.09, "AX"], "MMA": ["Malmö", 13.0, 55.61, "SE"], "NYN": ["Nynäshamn", 17.95, 58.9, "SE"], "ORE": ["Øresund", 12.6, 55.35, "GW"], "OUL": ["Oulu", 25.43, 65.01, "FI"], "PLD": ["Paldiski", 24.05, 59.35, "EE"], "RAA": ["Raahe", 24.42, 64.68, "FI"], "RAU": ["Rauma", 21.46, 61.13, "FI"], "RIX": ["Riga", 24.1, 56.97, "LV"], "ROS": ["Rostock", 12.1, 54.15, "DE"], "SKO": ["Sköldvik (Porvoo)", 25.55, 60.3, "FI"], "STO": ["Stockholm", 18.1, 59.32, "SE"], "SWI": ["Świnoujście", 14.25, 53.91, "PL"], "TKU": ["Turku / Naantali", 22.1, 60.45, "FI"], "TLL": ["Tallinn (Muuga)", 24.96, 59.5, "EE"], "TRA": ["Travemünde", 10.87, 53.96, "DE"], "TRG": ["Trelleborg", 13.16, 55.37, "SE"], "UME": ["Umeå", 20.27, 63.7, "SE"], "VAA": ["Vaasa", 21.57, 63.1, "FI"], "VBY": ["Visby", 18.29, 57.64, "SE"], "VNT": ["Ventspils", 21.56, 57.4, "LV"], "YST": ["Ystad", 13.82, 55.43, "SE"]}, "way": {"BOTHBAY": [22.6, 64.6], "KVARKEN": [20.9, 63.5], "BOTHSEA": [19.9, 62.0], "ALANDSEA": [19.3, 60.0], "GOF_E": [26.4, 60.05], "GOF_MID": [24.6, 59.75], "GOF_W": [22.4, 59.45], "NBALTIC": [20.6, 58.8], "GOT_E": [19.9, 57.4], "GOT_S": [18.6, 56.4], "SBALTIC": [17.5, 55.6], "BORNHOLM_N": [14.7, 55.55], "BORN_S": [15.3, 54.85], "ARKONA": [13.6, 54.9], "KADET": [12.4, 54.55], "FEHMARN": [11.2, 54.55], "LUBECK_BAY": [11.0, 54.1], "KIEL_BAY": [10.5, 54.55], "KALMAR": [17.2, 56.9], "IRBE": [21.9, 57.75], "RIGA_GULF": [23.3, 57.8], "ARCH": [21.0, 59.9], "GDN_BAY": [19.1, 54.7], "BOTH_S": [18.8, 60.6], "LLA_OUT": [23.2, 65.0], "KEM_OUT": [24.1, 64.95], "VNT_OUT": [20.9, 57.6], "TRG_OUT": [13.2, 55.15], "MECK": [11.6, 54.25], "KEM_W": [23.9, 65.45], "STO_OUT": [19.4, 59.55]}, "routes": [[0, 3, ["HEL", "TLL"]], [0, 3, ["HEL", "GOF_MID", "GOF_W", "NBALTIC", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "KADET", "MECK", "LUBECK_BAY", "TRA"]], [0, 2, ["HEL", "GOF_MID", "GOF_W", "ARCH", "MHQ", "ALANDSEA", "STO_OUT", "STO"]], [0, 2, ["TKU", "ARCH", "MHQ", "ALANDSEA", "KPS"]], [0, 2, ["TKU", "ARCH", "MHQ", "ALANDSEA", "STO_OUT", "STO"]], [0, 2, ["PLD", "GOF_W", "ARCH", "ALANDSEA", "KPS"]], [0, 2, ["VAA", "KVARKEN", "UME"]], [0, 2, ["NYN", "NBALTIC", "VNT_OUT", "VNT"]], [0, 1, ["NYN", "VBY"]], [0, 1, ["NYN", "KALMAR", "GOT_S", "SBALTIC", "GDN_BAY", "GDN"]], [0, 1, ["TRA", "LUBECK_BAY", "MECK", "KADET", "ARKONA", "BORN_S", "SBALTIC", "LPX"]], [0, 2, ["MMA", "ORE", "KADET", "MECK", "LUBECK_BAY", "TRA"]], [0, 2, ["MMA", "ORE", "ARKONA", "SWI"]], [0, 3, ["TRG", "TRG_OUT", "KADET", "MECK", "LUBECK_BAY", "TRA"]], [0, 3, ["TRG", "TRG_OUT", "ROS"]], [0, 2, ["TRG", "TRG_OUT", "SWI"]], [0, 2, ["TRG", "TRG_OUT", "ARKONA", "BORN_S", "SBALTIC", "KLJ"]], [0, 3, ["YST", "SWI"]], [0, 2, ["KSH", "BORNHOLM_N", "SBALTIC", "KLJ"]], [0, 2, ["KIE", "KIEL_BAY", "FEHMARN", "KADET", "ARKONA", "BORN_S", "SBALTIC", "KLJ"]], [0, 1, ["KAR", "SBALTIC", "GDN_BAY", "GDN"]], [1, 3, ["KOT", "GOF_E", "GOF_MID", "GOF_W", "NBALTIC", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "KADET", "FEHMARN", "KIEL_BAY", "KIE"]], [1, 3, ["HEL", "GOF_MID", "GOF_W", "NBALTIC", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "KADET", "FEHMARN", "KIEL_BAY", "KIE"]], [1, 2, ["RAU", "BOTHSEA", "ALANDSEA", "NBALTIC", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "KADET", "FEHMARN", "KIEL_BAY", "KIE"]], [1, 1, ["OUL", "BOTHBAY", "KVARKEN", "BOTHSEA", "ALANDSEA", "NBALTIC", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "KADET", "FEHMARN", "KIEL_BAY", "KIE"]], [1, 2, ["TLL", "GOF_MID", "GOF_W", "NBALTIC", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "KADET", "FEHMARN", "KIEL_BAY", "KIE"]], [1, 2, ["RIX", "RIGA_GULF", "IRBE", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "KADET", "FEHMARN", "KIEL_BAY", "KIE"]], [1, 2, ["KLJ", "SBALTIC", "BORN_S", "ARKONA", "KADET", "FEHMARN", "KIEL_BAY", "KIE"]], [1, 3, ["GDN", "GDN_BAY", "SBALTIC", "BORN_S", "ARKONA", "ORE"]], [1, 1, ["GVX", "BOTH_S", "ALANDSEA", "NBALTIC", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "ORE"]], [2, 3, ["SKO", "GOF_MID", "GOF_W", "NBALTIC", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "ORE"]], [2, 3, ["LLA", "LLA_OUT", "KVARKEN", "BOTHSEA", "ALANDSEA", "NBALTIC", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "ORE"]], [2, 2, ["RAA", "BOTHBAY", "KVARKEN", "BOTHSEA", "ALANDSEA", "NBALTIC", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "ORE"]], [2, 1, ["KEM", "KEM_W", "BOTHBAY", "KVARKEN", "BOTHSEA", "ALANDSEA", "NBALTIC", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "KADET", "FEHMARN", "KIEL_BAY", "KIE"]], [2, 2, ["VNT", "VNT_OUT", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "ORE"]], [2, 2, ["RIX", "RIGA_GULF", "IRBE", "GOT_E", "GOT_S", "SBALTIC", "BORN_S", "ARKONA", "ORE"]], [2, 2, ["KLJ", "SBALTIC", "BORN_S", "ARKONA", "ORE"]], [2, 2, ["GDN", "GDN_BAY", "SBALTIC", "BORN_S", "ARKONA", "KADET", "FEHMARN", "KIEL_BAY", "KIE"]]]};

  var INK = '#0D1418';
  // Land dots and routes share one colour; ports are black, ringed in it.
  // ROUTE is LAND composited on INK, solid so bundled lanes do not stack brighter.
  var LAND = 'rgba(168,189,197,0.42)', ROUTE = '#4E5B61', SEA = 'rgba(138,164,176,0.10)', SHIP = 'rgba(222,230,232,0.8)';
  var MARGIN = 12;

  var ids = Object.keys(NET.ports);
  var LON0 = MAP.bbox[0], LON1 = MAP.bbox[1], LAT0 = MAP.bbox[2], LAT1 = MAP.bbox[3];
  var bits = (function () {
    var bin = atob(MAP.mask), out = new Uint8Array(MAP.cols * MAP.rows);
    for (var i = 0; i < out.length; i++) out[i] = (bin.charCodeAt(i >> 3) >> (7 - (i & 7))) & 1;
    return out;
  })();
  function rng(seed) {
    return function () {
      seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function lonlat(k) { var p = NET.ports[k]; return p ? [p[1], p[2]] : NET.way[k]; }
  function catmull(pts, n) {
    var out = [], P = [pts[0]].concat(pts, [pts[pts.length - 1]]);
    for (var i = 1; i < P.length - 2; i++) for (var s = 0; s < n; s++) {
      var t = s / n, t2 = t * t, t3 = t2 * t, q = [];
      for (var j = 0; j < 2; j++) q.push(0.5 * (2 * P[i][j] + (-P[i - 1][j] + P[i + 1][j]) * t +
        (2 * P[i - 1][j] - 5 * P[i][j] + 4 * P[i + 1][j] - P[i + 2][j]) * t2 +
        (-P[i - 1][j] + 3 * P[i][j] - 3 * P[i + 1][j] + P[i + 2][j]) * t3));
      out.push(q);
    }
    out.push(pts[pts.length - 1]);
    return out;
  }

  function View(host) {
    var cv = document.createElement('canvas'), ctx = cv.getContext('2d');
    var still = document.createElement('canvas');
    // Sized by its box, never the other way round: the canvas must not grow the host.
    cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    host.appendChild(cv);
    var W = 0, H = 0, dpr = 1, box = null, pos = {}, lanes = [], ships = [];
    var running = false, visible = false, last = 0;

    function project(ll) {
      return [box.x + (ll[0] - LON0) / (LON1 - LON0) * box.w, box.y + (LAT1 - ll[1]) / (LAT1 - LAT0) * box.h];
    }
    function layout() {
      var r = host.getBoundingClientRect();
      W = r.width; H = r.height;
      if (!W || !H) return false;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      // The same small margin on every side; the map stretches a few per cent to fit.
      box = { x: MARGIN, y: MARGIN, w: W - 2 * MARGIN, h: H - 2 * MARGIN };
      ids.forEach(function (k) { pos[k] = project(lonlat(k)); });
      lanes = NET.routes.map(function (r) {
        var pts = catmull(r[2].map(lonlat), 10).map(project), len = [0];
        for (var i = 1; i < pts.length; i++) {
          len.push(len[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
        }
        return { w: r[1], pts: pts, len: len, total: len[len.length - 1] };
      });
      if (!ships.length) {
        var rr = rng(7);
        lanes.forEach(function (l, i) {
          for (var j = 0; j < l.w * 2; j++) ships.push({ lane: i, s: rr(), dir: rr() < 0.5 ? 1 : -1, v: 14 + rr() * 14 });
        });
      }
      // Everything that does not move is drawn once per size: dots, routes, ports.
      still.width = cv.width; still.height = cv.height;
      var m = still.getContext('2d'), cw = box.w / MAP.cols, ch = box.h / MAP.rows, cell = Math.min(cw, ch);
      m.setTransform(dpr, 0, 0, dpr, 0, 0);
      m.fillStyle = INK; m.fillRect(0, 0, W, H);
      for (var rI = 0; rI < MAP.rows; rI++) for (var cI = 0; cI < MAP.cols; cI++) {
        var land = bits[rI * MAP.cols + cI];
        m.fillStyle = land ? LAND : SEA;
        m.beginPath();
        m.arc(box.x + (cI + 0.5) * cw, box.y + (rI + 0.5) * ch, cell * (land ? 0.3 : 0.16), 0, 6.2832);
        m.fill();
      }
      m.lineCap = 'round'; m.lineJoin = 'round'; m.strokeStyle = ROUTE;
      lanes.forEach(function (l) {
        m.beginPath();
        l.pts.forEach(function (p, i) { if (i) m.lineTo(p[0], p[1]); else m.moveTo(p[0], p[1]); });
        m.lineWidth = 0.6 + l.w * 0.4;
        m.stroke();
      });
      ids.forEach(function (k) {
        var q = pos[k];
        m.beginPath(); m.arc(q[0], q[1], 3.2, 0, 6.2832);
        m.fillStyle = '#000000'; m.fill();
        m.lineWidth = 1.2; m.strokeStyle = ROUTE; m.stroke();
      });
      return true;
    }
    function at(l, s) {
      var d = s * l.total, i = 1;
      while (i < l.len.length - 1 && l.len[i] < d) i++;
      var a = l.pts[i - 1], b = l.pts[i], seg = l.len[i] - l.len[i - 1] || 1, u = (d - l.len[i - 1]) / seg;
      return [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u];
    }
    function draw() {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(still, 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = SHIP;
      ships.forEach(function (s) {
        var p = at(lanes[s.lane], s.s);
        ctx.beginPath(); ctx.arc(p[0], p[1], 1.3, 0, 6.2832); ctx.fill();
      });
    }
    function step(dt) {
      ships.forEach(function (s) {
        s.s += s.dir * s.v * dt / lanes[s.lane].total;
        if (s.s > 1) s.s = 0; else if (s.s < 0) s.s = 1;
      });
    }
    function frame(ts) {
      if (!running) return;
      var dt = last ? Math.min(0.05, (ts - last) / 1000) : 0; last = ts;
      step(dt); draw();
      requestAnimationFrame(frame);
    }
    function update() {
      var should = visible && W > 0 && H > 0 && document.visibilityState === 'visible';
      if (should && !running) { running = true; last = 0; requestAnimationFrame(frame); }
      if (!should) running = false;
    }
    new ResizeObserver(function () { if (layout()) draw(); update(); }).observe(host);
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; update(); }).observe(host);
    document.addEventListener('visibilitychange', update);
  }

  document.querySelectorAll('[data-viz="network"]').forEach(function (h) { new View(h); });
})();
