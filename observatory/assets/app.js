(function () {
  const data = window.YOTS_DATA;

  if (!data) {
    document.body.insertAdjacentHTML("afterbegin", "<p>YOTS data failed to load.</p>");
    return;
  }

  const $ = (selector) => document.querySelector(selector);

  function pill(value) {
    const cls = String(value).toLowerCase().replace(/[^a-z]/g, "");
    return `<span class="pill ${cls}">${escapeHtml(value)}</span>`;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderMetrics() {
    const metrics = [
      ["transmissions", data.metrics.transmissions],
      ["research domains", data.metrics.researchDomains],
      ["audited claims", data.metrics.auditedClaims],
      ["source nodes", data.metrics.sourceNodes]
    ];

    $("#metrics").innerHTML = metrics
      .map(([label, value]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`)
      .join("");
  }

  function renderTimeline() {
    $("#timeline-list").innerHTML = data.timeline
      .map((item) => {
        const evidence = item.evidenceIds.length ? item.evidenceIds.join(", ") : "source gap";
        return `
          <article class="timeline-item">
            <div class="era">${escapeHtml(item.era)}<br>${escapeHtml(item.years)}</div>
            <div>
              <h3>${escapeHtml(item.title)}</h3>
              <p class="summary">${escapeHtml(item.summary)}</p>
              <div class="card-meta">
                ${pill(item.confidence)}
                <span class="pill">${escapeHtml(evidence)}</span>
              </div>
            </div>
            <a class="source-link" href="${item.sourcePath}">source</a>
          </article>`;
      })
      .join("");
  }

  function evidenceCard(item) {
    return `
      <article class="evidence-card" data-domain="${escapeHtml(item.domain)}">
        <h3>${escapeHtml(item.title)}</h3>
        <div class="card-meta">
          <span class="pill">${escapeHtml(item.id)}</span>
          ${pill(item.confidence)}
          <span class="pill">${escapeHtml(item.domain)}</span>
        </div>
        <p>${escapeHtml(item.whyItMatters)}</p>
        <a class="source-link" href="${item.url}" target="_blank" rel="noreferrer">open source</a>
      </article>`;
  }

  function renderEvidence(domain = "all") {
    const filtered = domain === "all" ? data.evidence : data.evidence.filter((item) => item.domain === domain);
    $("#evidence-grid").innerHTML = filtered.map(evidenceCard).join("");
  }

  function renderTransmissions() {
    $("#transmission-list").innerHTML = data.transmissions
      .map((item) => `
        <article class="transmission-card">
          <div class="transmission-num">${escapeHtml(item.number)}</div>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <div class="card-meta">
              <span class="pill">${escapeHtml(item.dateLabel)}</span>
              <span class="pill">${escapeHtml(item.classification)}</span>
              <span class="pill">${escapeHtml(item.signalStrength)}</span>
            </div>
            <p>${escapeHtml(item.summary)}</p>
            <a class="source-link" href="${item.sourcePath}">read transmission</a>
          </div>
        </article>`)
      .join("");
  }

  function renderCounterSignals() {
    $("#counter-grid").innerHTML = data.counterSignals
      .map((item) => `
        <article class="counter-card">
          <h3>${escapeHtml(item.id)} / ${escapeHtml(item.claimId)}</h3>
          <div class="card-meta">
            ${pill(item.severity)}
            <span class="pill">${escapeHtml(item.status)}</span>
            <span class="pill">${escapeHtml(item.evidenceIds.join(", ") || "needs source")}</span>
          </div>
          <p>${escapeHtml(item.challenge)}</p>
          <a class="source-link" href="${item.issueTemplatePath}">issue template</a>
        </article>`)
      .join("");
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".filter");
    if (!button) return;

    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderEvidence(button.dataset.domain);
  });

  renderMetrics();
  renderTimeline();
  renderEvidence();
  renderTransmissions();
  renderCounterSignals();
})();
