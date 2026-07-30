// Speaker Notes Data for all 54 slides
const speakerNotes = {
  1: `<strong>(00:00 - 01:10) 課程引言與致謝</strong><br><br>各位 PGY 醫師大家早！歡迎來到今天的「災難醫學與動員指揮體系」課程。本全套講稿改編自本院急診醫學部張家豪醫師與黃俊翔醫師的經典教材。今天我們將以 54 頁精簡清晰的大字體投影片，帶大家深入了解急救責任醫院挑戰、全災害管理、HVA 脆弱度分析、HICS 指揮體系，以及台灣重大災害的實務應變經驗。`,
  2: `<strong>(01:10 - 02:20) 俄烏戰爭啟示</strong><br><br>投影片開宗明義借鏡了俄烏戰爭照片。當飛彈擊中醫院、或強震導致水電中斷時，醫療人員依然在手電筒微光下執行手術。這提醒我們：災難隨時可能發生，我們必須具備平戰轉換的韌性。`,
  3: `<strong>(02:20 - 03:30) 急救責任醫院的雙重考量</strong><br><br>醫院面臨的最大的挑戰是「雙重壓力」：一方面要接收源源不絕的重傷患，另一方面原本住在 ICU、洗腎室與病房的數百名病人依然需要照顧。`,
  4: `<strong>(03:30 - 04:40) 保本與擴充能量</strong><br><br>「保本之外，還要擴充作業能量！」大傷往往發生在半夜或假日，此時留守人力最少。醫院如何把儲備的呼吸器、血袋與人力及時調度到位，是緊急應變的核心。`,
  5: `<strong>(04:40 - 05:50) 醫療最後防線思維</strong><br><br>消防隊把病人送到急診後，醫院就是最後防線。我們不能再把病人轉給別人，必須把自己當作最後堡壘，守住救命關卡。`,
  6: `<strong>(05:50 - 07:00) 台灣緊急醫療救護法</strong><br><br>台灣在 921 地震後修訂《緊急醫療救護法》，將急救責任醫院劃分為一般、中度與重度三個層級，確保不同等級的醫院各司其職。`,
  7: `<strong>(07:00 - 08:10) 醫院緊急醫療能力分級架構</strong><br><br>大型醫學中心均為重度急救責任醫院。這代表醫院必須具備全天候搶救重大外傷與應對大量傷病患的實力。`,
  8: `<strong>(08:10 - 09:20) 重度責任醫院專科人力</strong><br><br>重度責任醫院要求 7 大專科 24 小時駐院，這也是為什麼當大傷發生時，醫院能第一時間開立多間緊急手術室。`,
  9: `<strong>(09:20 - 10:30) 重度責任醫院急重症處置</strong><br><br>重度責任醫院必須涵蓋中風、心肌梗塞、重大外傷與高危孕產婦四大急重症，確保災難中的重症傷患能得到終極處置。`,
  10: `<strong>(10:30 - 11:40) MCI 計畫與演習</strong><br><br>無預警演習是檢驗大傷計畫的真功夫。演習中學到的通報瓶頸，就是未來真實大傷時救命的關鍵改進點。`,

  11: `<strong>(11:40 - 12:50) 全災害管理 (All-Hazard) 概念</strong><br><br>進入單元二：全災害管理。如果地震設一套、火災設一套、毒氣設一套，同仁根本記不住。全災害管理將共同程序抽離出來統一管理！`,
  12: `<strong>(12:50 - 14:00) 避免疊床架屋</strong><br><br>透過統一規劃共同策略，可以避免組織疊床架屋，大幅降低訓練與維護成本。`,
  13: `<strong>(14:00 - 15:10) EEMP 計畫結構</strong><br><br>PDF 第 9 頁展示了 EEMP 的標準五大架構：基本計畫、功能群組、共同程序、個別指引與附件。`,
  14: `<strong>(15:10 - 16:20) 基本計畫內容</strong><br><br>基本計畫清楚記錄了醫院的家底：有多少張床、發電機在哪裡、水塔能支撐幾天、附近合作醫院有哪些。`,
  15: `<strong>(16:20 - 17:30) 共同程序 vs 個別指引</strong><br><br>共同程序是主幹，個別指引是分枝。PGY 只需記得：收到廣播先跑共同程序至急診指揮所報到。`,
  16: `<strong>(17:30 - 18:40) 緊急事件管理四週期</strong><br><br>災害管理是循環週期：平時減災準備，災時應變，災後復原，再將經驗轉化為新的減災措施。`,
  17: `<strong>(18:40 - 19:50) 應變期生命週期（前三階段）</strong><br><br>應變期分為六階段。前三階段是從「發現異常」到「全院動員到位」，考驗通報簡化與應變速度。`,
  18: `<strong>(19:50 - 21:00) 應變期生命週期（後三階段）</strong><br><br>當最後一位傷患送入病房或手術室，應變進入 Demobilization 歸建解散，讓醫護回歸正常班表休息。`,

  19: `<strong>(21:00 - 22:10) 危害脆弱度分析 (HVA) 定義</strong><br><br>進入單元三：HVA 脆弱度分析。HVA 就是醫院的健康檢查，幫醫院找出最脆弱、最怕哪種災害。`,
  20: `<strong>(22:10 - 23:20) HVA 核心概念</strong><br><br>PDF 第 29 頁定義了四個名詞：危害、抗性、韌性與脆弱度。脆弱度高代表抗性與韌性不足。`,
  21: `<strong>(23:20 - 24:30) HVA 風險評估公式</strong><br><br>HVA 的公式簡單明瞭：機率高、衝擊大、準備差，風險分數就高！`,
  22: `<strong>(24:30 - 25:40) HVA 六大評估構面</strong><br><br>PDF 第 36 頁展示了完整的 HVA 量化評分表，醫院委員會每年據此逐項打分數。`,
  23: `<strong>(25:40 - 26:50) HVA 風險排序與分類</strong><br><br>風險排序的目的是把危害分為最優先、次優先與暫緩，讓有限的防災預算花在刀口上。`,
  24: `<strong>(26:50 - 28:00) HVA 步驟五：綜合評估脆弱度</strong><br><br>PDF 第 38 頁強調：HVA 步驟五精髓在於找出「跨災害的共同弱點」（例如斷電與斷網）。`,
  25: `<strong>(28:00 - 29:10) 停電之連鎖衝擊</strong><br><br>停電會引發連鎖反應。只要解決了電力備援，就能一次化解地震、颱風與工安帶來的重大威脅。`,
  26: `<strong>(29:10 - 30:20) HVA 步驟六：減災整備策略</strong><br><br>減災策略要看成本效益。能一石二鳥、同時補強多種災害的策略（如備援發電機），優先獲得預算。`,
  27: `<strong>(30:20 - 31:30) HVA 總結</strong><br><br>PDF 第 40 頁總結：HVA 的核心價值是向全院說明「災害到底會對我們造成什麼衝擊」。`,

  28: `<strong>(31:30 - 32:40) 災難檢傷核心哲學</strong><br><br>進入單元四：檢傷分類。災難檢傷的哲學不是救最重的人，而是「救最有機會存活的人」。`,
  29: `<strong>(32:40 - 33:50) 檢傷四大鐵則</strong><br><br>請熟記四大鐵則：救最多人、動態評估、60秒完成、現場不做複雜處置！`,
  30: `<strong>(33:50 - 35:00) START 初級檢傷法介紹</strong><br><br>START 檢傷不需要血壓計或聽診器，只靠眼睛看、耳朵聽、手摸脈搏，60秒完成判斷。`,
  31: `<strong>(35:00 - 36:10) START Step 1 行走</strong><br><br>第一步先篩出綠色輕傷。把能走的人移開，檢傷人員才能專心評估躺在地上的重傷患。`,
  32: `<strong>(36:10 - 37:20) START Step 2 呼吸</strong><br><br>R 呼吸：開放氣道仍沒呼吸直接標黑（不壓胸做 CPR）；RR > 30 標紅（呼吸窘迫）。`,
  33: `<strong>(37:20 - 38:30) START Step 3 灌流</strong><br><br>P 灌流：摸不到脈搏或 CRT > 2秒，代表休克失血，直接標紅！`,
  34: `<strong>(34:30 - 39:40) START Step 4 意識與檢傷卡</strong><br><br>M 意識：叫他握手。不能配合標紅（腦傷休克）；能配合標黃。檢傷卡號就是病人在大傷中的唯一身分。`,

  35: `<strong>(39:40 - 40:50) 什麼是 HICS？</strong><br><br>進入單元五：HICS 醫院指揮體系。PDF 第 43 頁指出，HICS 是跨科別、跨機構的通用語言。`,
  36: `<strong>(40:50 - 42:00) HICS 三大目標</strong><br><br>HICS 的三大神聖目標：Command (指揮)、Control (管制)、Coordination (協調)。`,
  37: `<strong>(42:00 - 43:10) HICS 9大優點（一）</strong><br><br>PDF 第 44 頁列出 HICS 9 大好處。第一是 Common Terminology，讓所有人講同一種語言。`,
  38: `<strong>(43:10 - 44:20) HICS 9大優點（二）</strong><br><br>單一指揮 (Unity of command) 防止多頭馬車，有效管理範圍限制每位主管只帶 3 到 7 人。`,
  39: `<strong>(44:20 - 45:30) HICS 組織五大面向</strong><br><br>HICS 將所有任務拆解為五大面向：指揮、執行、計畫、後勤、財務行政。`,
  40: `<strong>(45:30 - 46:40) 指揮官與三大幕僚</strong><br><br>安全官擁有最高停工權（若現場有危險可緊急停止應變）；發言官是全院唯一合法對外發言的人。`,
  41: `<strong>(46:40 - 47:50) 執行部門 (Operations)</strong><br><br>Operations Section 是人數最多的部門，負責搶救病人、開手術室與挪床位。`,
  42: `<strong>(47:50 - 49:00) 計畫部門 (Planning)</strong><br><br>Planning Section 是大腦，負責統計「我們還能撐多久、還有多少床、下一步怎麼做」。`,
  43: `<strong>(49:00 - 50:10) 後勤部門 (Logistics)</strong><br><br>Logistics Section 負責運送資材、搬呼吸器、搶修通訊與送便當給第一線醫護。`,
  44: `<strong>(50:10 - 51:20) 財務行政部門 (Finance)</strong><br><br>Finance Section 紀錄大家加班工時、專案採購與健保申報，確保符合法律規範。`,

  45: `<strong>(51:20 - 52:30) 建立 HICS 分組流程</strong><br><br>PDF 第 47 頁展示了建立 HICS 分組的標準流程：優先事項 ➔ 分類 ➔ 盤點 ➔ 安排 ➔ 模組確認。`,
  46: `<strong>(52:30 - 53:40) 假日夜間代理人制度</strong><br><br>PDF 第 62 頁靈魂提示：第一代理人要寫「職稱」而非「姓名」，這樣半夜誰值班誰就是代理人！`,
  47: `<strong>(53:40 - 54:50) 任務卡 (JAS) 實務</strong><br><br>任務卡是防慌亂神器！卡片上寫得清清楚楚，報到拿到卡片照著 Step 1 2 3 做就不會錯。`,
  48: `<strong>(54:50 - 56:00) 人力動員：院內調度優先</strong><br><br>PDF 第 64 頁強調：半夜發全院召回要等 1-2 小時人才會到，第一時間「調度病房與門診既有人力」最快！`,
  49: `<strong>(56:00 - 57:10) 火災 RACE 原則與水平疏散</strong><br><br>火災 RACE 原則：救人 ➔ 通報 ➔ 關門 ➔ 滅火疏散。病房都有防火區劃，疏散第一原則是「水平過門」！`,
  50: `<strong>(57:10 - 58:20) HAZMAT 除污與心理減壓</strong><br><br>毒氣未除污前絕不能送進急診室，否則急診會全滅！事後 Debriefing 減壓對照顧同仁心理健康極為重要。`,

  51: `<strong>(58:20 - 59:10) 本土地震案例經驗</strong><br><br>PDF 第 66 頁列出的台灣地震史：從 921、維冠、雲翠到 2024 花蓮 403 強震，見證了台灣醫療韌性的進步。`,
  52: `<strong>(59:10 - 59:40) 本土重大事故與人為災害</strong><br><br>八仙塵暴、太魯閣號與空難經驗，證明了「跨院 EOC 調度與 HICS 指揮」是決定存活率的關鍵。`,
  53: `<strong>(59:40 - 59:55) PGY 第一線行動指南</strong><br><br>身為 PGY：聽指揮、領任務卡、守護崗位、記錄 ID、不單打獨鬥！`,
  54: `<strong>(59:55 - 60:00) Take Home Message 與 Q&A</strong><br><br>Take Home Message：重度責任醫院、HVA、HICS、共同應变程序。感謝新竹臺大分院張家豪與黃俊翔醫師！開放提問！`
};

document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 1;
  const totalSlides = document.querySelectorAll('.slide').length;

  const slidesContainer = document.getElementById('slides-container');
  const progressBar = document.getElementById('progress-bar');
  const slideIndicator = document.getElementById('slide-indicator');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  const notesBtn = document.getElementById('notes-btn');
  const closeNotesBtn = document.getElementById('close-notes-btn');
  const notesDrawer = document.getElementById('notes-drawer');
  const notesContent = document.getElementById('notes-content');

  const themeBtn = document.getElementById('theme-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const printBtn = document.getElementById('print-btn');

  function updateSlide(index) {
    if (index < 1) index = 1;
    if (index > totalSlides) index = totalSlides;

    currentSlide = index;

    document.querySelectorAll('.slide').forEach(slide => {
      slide.classList.remove('active');
    });

    const activeSlide = document.querySelector(`.slide[data-slide="${currentSlide}"]`);
    if (activeSlide) {
      activeSlide.classList.add('active');
    }

    // Update Progress Bar
    const progressPercent = (currentSlide / totalSlides) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Update Indicator
    slideIndicator.textContent = `${currentSlide} / ${totalSlides}`;

    // Update Speaker Notes
    if (speakerNotes[currentSlide]) {
      notesContent.innerHTML = speakerNotes[currentSlide];
    } else {
      notesContent.innerHTML = '尚無備忘錄';
    }

    // Update Button State
    prevBtn.disabled = currentSlide === 1;
    nextBtn.disabled = currentSlide === totalSlides;
  }

  // Event Listeners
  prevBtn.addEventListener('click', () => updateSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => updateSlide(currentSlide + 1));

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'PageDown') {
      e.preventDefault();
      updateSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      updateSlide(currentSlide - 1);
    } else if (e.key.toLowerCase() === 'n') {
      notesDrawer.classList.toggle('open');
    } else if (e.key.toLowerCase() === 'f') {
      toggleFullscreen();
    } else if (e.key.toLowerCase() === 't') {
      toggleTheme();
    }
  });

  // Speaker Notes Drawer
  notesBtn.addEventListener('click', () => {
    notesDrawer.classList.toggle('open');
  });

  closeNotesBtn.addEventListener('click', () => {
    notesDrawer.classList.remove('open');
  });

  // Theme Toggle
  function toggleTheme() {
    const htmlElem = document.documentElement;
    if (htmlElem.classList.contains('dark')) {
      htmlElem.classList.remove('dark');
      htmlElem.classList.add('light');
    } else {
      htmlElem.classList.remove('light');
      htmlElem.classList.add('dark');
    }
  }

  themeBtn.addEventListener('click', toggleTheme);

  // Fullscreen Mode
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  fullscreenBtn.addEventListener('click', toggleFullscreen);

  // Print Mode
  printBtn.addEventListener('click', () => {
    window.print();
  });

  // Initial call
  updateSlide(1);
});
