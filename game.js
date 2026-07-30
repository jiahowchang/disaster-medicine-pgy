// 🚨 Disaster Triage Mini-Game Engine with Direct Student Name Input, Top 3 Leaderboard & Reward Certificates
const casesDatabase = {
  earthquake: [
    {
      id: 1,
      title: "傷患 A (男性，38歲 - 日本熊本地震木造房屋倒塌)",
      desc: "熊本地震益城町倒塌木造住宅救出，左腿受困3小時，雙肢有多處嚴重撕裂傷與開放性骨折。廣播後自行站立並緩慢行走至檢傷人員身旁。",
      walk: "🟢 能自行行走",
      resp: "RR 22次/分 (正常)",
      perf: "CRT 1.5秒，橈脈搏強",
      mental: "意識清醒，能遵從簡單指令",
      correctColor: "green",
      explanation: "【檢傷結果：🟢 綠色】依 START 檢傷 Step 1：傷患能夠遵從廣播自行站立行走，直接歸類為【綠色（輕傷）】，應引導至輕傷區處置，避免佔用重症資源。"
    },
    {
      id: 2,
      title: "傷患 B (女性，45歲 - 熊本地震擠壓症候群傷患)",
      desc: "從倒塌磚牆下被日本 DMAT 救出，胸腹部壓傷受困數小時。無法自行行走，表情極度痛苦。檢傷發現呼吸極度急促且淺。",
      walk: "❌ 無法自行行走",
      resp: "RR 36次/分 (過快)",
      perf: "CRT 1.8秒，摸得到橈脈搏",
      mental: "意識清醒但焦慮",
      correctColor: "red",
      explanation: "【檢傷結果：🔴 紅色】依 START 檢傷 Step 2：無法行走，且呼吸速率 RR > 30 次/分（RR 36），代表呼吸窘迫與潛在擠壓症候群 (Crush Syndrome)，必須立即掛【紅色】優先送入急診搶救區。"
    },
    {
      id: 3,
      title: "傷患 C (男性，62歲 - 熊本地震頭部重創)",
      desc: "受困震災瓦礫堆中，被重物擊中頭部。無自主呼吸，發紺，無意識。",
      walk: "❌ 無法自行行走",
      resp: "無自主呼吸 (打開放氣道後仍無呼吸)",
      perf: "橈脈搏消失",
      mental: "無意識，無對痛反應",
      correctColor: "black",
      explanation: "【檢傷結果：⬛ 黑色】依 START 檢傷 Step 2：傷患無自主呼吸，經手動打開放氣道 (Jaw-thrust/OAT) 後仍無呼吸，在大傷資源有限下歸類為【黑色（期待死亡）】，暫延後處置。"
    },
    {
      id: 4,
      title: "傷患 D (女性，29歲 - 震災內出血休克)",
      desc: "阿蘇大橋周邊車輛受地震落石強烈撞擊，腹部受創，臉色蒼白、全身冷汗。無法自行行走。呼吸 24次/分，但手腳冰冷。",
      walk: "❌ 無法自行行走",
      resp: "RR 24次/分 (正常)",
      perf: "CRT 3.5秒 (過慢)，摸不到橈脈搏",
      mental: "嗜睡，但呼喚有反應",
      correctColor: "red",
      explanation: "【檢傷結果：🔴 紅色】依 START 檢傷 Step 3：無法行走、呼吸次數正常，但 CRT > 2 秒（3.5秒）且橈脈搏摸不到，提示嚴重休克/內出血，需掛【紅色】立即救治！"
    },
    {
      id: 5,
      title: "傷患 E (男性，50歲 - 熊本地震肢體骨折)",
      desc: "避難過度擠壓致右前臂閉鎖性骨折，變形腫脹。無法自行行走（因左膝擦傷疼痛），但生命徵象穩定。",
      walk: "❌ 無法自行行走",
      resp: "RR 20次/分 (正常)",
      perf: "CRT 1.5秒，橈脈搏強",
      mental: "能遵從簡單指令（握手配合）",
      correctColor: "yellow",
      explanation: "【檢傷結果：🟡 黃色】依 START 檢傷 Step 4：無法行走、呼吸與灌流皆正常，且能遵從握手指令。病情穩定無立即生命危險，掛【黃色（次危急）】於觀察區動態 Re-triage。"
    }
  ],
  burn: [
    {
      id: 6,
      title: "傷患 F (女性，22歲 - 八仙塵暴燒傷)",
      desc: "塵暴現場救出，雙下肢與軀幹 45% 二度至三度燒傷。早期代償良好，能聽從指令遵從，呼吸頻率 26次/分。",
      walk: "❌ 雙腳燒傷痛苦無法行走",
      resp: "RR 26次/分 (正常範疇)",
      perf: "CRT 1.5秒，脈搏強",
      mental: "能聽從握手指令",
      correctColor: "yellow",
      explanation: "【檢傷結果：🟡 黃色】(特別提醒：八仙塵暴早期大面積燒傷生命徵象常穩定，START 初評歸為【黃色】，但後續體液滲漏休克極快，院內需極快 Re-triage 入 ICU！)"
    },
    {
      id: 7,
      title: "傷患 G (男性，26歲 - 吸入性灼傷)",
      desc: "塵暴近火源處救出，臉部焦黑、鼻毛燒焦、聲音沙啞喘鳴 (Stridor)。呼吸極度費力。",
      walk: "❌ 無法自行行走",
      resp: "RR 35次/分，呼吸困難喘鳴",
      perf: "CRT 2.5秒",
      mental: "煩躁不安",
      correctColor: "red",
      explanation: "【檢傷結果：🔴 紅色】呼吸道吸入性灼傷 (Inhalation Injury) 伴隨喘鳴與呼吸過快 (RR 35)，氣道隨時會腫脹完全阻塞，必須掛【紅色】立即插管！"
    }
  ],
  aircrash: [
    {
      id: 8,
      title: "傷患 H (男性，30歲 - 復興基隆河空難)",
      desc: "寒冬水域救出，肢體多處撕裂傷。全身紫紺劇烈顫抖，無法行走。無呼吸，開放氣道後恢復呼吸！",
      walk: "❌ 無法自行行走",
      resp: "打開放氣道後，恢復 RR 32次/分",
      perf: "摸得到橈脈搏但弱",
      mental: "意識模糊",
      correctColor: "red",
      explanation: "【檢傷結果：🔴 紅色】打開放氣道後「成功恢復自主呼吸」，但 RR > 30 次/分且伴隨失溫重創，應聯絡醫療團隊掛【紅色】優先送醫搶救！"
    },
    {
      id: 9,
      title: "傷患 I (女性，55歲 - 機艙受困傷患)",
      desc: "機艙受困搜救。意識障礙，對呼喚無反應，眼睛無法睜開，無法配合握手指令。",
      walk: "❌ 無法自行行走",
      resp: "RR 22次/分 (正常)",
      perf: "CRT 1.8秒",
      mental: "❌ 無法遵從簡單指令",
      correctColor: "red",
      explanation: "【檢傷結果：🔴 紅色】依 START 檢傷 Step 4：無法遵從簡單指令（握手無反應），提示重度腦創傷或昏迷，掛【紅色】立即送搶救區！"
    },
    {
      id: 10,
      title: "傷患 J (男性，42歲 - 水域輕傷者)",
      desc: "自行從河道爬上岸，僅頭皮小挫傷與手部擦傷。能隨救援人員行走登車。",
      walk: "🟢 能自行行走",
      resp: "RR 18次/分",
      perf: "CRT 1.0秒",
      mental: "意識完全清醒",
      correctColor: "green",
      explanation: "【檢傷結果：🟢 綠色】能自行行走、生命徵象與意識完全正常，歸類為【綠色（輕傷）】。"
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  let playerName = "";
  let currentMode = 'earthquake';
  let currentCases = [];
  let currentIndex = 0;

  let score = 0;
  let streak = 0;
  let maxStreak = 0;
  let correctCount = 0;

  let timeLeft = 60;
  let timerInterval = null;

  const ADMIN_PASSWORD = "pgy2026"; // 講師管理密碼

  // DOM elements
  const welcomeScreen = document.getElementById('welcome-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const resultScreen = document.getElementById('result-screen');

  const playerNameInput = document.getElementById('player-name-input');
  const headerPlayerName = document.getElementById('header-player-name');

  const startGameBtn = document.getElementById('start-game-btn');
  const restartGameBtn = document.getElementById('restart-game-btn');
  const clearLeaderboardBtn = document.getElementById('clear-leaderboard-btn');
  const disasterBtns = document.querySelectorAll('.disaster-btn');

  const scoreEl = document.getElementById('score');
  const streakEl = document.getElementById('streak');
  const timerEl = document.getElementById('timer');

  const caseCurrentEl = document.getElementById('case-current');
  const caseTotalEl = document.getElementById('case-total');
  const scenarioTagEl = document.getElementById('scenario-tag');

  const patientTitleEl = document.getElementById('patient-title');
  const patientDescEl = document.getElementById('patient-desc');
  const vitalWalkEl = document.getElementById('vital-walk');
  const vitalRespEl = document.getElementById('vital-resp');
  const vitalPerfEl = document.getElementById('vital-perf');
  const vitalMentalEl = document.getElementById('vital-mental');

  const triageBtns = document.querySelectorAll('.triage-btn');
  const feedbackBox = document.getElementById('feedback-box');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackDesc = document.getElementById('feedback-desc');
  const nextCaseBtn = document.getElementById('next-case-btn');

  const resPlayerNameEl = document.getElementById('res-player-name');
  const finalScoreEl = document.getElementById('final-score');
  const finalAccEl = document.getElementById('final-acc');
  const finalStreakEl = document.getElementById('final-streak');
  const pgyRankEl = document.getElementById('pgy-rank');
  const rankDescEl = document.getElementById('rank-desc');

  const welcomeTop3Box = document.getElementById('welcome-top3');
  const resultTop3List = document.getElementById('result-top3-list');
  const rewardBox = document.getElementById('reward-box');
  const rewardTitle = document.getElementById('reward-title');

  const showRulesBtn = document.getElementById('show-rules-btn');
  const rulesModal = document.getElementById('rules-modal');
  const closeRulesBtn = document.getElementById('close-rules-btn');

  // Disaster Mode Selection
  disasterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      disasterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMode = btn.dataset.mode;
    });
  });

  // Render Initial Welcome Leaderboard
  renderLeaderboard();

  // Clear Leaderboard Admin Password Check
  if (clearLeaderboardBtn) {
    clearLeaderboardBtn.addEventListener('click', () => {
      const inputPass = prompt('🔐 【講師安全驗證】請輸入講師管理密碼以清空排行榜：');
      if (inputPass === ADMIN_PASSWORD) {
        localStorage.removeItem('disaster_triage_leaderboard');
        renderLeaderboard();
        alert('✅ 排行榜已成功清空重置！');
      } else if (inputPass !== null) {
        alert('❌ 密碼錯誤！只有講師可以清空排行榜。');
      }
    });
  }

  // Rules modal listeners
  if (showRulesBtn && rulesModal && closeRulesBtn) {
    showRulesBtn.addEventListener('click', () => rulesModal.classList.remove('hidden'));
    closeRulesBtn.addEventListener('click', () => rulesModal.classList.add('hidden'));
  }

  // Enter Key to Start
  if (playerNameInput) {
    playerNameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        startGame();
      }
    });
  }

  // Start Game
  startGameBtn.addEventListener('click', startGame);
  restartGameBtn.addEventListener('click', () => {
    resultScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    renderLeaderboard();
  });

  function startGame() {
    // Get direct input player name
    playerName = playerNameInput.value.trim();

    if (!playerName) {
      alert('請先在框框中輸入您的姓名/暱稱，才能開始遊戲喔！');
      playerNameInput.focus();
      return;
    }

    headerPlayerName.textContent = playerName;

    score = 0;
    streak = 0;
    maxStreak = 0;
    correctCount = 0;
    currentIndex = 0;
    timeLeft = 60;

    if (currentMode === 'earthquake') {
      currentCases = [...casesDatabase.earthquake, ...casesDatabase.aircrash.slice(0, 3)];
      scenarioTagEl.textContent = '🏚️ 日本熊本地震現場';
    } else if (currentMode === 'burn') {
      currentCases = [...casesDatabase.burn, ...casesDatabase.earthquake.slice(0, 4)];
      scenarioTagEl.textContent = '🔥 八仙塵暴大傷現場';
    } else {
      currentCases = [...casesDatabase.aircrash, ...casesDatabase.earthquake.slice(0, 4)];
      scenarioTagEl.textContent = '✈️ 復興空難搜救現場';
    }

    currentCases.sort(() => Math.random() - 0.5);

    scoreEl.textContent = score;
    streakEl.textContent = `${streak} 🔥`;
    timerEl.textContent = `${timeLeft}s`;

    welcomeScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    caseTotalEl.textContent = currentCases.length;

    startTimer();
    loadCase(currentIndex);
  }

  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
      }
    }, 1000);
  }

  function loadCase(index) {
    if (index >= currentCases.length) {
      endGame();
      return;
    }

    const c = currentCases[index];
    caseCurrentEl.textContent = index + 1;

    patientTitleEl.textContent = c.title;
    patientDescEl.textContent = c.desc;
    vitalWalkEl.textContent = c.walk;
    vitalRespEl.textContent = c.resp;
    vitalPerfEl.textContent = c.perf;
    vitalMentalEl.textContent = c.mental;

    feedbackBox.classList.add('hidden');
    triageBtns.forEach(btn => btn.disabled = false);
  }

  // Handle Triage Button Click
  triageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const chosenColor = btn.dataset.color;
      const c = currentCases[currentIndex];

      triageBtns.forEach(b => b.disabled = true);

      if (chosenColor === c.correctColor) {
        score += 100 + (streak * 20);
        streak++;
        correctCount++;
        if (streak > maxStreak) maxStreak = streak;

        feedbackBox.className = 'feedback-box correct';
        feedbackTitle.textContent = '✅ 檢傷正確！(+100分)';
      } else {
        streak = 0;
        feedbackBox.className = 'feedback-box incorrect';
        feedbackTitle.textContent = `❌ 檢傷錯誤 (正確應為 ${getColorName(c.correctColor)})`;
      }

      scoreEl.textContent = score;
      streakEl.textContent = `${streak} 🔥`;

      feedbackDesc.innerHTML = c.explanation;
      feedbackBox.classList.remove('hidden');
    });
  });

  nextCaseBtn.addEventListener('click', () => {
    currentIndex++;
    loadCase(currentIndex);
  });

  function getColorName(color) {
    switch(color) {
      case 'red': return '🔴 紅色 (Immediate)';
      case 'yellow': return '🟡 黃色 (Delayed)';
      case 'green': return '🟢 綠色 (Minor)';
      case 'black': return '⬛ 黑色 (Expectant)';
      default: return color;
    }
  }

  function endGame() {
    clearInterval(timerInterval);

    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    const totalAnswered = currentIndex;
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

    resPlayerNameEl.textContent = playerName;
    finalScoreEl.textContent = score;
    finalAccEl.textContent = `${accuracy}%`;
    finalStreakEl.textContent = maxStreak;

    // Save score to local storage & leaderboards
    savePlayerScore(playerName, score, accuracy);

    // Render updated Top 3 leaderboard
    const top3 = getTop3Leaderboard();
    renderResultTop3(top3);

    // Check if current player in Top 3
    const playerRank = top3.findIndex(item => item.name === playerName) + 1;
    if (playerRank > 0 && playerRank <= 3) {
      rewardBox.classList.remove('hidden');
      if (playerRank === 1) {
        rewardTitle.textContent = '🥇 恭喜獲得【第一名 / 冠軍獎勵】！';
      } else if (playerRank === 2) {
        rewardTitle.textContent = '🥈 恭喜獲得【第二名 / 亞軍獎勵】！';
      } else {
        rewardTitle.textContent = '🥉 恭喜獲得【第三名 / 季軍獎勵】！';
      }
      
      // Trigger Confetti Celebration!
      if (window.confetti) {
        window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      }
    } else {
      rewardBox.classList.add('hidden');
    }

    // Evaluation Rank
    if (accuracy >= 90) {
      pgyRankEl.textContent = '🏆 災難醫療特級指揮官 (Disaster Master)';
      rankDescEl.textContent = '太棒了！您對 START RPM 檢傷法則與災害應變流程精準無誤！';
    } else if (accuracy >= 70) {
      pgyRankEl.textContent = '🥇 第一線檢傷神射手 (Expert Triager)';
      rankDescEl.textContent = '表現優秀！您已完全掌握 PGY 第一線檢傷與分流處置要領！';
    } else if (accuracy >= 50) {
      pgyRankEl.textContent = '🥈 合格 PGY 臨床醫師 (Qualified Resident)';
      rankDescEl.textContent = '表現尚可，建議點擊「查閱 START 檢傷口訣」以提升檢傷速度與正確率！';
    } else {
      pgyRankEl.textContent = '🚑 需重新複習 START 檢傷法則 (Needs Review)';
      rankDescEl.textContent = '加油！請點擊「查閱 START 檢傷口訣」複習檢傷四大原則與 RPM 流程。';
    }
  }

  // Leaderboard Functions
  function getScores() {
    try {
      const data = localStorage.getItem('disaster_triage_leaderboard');
      return data ? JSON.parse(data) : [];
    } catch(e) {
      return [];
    }
  }

  function savePlayerScore(name, score, accuracy) {
    let scores = getScores();
    const existingIndex = scores.findIndex(s => s.name === name);
    
    if (existingIndex >= 0) {
      if (score > scores[existingIndex].score) {
        scores[existingIndex].score = score;
        scores[existingIndex].accuracy = accuracy;
        scores[existingIndex].time = new Date().toLocaleTimeString();
      }
    } else {
      scores.push({ name, score, accuracy, time: new Date().toLocaleTimeString() });
    }

    scores.sort((a, b) => b.score - a.score);
    localStorage.setItem('disaster_triage_leaderboard', JSON.stringify(scores));
  }

  function getTop3Leaderboard() {
    const scores = getScores();
    return scores.slice(0, 3);
  }

  function renderLeaderboard() {
    const top3 = getTop3Leaderboard();
    let html = '';
    const medals = ['🥇 第一名', '🥈 第二名', '🥉 第三名'];
    const classes = ['gold', 'silver', 'bronze'];

    for (let i = 0; i < 3; i++) {
      if (top3[i]) {
        html += `<div class="top3-item ${classes[i]}">${medals[i]}：${top3[i].name} (${top3[i].score}分)</div>`;
      } else {
        html += `<div class="top3-item ${classes[i]}">${medals[i]}：虛位以待</div>`;
      }
    }
    welcomeTop3Box.innerHTML = html;
  }

  function renderResultTop3(top3) {
    let html = '';
    const medals = ['🥇 冠軍', '🥈 亞軍', '🥉 季軍'];
    const classes = ['gold', 'silver', 'bronze'];

    for (let i = 0; i < 3; i++) {
      if (top3[i]) {
        html += `
          <div class="lb-card ${classes[i]}">
            <span class="lb-rank">${medals[i]}</span>
            <span class="lb-name">${top3[i].name}</span>
            <span class="lb-score">${top3[i].score} 分 (${top3[i].accuracy}%)</span>
          </div>
        `;
      } else {
        html += `
          <div class="lb-card ${classes[i]}">
            <span class="lb-rank">${medals[i]}</span>
            <span class="lb-name">虛位以待</span>
            <span class="lb-score">0 分</span>
          </div>
        `;
      }
    }
    resultTop3List.innerHTML = html;
  }
});
