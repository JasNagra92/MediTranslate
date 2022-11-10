import {Language} from './Types';

export const punjabiCP: Language = [
  {
    question: 'Are you having Chest Pain?',
    filetype: 'mp3',
    filename: 'test',
    originalText: 'ਕੀ ਤੁਹਾਨੂੰ ਛਾਤੀ ਵਿੱਚ ਦਰਦ ਹੈ?',
    phonetic: 'Sha-tee vich daa-rd hun-dah-ya',
  },
  {
    question: 'When did the pain start?',
    filetype: 'mp3',
    filename: 'q4cp',
    originalText: 'ਦਰਦ ਕਦੋਂ ਸ਼ੁਰੂ ਹੋਇਆ?',
    phonetic: 'daa-rd shu-ru ku-dho ho-iya',
  },
  {
    question: 'Are you also Short of Breath?',
    filetype: 'mp3',
    filename: 'q5cp',
    originalText: 'ਸਾਹ ਲੈਣ ਵਿੱਚ ਮੁਸ਼ਕਲ ਹੈ?',
    phonetic: 'saah vee thu-wa-noo char-dah',
  },
  {
    question: 'Is the pain worse when you take a deep breath?',
    filetype: 'mp3',
    filename: 'q6cp',
    originalText: 'ਜਦੋਂ ਤੁਸੀਂ ਡੂੰਘਾ ਸਾਹ ਲੈਂਦੇ ਹੋ ਤਾਂ ਦਰਦ ਹੋਰ ਵੀ ਵੱਧ ਜਾਂਦਾ ਹੈ?',
    phonetic: 'lum-bah saah leh-kay daa-rd budth-daah-ya',
  },
  {
    question: 'Are you nauseated?',
    filetype: 'mp3',
    filename: 'q2cp',
    originalText: 'ਕੀ ਤੁਸੀਂ ਉਲਟੀ ਕਰਨ ਜਾ ਰਹੇ ਹੋ?',
    phonetic: 'twan-nuu alt-tee awn-nu jee kard-dah-ya',
  },
  {
    question: 'Does the pain radiate to your back?',
    filetype: 'mp3',
    filename: 'q3cp',
    originalText: 'ਕੀ ਤੁਹਾਨੂੰ ਪਿੱਠ ਵਿੱਚ ਦਰਦ ਹੈ?',
    phonetic: 'daa-rd too-hee vich vee jand-dah-ya',
  },
  {
    question: 'Are you Dizzy?',
    filetype: 'mp3',
    filename: 'q7cp',
    originalText: 'ਕੀ ਤੁਹਾਨੂੰ ਚੱਕਰ ਆ ਰਹੇ ਹਨ',
    phonetic: 'twan-nuu Chak-rr awn-dah-ya',
  },
];
export const punjabiAP: Language = [
  {
    filetype: 'mp3',
    question: 'Use your hand to show me where the pain is',
    filename: 'q1ap',
    originalText: 'ਕੀ ਤੁਹਾਨੂੰ ਛਾਤੀ ਵਿੱਚ ਦਰਦ ਹੈ?',
    phonetic: 'haa-th naal meh-nu thi-kah daa-rd kith-eh aah',
  },
  {
    filetype: 'mp3',
    question: 'Are you Nauseated?',
    filename: 'q2cp',
    originalText: 'ਦਰਦ ਕਦੋਂ ਸ਼ੁਰੂ ਹੋਇਆ?',
    phonetic: 'twan-nuu alt-tee awn-nu jee kard-dah-ya',
  },
  {
    filetype: 'mp3',
    question: 'Have you thrown up today?',
    filename: 'q3ap',
    originalText: 'ਸਾਹ ਲੈਣ ਵਿੱਚ ਮੁਸ਼ਕਲ ਹੈ?',
    phonetic: 'ul-tee aaj twan-nuu aiee ah',
  },
  {
    filetype: 'mp3',
    question: 'Was there any blood in your vomit?',
    filename: 'q4ap',
    originalText: 'ਜਦੋਂ ਤੁਸੀਂ ਡੂੰਘਾ ਸਾਹ ਲੈਂਦੇ ਹੋ ਤਾਂ ਦਰਦ ਹੋਰ ਵੀ ਵੱਧ ਜਾਂਦਾ ਹੈ?',
    phonetic: 'twan-nuu ul-tee vich koon suh-gah',
  },
];
export const mandarinCP: Language = [
  {
    question: punjabiCP[0].question,
    filetype: 'wav',
    filename: 'q1cpm',
    originalText: '你的胸口痛吗?',
  },
  {
    question: punjabiCP[1].question,
    filetype: 'wav',
    filename: 'q2cpm',
    originalText: '什么时候开始痛的?',
  },
  {
    question: punjabiCP[2].question,
    filetype: 'wav',
    filename: 'q3cpm',
    originalText: '你也呼吸短促吗?',
  },
  {
    question: punjabiCP[3].question,
    filetype: 'wav',
    filename: 'q4cpm',
    originalText: '深呼吸的时候疼的更厉害吗?',
  },
  {
    question: punjabiCP[4].question,
    filetype: 'wav',
    filename: 'q5cpm',
    originalText: '你感到恶心吗?',
  },
  {
    question: punjabiCP[5].question,
    filetype: 'wav',
    filename: 'q6cpm',
    originalText: '疼痛会辐射到你的背部吗?',
  },
  {
    question: punjabiCP[6].question,
    filetype: 'wav',
    filename: 'q7cpm',
    originalText: '你头晕吗?',
  },
];
export const mandarinAP: Language = [
  {
    filetype: 'wav',
    question: punjabiAP[0].question,
    filename: 'q1apm',
    originalText: '用你的手指给我看哪里疼?',
  },
  {
    filetype: 'wav',
    question: punjabiAP[1].question,
    filename: 'q5cpm',
    originalText: '你感到恶心吗?',
  },
  {
    filetype: 'wav',
    question: punjabiAP[2].question,
    filename: 'q3apm',
    originalText: '你今天吐了吗?',
  },
  {
    filetype: 'wav',
    question: punjabiAP[3].question,
    filename: 'q4apm',
    originalText: '你的呕吐物中有血吗?',
  },
];
export const koreanCP: Language = [
  {
    question: 'Are you having Chest Pain?',
    filetype: 'mp3',
    filename: 'q1cpkorean',
    originalText: '가슴 통증이 있으신가요?',
  },
  {
    question: 'When did the pain start?',
    filetype: 'mp3',
    filename: 'q2cpkorean',
    originalText: '언제부터 아프셨어요?',
  },
  {
    question: 'Are you also Short of Breath?',
    filetype: 'mp3',
    filename: 'q3cpkorean',
    originalText: '숨이 가빠지셨나요?',
  },
  {
    question: 'Is the pain worse when you take a deep breath?',
    filetype: 'mp3',
    filename: 'q4cpkorean',
    originalText: '심호흡을 할때 통증이 더 심하신가요?',
  },
  {
    question: 'Are you nauseated?',
    filetype: 'mp3',
    filename: 'q5cpkorean',
    originalText: '메스꺼우세요?',
  },
  {
    question: 'Does the pain radiate to your back?',
    filetype: 'mp3',
    filename: 'q6cpkorean',
    originalText: '등까지 통증이 있으신가요?',
  },
  {
    question: 'Are you Dizzy?',
    filetype: 'mp3',
    filename: 'q7cpkorean',
    originalText: '어지러우세요?',
  },
];
export const koreanAP: Language = [
  {
    filetype: 'mp3',
    question: punjabiAP[0].question,
    filename: 'q1apkorean',
    originalText: '어디가 아픈지 손으로 보여주세요',
  },
  {
    filetype: 'mp3',
    question: punjabiAP[1].question,
    filename: 'q5cpmkorean',
    originalText: '메스꺼우세요?',
  },
  {
    filetype: 'mp3',
    question: punjabiAP[2].question,
    filename: 'q2apkorean',
    originalText: '오늘 토하신 적이 있나요?',
  },
  {
    filetype: 'mp3',
    question: punjabiAP[3].question,
    filename: 'q3apkorean',
    originalText: '구토물에 피가 있었나요?',
  },
];
export const arabicCP: Language = [
  {
    question: 'Are you having Chest Pain?',
    filetype: 'wav',
    filename: 'q1cparabic',
    originalText: 'هل تعانين من ألم في الصدر',
  },
  {
    question: 'When did the pain start?',
    filetype: 'wav',
    filename: 'q2cparabic',
    originalText: 'متى بدأ الألم',
  },
  {
    question: 'Are you also Short of Breath?',
    filetype: 'wav',
    filename: 'q3cparabic',
    originalText: 'هل تعاني أيضًا من ضيق في التنفس',
  },
  {
    question: 'Is the pain worse when you take a deep breath?',
    filetype: 'wav',
    filename: 'q4cparabic',
    originalText: 'هو الألم أسوأ عندما تأخذ نفسا عميقا',
  },
  {
    question: 'Are you nauseated?',
    filetype: 'wav',
    filename: 'q5cparabic',
    originalText: 'هو الألم أسوأ عندما تأخذ نفسا عميقا',
  },
  {
    question: 'Does the pain radiate to your back?',
    filetype: 'wav',
    filename: 'q6cparabic',
    originalText: 'هل ينتشر الألم في ظهرك',
  },
  {
    question: 'Are you Dizzy?',
    filetype: 'wav',
    filename: 'q7cparabic',
    originalText: 'أتشعر بالدوار',
  },
];
export const arabicAP: Language = [
  {
    filetype: 'wav',
    question: punjabiAP[0].question,
    filename: 'q1aparabic',
    originalText: 'استخدم يدك لتظهر لي مكان الألم',
  },
  {
    filetype: 'wav',
    question: punjabiAP[1].question,
    filename: 'q5cpmarabic',
    originalText: 'هل تشعر بالغثيان',
  },
  {
    filetype: 'wav',
    question: punjabiAP[2].question,
    filename: 'q2aparabic',
    originalText: 'هل تقيأت اليوم',
  },
  {
    filetype: 'wav',
    question: punjabiAP[3].question,
    filename: 'q3aparabic',
    originalText: 'هل كان هناك دم في قيئك',
  },
];
export const hindiCP: Language = [
  {
    question: 'Are you having Chest Pain?',
    filetype: 'wav',
    filename: 'q1cphindi',
    originalText: 'क्या आपको सीने में दर्द हो रहा है?',
  },
  {
    question: 'When did the pain start?',
    filetype: 'wav',
    filename: 'q2cphindi',
    originalText: 'दर्द कब शुरू हुआ?',
  },
  {
    question: 'Are you also Short of Breath?',
    filetype: 'wav',
    filename: 'q3cphindi',
    originalText: 'क्या आपकी भी सांस फूल रही है?',
  },
  {
    question: 'Is the pain worse when you take a deep breath?',
    filetype: 'wav',
    filename: 'q4cphindi',
    originalText: 'क्या दर्द तब और बढ़ जाता है जब आप गहरी सांस लेते हैं?',
  },
  {
    question: 'Are you nauseated?',
    filetype: 'wav',
    filename: 'q5cphindi',
    originalText: 'क्या आपको मिचली आ रही है?',
  },
  {
    question: 'Does the pain radiate to your back?',
    filetype: 'wav',
    filename: 'q6cphindi',
    originalText: 'क्या दर्द आपकी पीठ तक फैलता है?',
  },
  {
    question: 'Are you Dizzy?',
    filetype: 'wav',
    filename: 'q7cpHindi',
    originalText: 'क्या आपको चक्कर आ रहे हैं?',
  },
];
export const hindiAP: Language = [
  {
    filetype: 'wav',
    question: 'Use your hand to show me where the pain is',
    filename: 'q1aphindi',
    originalText: 'ਕੀ ਤੁਹਾਨੂੰ ਛਾਤੀ ਵਿੱਚ ਦਰਦ ਹੈ?',
  },
  {
    filetype: 'wav',
    question: 'Are you Nauseated?',
    filename: 'q5cphindi',
    originalText: 'ਦਰਦ ਕਦੋਂ ਸ਼ੁਰੂ ਹੋਇਆ?',
  },
  {
    filetype: 'wav',
    question: 'Have you thrown up today?',
    filename: 'q2aphindi',
    originalText: 'ਸਾਹ ਲੈਣ ਵਿੱਚ ਮੁਸ਼ਕਲ ਹੈ?',
  },
  {
    filetype: 'wav',
    question: 'Was there any blood in your vomit?',
    filename: 'q3aphindi',
    originalText: 'ਜਦੋਂ ਤੁਸੀਂ ਡੂੰਘਾ ਸਾਹ ਲੈਂਦੇ ਹੋ ਤਾਂ ਦਰਦ ਹੋਰ ਵੀ ਵੱਧ ਜਾਂਦਾ ਹੈ?',
  },
];
