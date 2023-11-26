const quotes=[
    {
        quote:"나의 멋진 우주여 안녕",
        autor:"<26>, UNSTABLE MMINDSET",
    },
    {
        quote:"시간을 믿었어. 너와 내가 함께한 날들 만큼 지나고 나면 모든 게 전부 돌아올 줄 알았어",
        autor:"<시간을 믿었어>, Subsonic",
    },
    {
        quote:"마음이 도착할 내년 오늘엔 꼭 웃을 일이 많았으면해. 어쩌면 그때도 가장 가까이 너의 곁에 있는게 내가 아니어도",
        autor:"<느린 우체통>, 느린 우체통",
    },
    {
        quote:"세상의 얘기로 정해질 거라면 나는 아이가 되어 바다로 갈거야",
        autor:"<바다아이>, Just Listen",
    },
    {
        quote:"누구나 다 그런 순간을 안고 살아. 나를 안아주고 감싸주며 말을 했어",
        autor:"<Home>, Subsonic",
    },
    {
        quote:"상처에 울고 때론 지쳐서 절망에 갇혀 아프지않길 마음을 다해 그대의 위로가 되길 오늘도 나는 기도합니다.",
        autor:"<기도>, 후아유 - 학교 2015 OST Part 5",
    },
    {
        quote:"오늘 헤어졌어요 우리 헤어졌어요 내 맘 알 것 같다면 옆에서 같이 울어줘요",
        autor:"<오늘 헤어졌어요>, Growing Season",
    },
    {
        quote:"채워지지 않는 맘은 다 시간이 지나면 괜찮아질까",
        autor:"<스물 두 번째 길>, Growing Season",
    },
    {
        quote:"태어난 곳이 아니어도 고르지 못했다고 해도 내가 실수였다 해도 이 별이 마음에 들어",
        autor:"<별의 조각>, END THEORY",
    },
    {
        quote:"하나 둘 추억이 떠오르면 많이 많이 그리워할 거야 고마웠어요 그래도 이제는 사건의 지평선 넘어로",
        autor:"<사건의 지평선>, END THEORY : Final Edition",
    },
    {
        quote:"빛이 되어줄게 넌 맴도는 별이 되어 비출게 어둔 밤을 지킨 창밖의 저 달처럼 바다를 물들인 하늘처럼",
        autor:"<빛이 되어줄게>, 조선로코-녹두전 Special OST",
    },
    {
        quote:"기다리는 건 이 비일까 지금 너일까 아니면 그 때 다 보내지 못한 슬픔일까",
        autor:"<Rainy Night>, STABLE MINDSET",
    },
    {
        quote:"I wish it rescues all. Never hide away Even if that lie to you, but that's alright",
        autor:"<RescuE>, RescuE",
    },
    {
        quote:"아침에 눈을 뜨면 뭐가 달라질까 밤잠을 설치다가 문득 생각이 나. 이토록 모지란 난 어떤 쓸모일까. 답을 찾지 못한 날",
        autor:"<답을 찾지 못한 날>, RescuE",
    },
    {
        quote:"어제와 다를 수 있어. 혼자라는 생각을 하지마. 지난 아픈 기억은 이제 중요하지 않아.",
        autor:"<Sunflower>, SBS 드라마 닥터스 OST",
    },
    {
        quote:"고마웠던 내 사랑 안녕 미안했어 어린 날의 고집들, 결국 나는 그대의 바램처럼 이제 어른이 됐어",
        autor:"<봄은 있었다>, Just Listen",
    },
    {
        quote:"사랑하는 법을 가르쳐준 그대가 남긴 추억만으로 그대를, 그대를 기다릴 수 있을 것만 같아",
        autor:"<추억은 아름다운 기억>, 혜성",
    },
    {
        quote:"사랑한단 그 말보다 더 좋은 말은 없을까요. 사랑이란 흔한 말로는 내 맘 전할 수 없는데",
        autor:"<고백하기 좋은 날>, 고백하기 좋은 날",
    },
    {
        quote:"아홉번 내 마음 다쳐도 한번 웃는게 좋아",
        autor:"<기다리다>, Audition",
    },
    {
        quote:"한번만 미안하다 해줘 보고싶다 해줘 돌아온단 말은 못해도",
        autor:"<내 남자친구를 부탁해>, Lost In Love",
    },
    {
        quote:"When we hope together 나 너와 함께 하고 싶어",
        autor:"<Hope>, Supersonic",
    },
];
const quote=document.querySelector("#quote span:first-child");
const autor=document.querySelector("#quote span:last-child");

const todayQuote =quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=` - ${todayQuote.quote} - `;
autor.innerText=` - ${todayQuote.autor} - `;