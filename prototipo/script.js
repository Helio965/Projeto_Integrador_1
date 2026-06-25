// Protótipo navegável do NEXO — Faturamento Inteligente.
// Navegação entre telas e simulações locais, sem backend e sem bibliotecas externas.

(function () {
  "use strict";

  function showScreen(id) {
    var screens = document.querySelectorAll(".screen");
    for (var i = 0; i < screens.length; i++) {
      screens[i].classList.remove("active");
    }
    var target = document.getElementById(id);
    if (target) {
      target.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function setView(role) {
    var admin = document.getElementById("btn-view-admin");
    var cliente = document.getElementById("btn-view-cliente");
    if (role === "cliente") {
      cliente.classList.add("active");
      admin.classList.remove("active");
    } else {
      admin.classList.add("active");
      cliente.classList.remove("active");
    }
  }

  // Botões de navegação no fluxo (data-goto).
  document.addEventListener("click", function (event) {
    var el = event.target.closest("[data-goto]");
    if (!el) return;
    if (el.getAttribute("data-switch-cliente") === "true") {
      setView("cliente");
    }
    if (el.getAttribute("data-switch-admin") === "true") {
      setView("admin");
    }
    showScreen(el.getAttribute("data-goto"));
  });

  // Alternância de visão ADMIN / CLIENTE no topo.
  document.getElementById("btn-view-admin").addEventListener("click", function () {
    setView("admin");
    showScreen("tela-painel-admin");
  });
  document.getElementById("btn-view-cliente").addEventListener("click", function () {
    setView("cliente");
    showScreen("tela-cliente");
  });

  // Simulação do processamento ETL.
  var btnProcessar = document.getElementById("btn-processar");
  if (btnProcessar) {
    btnProcessar.addEventListener("click", function () {
      var status = document.getElementById("etl-status");
      var progress = document.getElementById("etl-progress");
      var btnDashboard = document.getElementById("btn-ver-dashboard");

      btnProcessar.disabled = true;
      status.textContent = "Processando relatórios de vendas e compras...";
      progress.style.width = "0";

      var pct = 0;
      var timer = setInterval(function () {
        pct += 20;
        progress.style.width = pct + "%";
        if (pct >= 100) {
          clearInterval(timer);
          status.textContent = "Processamento concluído. Indicadores gerados (dados simulados).";
          btnDashboard.classList.remove("hidden");
          btnProcessar.classList.add("hidden");
        }
      }, 300);
    });
  }
})();
