/* links.js — URLs de compra por rota. Não alterar design, textos ou comportamento.
 * default (rota "/") usa sufixo BJy3nySCDI.
 * v1 (rota "/1" e "/1/") usa sufixo BJy3nySCDI.
 * Os botões no HTML usam data-buy="pote1|potes3|potes5|potes10" e este
 * script troca o href conforme a rota, sem duplicar layout.
 */
window.RV_LINKS = {
  default: {
    pote1: "https://pv.b4you.com.br/api/product/c/0vS1l3U-wA/BJy3nySCDI?steps=3steps",
    potes3: "https://pv.b4you.com.br/api/product/c/i_UAvMDaLm/BJy3nySCDI?steps=3steps",
    potes5: "https://pv.b4you.com.br/api/product/c/pjPiea8WOx/BJy3nySCDI?steps=3steps",
    potes10: "https://pv.b4you.com.br/api/product/c/XfTiRiO9yk/BJy3nySCDI?steps=3steps"
  },
  v1: {
    pote1: "https://pv.b4you.com.br/api/product/c/0vS1l3U-wA/BJy3nySCDI?steps=3steps",
    potes3: "https://pv.b4you.com.br/api/product/c/i_UAvMDaLm/BJy3nySCDI?steps=3steps",
    potes5: "https://pv.b4you.com.br/api/product/c/pjPiea8WOx/BJy3nySCDI?steps=3steps",
    potes10: "https://pv.b4you.com.br/api/product/c/XfTiRiO9yk/BJy3nySCDI?steps=3steps"
  }
};

(function () {
  function routeKey() {
    var p = window.location.pathname || "/";
    if (p === "/1" || p === "/1/" || p.indexOf("/1/") === 0) return "v1";
    return "default";
  }
  function applyLinks() {
    var set = window.RV_LINKS[routeKey()];
    if (!set) return;
    document.querySelectorAll("a[data-buy]").forEach(function (a) {
      var k = a.getAttribute("data-buy");
      if (set[k]) a.setAttribute("href", set[k]);
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyLinks);
  } else {
    applyLinks();
  }
})();
