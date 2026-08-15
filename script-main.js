
var calcInitDone = false;
const T={
  uz:{m:'Modullar',a:'Platforma haqida',t:'Jamoa',c:'Aloqa',k:'Kirish',
      fm:'MODULLAR',fl1:'Elektrotexnika',fl2:'Elektr texnologiyalari asoslari',fc:'ALOQA',
      hb:'\u2699 Virtual Laboratoriya Platformasi',
      h1:'Kelajakni zamonaviy muhandislar yaratadi!',
      b1:"Bepul sinab ko'ring",b2:"Batafsil ma'lumot",
      fs:'Kelajakni <span>zamonaviy muhandislar</span> yaratadi!',
      sl:"Qo'llab-quvvatlovchi:",
      cp:'\u00A9 2026. Barcha huquqlar himoyalangan \u2014 TechEdu.uz',
      pp:'Maxfiylik siyosati',tu:'Foydalanish shartlari',
      smt:"Ta'lim bosqichingizni tanlang",sms:"Bosqichni tanlang va tegishli fanlar bilan tanishing",fml1:'Elektr texnologiya asoslari',fml2:'Elektronika asoslari',fml3:'Elektr mashinalari',fml4:'Fizika',fml5:'Astronomiya',fml6:'Elektrotexnika asoslari',
      cat1:"Oliy ta'lim",cat2:'Texnikum va Kollej',cat3:'Maktab',back:'Orqaga',faol:'Faol',soon:'Tez kunda',
      cat1d:"Universitetlar uchun zamonaviy virtual laboratoriyalar va raqamli ta'lim.",cat2d:"Kasb-hunar ta'limi uchun interaktiv simulyatorlar va amaliy mashg'ulotlar.",cat3d:"Maktab o'quvchilari uchun qiziqarli va tushunarli virtual tajribalar.",more:'Batafsil',
      tst:'Bizning jamoa',tss:'Loyiha ortidagi mutaxassislar',
      tm1tag:'Ilmiy rahbar',tm1deg:"PhD, dotsent — Elektr mashinalari va yuritmalari muhandisligi kafedrasi mudiri",tm1desc:"Elektr texnologiyasi asoslari va induksion pech qurilmalari bo'yicha mutaxassis",
      tm2tag:"G'oya muallifi va texnik ekspert",tm2deg:'PhD, dotsent',tm2desc:"Virtual laboratoriya platformasi bo'yicha ekspert va texnik nazoratchi",
      tm3tag:'Loyiha rahbari (CEO)',tm3deg:'PhD tayanch doktorant',tm3desc:"Loyihaning strategik yo'nalishi va rivojlantirilishi uchun mas'ul",
      at:'Platforma haqida',ad:"TechEdu.uz — muhandislik ta'limi uchun virtual laboratoriya. Real uskunasiz, xavfsiz va istalgan joydan — Oliy ta'lim, Texnikum va Maktab bosqichlari uchun interaktiv tajribalar.",
      tb1t:'Mualliflik huquqi himoyalangan',tb1s:'№ DGU 60865 — Adliya vazirligi',tb2s:"Oliy ta'limni rivojlantirish konsepsiyasi",tb3s:"\"Raqamli O'zbekiston – 2030\" strategiyasi",
      'mc-title':'Mualliflik huquqi himoyalangan','mc-text':"\"Induksion qizdirishning energiya samaradorligini to'liq hisoblash: FIK, sirt effekti, issiqlik balansi, chastota tanlash, yo'qotishlarni tahlil qilish va ish rejimlarini optimallashtirish\" dasturi O'zbekiston Respublikasi Adliya vazirligi tomonidan rasmiy ro'yxatga olingan.",
      'mc-l1':'Guvohnoma:','mc-l2':'Sana:','mc-l3':'Mualliflar:',
      'm1-title':'PF-5847-son Farmon','m1-text1':"\"O'zbekiston Respublikasi oliy ta'lim tizimini 2030-yilgacha rivojlantirish konsepsiyasini tasdiqlash to'g'risida\" (2019-yil 8-oktabr).",'m1-text2':"Konsepsiyaning 2-§ bandida ta'lim jarayonlarini raqamli texnologiyalar asosida individuallashtirish va masofaviy ta'lim xizmatlarini rivojlantirish belgilangan.",
      'm2-title':'PF-6079-son Farmon','m2-text1':"\"Raqamli O'zbekiston – 2030\" strategiyasini tasdiqlash to'g'risida (2020-yil 5-oktabr).",'m2-text2':"Strategiyaning 2.5-bandida axborot texnologiyalari sohasida masofaviy, onlayn va virtual o'qitish texnologiyalarini joriy etish va onlayn kurslar uchun platformalar ishlab chiqish nazarda tutilgan.",
      'calc-mainh1':'⚡ Elektr texnologiya asoslari — Kalkulyatorlar','calc-mainsub':'// TechEdu.uz — induksion pech hisob-kitob va simulyatsiya moduli',
      'calc-tab1name':'Sirt-effekt','calc-tab4name':'2D Simulyatsiya','calc-tab2name':'Quvvat hisobi','calc-tab3name':'Induktor hisobi',
      'calc-t1h1':'🌊 Sirt-effekt (Skin Effect)','calc-t1sub':'// δ = 503·√(ρ / (μᵣ·f)) — kirish chuqurligi kalkulyatori',
      'calc-material':'Material','calc-rho':'ρ (solishtirma qarshilik)','calc-mu':"μᵣ (magnit o'tkazuvchanlik)",'calc-freq':'Chastota f','calc-diam':'Tayyor diametri D',
      'calc-opt-steelcold':"Po'lat (sovuq, μᵣ=200)",'calc-opt-steelhot':"Po'lat (issiq, μᵣ=1)",'calc-opt-copper':'Mis','calc-opt-aluminum':'Alyuminiy','calc-opt-titanium':'Titan','calc-opt-custom':'Maxsus parametrlar',
      'calc-res-depth':'Kirish chuqurligi δ','calc-res-radius':'Radius r','calc-res-ratio':'Nisbat r/δ','calc-res-fcrit':"Kritik f (to'liq)",'calc-res-fopt':'Optim f (sirt)','calc-res-mode':'Qizitish rejimi',
      'calc-viz':'Sirt-qatlamini vizualizatsiya','calc-surface':'Sirt','calc-center':'Markaz','calc-legend1':"Qizil — tok zichligi. Ko'k chiziq — sirt chuqurligi δ",'calc-chart-title':'// δ vs Chastota',
      'calc-t4h1':'🖥 2D Simulyatsiya','calc-t4sub':'// Induksion pech kesimi — harorat tarqalishi real vaqt animatsiyasi',
      'calc-power':'Quvvat P','calc-simtime':'Simulyatsiya vaqti','calc-sec':'sek','calc-start-btn':'▶ SIMULYATSIYANI BOSHLASH',
      'calc-calcparams':'Hisoblangan parametrlar','calc-res-delta':'δ (sirt chuqurligi)','calc-res-tmax':'Sirt harorati T_max','calc-res-tcenter':'Markaz harorati T_c','calc-res-rate':'Qizitish tezligi',
      'calc-simviz':'Induksion pech kesimi — 2D simulyatsiya','calc-colorind':"Rangli ko'rsatkich:",'calc-legend2':"Qizil/sariq — issiq hududlar | Ko'k — sovuq hududlar | Moviy halqalar — induktor spirali | Oq chiziq — δ chegarasi",
      'calc-mode-full':"To'liq qizitish",'calc-mode-transition':"O'tish rejimi",'calc-mode-surface':'Sirt chiniqtirish'},
  en:{m:'Modules',a:'About',t:'Team',c:'Contact',k:'Login',
      fm:'MODULES',fl1:'Electrical Engineering',fl2:'Basics of Electrical Technology',fc:'CONTACT',
      hb:'\u2699 Virtual Laboratory Platform',
      h1:'The future is built by modern engineers!',
      b1:'Try for free',b2:'Learn more',
      fs:'The future is built by <span>modern engineers</span>!',
      sl:'Supported by:',
      cp:'\u00A9 2026. All rights reserved \u2014 TechEdu.uz',
      pp:'Privacy Policy',tu:'Terms of Use',
      smt:'Choose Your Level',sms:'Select your education level to explore the related subjects',fml1:'Electrical Technology Basics',fml2:'Electronics Fundamentals',fml3:'Electrical Machines',fml4:'Physics',fml5:'Astronomy',fml6:'Electrical Engineering Basics',
      cat1:'Higher Education',cat2:'College & Technical School',cat3:'School',back:'Back',faol:'Active',soon:'Coming soon',
      cat1d:'Modern virtual laboratories and digital education for universities.',cat2d:'Interactive simulators and hands-on training for vocational education.',cat3d:'Fun and easy-to-understand virtual experiments for school students.',more:'Learn more',
      tst:'Our Team',tss:'The experts behind the project',
      tm1tag:'Academic Supervisor',tm1deg:'PhD, Associate Professor — Head of the Dept. of Electrical Machines and Drives Engineering',tm1desc:'Specialist in electrical technology fundamentals and induction furnace systems',
      tm2tag:'Idea Author & Technical Expert',tm2deg:'PhD, Associate Professor',tm2desc:'Expert and technical reviewer for the virtual laboratory platform',
      tm3tag:'Project Lead (CEO)',tm3deg:'PhD Candidate (Doctoral Researcher)',tm3desc:"Responsible for the project's strategy and development",
      at:'About the Platform',ad:'TechEdu.uz is a virtual laboratory for engineering education. No real equipment needed, safe, and accessible anywhere — interactive experiments for Higher Education, College, and School levels.',
      tb1t:'Copyright Protected',tb1s:'No. DGU 60865 — Ministry of Justice',tb2s:'Higher Education Development Concept',tb3s:'"Digital Uzbekistan – 2030" Strategy',
      'mc-title':'Copyright Protected','mc-text':'The software "Complete calculation of induction heating energy efficiency: efficiency factor, surface effect, heat balance, frequency selection, loss analysis and operating mode optimization" is officially registered with the Ministry of Justice of the Republic of Uzbekistan.',
      'mc-l1':'Certificate:','mc-l2':'Date:','mc-l3':'Authors:',
      'm1-title':'Decree PF-5847','m1-text1':'"On approving the Concept for developing the higher education system of the Republic of Uzbekistan until 2030" (October 8, 2019).',
      'm1-text2':"Section 2 of the Concept establishes the individualization of educational processes based on digital technologies and the development of distance education services.",
      'm2-title':'Decree PF-6079','m2-text1':'"On approving the \'Digital Uzbekistan – 2030\' strategy" (October 5, 2020).',
      'm2-text2':'Section 2.5 of the strategy provides for introducing distance, online, and virtual teaching technologies and developing platforms for online courses in the field of information technology.',
      'calc-mainh1':'⚡ Electrical Technology Basics — Calculators','calc-mainsub':'// TechEdu.uz — induction furnace calculation & simulation module',
      'calc-tab1name':'Surface Effect','calc-tab4name':'2D Simulation','calc-tab2name':'Power Calculation','calc-tab3name':'Inductor Calculation',
      'calc-t1h1':'🌊 Surface Effect (Skin Effect)','calc-t1sub':'// δ = 503·√(ρ / (μᵣ·f)) — penetration depth calculator',
      'calc-material':'Material','calc-rho':'ρ (resistivity)','calc-mu':'μᵣ (relative permeability)','calc-freq':'Frequency f','calc-diam':'Workpiece diameter D',
      'calc-opt-steelcold':'Steel (cold, μᵣ=200)','calc-opt-steelhot':'Steel (hot, μᵣ=1)','calc-opt-copper':'Copper','calc-opt-aluminum':'Aluminum','calc-opt-titanium':'Titanium','calc-opt-custom':'Custom parameters',
      'calc-res-depth':'Penetration depth δ','calc-res-radius':'Radius r','calc-res-ratio':'Ratio r/δ','calc-res-fcrit':'Critical f (full)','calc-res-fopt':'Optimal f (surface)','calc-res-mode':'Heating mode',
      'calc-viz':'Surface layer visualization','calc-surface':'Surface','calc-center':'Center','calc-legend1':'Red — current density. Blue line — surface depth δ','calc-chart-title':'// δ vs Frequency',
      'calc-t4h1':'🖥 2D Simulation','calc-t4sub':'// Induction furnace cross-section — real-time temperature distribution animation',
      'calc-power':'Power P','calc-simtime':'Simulation time','calc-sec':'sec','calc-start-btn':'▶ START SIMULATION',
      'calc-calcparams':'Calculated parameters','calc-res-delta':'δ (surface depth)','calc-res-tmax':'Surface temperature T_max','calc-res-tcenter':'Center temperature T_c','calc-res-rate':'Heating rate',
      'calc-simviz':'Induction furnace cross-section — 2D simulation','calc-colorind':'Color legend:','calc-legend2':'Red/yellow — hot zones | Blue — cold zones | Blue rings — inductor coil | White line — δ boundary',
      'calc-mode-full':'Full heating','calc-mode-transition':'Transition mode','calc-mode-surface':'Surface hardening'},
  ru:{m:'\u041C\u043E\u0434\u0443\u043B\u0438',a:'\u041E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435',t:'\u041A\u043E\u043C\u0430\u043D\u0434\u0430',c:'\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B',k:'\u0412\u043E\u0439\u0442\u0438',
      fm:'\u041C\u041E\u0414\u0423\u041B\u0418',fl1:'\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430',fl2:'\u041E\u0441\u043D\u043E\u0432\u044B \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439',fc:'\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u042B',
      hb:'\u2699 \u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438',
      h1:'\u0411\u0443\u0434\u0443\u0449\u0435\u0435 \u0441\u043E\u0437\u0434\u0430\u044E\u0442 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u044B!',
      b1:'\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E',b2:'\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435',
      fs:'\u0411\u0443\u0434\u0443\u0449\u0435\u0435 \u0441\u043E\u0437\u0434\u0430\u044E\u0442 <span>\u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u044B</span>!',
      sl:'\u041F\u0440\u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0435:',
      cp:'\u00A9 2026. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B \u2014 TechEdu.uz',
      pp:'\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438',tu:'\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F',
      smt:'\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F',sms:'\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0438 \u0438\u0437\u0443\u0447\u0438\u0442\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B',fml1:'\u041E\u0441\u043D\u043E\u0432\u044B \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438',fml2:'\u041E\u0441\u043D\u043E\u0432\u044B \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0438',fml3:'\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043C\u0430\u0448\u0438\u043D\u044B',fml4:'\u0424\u0438\u0437\u0438\u043A\u0430',fml5:'\u0410\u0441\u0442\u0440\u043E\u043D\u043E\u043C\u0438\u044F',fml6:'\u041E\u0441\u043D\u043E\u0432\u044B \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0438',
      cat1:'\u0412\u044B\u0441\u0448\u0435\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435',cat2:'\u0422\u0435\u0445\u043D\u0438\u043A\u0443\u043C \u0438 \u043A\u043E\u043B\u043B\u0435\u0434\u0436',cat3:'\u0428\u043A\u043E\u043B\u0430',back:'\u041D\u0430\u0437\u0430\u0434',faol:'\u0410\u043A\u0442\u0438\u0432\u043D\u043E',soon:'\u0421\u043A\u043E\u0440\u043E',
      cat1d:'\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438 \u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0432\u0443\u0437\u043E\u0432.',cat2d:'\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0441\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u044B \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u044F \u0434\u043B\u044F \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F.',cat3d:'\u0423\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0435 \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0448\u043A\u043E\u043B\u044C\u043D\u0438\u043A\u043E\u0432.',more:'\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435',
      tst:'\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430',tss:'\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B, \u0441\u0442\u043E\u044F\u0449\u0438\u0435 \u0437\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C',
      tm1tag:'\u041D\u0430\u0443\u0447\u043D\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C',tm1deg:'PhD, \u0434\u043E\u0446\u0435\u043D\u0442 \u2014 \u0437\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0430\u0444\u0435\u0434\u0440\u043E\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043C\u0430\u0448\u0438\u043D \u0438 \u043F\u0440\u0438\u0432\u043E\u0434\u043E\u0432',tm1desc:'\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043F\u043E \u043E\u0441\u043D\u043E\u0432\u0430\u043C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0438 \u0438\u043D\u0434\u0443\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u043C \u043F\u0435\u0447\u043D\u044B\u043C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430\u043C',
      tm2tag:'\u0410\u0432\u0442\u043E\u0440 \u0438\u0434\u0435\u0438 \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442',tm2deg:'PhD, \u0434\u043E\u0446\u0435\u043D\u0442',tm2desc:'\u042D\u043A\u0441\u043F\u0435\u0440\u0442 \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0451\u0440 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438',
      tm3tag:'\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u043E\u0435\u043A\u0442\u0430 (CEO)',tm3deg:'PhD, \u0434\u043E\u043A\u0442\u043E\u0440\u0430\u043D\u0442',tm3desc:'\u041E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430',
      at:'О платформе',ad:'TechEdu.uz — виртуальная лаборатория для инженерного образования. Без реального оборудования, безопасно и доступно откуда угодно — интерактивные эксперименты для ступеней Высшее образование, Техникум и Школа.',
      tb1t:'Защищено авторским правом',tb1s:'№ ДГУ 60865 — Министерство юстиции',tb2s:'Концепция развития высшего образования',tb3s:'Стратегия «Цифровой Узбекистан – 2030»',
      'mc-title':'Защищено авторским правом','mc-text':'Программа «Полный расчёт энергоэффективности индукционного нагрева: КПД, поверхностный эффект, тепловой баланс, выбор частоты, анализ потерь и оптимизация режимов работы» официально зарегистрирована Министерством юстиции Республики Узбекистан.',
      'mc-l1':'Свидетельство:','mc-l2':'Дата:','mc-l3':'Авторы:',
      'm1-title':'Указ ПФ-5847','m1-text1':'«Об утверждении Концепции развития системы высшего образования Республики Узбекистан до 2030 года» (8 октября 2019 г.).',
      'm1-text2':'В разделе 2 Концепции определена индивидуализация образовательных процессов на основе цифровых технологий и развитие услуг дистанционного образования.',
      'm2-title':'Указ ПФ-6079','m2-text1':'«Об утверждении стратегии «Цифровой Узбекистан – 2030»» (5 октября 2020 г.).',
      'm2-text2':'В разделе 2.5 стратегии предусмотрено внедрение технологий дистанционного, онлайн и виртуального обучения в сфере информационных технологий, а также разработка платформ для онлайн-курсов.',
      'calc-mainh1':'⚡ Основы электротехнологии — Калькуляторы','calc-mainsub':'// TechEdu.uz — модуль расчёта и симуляции индукционной печи',
      'calc-tab1name':'Поверхностный эффект','calc-tab4name':'2D Симуляция','calc-tab2name':'Расчёт мощности','calc-tab3name':'Расчёт индуктора',
      'calc-t1h1':'🌊 Поверхностный эффект (Skin Effect)','calc-t1sub':'// δ = 503·√(ρ / (μᵣ·f)) — калькулятор глубины проникновения',
      'calc-material':'Материал','calc-rho':'ρ (удельное сопротивление)','calc-mu':'μᵣ (магнитная проницаемость)','calc-freq':'Частота f','calc-diam':'Диаметр заготовки D',
      'calc-opt-steelcold':'Сталь (холодная, μᵣ=200)','calc-opt-steelhot':'Сталь (горячая, μᵣ=1)','calc-opt-copper':'Медь','calc-opt-aluminum':'Алюминий','calc-opt-titanium':'Титан','calc-opt-custom':'Свои параметры',
      'calc-res-depth':'Глубина проникновения δ','calc-res-radius':'Радиус r','calc-res-ratio':'Отношение r/δ','calc-res-fcrit':'Критическая f (полный)','calc-res-fopt':'Оптимальная f (поверхность)','calc-res-mode':'Режим нагрева',
      'calc-viz':'Визуализация поверхностного слоя','calc-surface':'Поверхность','calc-center':'Центр','calc-legend1':'Красный — плотность тока. Синяя линия — глубина поверхности δ','calc-chart-title':'// δ от частоты',
      'calc-t4h1':'🖥 2D Симуляция','calc-t4sub':'// Сечение индукционной печи — анимация распределения температуры в реальном времени',
      'calc-power':'Мощность P','calc-simtime':'Время симуляции','calc-sec':'сек','calc-start-btn':'▶ ЗАПУСТИТЬ СИМУЛЯЦИЮ',
      'calc-calcparams':'Расчётные параметры','calc-res-delta':'δ (глубина поверхности)','calc-res-tmax':'Температура поверхности T_max','calc-res-tcenter':'Температура центра T_c','calc-res-rate':'Скорость нагрева',
      'calc-simviz':'Сечение индукционной печи — 2D симуляция','calc-colorind':'Цветовая индикация:','calc-legend2':'Красный/жёлтый — горячие зоны | Синий — холодные зоны | Синие кольца — катушка индуктора | Белая линия — граница δ',
      'calc-mode-full':'Полный нагрев','calc-mode-transition':'Переходный режим','calc-mode-surface':'Поверхностная закалка'}
};
let lang='uz',dark=false,menuOpen=false;

function applyT(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const v=T[lang][el.dataset.i18n];
    if(v) el.textContent=v;
  });
  document.querySelectorAll('[data-i18nh]').forEach(el=>{
    const v=T[lang][el.dataset.i18nh];
    if(v) el.innerHTML=v;
  });
  if (typeof calcInitDone!=='undefined' && calcInitDone) {
    if (typeof calcSkin==='function') calcSkin();
    if (typeof updateSim==='function') updateSim();
  }
}

function tgl(){document.getElementById('lw').classList.toggle('open')}
document.addEventListener('click',e=>{
  if(!document.getElementById('lw').contains(e.target))
    document.getElementById('lw').classList.remove('open');
  if(!document.getElementById('lw2').contains(e.target))
    document.getElementById('lw2').classList.remove('open');
  const mw=document.getElementById('modWrap');
  if(mw&&!mw.contains(e.target)) mw.classList.remove('open');
  const aw=document.getElementById('aloqaWrap');
  if(aw&&!aw.contains(e.target)) aw.classList.remove('open');
});
function tglMod(e){
  e.preventDefault();
  document.getElementById('modWrap').classList.toggle('open');
  setNavActive(document.querySelector('.mod-trigger'));
}
function closeMod(){document.getElementById('modWrap').classList.remove('open')}
function openModal(id){
  var m=document.getElementById(id);
  if(m) m.classList.add('open');
  if(id==='calcModal' && typeof initCalcModal==='function' && !calcInitDone){
    requestAnimationFrame(()=>{
      requestAnimationFrame(initCalcModal);
    });
  }
}
function closeModal(id){
  var m=document.getElementById(id);
  if(m) m.classList.remove('open');
}
function closeModalBg(e){
  if(e.target.classList.contains('modal-overlay')) e.target.classList.remove('open');
}
function showCat(cat){
  var catGrid=document.getElementById('catGrid');
  var subjView=document.getElementById('subjView');
  var sec=document.getElementById('modullar');
  if(catGrid) catGrid.style.display='none';
  if(subjView) subjView.style.display='block';
  if(sec) sec.classList.add('subj-mode');
  ['oliy','texnikum','maktab'].forEach(function(c){
    var el=document.getElementById('subj-'+c);
    if(el) el.style.display=(c===cat)?'block':'none';
  });
  if(sec){
    var y=sec.getBoundingClientRect().top+window.pageYOffset-76;
    window.scrollTo({top:y,behavior:'smooth'});
  }
}
function showCatGrid(){
  var catGrid=document.getElementById('catGrid');
  var subjView=document.getElementById('subjView');
  var sec=document.getElementById('modullar');
  if(subjView) subjView.style.display='none';
  if(catGrid) catGrid.style.display='flex';
  if(sec) sec.classList.remove('subj-mode');
}
function tglAloqa(e){
  e.preventDefault();
  document.getElementById('aloqaWrap').classList.toggle('open');
  setNavActive(document.querySelector('.aloqa-trigger'));
}
function setNavActive(el){
  document.querySelectorAll('.nav-links a, .nav-links .mod-trigger, .nav-links .aloqa-trigger').forEach(function(n){
    n.classList.remove('active');
  });
  if(el) el.classList.add('active');
}
// Active nav on click
document.querySelectorAll('.nav-links a[href]:not(.mod-item):not(.aloqa-item)').forEach(function(link){
  link.addEventListener('click',function(){setNavActive(this)});
});
// Scroll-based active indicator
(function(){
  var sections=[{id:'hero',nav:null},{id:'modullar',nav:'.mod-trigger'},{id:'contact',nav:'.aloqa-trigger'}];
  var debounce=null;
  window.addEventListener('scroll',function(){
    clearTimeout(debounce);
    debounce=setTimeout(function(){
      var scrollY=window.scrollY+120;
      var found=null;
      sections.forEach(function(s){
        var el=document.getElementById(s.id)||document.querySelector('.hero');
        if(el&&el.offsetTop<=scrollY) found=s;
      });
      if(found){
        document.querySelectorAll('.nav-links a, .nav-links .mod-trigger, .nav-links .aloqa-trigger').forEach(function(n){n.classList.remove('active')});
        var navEl=found.nav?document.querySelector(found.nav):document.querySelector('.nav-links a[href="#"],.nav-links .mod-trigger');
        if(navEl) navEl.classList.add('active');
      }
    },80);
  });
})();
function setL(l,fc,n,el){
  lang=l;
  document.getElementById('tFlag').className='fi '+fc;
  document.getElementById('tName').textContent=n;
  document.getElementById('tFlag2').className='fi '+fc;
  document.getElementById('tName2').textContent=n;
  document.querySelectorAll('#lw .lang-opt').forEach(o=>o.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('lw').classList.remove('open');
  document.documentElement.lang=l;
  applyT();
}

function tgl2(){document.getElementById('lw2').classList.toggle('open')}
function setL2(l,fc,n,el){
  lang=l;
  document.getElementById('tFlag').className='fi '+fc;
  document.getElementById('tName').textContent=n;
  document.getElementById('tFlag2').className='fi '+fc;
  document.getElementById('tName2').textContent=n;
  document.querySelectorAll('#lw2 .lang-opt').forEach(o=>o.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('lw2').classList.remove('open');
  document.documentElement.lang=l;
  applyT();
}
function setMobileLang(l,fc,n,el){
  lang=l;
  var tFlag=document.getElementById('tFlag'); if(tFlag) tFlag.className='fi '+fc;
  var tName=document.getElementById('tName'); if(tName) tName.textContent=n;
  var tFlag2=document.getElementById('tFlag2'); if(tFlag2) tFlag2.className='fi '+fc;
  var tName2=document.getElementById('tName2'); if(tName2) tName2.textContent=n;
  document.querySelectorAll('#lw .lang-opt').forEach(o=>o.classList.remove('active'));
  document.querySelectorAll('.mobile-lang-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  document.documentElement.lang=l;
  applyT();
}

function toggleMenu(){
  menuOpen=!menuOpen;
  document.getElementById('mobileMenu').classList.toggle('show',menuOpen);
  document.getElementById('hbg').classList.toggle('open',menuOpen);
}
function closeMenu(){
  menuOpen=false;
  document.getElementById('mobileMenu').classList.remove('show');
  document.getElementById('hbg').classList.remove('open');
}

function thm(){
  dark=!dark;
  document.body.classList.toggle('dark',dark);
  document.querySelectorAll('.theme-btn').forEach(b=>b.textContent=dark?'🌙':'☀️');
  if (typeof calcInitDone!=='undefined' && calcInitDone && typeof calcSkin==='function') {
    calcSkin();
  }
}

window.addEventListener('scroll',()=>{
  document.getElementById('nav').style.boxShadow=
    window.scrollY>10
      ?(dark?'0 4px 28px rgba(0,0,0,.6)':'0 4px 28px rgba(13,27,110,.14)')
      :(dark?'0 2px 20px rgba(0,0,0,.5)':'0 2px 18px rgba(13,27,110,.08)');
});
applyT();

/* ═══════ CALCULATOR LOGIC (Elektr texnologiya asoslari) ═══════ */

/* ═══════ SHARED MATERIAL DATA ═══════ */
const MATS = {
  steel_cold:{ rho:1.6e-7, mu:200 },
  steel_hot: { rho:1.1e-6, mu:1   },
  copper:    { rho:1.72e-8, mu:1  },
  aluminum:  { rho:2.8e-8, mu:1   },
  titanium:  { rho:5.6e-7, mu:1   },
};

function skinDepth(rho, mu_r, freq) {
  return 503 * Math.sqrt(rho / (mu_r * freq)) * 1000; // mm
}

/* ═══════ TAB SWITCHING ═══════ */
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const btn = document.querySelector('.tab-btn[data-tab="'+tabId+'"]');
  const panel = document.getElementById('panel-'+tabId);
  if (btn) btn.classList.add('active');
  if (panel) panel.classList.add('active');
  // Redraw canvas-based content when its tab becomes visible
  requestAnimationFrame(()=>{
    if (tabId === 'tab4' && typeof updateSim==='function') { updateSim(); if(!simRunning) drawSimFrame(0, 0); }
    if (tabId === 'tab1' && typeof calcSkin==='function') calcSkin();
  });
}

/* ═══════════════════════ TAB 1: SKIN EFFECT LOGIC ═══════════════════════ */
let skinChart = null;

function onSkinMatChange() {
  const val = document.getElementById('skin-mat').value;
  document.getElementById('custom-fields-skin').style.display = val === 'custom' ? 'block' : 'none';
  calcSkin();
}

function calcSkin() {
  const matKey = document.getElementById('skin-mat').value;
  let rho, mu;
  if (matKey === 'custom') {
    rho = +document.getElementById('skin-rho').value * 1e-7;
    mu = +document.getElementById('skin-mu').value;
  } else {
    const m = MATS[matKey] || MATS.steel_cold;
    rho = m.rho; mu = m.mu;
  }
  const freq = +document.getElementById('skin-freq').value;
  const D = +document.getElementById('skin-diam').value;
  const r = D / 2;

  const delta = skinDepth(rho, mu, freq);
  const ratio = r / delta;
  const fcrit = (503*503*rho) / (mu * Math.pow(r/4/1000, 2));
  const fsurf = (503*503*rho) / (mu * Math.pow(r/10/1000, 2));

  const fmtF = f => f >= 1000 ? (f/1000).toFixed(1) + ' kHz' : f.toFixed(0) + ' Hz';

  document.getElementById('sk-depth').textContent = delta.toFixed(2) + ' mm';
  document.getElementById('sk-r').textContent = r.toFixed(1) + ' mm';
  document.getElementById('sk-ratio').textContent = ratio.toFixed(2);
  document.getElementById('sk-fcrit').textContent = fmtF(fcrit);
  document.getElementById('sk-fopt').textContent = fmtF(fsurf);

  const modeKey = ratio < 4 ? "calc-mode-full" : ratio < 10 ? "calc-mode-transition" : "calc-mode-surface";
  document.getElementById('sk-mode').textContent = T[lang][modeKey];

  const pct = Math.min((delta/r)*100, 100);
  document.getElementById('skin-marker').style.left = Math.min(pct, 93)+'%';
  document.getElementById('skin-marker-lbl').textContent = 'δ='+delta.toFixed(1)+'mm';

  // Chart
  const freqs = [], depths = [];
  const fStart = Math.max(50, freq/100), fEnd = freq*100;
  for (let i = 0; i <= 50; i++) {
    const f = fStart * Math.pow(fEnd/fStart, i/50);
    freqs.push(f > 1000 ? (f/1000).toFixed(0)+'k' : f.toFixed(0));
    depths.push(skinDepth(rho, mu, f));
  }
  if (skinChart) skinChart.destroy();
  const isDark = document.body.classList.contains('dark');
  const chartTick = isDark ? '#6A9CC8' : '#4A6490';
  const chartGrid = isDark ? 'rgba(33,150,243,.05)' : 'rgba(21,101,192,.08)';
  skinChart = new Chart(document.getElementById('skin-chart'), {
    type: 'line',
    data: {
      labels: freqs,
      datasets: [{
        label: 'δ, mm', data: depths,
        borderColor: '#1565C0', backgroundColor: 'rgba(21,101,192,.12)',
        fill: true, tension: .4, pointRadius: 0, borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color:chartTick, maxTicksLimit:8, font:{family:'IBM Plex Mono',size:9} }, grid:{color:chartGrid} },
        y: { ticks: { color:chartTick, font:{family:'IBM Plex Mono',size:9} }, grid:{color:chartGrid}, min:0 }
      }
    }
  });
}

/* ═══════════════════════ TAB 4: 2D SIMULATION LOGIC ═══════════════════════ */
function thermalColor(t) {
  t = Math.max(0, Math.min(1, t));
  const stops = [
    [0,[15,20,80]],[0.15,[30,10,140]],[0.3,[0,60,220]],[0.45,[0,170,180]],
    [0.6,[30,180,30]],[0.75,[220,200,0]],[0.88,[255,100,0]],[1,[255,240,180]]
  ];
  for (let i = 0; i < stops.length-1; i++) {
    const [t0,c0]=stops[i],[t1,c1]=stops[i+1];
    if (t >= t0 && t <= t1) {
      const u = (t-t0)/(t1-t0);
      return [Math.round(c0[0]+(c1[0]-c0[0])*u),Math.round(c0[1]+(c1[1]-c0[1])*u),Math.round(c0[2]+(c1[2]-c0[2])*u)];
    }
  }
  return [255,240,180];
}

let simAnim = null;
let simRunning = false;

function updateSim() {
  const matKey = document.getElementById('sim-mat').value;
  const mat = MATS[matKey] || MATS.steel_cold;
  const freq = +document.getElementById('sim-freq').value;
  const D = +document.getElementById('sim-diam').value;
  const r = D / 2;
  const delta = skinDepth(mat.rho, mat.mu, freq);
  const ratio = r / delta;

  document.getElementById('sim-delta').textContent = delta.toFixed(2) + ' mm';
  document.getElementById('sim-ratio').textContent = ratio.toFixed(2);
  const modeKey2 = ratio < 4 ? "calc-mode-full" : ratio < 10 ? "calc-mode-transition" : "calc-mode-surface";
  document.getElementById('sim-mode').textContent = T[lang][modeKey2];
  document.getElementById('sim-tmax').textContent = '20°C';
  document.getElementById('sim-tcenter').textContent = '20°C';
  document.getElementById('sim-rate').textContent = '—';
  document.getElementById('sim-timer').textContent = 't = 0.0 s';
  document.getElementById('sim-temp-display').textContent = 'T_max = 20°C';
  drawSimFrame(0, 0);
}

function drawSimFrame(progress, elapsed) {
  const canvas = document.getElementById('sim-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cw = canvas.offsetWidth || 500;
  canvas.width = cw;
  const ch = canvas.height;

  const matKey = document.getElementById('sim-mat').value;
  const mat = MATS[matKey] || MATS.steel_cold;
  const freq = +document.getElementById('sim-freq').value;
  const D = +document.getElementById('sim-diam').value;
  const r = D / 2;
  const delta = skinDepth(mat.rho, mat.mu, freq);
  const ratio = r / delta;

  ctx.fillStyle = '#0A1225';
  ctx.fillRect(0, 0, cw, ch);

  const cx = cw * 0.5, cy = ch * 0.48;
  const maxR = Math.min(cw * 0.28, ch * 0.38);
  const scale = maxR / Math.max(r, 30);
  const drawR = r * scale;
  const drawDelta = Math.min(delta * scale, drawR);

  const T_ambient = 20;
  const T_target = matKey.includes('steel') ? 1200 : matKey === 'titanium' ? 1000 : 700;
  const T_surf = T_ambient + (T_target - T_ambient) * progress;
  const T_center = T_ambient + (T_surf - T_ambient) * (ratio < 4 ? 0.85*progress : ratio < 10 ? 0.4*progress : 0.1*progress);

  // Draw thermal gradient on workpiece
  const imgData = ctx.createImageData(cw, ch);
  const data = imgData.data;
  for (let py = 0; py < ch; py++) {
    for (let px = 0; px < cw; px++) {
      const dx = px-cx, dy = py-cy;
      const dist = Math.sqrt(dx*dx+dy*dy);
      if (dist <= drawR) {
        const nR = dist / drawR;
        const depthFromSurf = (1-nR)*r;
        const expDecay = Math.exp(-depthFromSurf / Math.max(delta, 0.1));
        const localT = T_ambient + (T_surf-T_ambient)*expDecay;
        const tNorm = Math.max(0,Math.min(1,(localT-T_ambient)/Math.max(T_target-T_ambient,1)));
        const rgb = thermalColor(tNorm * progress);
        const idx = (py*cw+px)*4;
        data[idx]=rgb[0]; data[idx+1]=rgb[1]; data[idx+2]=rgb[2]; data[idx+3]=255;
      }
    }
  }
  ctx.putImageData(imgData, 0, 0);

  // Workpiece outline
  ctx.beginPath();
  ctx.arc(cx, cy, drawR, 0, Math.PI*2);
  ctx.strokeStyle = 'rgba(255,255,255,0.3)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Skin depth boundary
  if (drawDelta < drawR*0.95) {
    ctx.beginPath();
    ctx.arc(cx, cy, drawR-drawDelta, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(255,255,255,0.7)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6,4]);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.font = '10px IBM Plex Mono, monospace';
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    const lx = cx + (drawR-drawDelta)*0.707+6;
    const ly = cy - (drawR-drawDelta)*0.707-4;
    ctx.fillText('δ='+delta.toFixed(1)+'mm', lx, ly);
  }

  // Inductor coils
  const coilR = drawR+20, coilCount = 7;
  const phase = elapsed * 4;
  for (let i = 0; i < coilCount; i++) {
    const coilY = cy-(coilCount*8)+i*16;
    const intensity = simRunning ? 0.4+0.6*Math.abs(Math.sin(phase+i*0.9)) : 0.3;
    ctx.beginPath();
    ctx.ellipse(cx, coilY, coilR, 10, 0, 0, Math.PI*2);
    ctx.strokeStyle = `rgba(33,150,243,${intensity*0.25})`;
    ctx.lineWidth = 10; ctx.stroke();
    ctx.strokeStyle = `rgba(100,190,255,${intensity*0.9})`;
    ctx.lineWidth = 2; ctx.stroke();
    if (simRunning) {
      const dotAngle = phase*0.8+i*0.7;
      const dotX = cx+coilR*Math.cos(dotAngle);
      const dotY = coilY+10*Math.sin(dotAngle);
      ctx.beginPath(); ctx.arc(dotX, dotY, 2.5, 0, Math.PI*2);
      ctx.fillStyle = `rgba(255,200,50,${intensity})`; ctx.fill();
    }
  }

  // Magnetic field lines
  if (simRunning) {
    for (let i = 0; i < 4; i++) {
      const fr = coilR+12+i*18;
      const alpha = (0.35-i*0.08)*(0.5+0.5*Math.sin(phase*0.5+i));
      ctx.beginPath(); ctx.ellipse(cx, cy, fr, fr*0.3, 0, 0, Math.PI*2);
      ctx.strokeStyle = `rgba(33,150,243,${alpha*0.4})`; ctx.lineWidth=0.8; ctx.stroke();
    }
  }

  // Color scale bar
  const barH=150, barW=12, bx=cw-36, by=cy-barH/2;
  for (let i=0; i<barH; i++) {
    const rgb = thermalColor(1-i/barH);
    ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    ctx.fillRect(bx, by+i, barW, 1);
  }
  ctx.strokeStyle='rgba(255,255,255,0.2)'; ctx.strokeRect(bx, by, barW, barH);
  ctx.font='9px IBM Plex Mono, monospace'; ctx.fillStyle='#B8D4F5';
  ctx.fillText(Math.round(T_surf)+'°C', bx-4, by-4);
  ctx.fillText(Math.round(T_ambient)+'°C', bx-4, by+barH+12);

  // Labels
  ctx.font='10px IBM Plex Mono, monospace'; ctx.fillStyle='#6A9CC8';
  ctx.fillText('Tayyor', cx-16, cy+drawR+22);
  ctx.fillText('Induktor', cx+coilR-10, cy-coilCount*8-10);

  if (simRunning) {
    document.getElementById('sim-tmax').textContent = Math.round(T_surf)+'°C';
    document.getElementById('sim-tcenter').textContent = Math.round(T_center)+'°C';
    const rate = progress > 0 ? ((T_surf-T_ambient)/Math.max(elapsed,0.1)).toFixed(1) : '0';
    document.getElementById('sim-rate').textContent = rate+' °C/s';
    document.getElementById('sim-timer').textContent = 't = '+elapsed.toFixed(1)+' s';
    document.getElementById('sim-temp-display').textContent = 'T_max = '+Math.round(T_surf)+'°C';
  }
}

function startSim() {
  if (simRunning) {
    simRunning = false;
    if (simAnim) cancelAnimationFrame(simAnim);
    document.getElementById('sim-start-btn').textContent = "▶ SIMULYATSIYANI BOSHLASH";
    return;
  }
  simRunning = true;
  document.getElementById('sim-start-btn').textContent = "⏹ TO'XTATISH";
  const duration = +document.getElementById('sim-duration').value;
  const startTime = performance.now();

  function animate(now) {
    const elapsed = (now-startTime)/1000;
    const progress = Math.min(elapsed/duration, 1);
    drawSimFrame(progress, elapsed);
    if (progress < 1 && simRunning) {
      simAnim = requestAnimationFrame(animate);
    } else {
      simRunning = false;
      document.getElementById('sim-start-btn').textContent = "▶ SIMULYATSIYANI BOSHLASH";
    }
  }
  simAnim = requestAnimationFrame(animate);
}

/* ═══════ INIT (fires when calc modal opens, not on page load) ═══════ */
function initCalcModal() {
  calcSkin();
  updateSim();
  calcInitDone = true;
  // Safety re-render in case the modal transition wasn't finished on first paint
  setTimeout(() => { calcSkin(); if(!simRunning) drawSimFrame(0, 0); }, 150);
}
window.addEventListener('resize', () => { if (calcInitDone && !simRunning) drawSimFrame(0, 0); });

