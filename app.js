(function () {
  "use strict";

  var data = window.EXCUSES;
  var STORAGE_KEY = "excuse-generator-lang";
  var SITE_URL = "https://uselesssoso.github.io/excuse-generator/";
  var X_MAX = 280;
  var X_URL_LENGTH = 23;
  var X_RANGES = [
    [0, 4351, 100],
    [8192, 8205, 100],
    [8208, 8223, 100],
    [8242, 8247, 100],
  ];

  var lang = loadLang();
  var current = null;
  var lastKey = "";
  var copyTimer = 0;

  var UI = {
    en: {
      tagline: ["Generates excuses to skip meetings.", "Results not guaranteed."],
      title: "excuse-generator — Generates excuses to skip meetings",
      meeting: "Meeting",
      believability: "Believability",
      forWhom: "For",
      tonePlausible: "Plausible",
      toneSuspicious: "Suspicious",
      toneAbsurd: "Absurd",
      audAny: "Anyone",
      audBoss: "Boss",
      audTeam: "Team",
      audClient: "Client",
      asDecline: "Write it as a decline",
      generate: "Generate an excuse",
      again: "Generate another",
      hint: "Nothing is sent. The excuse stays in this browser.",
      onCalendar: "On the calendar",
      stampEmpty: "Not yet",
      stampDeclined: "Declined",
      empty: "Nothing declined yet. The meeting still believes you are coming.",
      copy: "Copy",
      copied: "Copied",
      copyFailed: "Copy failed",
      copiedStatus: "Copied to the clipboard.",
      copyFailedStatus: "Could not copy. Select the excuse and copy it yourself.",
      shareX: "Share on X",
      share: "Share",
      signed: "Signed",
      langLabel: "Language",
      forBoss: "For your boss",
      forTeam: "For the team",
      forClient: "For the client",
      toAny: "Everyone on the invite",
      toBoss: "Boss",
      toTeam: "Team",
      toClient: "Client",
      subject: "Decline: {meeting}",
      closerAny: "Happy to pick it up in writing.",
      closerBoss: "I will send a short update before the end of the day.",
      closerTeam: "Please start without me.",
      closerClient: "I will follow up by email today.",
      declineLead: "I need to decline the {meeting}.",
      greeting: "Hi,",
    },
    ja: {
      tagline: ["会議を欠席する言い訳を出す。", "効果は保証しない。"],
      title: "excuse-generator — 会議を欠席する言い訳を出す",
      meeting: "会議",
      believability: "もっともらしさ",
      forWhom: "宛先",
      tonePlausible: "それらしい",
      toneSuspicious: "怪しい",
      toneAbsurd: "無茶",
      audAny: "誰でも",
      audBoss: "上司",
      audTeam: "チーム",
      audClient: "顧客",
      asDecline: "送れる文面にする",
      generate: "言い訳を出す",
      again: "もう一つ",
      hint: "どこにも送られない。言い訳はこのブラウザの中だけ。",
      onCalendar: "カレンダー上",
      stampEmpty: "未辞退",
      stampDeclined: "辞退",
      empty: "まだ辞退していない。会議は、あなたが来ると信じている。",
      copy: "コピー",
      copied: "コピーした",
      copyFailed: "失敗",
      copiedStatus: "クリップボードにコピーした。",
      copyFailedStatus: "コピーできなかった。文面を選択して写せ。",
      shareX: "Xで共有",
      share: "共有",
      signed: "署名",
      langLabel: "言語",
      forBoss: "上司宛",
      forTeam: "チーム宛",
      forClient: "顧客宛",
      toAny: "関係者",
      toBoss: "上司",
      toTeam: "チーム",
      toClient: "お客様",
      subject: "辞退：{meeting}",
      closerAny: "要点があれば、文章で受け取ります。",
      closerBoss: "結論は文章で共有します。",
      closerTeam: "先に始めてください。",
      closerClient: "追ってメールにてご連絡いたします。",
      declineLead: "",
      greeting: "",
    },
    zh: {
      tagline: ["替你想个不去开会的借口。", "成不成另说。"],
      title: "excuse-generator — 替你想个不去开会的借口",
      meeting: "会议",
      believability: "像不像",
      forWhom: "发给",
      tonePlausible: "靠谱",
      toneSuspicious: "可疑",
      toneAbsurd: "离谱",
      audAny: "不限",
      audBoss: "上司",
      audTeam: "同事",
      audClient: "客户",
      asDecline: "写成可以直接发的",
      generate: "生成一个借口",
      again: "再来一个",
      hint: "什么都不会发出去。借口只留在这台浏览器里。",
      onCalendar: "仍在日历上",
      stampEmpty: "未辞",
      stampDeclined: "缺席",
      empty: "还没辞。这场会仍以为你会到。",
      copy: "复制",
      copied: "已复制",
      copyFailed: "复制失败",
      copiedStatus: "已复制到剪贴板。",
      copyFailedStatus: "没复制成。选中文字，自己复制。",
      shareX: "分享到 X",
      share: "分享",
      signed: "署名",
      langLabel: "语言",
      forBoss: "给上司",
      forTeam: "给同事",
      forClient: "给客户",
      toAny: "各位",
      toBoss: "上司",
      toTeam: "各位同事",
      toClient: "客户",
      subject: "辞谢：{meeting}",
      closerAny: "有结论的话，写成文字发我就行。",
      closerBoss: "结论我今天用文字补上。",
      closerTeam: "你们先开。",
      closerClient: "我今天邮件补充。谢谢。",
      declineLead: "",
      greeting: "",
    },
  };

  var form = document.getElementById("excuse-form");
  var generateButton = document.getElementById("generate");
  var againButton = document.getElementById("again");
  var copyButton = document.getElementById("copy");
  var shareX = document.getElementById("share-x");
  var shareButton = document.getElementById("share");
  var copyStatus = document.getElementById("copy-status");
  var actions = document.getElementById("actions");
  var output = document.getElementById("output");
  var invite = document.getElementById("invite");
  var asDecline = document.getElementById("as-decline");

  validateData();

  if (navigator.share) shareButton.hidden = false;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    roll();
  });

  againButton.addEventListener("click", function () {
    roll();
  });

  document.getElementById("lang-switch").addEventListener("click", function (event) {
    var button = event.target.closest("[data-lang]");
    if (!button) return;
    setLang(button.getAttribute("data-lang"));
  });

  form.addEventListener("change", function () {
    render();
  });

  copyButton.addEventListener("click", function () {
    if (!current) return;
    copyExcuse();
  });

  shareButton.addEventListener("click", function () {
    if (!current) return;
    shareExcuse();
  });

  function roll() {
    var tone = selectedTone();
    var list = data.lines[tone][lang];
    var nextIndex = 0;
    var key = "";
    var guard = 0;
    do {
      nextIndex = Math.floor(rand() * list.length);
      key = tone + "|" + lang + "|" + nextIndex;
      guard += 1;
    } while (key === lastKey && list.length > 1 && guard < 12);
    lastKey = key;
    current = { index: nextIndex };
    render();
    var reduced = prefersReducedMotion();
    invite.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
  }

  function render() {
    copyStatus.textContent = "";
    var meeting = selectedMeeting();
    var audience = selectedAudience();
    var tone = selectedTone();
    var bits = [meeting.label[lang], duration(meeting)];
    if (audience !== "any") bits.push(audienceMeta(audience));
    text("meta", bits.join(" · "));

    if (!current) {
      invite.dataset.state = "empty";
      invite.dataset.tone = "";
      text("stamp", t("stampEmpty"));
      text("kicker", t("onCalendar"));
      output.textContent = t("empty");
      output.classList.remove("is-memo");
      actions.hidden = true;
      shareX.removeAttribute("href");
      generateButton.textContent = t("generate");
      return;
    }

    var built = buildExcuse(tone, meeting);
    lastKey = tone + "|" + lang + "|" + current.index;
    invite.dataset.state = "ready";
    invite.dataset.tone = tone;
    text("stamp", t("stampDeclined"));
    text("kicker", toneLabel(tone));
    var shown = asDecline.checked ? declineMessage(built.text, meeting, audience) : built.text;
    output.textContent = shown;
    output.classList.toggle("is-memo", asDecline.checked);
    actions.hidden = false;
    generateButton.textContent = t("again");
    againButton.textContent = t("again");
    copyButton.textContent = t("copy");
    shareX.href = xIntentUrl(built.text);
    shareX.textContent = t("shareX");
  }

  function buildExcuse(tone, meeting) {
    var list = data.lines[tone][lang];
    var index = current.index;
    if (index >= list.length) index = 0;
    return { text: fill(list[index], meeting.label[lang]) };
  }

  function declineMessage(excuse, meeting, audience) {
    var label = meeting.label[lang];
    var when = duration(meeting);
    var to = t("to" + cap(audience));
    var subject = t("subject").replace("{meeting}", label);
    var closer = t("closer" + cap(audience));
    if (lang === "en") {
      return [
        "To: " + to,
        "Subject: " + subject,
        "When: " + when,
        "",
        "Hi,",
        "",
        "I need to decline the " + label + ".",
        "",
        excuse,
        "",
        closer,
      ].join("\n");
    }
    if (lang === "ja") {
      var lead = label;
      if (audience === "team") lead += "は抜けます。";
      else if (audience === "client" || audience === "boss") lead += "は欠席いたします。";
      else lead += "は欠席します。";
      var lines = ["宛先: " + to, "件名: " + subject, "時間: " + when, ""];
      if (audience === "client") lines.push("いつもお世話になっております。");
      lines.push(lead, "", excuse, "", closer);
      if (audience === "client") lines.push("よろしくお願いいたします。");
      return lines.join("\n");
    }
    var zhVerb = audience === "team" ? "我不参加了。" : audience === "client" ? "我无法参加。" : "我参加不了。";
    var zhLead = (audience === "client" ? "今天的" : "") + label + "，" + zhVerb;
    var zh = ["收件人: " + to, "主题: " + subject, "时间: " + when, ""];
    if (audience === "client") zh.push("您好，", "");
    zh.push(zhLead, "", excuse, "", closer);
    return zh.join("\n");
  }

  function copyExcuse() {
    var value = output.textContent;
    writeClipboard(value).then(function (ok) {
      copyButton.textContent = ok ? t("copied") : t("copyFailed");
      copyStatus.textContent = ok ? t("copiedStatus") : t("copyFailedStatus");
      window.clearTimeout(copyTimer);
      copyTimer = window.setTimeout(function () {
        copyButton.textContent = t("copy");
        copyStatus.textContent = "";
      }, 2400);
    });
  }

  function shareExcuse() {
    var built = buildExcuse(selectedTone(), selectedMeeting());
    var textValue = asDecline.checked ? declineMessage(built.text, selectedMeeting(), selectedAudience()) : built.text;
    navigator.share({ title: "excuse-generator", text: textValue }).catch(function (error) {
      if (error && error.name === "AbortError") return;
      copyExcuse();
    });
  }

  function xIntentUrl(excuse) {
    return "https://x.com/intent/post?text=" + encodeURIComponent(xText(excuse)) + "&url=" + encodeURIComponent(SITE_URL);
  }

  function xText(excuse) {
    var budget = X_MAX - X_URL_LENGTH - 1;
    if (weightedLength(excuse) <= budget) return excuse;
    var ellipsis = "…";
    var room = budget - weightedLength(ellipsis);
    var trimmed = "";
    var used = 0;
    var i;
    for (i = 0; i < excuse.length; ) {
      var code = excuse.codePointAt(i);
      var weight = charWeight(code) / 100;
      if (used + weight > room) break;
      var step = code > 65535 ? 2 : 1;
      trimmed += excuse.slice(i, i + step);
      used += weight;
      i += step;
    }
    trimmed = trimmed.replace(/[ \t]+\S*$/, "").replace(/[。.\s]+$/g, "").trim();
    if (!trimmed) trimmed = excuse.slice(0, 1);
    return trimmed + ellipsis;
  }

  function charWeight(code) {
    var i;
    for (i = 0; i < X_RANGES.length; i += 1) {
      if (code >= X_RANGES[i][0] && code <= X_RANGES[i][1]) return X_RANGES[i][2];
    }
    return 200;
  }

  function weightedLength(value) {
    var units = 0;
    var i;
    for (i = 0; i < value.length; ) {
      var code = value.codePointAt(i);
      units += charWeight(code);
      i += code > 65535 ? 2 : 1;
    }
    return units / 100;
  }

  function writeClipboard(value) {
    return new Promise(function (resolve) {
      var settled = false;
      function finish(ok) {
        if (settled) return;
        settled = true;
        resolve(ok);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(
          function () { finish(true); },
          function () { finish(fallbackCopy(value)); }
        );
        window.setTimeout(function () {
          if (!settled) finish(fallbackCopy(value));
        }, 500);
        return;
      }
      finish(fallbackCopy(value));
    });
  }

  function fallbackCopy(value) {
    var area = document.createElement("textarea");
    area.value = value;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "0";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (error) {
      ok = false;
    }
    area.remove();
    return ok;
  }

  function selectedMeeting() {
    var id = document.getElementById("meeting").value;
    var i;
    for (i = 0; i < data.meetings.length; i += 1) {
      if (data.meetings[i].id === id) return data.meetings[i];
    }
    return data.meetings[0];
  }

  function selectedTone() {
    var input = document.querySelector('input[name="tone"]:checked');
    return input ? input.value : "plausible";
  }

  function selectedAudience() {
    var input = document.querySelector('input[name="audience"]:checked');
    return input ? input.value : "any";
  }

  function duration(meeting) {
    if (lang === "ja") return meeting.minutes + "分";
    if (lang === "zh") return meeting.minutes + "分钟";
    return meeting.minutes + " min";
  }

  function audienceMeta(audience) {
    if (audience === "boss") return t("forBoss");
    if (audience === "team") return t("forTeam");
    if (audience === "client") return t("forClient");
    return "";
  }

  function toneLabel(tone) {
    if (tone === "suspicious") return t("toneSuspicious");
    if (tone === "absurd") return t("toneAbsurd");
    return t("tonePlausible");
  }

  function cap(audience) {
    if (audience === "boss") return "Boss";
    if (audience === "team") return "Team";
    if (audience === "client") return "Client";
    return "Any";
  }

  function fill(template, label) {
    return String(template).split("{meeting}").join(label);
  }

  function text(id, value) {
    document.getElementById(id).textContent = value;
  }

  function t(key) {
    return UI[lang][key];
  }

  function rand() {
    if (!rand.fn) {
      var buf = new Uint32Array(1);
      crypto.getRandomValues(buf);
      rand.fn = mulberry32(buf[0]);
    }
    return rand.fn();
  }

  function mulberry32(seed) {
    var state = seed >>> 0;
    return function () {
      state = (state + 0x6d2b79f5) >>> 0;
      var n = state;
      n = Math.imul(n ^ (n >>> 15), n | 1);
      n ^= n + Math.imul(n ^ (n >>> 7), n | 61);
      return ((n ^ (n >>> 14)) >>> 0) / 4294967296;
    };
  }

  function loadLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "ja" || stored === "zh") return stored;
    } catch (error) {
      return "en";
    }
    return "en";
  }

  function setLang(next) {
    if (next !== "en" && next !== "ja" && next !== "zh") next = "en";
    lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* keep the choice for this visit */
    }
    applyStatic();
  }

  function applyStatic() {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
    document.title = t("title");
    var description = t("tagline").join(lang === "en" ? " " : "");
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    var group = document.getElementById("lang-switch");
    group.setAttribute("aria-label", t("langLabel"));
    group.querySelectorAll("[data-lang]").forEach(function (button) {
      var on = button.getAttribute("data-lang") === lang;
      button.setAttribute("aria-checked", on ? "true" : "false");
      button.classList.toggle("is-on", on);
    });
    ["tone", "audience"].forEach(function (name) {
      var field = document.querySelector('fieldset[data-name="' + name + '"]');
      if (field) field.setAttribute("aria-label", name === "tone" ? t("believability") : t("forWhom"));
    });
    fillMeetings();
    renderTagline();
    shareButton.textContent = t("share");
    render();
  }

  function fillMeetings() {
    var select = document.getElementById("meeting");
    var currentId = select.value || "standup";
    select.replaceChildren();
    data.meetings.forEach(function (meeting) {
      var option = document.createElement("option");
      option.value = meeting.id;
      option.textContent = meeting.label[lang];
      if (meeting.id === currentId) option.selected = true;
      select.appendChild(option);
    });
  }

  function renderTagline() {
    var el = document.querySelector(".tagline");
    el.replaceChildren();
    t("tagline").forEach(function (sentence, index) {
      if (index > 0 && lang === "en") el.append(document.createTextNode(" "));
      var line = document.createElement("span");
      line.className = "tagline-line";
      line.textContent = sentence;
      el.append(line);
    });
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function validateData() {
    data.tones.forEach(function (tone) {
      ["en", "ja", "zh"].forEach(function (code) {
        var list = data.lines[tone] && data.lines[tone][code];
        if (!list || list.length < 60) throw new Error("short bank " + tone + " " + code);
        list.forEach(function (line, index) {
          if (!line || !String(line).trim()) throw new Error("empty " + tone + " " + code + " " + index);
          if (String(line).indexOf("{") !== -1 && String(line).indexOf("{meeting}") === -1) {
            throw new Error("bad slot " + tone + " " + code + " " + index);
          }
          if (sentenceCount(line, code) > 2) throw new Error("long " + tone + " " + code + " " + index);
        });
      });
    });
  }

  function sentenceCount(line, code) {
    var parts = String(line).split(code === "en" ? /[.?!]+/ : /[。？！]+/);
    return parts.filter(function (part) { return part.trim().length > 0; }).length;
  }

  applyStatic();
})();
